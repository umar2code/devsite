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

    function toolbarController( $scope, auth, $http, $location, store, $rootScope,Fullscreen ){
        $scope.isFullScreen = false;
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

         $scope.goFullscreen=toggleFullScreen;

        function toggleFullScreen() {
         
            
      // Fullscreen
      if (Fullscreen.isEnabled())
         Fullscreen.cancel();
      else
         Fullscreen.all();

     

        }
    }

})();