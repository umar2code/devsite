'use strict';


angular.module('myApp.layout', ['ngRoute'])

    .controller('View1Ctrl', function($scope, $window) {
        $window.onload = function() {
            var childs = $('#widgetsWrapper').children();
            var totalWidth = 0;
            for (var i = 0; i < childs.length; i++) {
                totalWidth += childs[i].offsetWidth;
            }
            var elem = $('#panesContainer');
            elem.scrollLeft(totalWidth);

        };
    })
    .directive('master',function () {

    });

