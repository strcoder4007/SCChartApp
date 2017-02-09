var app = angular.module('SCChartApp', ['ng-fusioncharts']);
    app.controller('MyController', function($scope) {
        $scope.events = {
            /*
            dataplotclick: function(ev, props) {
                $scope.$apply(function() {
                    //$scope.colorValue = "background-color:" + props.categoryLabel + ";";
                });
            }
            */
        };
        {

    $scope.dataSource = {
        "chart": {
        "caption": "Top Goal Scorers for FC Barcelona",
        "subcaption": "2015-16",
        "yaxisname": "No. of Goals",
        "showvalues": "0",
        "plotgradientcolor": "",
        "canvasbgalpha": "0",
        "bgalpha": "0",
        "plotborderalpha": "0",
        "canvasborderalpha": "0",
        "showborder": "0",
        "showalternatehgridcolor": "0",
        "rotatelabels": "1",
        "slantlabels": "1",
        "captionpadding": "20",
        "tooltipbgcolor": "138dd7",
        "tooltipcolor": "ffffff",
        "tooltipbordercolor": "138dd7",
        "showtooltipshadow": "0",
        "palettecolors": "5167c7"
    },
    "data": [
        {
            "label": "Luis Suarez",
            "value": "45",
            "color": "1AB7D9"
        },
        {
            "label": "Lionel Messi",
            "value": "38"
        },
        {
            "label": "Neymar",
            "value": "27"
        },
        {
            "label": "Ivan Rakitic",
            "value": "7"
        },
        {
            "label": "Gerard Pique",
            "value": "5"
        },
        {
            "label": "Arda Turan",
            "value": "2"
        },
        {
            "label": "Adriano",
            "value": "1"
        },
        {
            "label": "Dani Alves",
            "value": "1"
        },
        {
            "label": "Marc Bartra",
            "value": "1"
        },
        {
            "label": "Andres Iniesta",
            "value": "1"
        }
    ]
    }
}
});
