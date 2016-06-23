'use strict';

angular.module('myApp.layout', ['ngRoute'])

/* /!*.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/success', {
 templateUrl: 'components/layout/layout.tpl.html',
 controller: 'View1Ctrl'
 });*!/

 }])*/

    .controller('View1Ctrl', [function() {


    }])
    .directive('master',function () {
        function link(scope, element, attrs) {
            scope.$watch(function(){
                scope.style = {
                    height:(element[0].offsetHeight)-36+'px',
                   // width:(element[0].offsetWidth)+'px'
                };
            });
        }
        return {
            restrict: 'AE',
            link: link
        };
    });