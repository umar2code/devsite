
$scope.viewRepo= function(ev) {

    $scope.repoList;
    var vm = this;


    $scope.accessToken = $scope.profile.identities[0].access_token;
    var createUrl = 'https://api.github.com/user/repos?access_token=' + $scope.accessToken;
    var req = {
        method: 'GET',
        url: createUrl,
    }
    $http(req).success(function (response) {
        $scope.repoList = response;
        //alert("Getting all repos Please see in console for dev purpose");
        //console.log('ss'+vm.repoList);

    }).error(function (data, status, headers, config) {

        alert(data.message + ' ,' + "something went wrong");
        console.log(data, status)
    })

    $state.go('.gitCommit');
}