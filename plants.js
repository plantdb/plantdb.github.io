function PlantsCtrl($scope, $http) {
  $scope.plants = [];
  $http.get('http://plantdb.github.io/01.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('http://plantdb.github.io/02.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('http://plantdb.github.io/03.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('http://plantdb.github.io/04.json').then(function(response) { $scope.plants.push(response.data); });
  $http.get('http://plantdb.github.io/05.json').then(function(response) { $scope.plants.push(response.data); });
}