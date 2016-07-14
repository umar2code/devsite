
(function () {
    'use strict';
   var app = angular.module('myApp');
        app.controller('templates', templates);


    function templates($scope, $http, $state,store,auth,$mdDialog,$rootScope, $stateParams, $filter){

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
            $scope.gitId = $scope.profile.identities[0].user_id;
            var viewUrl = 'https://api.github.com/user/' + $scope.gitId +'/repos';
            var req = {
                method: 'GET',
                url: viewUrl 
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

        var templateAPI = 'https://raw.githubusercontent.com/sysgain/veegamServices/master/templates.json';
        var req = {
            method: 'GET',
            url: templateAPI,
        }
        $http(req).success(function (data) {

            console.log('response', data);
            $scope.Lists = data[0].templatesList;
            var currentId = $stateParams.templateID;
            var res =  $scope.Lists;
            var respectiveDescription = ($filter('filter')(res, {templateItemID :currentId}));
            $scope.templateDescription = respectiveDescription[0].templateItemDescription;
            var respectiveJson = ($filter('filter')(res, {templateItemID :currentId}));
            $scope.templateJson = respectiveDescription[0].templateItemJson;
                var ele = document.getElementById('jsonEditor');
                console.log('ele',ele);
                var options = {
                    mode: 'view'
                };
                var json = $scope.templateJson;
                var editor = new JSONEditor(ele, options, json);
        }).error(function (data, status, headers, config) {
            alert(data.message + ' ,' + "something went wrong");
            console.log(data, status)
        });

        $scope.selectedTemplate = function(id) {
            $scope.tempId = id;

            if(! $state.current.name=='success.templatelist.templatesDescriptionJson')
            {
                $state.go('.templatesDescriptionJson',{'templateID':id});
            }

            $state.go('success.templatelist.templatesDescriptionJson',{'templateID':id});

        }

        $scope.closePane= function(data){
          
            var vm = this;
           // vm.parentTag = $element.parent()[0].remove();
            $state.go(data);
            vm.animate = false;
        };
    }
})();
