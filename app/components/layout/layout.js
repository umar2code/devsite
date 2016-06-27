'use strict';


angular.module('myApp.layout', ['ngRoute'])

/* /!*.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/success', {
 templateUrl: 'components/layout/layout.tpl.html',
 controller: 'View1Ctrl'
 });*!/

 }])*/

    .controller('View1Ctrl', [function($scope, element, attrs) {
       //  var mainElem = document.getElementsByClassName("body");
       //  var angularMainElem = angular.element(mainElem)[0];
       //      console.log('Maiin Element', angularMainElem);
       //  var angularMainWidth = angularMainElem.offsetWidth;
       //  var angularMainHeight = angularMainElem.offsetHeight;
       //  console.log('main Width is', angularMainWidth);
       //  console.log('main Height is', angularMainHeight);
       //  //var divElem = document.getElementById("panesContainer");
       //  var divElem = document.getElementsByClassName("panesContainer");
       //  console.log('divElem', divElem);
       //  var angulaarDivElement = angular.element(divElem);
       //  console.log('angulaarDivElement', angulaarDivElement);
       //  angulaarDivElement.style = {
       //      height:(angularMainHeight - 36)+'px',
       //      width:(angularMainWidth)+'px'
       //  };
       //  console.log("layout element isss", element);
       // // alert(angulaarDivElementWidth);
    }])
    .directive('master',function () {
        // function link(scope, element) {
        //     scope.$watch(function(){
        //         scope.style = {
        //             height:(element[0].offsetHeight - 36)+'px',
        //             width:(element[0].scrollWidth)+'px'
        //         };
        //     });
        //
        //     ////console.log('pradeepepepep',element[0]);
        //     //console.log('pradeepepepep',element[0].style.width);
        // }
        // return {
        //     restrict: 'AE',
        //     link: link
        // };
    });