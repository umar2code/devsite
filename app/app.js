'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.layout',
    'myApp.version',
    'ngMaterial',
    'ngCookies',
    'myApp.login',
    'auth0',
    'ui.router'
]).
config([
    '$locationProvider',
    '$routeProvider',
    '$mdThemingProvider',
    '$mdIconProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function(
        $locationProvider,
        $routeProvider,
        $mdThemingProvider,
        $mdIconProvider,
        $stateProvider,
        $urlRouterProvider
    ) {
        $mdIconProvider.fontSet('md', 'material-icons');
        $mdThemingProvider.theme('default').dark();


        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'components/login/login.tpl.html',
                controller: 'LoginCtrl'
            })


        $stateProvider
            .state('success', {
                url: '/success',
                templateUrl: 'components/layout/layout.tpl.html',
                controller: 'View1Ctrl'

            })

        $stateProvider
            .state('success.templatelist', {
                url: '/templatelist',
                views: {
                    "success.templatelist": {
                        templateUrl: 'components/templates/templates.tpl.html',
                        controller: function($scope){
                            $scope.animate = false;
                        }

                    }
                },
                parent:'success'

            })
            .state('success.templatelist.templatesdescription', {
                url: '/templatesdescription',
                views: {
                    "success.templatelist": {
                        templateUrl: 'components/templates/templates.tpl.html'
                    },
                    "success.templatelist.templatesdescription": {
                        templateUrl: 'components/templates/templates-desc.tpl.html'
                    },
                    "success.templatelist.templatesjson": {
                        templateUrl: 'components/templates/templates-json.tpl.html',
                        controller: function($scope){
                            $scope.animate = true;
                        }
                    }

                },
                parent:'success'
            })
            .state('settings.profile', {
                url: '/profile',
                templateUrl: 'templates/profile.html',
                controller: 'ProfileController'
            })
            .state('settings.account', {
                url: '/account',
                templateUrl: 'templates/account.html',
                controller: 'AccountController'
            });
        //$urlRouterProvider.otherwise('/components/login');
    }]);
