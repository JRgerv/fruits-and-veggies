/* setup your angular app here */
var app = angular.module('fnv',[]);

app.controller('sort', ['$scope', function($scope){
  $scope.fruit = fruits;
  $scope.veggie = vegetables;
  $scope.unsorted = unsorted;
    




}]);



// debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruits.length);
console.log('Veggie count', vegetables.length);
console.log('unsorted count', unsorted.length);
