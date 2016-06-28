'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.layout',
    'myApp.version',
    'ngMaterial',
    'ngCookies',
    'myApp.login',
    'auth0',
    'ui.router',
    'ng.jsoneditor'
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
                            $scope.animate = true;
                        }

                    }
                },
                parent:'success'

            })
            .state('success.templatelist.templatesdescription', {
                url: '/templatesdescription',
                views: {
                    "success.templatelist": {
                        templateUrl: 'components/templates/templates.tpl.html',
                        controller: function($scope){
                            $scope.animate = false;
                        }
                    },
                    "success.templatelist.templatesdescription": {
                        templateUrl: 'components/templates/templates-desc.tpl.html',
                        controller: function($scope){
                            $scope.animate = true;
                        }
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
            .state('success.editTemplate', {
            url: '/editTemplate',
            views: {
                "success.templatelist": {
                    templateUrl: 'components/templates/editGui.tpl.html'
                },
                "success.templatelist.templatesdescription": {
                    templateUrl: 'components/templates/editDescriptiontemplate.tpl.html'
                },
                "success.templatelist.templatesjson": {
                    templateUrl: 'components/templates/editJsontemplate.tpl.html',
                    controller: function($scope){
                        $scope.animate = false;
                    }
                },
                "success.templatelist.editTemplate": {
                    templateUrl: 'components/templates/editVisual.tpl.html'
                },

            },
            parent:'success'
        });

        //$urlRouterProvider.otherwise('/components/login');
    }]);
