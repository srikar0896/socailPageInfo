var  app = angular.module('app');
app.controller('instagramController',['$scope','$state','$http','$q',
function($scope,$state,$http,$q){

  $scope.showLoaderx = true;
  $scope.showData = false;
 
  var name = "letusdoitforu",items;
  
  $.getJSON("https://query.yahooapis.com/v1/public/yql", {
    q: "select * from json where url='https://www.instagram.com/" + name + "?__a=1'",
    format: "json"
  }, function(data) {
    $scope.data = data.query.results.json.user;
    console.log($scope.data);
    $scope.showData = true;
    $scope.media = $scope.data.media.nodes;
    $scope.$apply();
  });

}]);
