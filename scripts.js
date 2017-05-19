
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

	var sample_size = 10;

	var url_post = 'http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/token/'
	var url_get = 'http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/applications/'

	$scope.cands_fifteen = [
		{
	      "id": 2267,
	      "candidate": {
	        "id": 2041,
	        "first_name": "Brett",
	        "last_name": "Swenson-Harte",
	        "email": "brett.swenson-harte@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 5, 'City': 'Minneapolis', 'Major': 'Chemistry', 'College': 'San Diego State', 'Fluent in Spanish': False, 'GPA': 3.2451123064336445, 'Graduate Degree': True, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7423,
	          "value": 0.0932233061115196,
	          "details": "{'City': {'weight': 0.079163510972910217, 'value': 0.18}, 'Major': {'weight': 0.23608349810501783, 'value': -0.26}, 'Graduate Degree': {'weight': 0.13698533283930986, 'value': 0.69}, 'Years of Work Experience': {'weight': 0.13681461305666703, 'value': -0.14}, 'College': {'weight': 0.0084408904054939018, 'value': -0.14}, 'College GPA': {'weight': 0.08776314097946368, 'value': -0.11}, 'Fluent in Spanish': {'weight': 0.15880279033630454, 'value': 0.34}, 'Referred': {'weight': 0.15594622330483296, 'value': 0.14}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7422,
	          "value": 0.106892220286148,
	          "details": "{'City': {'weight': 0.16552961853049086, 'value': 0.03}, 'Major': {'weight': 0.13792605684792131, 'value': 0.21}, 'Graduate Degree': {'weight': 0.093293689106488373, 'value': 0.05}, 'Years of Work Experience': {'weight': 0.0043606965241119984, 'value': -0.12}, 'College': {'weight': 0.1066323389999302, 'value': 0.22}, 'College GPA': {'weight': 0.18566784297983607, 'value': -0.0}, 'Fluent in Spanish': {'weight': 0.086484521403720385, 'value': 0.27}, 'Referred': {'weight': 0.22010523560750089, 'value': 0.1}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7421,
	          "value": 0.0570793132774209,
	          "details": "{'City': {'weight': 0.21382444363580944, 'value': -0.23}, 'Major': {'weight': 0.23159992511602084, 'value': 0.36}, 'Graduate Degree': {'weight': 0.020876659999118769, 'value': -0.09}, 'Years of Work Experience': {'weight': 0.050751331274784928, 'value': -0.11}, 'College': {'weight': 0.30946626554745504, 'value': 0.15}, 'College GPA': {'weight': 0.037083343449992409, 'value': 0.33}, 'Fluent in Spanish': {'weight': 0.034444295440513355, 'value': -0.23}, 'Referred': {'weight': 0.10195373553630517, 'value': -0.2}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2268,
	      "candidate": {
	        "id": 2042,
	        "first_name": "Laura",
	        "last_name": "Gross-Burns",
	        "email": "laura.gross-burns@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 7, 'City': 'Redwood City', 'Major': 'Education', 'College': 'Georgia Tech', 'Fluent in Spanish': False, 'GPA': 3.6158545486527167, 'Graduate Degree': False, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7426,
	          "value": -0.0142109304475003,
	          "details": "{'City': {'weight': 0.21739243432229322, 'value': -0.01}, 'Major': {'weight': 0.25790667511129628, 'value': 0.19}, 'Graduate Degree': {'weight': 0.025725940913317848, 'value': 0.33}, 'Years of Work Experience': {'weight': 0.10895379117771777, 'value': -0.36}, 'College': {'weight': 0.00022504944994052021, 'value': 0.02}, 'College GPA': {'weight': 0.1358896844473434, 'value': -0.25}, 'Fluent in Spanish': {'weight': 0.1991996472732461, 'value': 0.12}, 'Referred': {'weight': 0.054706777304845002, 'value': -0.37}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7425,
	          "value": -0.0670544296196446,
	          "details": "{'City': {'weight': 0.1765579222711082, 'value': 0.2}, 'Major': {'weight': 0.03072414071695553, 'value': -0.03}, 'Graduate Degree': {'weight': 0.1665372163303194, 'value': -0.46}, 'Years of Work Experience': {'weight': 0.074872298774238746, 'value': 0.02}, 'College': {'weight': 0.10508229179857699, 'value': -0.47}, 'College GPA': {'weight': 0.16643854009844683, 'value': -0.07}, 'Fluent in Spanish': {'weight': 0.13115730297792624, 'value': -0.37}, 'Referred': {'weight': 0.14863028703242806, 'value': 0.56}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7424,
	          "value": 0.0927901805330297,
	          "details": "{'City': {'weight': 0.16452518121986046, 'value': -0.11}, 'Major': {'weight': 0.064635989420905732, 'value': 0.15}, 'Graduate Degree': {'weight': 0.029204046940853427, 'value': -0.14}, 'Years of Work Experience': {'weight': 0.12290799047668513, 'value': 0.22}, 'College': {'weight': 0.12733623655626708, 'value': 0.35}, 'College GPA': {'weight': 0.053059090762110413, 'value': 0.01}, 'Fluent in Spanish': {'weight': 0.22453027574893578, 'value': 0.1}, 'Referred': {'weight': 0.21380118887438196, 'value': 0.05}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2269,
	      "candidate": {
	        "id": 2043,
	        "first_name": "Brett",
	        "last_name": "Harte-Tam",
	        "email": "brett.harte-tam@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 5, 'City': 'San Francisco', 'Major': 'Math', 'College': 'Bates', 'Fluent in Spanish': False, 'GPA': 2.427186275159447, 'Graduate Degree': True, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7429,
	          "value": -0.0745399523126994,
	          "details": "{'City': {'weight': 0.28212548007424881, 'value': -0.02}, 'Major': {'weight': 0.13284448083415515, 'value': -0.79}, 'Graduate Degree': {'weight': 0.091144205152734359, 'value': 0.08}, 'Years of Work Experience': {'weight': 0.03806707723539695, 'value': 0.03}, 'College': {'weight': 0.17775666586736519, 'value': 0.21}, 'College GPA': {'weight': 0.088765888315918237, 'value': 0.11}, 'Fluent in Spanish': {'weight': 0.15331236725338654, 'value': -0.12}, 'Referred': {'weight': 0.035983835266794807, 'value': -0.03}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7428,
	          "value": 0.242994620238396,
	          "details": "{'City': {'weight': 0.21069915841779038, 'value': 0.39}, 'Major': {'weight': 0.20835145948190831, 'value': 0.15}, 'Graduate Degree': {'weight': 0.0047081438858495236, 'value': 0.15}, 'Years of Work Experience': {'weight': 0.028500789733530343, 'value': 0.07}, 'College': {'weight': 0.0066354192414088461, 'value': 0.36}, 'College GPA': {'weight': 0.21794232503063538, 'value': 0.22}, 'Fluent in Spanish': {'weight': 0.17920116741027092, 'value': 0.17}, 'Referred': {'weight': 0.14396153679860629, 'value': 0.32}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7427,
	          "value": 0.155367306478352,
	          "details": "{'City': {'weight': 0.073799166326987894, 'value': -0.04}, 'Major': {'weight': 0.06827304673186313, 'value': 0.1}, 'Graduate Degree': {'weight': 0.21524981670961171, 'value': -0.02}, 'Years of Work Experience': {'weight': 0.12010574847013472, 'value': 0.15}, 'College': {'weight': 0.16351263874517313, 'value': 0.63}, 'College GPA': {'weight': 0.115604856990123, 'value': 0.15}, 'Fluent in Spanish': {'weight': 0.053866202287264284, 'value': -0.31}, 'Referred': {'weight': 0.18958852373884202, 'value': 0.18}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2270,
	      "candidate": {
	        "id": 2044,
	        "first_name": "Ed",
	        "last_name": "Spitzer-Spitzer",
	        "email": "ed.spitzer-spitzer@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 5, 'City': 'LA', 'Major': 'Chemistry', 'College': 'San Diego State', 'Fluent in Spanish': False, 'GPA': 2.4621675807457324, 'Graduate Degree': False, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7432,
	          "value": -0.0458614175626942,
	          "details": "{'City': {'weight': 0.00068528630211233776, 'value': -0.01}, 'Major': {'weight': 0.025187601310518223, 'value': -0.32}, 'Graduate Degree': {'weight': 0.19818890591923743, 'value': -0.35}, 'Years of Work Experience': {'weight': 0.14280415483875719, 'value': -0.21}, 'College': {'weight': 0.16727148026729838, 'value': -0.15}, 'College GPA': {'weight': 0.19432991697973317, 'value': 0.33}, 'Fluent in Spanish': {'weight': 0.20403937065064257, 'value': 0.16}, 'Referred': {'weight': 0.067493283731700729, 'value': -0.15}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7431,
	          "value": 0.0916330078731725,
	          "details": "{'City': {'weight': 0.18499082872077774, 'value': 0.83}, 'Major': {'weight': 0.15557439269856721, 'value': -0.1}, 'Graduate Degree': {'weight': 0.049982526698782663, 'value': -0.16}, 'Years of Work Experience': {'weight': 0.29776462177389151, 'value': -0.22}, 'College': {'weight': 0.0049314776557188066, 'value': -0.16}, 'College GPA': {'weight': 0.058070817282534389, 'value': 0.11}, 'Fluent in Spanish': {'weight': 0.082695327459417489, 'value': 0.08}, 'Referred': {'weight': 0.16599000771031019, 'value': 0.09}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7430,
	          "value": 0.0423404356687375,
	          "details": "{'City': {'weight': 0.073884655285515272, 'value': 0.25}, 'Major': {'weight': 0.052481981907354952, 'value': -0.39}, 'Graduate Degree': {'weight': 0.24103389395081296, 'value': 0.29}, 'Years of Work Experience': {'weight': 0.096644088745202666, 'value': -0.3}, 'College': {'weight': 0.13640965865554316, 'value': -0.18}, 'College GPA': {'weight': 0.012525026328765518, 'value': -0.16}, 'Fluent in Spanish': {'weight': 0.1752894002315967, 'value': -0.3}, 'Referred': {'weight': 0.21173129489520881, 'value': 0.39}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2271,
	      "candidate": {
	        "id": 2045,
	        "first_name": "Bob",
	        "last_name": "Burns-Bunn",
	        "email": "bob.burns-bunn@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 9, 'City': 'San Jose', 'Major': 'Spanish', 'College': 'Pepperdine', 'Fluent in Spanish': False, 'GPA': 2.796384332361498, 'Graduate Degree': True, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7435,
	          "value": 0.0478137233303542,
	          "details": "{'City': {'weight': 0.016138416804426538, 'value': -0.06}, 'Major': {'weight': 0.12426996023737787, 'value': 0.11}, 'Graduate Degree': {'weight': 0.25484141099171165, 'value': 0.03}, 'Years of Work Experience': {'weight': 0.052356993139054432, 'value': 0.23}, 'College': {'weight': 0.14725960351305423, 'value': 0.06}, 'College GPA': {'weight': 0.061072874099145677, 'value': -0.16}, 'Fluent in Spanish': {'weight': 0.20050009461853974, 'value': 0.01}, 'Referred': {'weight': 0.14356064659668979, 'value': 0.1}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7434,
	          "value": -0.00500153469637989,
	          "details": "{'City': {'weight': 0.24443445016930154, 'value': -0.05}, 'Major': {'weight': 0.07137020297723376, 'value': -0.31}, 'Graduate Degree': {'weight': 0.065366452299588859, 'value': -0.06}, 'Years of Work Experience': {'weight': 0.1007770739558905, 'value': 0.6}, 'College': {'weight': 0.010785087826071663, 'value': -0.58}, 'College GPA': {'weight': 0.24107055799939425, 'value': -0.42}, 'Fluent in Spanish': {'weight': 0.17365226808885581, 'value': 0.18}, 'Referred': {'weight': 0.09254390668366376, 'value': 0.53}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7433,
	          "value": -0.0215524143733367,
	          "details": "{'City': {'weight': 0.13890606689545656, 'value': 0.19}, 'Major': {'weight': 0.16532465868090948, 'value': -0.15}, 'Graduate Degree': {'weight': 0.14051311514512727, 'value': -0.34}, 'Years of Work Experience': {'weight': 0.15815081374741236, 'value': -0.01}, 'College': {'weight': 0.15194716294844279, 'value': 0.13}, 'College GPA': {'weight': 0.019568612800048613, 'value': 0.18}, 'Fluent in Spanish': {'weight': 0.084978581654781019, 'value': 0.2}, 'Referred': {'weight': 0.14061098812782194, 'value': -0.1}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2272,
	      "candidate": {
	        "id": 2046,
	        "first_name": "Fred",
	        "last_name": "Stone-Tam",
	        "email": "fred.stone-tam@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 8, 'City': 'LA', 'Major': 'Biology', 'College': 'Central Michigan', 'Fluent in Spanish': False, 'GPA': 3.021927857255199, 'Graduate Degree': True, 'Referred': False}",
	      "predictions": [
	        {
	          "id": 7438,
	          "value": 0.0758885356265853,
	          "details": "{'City': {'weight': 0.043209876122626181, 'value': 0.13}, 'Major': {'weight': 0.19339379037351739, 'value': -0.1}, 'Graduate Degree': {'weight': 0.15310312558677922, 'value': 0.24}, 'Years of Work Experience': {'weight': 0.17660353176894819, 'value': -0.29}, 'College': {'weight': 0.0071884587672831138, 'value': 0.29}, 'College GPA': {'weight': 0.016090793785160953, 'value': -0.06}, 'Fluent in Spanish': {'weight': 0.098113936825922107, 'value': 0.19}, 'Referred': {'weight': 0.3122964867697629, 'value': 0.27}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7437,
	          "value": 0.0258228421434171,
	          "details": "{'City': {'weight': 0.079708388136584207, 'value': 0.12}, 'Major': {'weight': 0.041772806532214546, 'value': 0.43}, 'Graduate Degree': {'weight': 0.18968407150217201, 'value': -0.15}, 'Years of Work Experience': {'weight': 0.17856657284364186, 'value': 0.11}, 'College': {'weight': 0.047975960983878775, 'value': -0.31}, 'College GPA': {'weight': 0.11665763093745955, 'value': -0.23}, 'Fluent in Spanish': {'weight': 0.17600604800268085, 'value': -0.06}, 'Referred': {'weight': 0.1696285210613683, 'value': 0.35}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7436,
	          "value": 0.166430782038147,
	          "details": "{'City': {'weight': 0.057553671040473244, 'value': 0.08}, 'Major': {'weight': 0.064729866616189485, 'value': 0.35}, 'Graduate Degree': {'weight': 0.12525079935224978, 'value': 0.39}, 'Years of Work Experience': {'weight': 0.13656466921425153, 'value': -0.06}, 'College': {'weight': 0.17609573431843276, 'value': 0.4}, 'College GPA': {'weight': 0.20111087950598916, 'value': 0.08}, 'Fluent in Spanish': {'weight': 0.16398734380218521, 'value': -0.1}, 'Referred': {'weight': 0.074707036150228778, 'value': 0.38}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2273,
	      "candidate": {
	        "id": 2047,
	        "first_name": "Dan",
	        "last_name": "Gross-Case",
	        "email": "dan.gross-case@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 4, 'City': 'Oakland', 'Major': 'Communications', 'College': 'Bates', 'Fluent in Spanish': False, 'GPA': 3.132368686143783, 'Graduate Degree': True, 'Referred': False}",
	      "predictions": [
	        {
	          "id": 7441,
	          "value": 0.0264478750234776,
	          "details": "{'City': {'weight': 0.050654714124389183, 'value': 0.06}, 'Major': {'weight': 0.066232636366833603, 'value': 0.06}, 'Graduate Degree': {'weight': 0.07268608854831729, 'value': -0.08}, 'Years of Work Experience': {'weight': 0.089587364803092914, 'value': 0.15}, 'College': {'weight': 0.24203607456664805, 'value': 0.02}, 'College GPA': {'weight': 0.044912688401548079, 'value': 0.08}, 'Fluent in Spanish': {'weight': 0.23420561128034362, 'value': 0.04}, 'Referred': {'weight': 0.19968482190882722, 'value': -0.03}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7440,
	          "value": 0.0245113038420235,
	          "details": "{'City': {'weight': 0.18199081312101895, 'value': -0.03}, 'Major': {'weight': 0.16926596276523592, 'value': -0.27}, 'Graduate Degree': {'weight': 0.015427671569373788, 'value': -0.33}, 'Years of Work Experience': {'weight': 0.1363399568680336, 'value': 0.15}, 'College': {'weight': 0.11810516323470259, 'value': 0.37}, 'College GPA': {'weight': 0.1714499220123136, 'value': -0.26}, 'Fluent in Spanish': {'weight': 0.15557445109320847, 'value': 0.35}, 'Referred': {'weight': 0.051846059336113193, 'value': 0.13}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7439,
	          "value": -0.0583356784403334,
	          "details": "{'City': {'weight': 0.19749627898594402, 'value': 0.23}, 'Major': {'weight': 0.14369003286483412, 'value': -0.12}, 'Graduate Degree': {'weight': 0.072803466831023289, 'value': -0.23}, 'Years of Work Experience': {'weight': 0.24522165855676747, 'value': -0.17}, 'College': {'weight': 0.023934146873141118, 'value': 0.15}, 'College GPA': {'weight': 0.12851510839671396, 'value': -0.27}, 'Fluent in Spanish': {'weight': 0.14267825409177759, 'value': 0.05}, 'Referred': {'weight': 0.045661053399798479, 'value': -0.09}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2274,
	      "candidate": {
	        "id": 2048,
	        "first_name": "Colin",
	        "last_name": "Liu-Gross",
	        "email": "colin.liu-gross@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 5, 'City': 'Yonkers', 'Major': 'Chemistry', 'College': 'UMass', 'Fluent in Spanish': False, 'GPA': 2.5089746919492777, 'Graduate Degree': False, 'Referred': False}",
	      "predictions": [
	        {
	          "id": 7444,
	          "value": -0.150938714997162,
	          "details": "{'City': {'weight': 0.16912802314439082, 'value': 0.03}, 'Major': {'weight': 0.068865639339739035, 'value': -0.18}, 'Graduate Degree': {'weight': 0.17700554208332009, 'value': -0.01}, 'Years of Work Experience': {'weight': 0.021552307563898917, 'value': -0.04}, 'College': {'weight': 0.25232778220117308, 'value': -0.25}, 'College GPA': {'weight': 0.23700649624680803, 'value': -0.35}, 'Fluent in Spanish': {'weight': 0.015069344612117848, 'value': 0.1}, 'Referred': {'weight': 0.059044864808552165, 'value': 0.06}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7443,
	          "value": 0.0086684517657559,
	          "details": "{'City': {'weight': 0.2430307098196644, 'value': 0.21}, 'Major': {'weight': 0.22298078127016277, 'value': -0.18}, 'Graduate Degree': {'weight': 0.089033064453741373, 'value': 0.24}, 'Years of Work Experience': {'weight': 0.12677648888036655, 'value': 0.42}, 'College': {'weight': 0.076783036295227688, 'value': -0.27}, 'College GPA': {'weight': 0.090075158790080503, 'value': -0.29}, 'Fluent in Spanish': {'weight': 0.095892622253018395, 'value': -0.07}, 'Referred': {'weight': 0.055428138237738317, 'value': -0.42}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7442,
	          "value": -0.123117101595841,
	          "details": "{'City': {'weight': 0.12178401238705472, 'value': -0.33}, 'Major': {'weight': 0.14086595938686075, 'value': -0.24}, 'Graduate Degree': {'weight': 0.01164903803563919, 'value': -0.0}, 'Years of Work Experience': {'weight': 0.11994904466265575, 'value': -0.02}, 'College': {'weight': 0.20462701714993439, 'value': -0.23}, 'College GPA': {'weight': 0.2108378034157615, 'value': 0.21}, 'Fluent in Spanish': {'weight': 0.15557474784081698, 'value': -0.24}, 'Referred': {'weight': 0.034712377121276755, 'value': -0.19}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2275,
	      "candidate": {
	        "id": 2049,
	        "first_name": "Jen",
	        "last_name": "Wood-Gross",
	        "email": "jen.wood-gross@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 1, 'City': 'Oakland', 'Major': 'Chemistry', 'College': 'Oregon', 'Fluent in Spanish': True, 'GPA': 2.9609724334179957, 'Graduate Degree': True, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7447,
	          "value": 0.0299651564929418,
	          "details": "{'City': {'weight': 0.19261572814123515, 'value': -0.3}, 'Major': {'weight': 0.15730654524473264, 'value': 0.12}, 'Graduate Degree': {'weight': 0.0069355264592442971, 'value': 0.17}, 'Years of Work Experience': {'weight': 0.17156010674814343, 'value': 0.38}, 'College': {'weight': 0.090322899626647593, 'value': -0.23}, 'College GPA': {'weight': 0.078517727503889495, 'value': -0.1}, 'Fluent in Spanish': {'weight': 0.18852592488831507, 'value': 0.05}, 'Referred': {'weight': 0.1142155413877923, 'value': 0.19}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7446,
	          "value": 0.0645522544695067,
	          "details": "{'City': {'weight': 0.2184583620570727, 'value': -0.09}, 'Major': {'weight': 3.3339569942335345e-05, 'value': -0.45}, 'Graduate Degree': {'weight': 0.0062849175541093583, 'value': -0.19}, 'Years of Work Experience': {'weight': 0.10288935302908829, 'value': -0.27}, 'College': {'weight': 0.0041406826482839106, 'value': 0.32}, 'College GPA': {'weight': 0.0059356411085225149, 'value': -0.08}, 'Fluent in Spanish': {'weight': 0.35482178424757504, 'value': 0.23}, 'Referred': {'weight': 0.30743591978540585, 'value': 0.1}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7445,
	          "value": 0.219538918935615,
	          "details": "{'City': {'weight': 0.042976171174113606, 'value': 0.25}, 'Major': {'weight': 0.067824657775768279, 'value': 0.01}, 'Graduate Degree': {'weight': 0.086487350668556132, 'value': 0.06}, 'Years of Work Experience': {'weight': 0.17165490741623088, 'value': 0.38}, 'College': {'weight': 0.013479045394595398, 'value': -0.25}, 'College GPA': {'weight': 0.17359139118806441, 'value': 0.1}, 'Fluent in Spanish': {'weight': 0.15519212099836222, 'value': 0.09}, 'Referred': {'weight': 0.28879435538430925, 'value': 0.38}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2276,
	      "candidate": {
	        "id": 2050,
	        "first_name": "Li",
	        "last_name": "Brown-Andrews",
	        "email": "li.brown-andrews@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 5, 'City': 'Oakland', 'Major': 'Biology', 'College': 'UMass', 'Fluent in Spanish': True, 'GPA': 2.296245678159376, 'Graduate Degree': False, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7450,
	          "value": 0.115237395583677,
	          "details": "{'City': {'weight': 0.25449401049589387, 'value': 0.49}, 'Major': {'weight': 0.0044603708311144333, 'value': -0.22}, 'Graduate Degree': {'weight': 0.05909524894185593, 'value': -0.11}, 'Years of Work Experience': {'weight': 0.072793912545462289, 'value': 0.24}, 'College': {'weight': 0.13782555420046205, 'value': -0.07}, 'College GPA': {'weight': 0.16419481132735689, 'value': -0.03}, 'Fluent in Spanish': {'weight': 0.24399082349597281, 'value': -0.02}, 'Referred': {'weight': 0.063145268161881651, 'value': -0.0}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7449,
	          "value": 0.0466944540716487,
	          "details": "{'City': {'weight': 0.080866085121536022, 'value': -0.24}, 'Major': {'weight': 0.28814180059862693, 'value': 0.19}, 'Graduate Degree': {'weight': 0.062273149484186323, 'value': -0.27}, 'Years of Work Experience': {'weight': 0.04006408353585484, 'value': 0.33}, 'College': {'weight': 0.11973065420218905, 'value': 0.1}, 'College GPA': {'weight': 0.2177397954201313, 'value': -0.02}, 'Fluent in Spanish': {'weight': 0.1526779733644133, 'value': -0.01}, 'Referred': {'weight': 0.038506458273062247, 'value': 0.23}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7448,
	          "value": 0.0512567141307958,
	          "details": "{'City': {'weight': 0.20813836838315436, 'value': 0.19}, 'Major': {'weight': 0.17188404603728899, 'value': -0.22}, 'Graduate Degree': {'weight': 0.086859116945812956, 'value': 0.03}, 'Years of Work Experience': {'weight': 0.13314651390232701, 'value': 0.3}, 'College': {'weight': 0.050246241715350817, 'value': 0.04}, 'College GPA': {'weight': 0.0740127343842122, 'value': -0.36}, 'Fluent in Spanish': {'weight': 0.10420129403555528, 'value': 0.04}, 'Referred': {'weight': 0.17151168459629831, 'value': 0.16}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2277,
	      "candidate": {
	        "id": 2051,
	        "first_name": "Colin",
	        "last_name": "Bunn-Smith",
	        "email": "colin.bunn-smith@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 3, 'City': 'San Bruno', 'Major': 'Spanish', 'College': 'Oregon', 'Fluent in Spanish': False, 'GPA': 2.6780973484160793, 'Graduate Degree': False, 'Referred': False}",
	      "predictions": [
	        {
	          "id": 7453,
	          "value": -0.00491239031523557,
	          "details": "{'City': {'weight': 0.23368309508501442, 'value': -0.14}, 'Major': {'weight': 0.14745206015765067, 'value': 0.01}, 'Graduate Degree': {'weight': 0.10908854428377995, 'value': -0.01}, 'Years of Work Experience': {'weight': 0.064443723420638907, 'value': 0.83}, 'College': {'weight': 0.10567843424658004, 'value': 0.13}, 'College GPA': {'weight': 0.080314948916480361, 'value': -0.11}, 'Fluent in Spanish': {'weight': 0.25044710643629781, 'value': -0.14}, 'Referred': {'weight': 0.0088920874535577919, 'value': 0.46}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7452,
	          "value": -0.0352729893710432,
	          "details": "{'City': {'weight': 0.10675123216760959, 'value': -0.23}, 'Major': {'weight': 0.14633669755095902, 'value': -0.07}, 'Graduate Degree': {'weight': 0.12161586107776834, 'value': 0.12}, 'Years of Work Experience': {'weight': 0.054223971055983915, 'value': 0.36}, 'College': {'weight': 0.13660686725344315, 'value': -0.09}, 'College GPA': {'weight': 0.19950241950372963, 'value': -0.21}, 'Fluent in Spanish': {'weight': 0.038159723447305262, 'value': -0.26}, 'Referred': {'weight': 0.19680322794320113, 'value': 0.15}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7451,
	          "value": -0.015798616202473,
	          "details": "{'City': {'weight': 0.15009843030430445, 'value': 0.44}, 'Major': {'weight': 0.12023226903643189, 'value': -0.51}, 'Graduate Degree': {'weight': 0.10002000655703629, 'value': -0.03}, 'Years of Work Experience': {'weight': 0.12566672411680929, 'value': -0.17}, 'College': {'weight': 0.14855740490014877, 'value': -0.23}, 'College GPA': {'weight': 0.20671496756227445, 'value': 0.16}, 'Fluent in Spanish': {'weight': 0.028818055477670176, 'value': -0.12}, 'Referred': {'weight': 0.11989214204532472, 'value': 0.07}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2227,
	      "candidate": {
	        "id": 2001,
	        "first_name": "Jacquiz",
	        "last_name": "Lindsay-Spitzer",
	        "email": "jacquiz.lindsay-spitzer@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 1, 'City': 'Redwood City', 'Major': 'Math', 'College': 'Florida', 'Fluent in Spanish': False, 'GPA': 2.6458560626034213, 'Graduate Degree': True, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7303,
	          "value": -0.110417716276664,
	          "details": "{'City': {'weight': 0.18389078065811426, 'value': -0.22}, 'Major': {'weight': 0.085939868280040826, 'value': 0.39}, 'Graduate Degree': {'weight': 0.16537923212669697, 'value': -0.54}, 'Years of Work Experience': {'weight': 0.21134091341578826, 'value': 0.24}, 'College': {'weight': 0.098156522062349108, 'value': 0.04}, 'College GPA': {'weight': 0.2111921170552539, 'value': -0.3}, 'Fluent in Spanish': {'weight': 0.035255356257893687, 'value': -0.16}, 'Referred': {'weight': 0.0088452101438629468, 'value': 0.02}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7302,
	          "value": 0.0557974796993989,
	          "details": "{'City': {'weight': 0.08276656670084917, 'value': -0.19}, 'Major': {'weight': 0.076575577758487903, 'value': 0.24}, 'Graduate Degree': {'weight': 0.11916494723239662, 'value': 0.17}, 'Years of Work Experience': {'weight': 0.031121610468935107, 'value': 0.23}, 'College': {'weight': 0.11082112228459635, 'value': 0.32}, 'College GPA': {'weight': 0.14719730043862564, 'value': 0.09}, 'Fluent in Spanish': {'weight': 0.20330891580670582, 'value': 0.27}, 'Referred': {'weight': 0.22904395930940333, 'value': -0.34}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7301,
	          "value": -0.00689924764760112,
	          "details": "{'City': {'weight': 0.062286849468854606, 'value': -0.16}, 'Major': {'weight': 0.0040404720096894253, 'value': -0.16}, 'Graduate Degree': {'weight': 0.17674025326383702, 'value': -0.38}, 'Years of Work Experience': {'weight': 0.22709680938373308, 'value': 0.28}, 'College': {'weight': 0.10053005167994893, 'value': 0.12}, 'College GPA': {'weight': 0.13870630864886846, 'value': -0.16}, 'Fluent in Spanish': {'weight': 0.19379113626853139, 'value': -0.05}, 'Referred': {'weight': 0.096808119276537111, 'value': 0.28}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2228,
	      "candidate": {
	        "id": 2002,
	        "first_name": "Laura",
	        "last_name": "Spitzer-Harte",
	        "email": "laura.spitzer-harte@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 5, 'City': 'San Francisco', 'Major': 'Computer Science', 'College': 'Michigan', 'Fluent in Spanish': False, 'GPA': 2.196620027266688, 'Graduate Degree': False, 'Referred': True}",
	      "predictions": [
	        {
	          "id": 7306,
	          "value": 0.0814750333340223,
	          "details": "{'City': {'weight': 0.033135917339659898, 'value': 0.1}, 'Major': {'weight': 0.22046565708315977, 'value': -0.04}, 'Graduate Degree': {'weight': 0.1880090280828457, 'value': -0.05}, 'Years of Work Experience': {'weight': 0.087880807300039915, 'value': -0.08}, 'College': {'weight': 0.078130630769046264, 'value': 0.25}, 'College GPA': {'weight': 0.080352930780033346, 'value': -0.15}, 'Fluent in Spanish': {'weight': 0.19497240471343835, 'value': 0.45}, 'Referred': {'weight': 0.1170526239317768, 'value': 0.07}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7305,
	          "value": 0.0369150841297957,
	          "details": "{'City': {'weight': 0.058829631244790022, 'value': 0.01}, 'Major': {'weight': 0.19740424892960839, 'value': -0.07}, 'Graduate Degree': {'weight': 0.03469476568994101, 'value': -0.19}, 'Years of Work Experience': {'weight': 0.087973026264643137, 'value': -0.03}, 'College': {'weight': 0.09977170731274565, 'value': -0.19}, 'College GPA': {'weight': 0.2445420839598002, 'value': -0.14}, 'Fluent in Spanish': {'weight': 0.16407464819833711, 'value': 0.48}, 'Referred': {'weight': 0.11270988840013461, 'value': 0.3}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7304,
	          "value": -0.0608017253706226,
	          "details": "{'City': {'weight': 0.064195369976368544, 'value': 0.03}, 'Major': {'weight': 0.13624909017362297, 'value': -0.45}, 'Graduate Degree': {'weight': 0.15164654339664235, 'value': 0.09}, 'Years of Work Experience': {'weight': 0.15012499901382784, 'value': 0.08}, 'College': {'weight': 0.087064135994648226, 'value': 0.16}, 'College GPA': {'weight': 0.15099863552857071, 'value': 0.01}, 'Fluent in Spanish': {'weight': 0.15208404386796526, 'value': -0.23}, 'Referred': {'weight': 0.10763718204835415, 'value': -0.07}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2229,
	      "candidate": {
	        "id": 2003,
	        "first_name": "Allen",
	        "last_name": "Hull-Smith",
	        "email": "allen.hull-smith@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 1, 'City': 'Marin', 'Major': 'Chemistry', 'College': 'San Diego State', 'Fluent in Spanish': True, 'GPA': 3.1663206187735256, 'Graduate Degree': False, 'Referred': False}",
	      "predictions": [
	        {
	          "id": 7309,
	          "value": -0.116686849279849,
	          "details": "{'City': {'weight': 0.12384222195400665, 'value': -0.53}, 'Major': {'weight': 0.18576278605840896, 'value': -0.35}, 'Graduate Degree': {'weight': 0.14144678425564175, 'value': -0.14}, 'Years of Work Experience': {'weight': 0.099614591789971008, 'value': 0.21}, 'College': {'weight': 0.066053928919538166, 'value': 0.16}, 'College GPA': {'weight': 0.059609445340080315, 'value': -0.05}, 'Fluent in Spanish': {'weight': 0.17532949649888105, 'value': 0.14}, 'Referred': {'weight': 0.14834074518347218, 'value': -0.13}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7308,
	          "value": 0.215826573442067,
	          "details": "{'City': {'weight': 0.13485620509106566, 'value': 0.01}, 'Major': {'weight': 0.044745579501472954, 'value': -0.2}, 'Graduate Degree': {'weight': 0.044943599775557591, 'value': 0.31}, 'Years of Work Experience': {'weight': 0.069890719585270697, 'value': 0.16}, 'College': {'weight': 0.10882833905269729, 'value': -0.22}, 'College GPA': {'weight': 0.1510832214724617, 'value': 0.57}, 'Fluent in Spanish': {'weight': 0.22476191544823793, 'value': 0.36}, 'Referred': {'weight': 0.22089042007323625, 'value': 0.25}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7307,
	          "value": 0.0264845099357105,
	          "details": "{'City': {'weight': 0.21749109486889087, 'value': 0.34}, 'Major': {'weight': 0.22991082387520195, 'value': -0.36}, 'Graduate Degree': {'weight': 0.062834440385911849, 'value': 0.22}, 'Years of Work Experience': {'weight': 0.045176564330896896, 'value': 0.14}, 'College': {'weight': 0.094356512589127625, 'value': 0.1}, 'College GPA': {'weight': 0.054020430119322012, 'value': 0.04}, 'Fluent in Spanish': {'weight': 0.23635327561644787, 'value': 0.01}, 'Referred': {'weight': 0.059856858214200961, 'value': 0.02}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    },
	    {
	      "id": 2230,
	      "candidate": {
	        "id": 2004,
	        "first_name": "Jacquiz",
	        "last_name": "Johnson-Gross",
	        "email": "jacquiz.johnson-gross@test.com"
	      },
	      "requisition": {
	        "id": 61,
	        "job": {
	          "id": 22,
	          "name": "Sales Rep",
	          "description": "Play a key role in a dynamic sales org by identifying new customers and supporting growth initiatives at existing customers.",
	          "organization": {
	            "id": 6,
	            "name": "Hooli",
	            "logo": "http://www.jacobshawtaylor.com/wp-content/uploads/2016/03/hooli-logo-white.png"
	          },
	          "requisition_count": 1
	        },
	        "name": "Los Angeles - August 1",
	        "url": "http://predictive-hire-dev.us-west-2.elasticbeanstalk.com/api/requisitions/61/",
	        "status": "Active",
	        "open_positions": 23,
	        "filled_positions": 15,
	        "active_candidates": 100
	      },
	      "biodata": "{'Years of Work Experience': 1, 'City': 'Modesto', 'Major': 'French', 'College': 'Central Michigan', 'Fluent in Spanish': True, 'GPA': 3.8403558822648964, 'Graduate Degree': False, 'Referred': False}",
	      "predictions": [
	        {
	          "id": 7312,
	          "value": -0.00750842880045204,
	          "details": "{'City': {'weight': 0.14217801529481161, 'value': -0.14}, 'Major': {'weight': 0.055834569517499766, 'value': 0.68}, 'Graduate Degree': {'weight': 0.2551074946255113, 'value': 0.23}, 'Years of Work Experience': {'weight': 0.042350353344608287, 'value': -0.15}, 'College': {'weight': 0.12611495684583054, 'value': -0.17}, 'College GPA': {'weight': 0.11718226543271473, 'value': -0.09}, 'Fluent in Spanish': {'weight': 0.057980172676874629, 'value': 0.33}, 'Referred': {'weight': 0.20325217226214912, 'value': -0.32}}",
	          "outcome_metric": {
	            "id": 67,
	            "name": "Promotion potential"
	          }
	        },
	        {
	          "id": 7311,
	          "value": 0.0957191050560713,
	          "details": "{'City': {'weight': 0.27481348441615666, 'value': 0.2}, 'Major': {'weight': 0.25358097914646377, 'value': 0.05}, 'Graduate Degree': {'weight': 0.20144104429361182, 'value': 0.1}, 'Years of Work Experience': {'weight': 0.017213870174718322, 'value': 0.57}, 'College': {'weight': 0.15224125989000178, 'value': -0.02}, 'College GPA': {'weight': 0.083507873696650511, 'value': 0.07}, 'Fluent in Spanish': {'weight': 0.010440510767226071, 'value': -0.5}, 'Referred': {'weight': 0.0067609776151710804, 'value': 0.08}}",
	          "outcome_metric": {
	            "id": 66,
	            "name": "90 day retention"
	          }
	        },
	        {
	          "id": 7310,
	          "value": 0.18897778019232,
	          "details": "{'City': {'weight': 0.19180611816786033, 'value': 0.21}, 'Major': {'weight': 0.032616001945862311, 'value': 0.01}, 'Graduate Degree': {'weight': 0.20698794964373221, 'value': 0.3}, 'Years of Work Experience': {'weight': 0.044940803526225287, 'value': 0.44}, 'College': {'weight': 0.030960270216931974, 'value': -0.19}, 'College GPA': {'weight': 0.23788633658697814, 'value': 0.06}, 'Fluent in Spanish': {'weight': 0.17809020529000349, 'value': 0.21}, 'Referred': {'weight': 0.076712314622406297, 'value': 0.27}}",
	          "outcome_metric": {
	            "id": 65,
	            "name": "Quota achievement"
	          }
	        }
	      ]
	    }
	];

	
	// Create column chart for top 10 candidates based on GPA.
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

	function filtered(cands) {

		var cands_filt = [];

		// If both filters clicked, find top ten candidates with referrals and degrees.
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
		// If Referred filter clicked, find top ten candidates with referrals.
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
		// If Graduate Degree filter clicked, find top ten candidates with degrees.
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
		// If neither filter clicked, find top ten candidates.
		else {
			var cands_filt = cands.slice(0, sample_size);
			return cands_filt;
		}
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
		GPA_or_Years($scope.cands_fifteen);
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
		GPA_or_Years($scope.cands_fifteen);
	}

	// Draw column charts for top 10 applicants based on which buttons/filters clicked.
	function visualize() {

		for (x = 0; x < $scope.cands_fifteen.length; x++) {

			var bio = $scope.cands_fifteen[x].biodata;

			bio = bio.replace(/'/g, '"');
			bio = ((bio.replace("True", "true")).replace("True", "true")).replace("True", "true");
			bio = ((bio.replace("False", "false")).replace("False", "false")).replace("False", "false");
			bio = JSON.parse(bio);

			$scope.cands_fifteen[x].biodata = bio;
		}

		GPA_or_Years($scope.cands_fifteen);
	}

}]);
