function appGrpsCtrl($scope, $http) {
  $http.get('/data/application-groups.json').then(function(response) { $scope.appGrps = response.data; });
}
function appEnvsCtrl($scope, $http) {
  $http.get('/data/application-groups.json').then(function(response) { $scope.appEnvs = response.data; });
}