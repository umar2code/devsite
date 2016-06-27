(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('toolbar', toolbar);

    function toolbar(){
        return {
            templateUrl: 'components/toolbar/toolbar.tpl.html',
            controller: toolbarController,
            controllerAs: 'toolbar'
        };
    }

    function toolbarController( $scope, auth, $http, $location, store, $rootScope ){
        var originatorEv;
        this.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
        $scope.auth = auth;
        $scope.logout = function() {
            auth.signout();
            store.remove('profile');
            store.remove('token');
            $location.path('/');
        }
        var vm = this;

        vm.toggleFullScreen = toggleFullScreen;

        function toggleFullScreen() {
        }
    }

})();