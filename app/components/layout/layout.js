'use strict';

angular.module('myApp.layout', ['ngRoute'])

/* /!*.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/success', {
 templateUrl: 'components/layout/layout.tpl.html',
 controller: 'View1Ctrl'
 });*!/

 }])*/

    .controller('View1Ctrl', [function($scope, element, attrs) {
    }])
    .directive('master',function () {
        function link(scope, element) {
            scope.$watch(function(){
                scope.style = {
                    //height:(element[0].offsetHeight - 36)+'px'
                    //width:(element[0].scrollWidth)+'px'
                };
            }

            );


        }
        return {
            restrict: 'AE',
            link: link
        };
    });