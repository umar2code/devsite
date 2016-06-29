
(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('templates', templates);


    function templates($scope, $http, $element,$state,store,auth){
        $scope.profile=store.get('profile');
        $scope.createRepo= function(){
            var vm = this;

            $scope.accessToken=$scope.profile.identities[0].access_token;
            var createUrl='https://api.github.com/user/repos?access_token='+$scope.accessToken;
            $scope.repoName="TestArmTemplate";
            var data={
                name:  $scope.repoName
            }

            //////////////////////////////////
            var req= {
                method: 'POST',
                url: createUrl,
                data: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'

                }
            }
            $http(req).success(function(response) {
                console.log('success');
                alert('created')
            }).error(function(data, status, headers, config){

                alert(data.message+' ,'+"something went wrong");
                console.log(data,status)
            })

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

        }
        $scope.closePane= function(data){
            var vm = this;
            vm.parentTag = $element.parent()[0].remove();
            $state.go(data);
            vm.animate = false;
        };




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

    }

})();
