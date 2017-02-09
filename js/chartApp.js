var app = angular.module('SCChartApp', ['ng-fusioncharts']);
    app.controller('MyController', function($scope) {
        /*
        $scope.events = {
            dataplotclick: function(ev, props) {
                $scope.$apply(function() {
                    //$scope.colorValue = "background-color:" + props.categoryLabel + ";";
                });
            }
        };
        */
        {
            $scope.test = function(text) {
                alert(text);
            }
            $scope.dataSource = {}
        }
});
