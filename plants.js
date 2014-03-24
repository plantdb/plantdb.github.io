function PlantsCtrl($scope, $http) {
  $scope.plants = [];
  $http.get('./01.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('./02.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('./03.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('./04.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('./05.json').then(function(response) { $scope.plants.push(response.data); });
}