
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('templates', templates);


    function templates($scope, $http, $state,store,auth,$mdDialog,$rootScope){

        $scope.profile=store.get('profile');
        $scope.repoList;
        $scope.repoListPane=false;
        $scope.newRepoPane=false;
        $scope.commitPane=false;


        $scope.createRepo=function(){
            $scope.commitPane=false;
            $scope.repoListPane=false;
            $scope.newRepoPane=true;
            
             ////////////////////////
            //////////////
            /////logic
            
        }
        ///////////////////////////////////////
/////////////Creating New Repo
        ///////////////////////////////////////
        $scope.submitRepo=function(repoName,repoDesc){
            $scope.accessToken = $scope.profile.identities[0].access_token;
            var createUrl = 'https://api.github.com/user/repos?access_token=' + $scope.accessToken;
            debugger;
            var req = {
                method: 'POST',
                url: createUrl,
                data:
            {
                "name": repoName,
                "description": repoDesc,
                "homepage": "https://github.com",
                "private": false

            }

            }
            $http(req).success(function (response) {
                alert("repo created")
            }).error(function (data, status, headers, config) {
                alert(data.message + ' ,' + "something went wrong");
                console.log(data, status)
            })
            }

        $scope.commitCode=function(){
            $scope.repoListPane=false;
            $scope.newRepoPane=false;
            $scope.commitPane=true;
            ////////////////////////
            //////////////
            /////logic

        }
        $scope.commitRepo=function (repoName,comment,branch) {
            //////////////////////////////////////
            ////////////////////getting sha key
            ////////////////////////////////////////
           $scope.accessName = $scope.profile.nickname;
            var shaUrl = 'https://api.github.com/repos/'+$scope.accessName+'/'+repoName+'/git/refs';
            var req = {
                method: 'GET',
                url: shaUrl,
            }
            $http(req).success(function (response) {
                alert("Only Getting SHA KEY commit is pending ..Thank you")
                $scope.lastsha =response.object.sha;

            }).error(function (data, status, headers, config) {
                alert(data.message + ' ,' + "something went wrong");
                console.log(data, status)
            })


            /////////////////////////////////
            ///////////API call for create branch
            ////////////////////////






        }
        $scope.viewRepo= function(ev) {
            $scope.commitPane=false;
           $scope.newRepoPane=false;
            $scope.repoListPane=true;
            var vm = this;
         $scope.accessToken = $scope.profile.identities[0].access_token;
            var viewUrl = 'https://api.github.com/user/repos?access_token=' + $scope.accessToken;
            var req = {
                method: 'GET',
                url: viewUrl,
            }
           $http(req).success(function (response) {
            $scope.repoList =response;
            }).error(function (data, status, headers, config) {
             alert(data.message + ' ,' + "something went wrong");
                console.log(data, status)
            })
            $scope.updateSelection = function(position, repoList,name) {

             $scope.selectedRepo=name;
                angular.forEach(repoList, function(subscription, index) {
                    if (position != index)
                        subscription.checked = false;
                });
                $scope.checked=true;
            }
        }

            var jsondata = [
                {
                    "templatesList": [
                        {
                            "templateItem": {
                                "root": ".templatesdescription",
                                "name": "Working Template"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        },
                        {
                            "templateItem": {
                                "root": "http://example.com/event1",
                                "name": "Template 2"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        },
                        {
                            "templateItem": {
                                "root": "http://example.com/event1",
                                "name": "Template 3"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        },
                        {
                            "templateItem": {
                                "root": "http://example.com/event1",
                                "name": "Template 4"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        },
                        {
                            "templateItem": {
                                "root": "http://example.com/event1",
                                "name": "Template 5"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        },
                        {
                            "templateItem": {
                                "root": "http://example.com/event1",
                                "name": "Template 6"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        },
                        {
                            "templateItem": {
                                "root": "http://example.com/event1",
                                "name": "Template 7"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        },
                        {
                            "templateItem": {
                                "root": "http://example.com/event1",
                                "name": "Template 8"
                            },

                            "templateItemDescription": "Lorem Loreem Loreeem Ipsum Ipsuum Ipsuuum ..."
                        }
                    ]
                }
            ];


            $scope.templatesList = jsondata[0].templatesList;

            // Edit Json Code
            $scope.obj = {data: jsondata, options: {mode: 'tree'}};
            $scope.onLoad = function (instance) {
                instance.expandAll();
            };

            $scope.changeOptions = function () {
                $scope.obj.options.mode = $scope.obj.options.mode == 'tree' ? 'code' : 'tree';
            };

            $scope.pretty = function (obj) {
                return angular.toJson(obj, true);
            }


        $scope.closePane= function(data){
            var vm = this;
            vm.parentTag = $element.parent()[0].remove();
            $state.go(data);
            vm.animate = false;
        };




        


        $scope.templatesList = jsondata[0].templatesList;

        // Edit Json Code
        $scope.obj = {data: jsondata, options: {mode: 'tree'}};
        $scope.onLoad = function (instance) {
            instance.expandAll();
        };

        $scope.changeOptions = function () {
            $scope.obj.options.mode = $scope.obj.options.mode == 'tree' ? 'code' : 'tree';
        };

        $scope.pretty = function (obj) {
            return angular.toJson(obj, true);
        }

    }

})();
