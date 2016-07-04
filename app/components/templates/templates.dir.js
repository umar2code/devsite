
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('templates', templates);


    function templates($scope, $http, $state,store,auth,$mdDialog){
        $scope.gitList=[{name:"View ",action:"ng-click='viewRepo()'"},{name:"Create New ",action:"ng-click='createRepo()'"},
            {name:"Commit ",action:"ng-click='commit()'"}]
        $scope.profile=store.get('profile');
        $scope.repoList;
        $scope.createnew;
        $scope.commit;

        $scope.createRepo=function(){
            $scope.createnew=false;
            $scope.commit=false;
        }
        $scope.commitCode=function(){
            $scope.createnew=false;
            $scope.commit=false;
        }
        $scope.viewRepo= function(ev) {
            $scope.createnew=false;
            $scope.commit=false;
            var vm = this;
         $scope.accessToken = $scope.profile.identities[0].access_token;
            var createUrl = 'https://api.github.com/user/repos?access_token=' + $scope.accessToken;
            var req = {
                method: 'GET',
                url: createUrl,
            }
           $http(req).success(function (response) {
            $scope.repoList =response;
            }).error(function (data, status, headers, config) {
             alert(data.message + ' ,' + "something went wrong");
                console.log(data, status)
            })
            $scope.updateSelection = function(position, repoList) {
                angular.forEach(repoList, function(subscription, index) {
                    if (position != index)
                        subscription.checked = false;
                });
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
