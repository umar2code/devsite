(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('sidemenu', menu);
    function menu(){
        return {
            templateUrl: 'components/sidemenu/sidemenu.tpl.html',
            controller: menuController,
            controllerAs: 'menu'
        };
    }

    function menuController($scope, $cookieStore){

        $scope.toggleSidebar = function() {
            $scope.toggle = !$scope.toggle;
            $cookieStore.put('toggle', $scope.toggle);
        };
    }




})();