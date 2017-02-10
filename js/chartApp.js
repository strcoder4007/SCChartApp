var app = angular.module('SCChartApp', ['ng-fusioncharts']);
    app.controller('MyController', function($scope) {
        $scope.showContent = function($fileContent){
            $scope.content = $fileContent;
        };
        $scope.test = function(text) {
            console.log(text);
        };
        $scope.updateChart = function(data, dataType){
            $("#chartContainer").updateFusionCharts({type:'line', dataSource: data, dataFormat: dataType, width: "100%", height: "540"});
        };
        $scope.updateDestChart = function(dest, dataType){
            $("#chartContainer").updateFusionCharts({type:'line', dataSource: dest, dataFormat: dataType, width: "100%", height: "540"});
        };
    });

app.controller('myCtrl', function ($scope, $http) {
    $scope.stats = null;
    $http.get('http://localhost/angular-charts/data2.json')
        .success(function (data) {
            var stats = data.alldata;
            var items = ['opposition', 'stadium', 'goals', 'age', 'country'];
        })
});

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
