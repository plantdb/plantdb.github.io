function zenviroCtrl($scope, $http) {
  $http.get('./data/application-groups.json').then(function(response) { $scope.application-groups = response.data; });
}