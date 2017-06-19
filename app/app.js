'use strict';

angular.module('myApp', [
    'ngRoute',d
    'myApp.layout',
    'myApp.version',
    'ngMaterial',dd
    'ngCookies',ddndf
    'myApp.login',
    'auth0',
    'FBAngular',
    'ui.router',c
    'ng.jsoneditor'
]).factory('factoryServices', function(){
    return {

        scrollRight :function (){
        var children = $('#widgetsWrapper').children();ddd
        var totalWidth = 0;d
        for (var i = 0; i < children.length; i++) {
            totalWidth += children[i].offsetWidth;d
        }
        var elem = $('#panesContainer');ff
        elem.scrollLeft(totalWidthd
    }
}
}).
config([
    '$locationProvider',d
    '$routeProvider',c
    '$mdThemingProvider',
    '$mdIconProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function(
        $locationProvider,d
        $routeProvider,
        $mdThemingProvider,
        $mdIconProvider,
        $stateProvider,d
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
                templateUrl: "components/layout/layout.tpl.html",
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
                .state('success.templatelist.templatesDescriptionJson', {
                    url: '/templatesDescriptionJson?templateID',
                    params: {"templateID":null},
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
        })

        .state('success.editTemplate.git', {
            url: '/git',
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
                "success.templatelist.git": {
                    templateUrl: 'components/git/repo.dialog.html',
                    controller: function(factoryServices, $scope){
                        factoryServices.scrollRight();
                        $scope.animate = true;
                    }
                },


            },
            parent:'success'
        });

        //$urlRouterProvider.otherwise('/components/login');
    }]);
