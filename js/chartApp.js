var app = angular.module('SCChartApp', ['ng-fusioncharts']);
    app.controller('MyController', function($scope) {
        $scope.events = {
            dataplotclick: function(ev, props) {
                $scope.$apply(function() {
                    $scope.colorValue = "background-color:" + props.categoryLabel + ";";
                });
            }
        };
  $scope.dataSource = {
    "chart": {
      "caption": "Column Chart Built in Angular!",
      "captionFontSize": "30",
      "captionPadding": "25",
      "baseFontSize": "16",
      "canvasBorderAlpha": "0",
      "showPlotBorder": "0",
      "placevaluesInside": "1",
      "valueFontColor": "#ffffff",
      "captionFontBold": "0",
      "bgColor": "#2C3E50",
      "divLineAlpha": "50",
      "plotSpacePercent": "10",
      "bgAlpha": "95",
      "canvasBgAlpha": "0",
      "outCnvBaseFontColor": "#FFFFFF",
      "showValues": "0",
      "baseFont": "Open Sans",
      "paletteColors": "#6495ED, #FF6347, #90EE90, #FFD700, #FF1493",
      "theme": "zune",
      "toolTipBorderColor": "#FFFFFF",
      "toolTipBorderThickness": "1",
      "toolTipBorderRadius": "2",
      "toolTipBgColor": "#000000",
      "toolTipBgAlpha": "70",
      "toolTipPadding": "12",
      "toolTipSepChar": " - ",
      "xAxisNameFontSize": "18",
      "yAxisNameFontSize": "18",
      "xAxisNamePadding": "10",
      "yAxisNamePadding": "10",
      "xAxisName": "Colors",
      "yAxisName": "Column Size",
      "xAxisNameFontBold": "0",
      "yAxisNameFontBold": "0",
      "showXAxisLine": "1",
      "xAxisLineColor": "#999999",
    },
    "data": [{
      "label": "CornflowerBlue",
      "value": "42"
    }, {
      "label": "Tomato",
      "value": "81"
    }, {
      "label": "LightGreen",
      "value": "73"
    }, {
      "label": "Gold",
      "value": "62"
    }, {
      "label": "DeepPink",
      "value": "89"
    }]
  };
});
