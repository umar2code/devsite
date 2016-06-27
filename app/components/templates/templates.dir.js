(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('templates', templates);


    function templates($scope, $http, $element,$state){
        $scope.closePane= function(data){
            var vm = this;
            vm.parentTag = $element.parent()[0].remove();
            $state.go(data);
            vm.animate = false;
        };
        // var documentResult = document.getElementsByClassName("widgetPane");
        // var wrappedDocumentResult = angular.element(documentResult);
        // angular.forEach(wrappedDocumentResult, function( el ){
        //     //angular.element(el).doSomething();
        //
        //     if(angular.element(el).hasClass('widthSmall')){
        //         alert(this);
        //         wrappedDocumentResult.parent().addClass('widthSmaller');
        //     }
        //     if(angular.element(el).hasClass('widthMedium')){
        //         alert(2);
        //         wrappedDocumentResult.addClass('widthMedium');
        //     }
        //     if(angular.element(el).hasClass('widthLarge')){
        //         alert(3);
        //         wrappedDocumentResult.addClass('widthLarge');
        //     }
        //     if(angular.element(el).hasClass('widthExtraLarge')){
        //         alert(4);
        //         wrappedDocumentResult.addClass('widthExtraLarge');
        //     }
        // });






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

    }

})();
