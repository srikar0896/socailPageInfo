var  app = angular.module('app',['ui.router']);

app.controller('mainController',['$scope','$state',function($scope,$state){
   $state.go("facebook");
}]);
