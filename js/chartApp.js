var app = angular.module('SCChartApp', ['ng-fusioncharts']);
    app.controller('MyController', function($scope) {
        $scope.showContent = function($fileContent){
            $scope.content = $fileContent;
        };
        $scope.test = function(text) {
            console.log(text);
        };
        $scope.updateChart = function(data, dataType){
            $("#chartContainer").updateFusionCharts({type:'line', dataSource: 'newdata.json', dataFormat: dataType, width: "100%", height: "550"});
        };
        $scope.updateDestChart = function(dest, dataType){
            $("#chartContainer").updateFusionCharts({type:'line', dataSource: dest, dataFormat: dataType, width: "100%", height: "550"});
        };
    });

    app.controller('myCtrl', function ($scope, $http) {
        $scope.listOfCustomers = null;
        $http.get('http://codehour.online/sachin.json')
            .success(function (data) {
                console.log(data);
                $scope.listOfCustomers = data.alldata;
            })
    });

    /*
app.controller('myCtrl', function ($scope, $http) {
    $scope.listOfCustomers = null;
    $http.get('http://www.iNorthwind.com/Service1.svc/getAllCustomers')
        .success(function (data) {
            console.log(data);
            $scope.listOfCustomers = data.GetAllCustomersResult;
        })
});
*/

app.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();

				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});
