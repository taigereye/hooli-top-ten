
var app = angular.module("topTen", []);

app.controller('MainController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
	
	// Set callback to run when Visualization API loaded.
	google.charts.setOnLoadCallback(visualize);

	$scope.title = 'Hooli: Top 10 Sales Rep Candidates'; 
	$scope.GPA = true;
	$scope.filters = 
	{
		referred : false,
		degree : false
	};
	$scope.candidates = [];

	var sample_size = 10;

	function post_call() {

		// Parameters for POST call to get authorization token.
		var tokenPost = {
		  	method: 'POST',
		   	url: 'http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/token/',	
		   	headers: {
		    	'Content-Type': 'application/json'
		   	},
		   	data: { username: 'intern', password: 'hphp_2017' }
		}

		$http(tokenPost)
		.then(function(response) {
			get_call(response.data.token);
		});
	}

	function get_call(token) {

		// Parameters for GET call to get applicant data.
		var applicationsGet = {
		  	method: 'GET',
		   	url: 'http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/applications/',	
		   	headers: {
		    	'Content-Type': 'application/json',
		    	'Authorization': 'Token ' + token
		   	}
		};

		// Make GET call using token from POST response.
	  	$http(applicationsGet)
	  	.then(function(response) {

	  		var applicants = response.data.results;

	  		var count = Math.min(30, (100 - $scope.candidates.length));

			for (x = 0; x < count; x++) {
				$scope.candidates.push(applicants[x]);
			}

			// Repeat GET call until 100 applicants collected.
			if ($scope.candidates.length >= 100) {
				GPA_or_Years(fix_biodata($scope.candidates));
			}
			else {
				get_call(token);
			}
	  	});
	}

	// Parse biodata category of results array for convenience. 
	function fix_biodata(cands) {

		for (x = 0; x < cands.length; x++) {

			var bio = cands[x].biodata;

			bio = bio.replace(/'/g, '"');
			bio = ((bio.replace("True", "true")).replace("True", "true")).replace("True", "true");
			bio = ((bio.replace("False", "false")).replace("False", "false")).replace("False", "false");
			bio = JSON.parse(bio);

			cands[x].biodata = bio;
		}

		return cands;
	}

	// If Referred and/or Graduate Degree filter clicked, filter candidates accordingly.
	function filtered(cands) {

		var cands_filt = [];

		if ($scope.filters.referred && $scope.filters.degree) {
			
			for (x = 0; x < cands.length; x++) {
				
				if (x == (cands.length - 1)) {
					return cands_filt;
				}

				if (cands_filt.length == sample_size) {
					return cands_filt;
				}
				else {
					if (cands[x].biodata['Referred'] && cands[x].biodata['Graduate Degree']) {
						cands_filt.push(cands[x]);
					}
				}
			}
		}
		else if ($scope.filters.referred) {
			
			for (x = 0; x < cands.length; x++) {
				
				if (x == (cands.length - 1)) {
					return cands_filt;
				}
					
				if (cands_filt.length == sample_size) {
					return cands_filt;
				}
				else {
					if (cands[x].biodata['Referred']) {
						cands_filt.push(cands[x]);
					}
				}
			}
		} 
		else if ($scope.filters.degree) {
			
			for (x = 0; x < cands.length; x++) {
				
				if (x == (cands.length - 1)) {
					return cands_filt;
				}
					
				if (cands_filt.length == sample_size) {
					return cands_filt;
				}
				else {
					if (cands[x].biodata['Graduate Degree']) {
						cands_filt.push(cands[x]);
					}
				}
			}
		}
		else {
			var cands_filt = cands.slice(0, sample_size);
			return cands_filt;
		}
	}

	// Create column chart given an array of 10 candidates.
	function drawGPAChart(cands) {

	    var data = new google.visualization.DataTable();
	   
	   	data.addColumn('string', 'Candidates');
		data.addColumn('number', 'GPA');
		
		for (x = 0; x < cands.length; x++) {
			var name = cands[x].candidate.first_name + " " + cands[x].candidate.last_name;
			var GPA = cands[x].biodata.GPA;
			data.addRow([name, GPA]);
		}

		// Set chart options.
		var options = {'title': 'Top 10 Applicants By GPA',
               	       'width': 1000,
                       'height': 500,
            		};		
	
	    // Instantiate and draw chart, passing in options and data.
	    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	    chart.draw(data, options);
	}

	// Create column chart for top 10 candidates based on Years of Work Experience.
	function drawYearsChart(cands) {

		var data = new google.visualization.DataTable();
	   	
	   	data.addColumn('string', 'Candidates');
		data.addColumn('number', 'Years of Work Experience');
		
		for (x = 0; x < cands.length; x++) {
			var name = cands[x].candidate.first_name + " " + cands[x].candidate.last_name;
			var years = cands[x].biodata['Years of Work Experience'];
			data.addRow([name, years]);
		};
		
		// Set chart options.
		var options = {'title': 'Top 10 Applicants By Years of Work Experience',
               	       'width': 1000,
                       'height': 500,                  
            		};			
	
	    // Instantiate and draw chart, passing in options and data.
		var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
	    chart.draw(data, options);
	}

	// If GPA button clicked, then draw GPA chart otherwise draw Years of Work Experience Chart.
	function GPA_or_Years(cands) {
		if ($scope.GPA) {
			// Sort candidates by GPA
			var cands_GPA = $filter('orderBy')(cands, "-biodata['GPA']")
			// Filter candidats and draw appropriate chart.
			var cands_new = filtered(cands_GPA);
			drawGPAChart(cands_new);
		} 
		else {
			// Sort candidates by Years of Work Experience
			var cands_years = $filter('orderBy')(cands, "-biodata['Years of Work Experience']")
			// Filter candidates and draw appropriate chart.
			var cands_new = filtered(cands_years);
			drawYearsChart(cands_new);
		}
	}

	$scope.button_clicked = function(button) {
		// Toggle button setting to GPA or Years of Work Experience.
		if (button == 'GPA') {
			$scope.GPA = true;
			// Change color of button to blue (true) or gray (false).
			document.getElementById("GPA").style.backgroundColor = "blue";
			document.getElementById("Years").style.backgroundColor = "gray";
		} 
		else if (button == 'Years') {
			$scope.GPA = false;
			// Change color of button to blue (true) or gray (false).
			document.getElementById("GPA").style.backgroundColor = "gray";
			document.getElementById("Years").style.backgroundColor = "blue";
		}

		// Redraw chart depending on if GPA or Years of Work Experience button clicked.
		GPA_or_Years($scope.candidates);
	}

	$scope.filter_clicked = function(filter) {
		// Change filter setting to Referred and/or Graduate Degree.
		if (filter == 'Referred') {
			$scope.filters.referred = !($scope.filters.referred);
			// Change color of button to blue (true) or gray (false).
			if ($scope.filters.referred) {
				document.getElementById("Referred").style.backgroundColor = "blue";
			} else {
				document.getElementById("Referred").style.backgroundColor = "gray";
			}
		} 
		else if (filter == 'Degree') {
			$scope.filters.degree = !($scope.filters.degree);
			// Change color of button to blue (true) or gray (false).
			if ($scope.filters.degree) {
				document.getElementById("Degree").style.backgroundColor = "blue";
			} else {
				document.getElementById("Degree").style.backgroundColor = "gray";
			}
		}
		// Redraw chart depending on if Referred and/or Graduate Degree filter clicked.
		GPA_or_Years($scope.candidates);
	}

	function visualize() {

		// Query HPHP API and store applicant data in candidates array.
		post_call();
	}

}]);
