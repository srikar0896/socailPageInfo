var  app = angular.module('app');
app.controller('facebookController',['$scope','$state','$http','$q',
function($scope,$state,$http,$q){

  $scope.showData = false;
  $scope.pageDetails = {};

  var access_token = "EAABxZBeutnvoBAHbAzHXuLZBK5XJAjCQWVuP6dX45f9rIgI4gRyDL1TfPNKHuKp3zvIu8ZCAGiATczbEFKjp67wWA9cS7yXQaBQAZBJDH1b4dyZASZBgkuToLco6n6ProURvy6b39XlQNajDHLwyZCWM0fR8ZATkBlwZD"
  $scope.posts = [];
  $scope.postLikes = [];
  $http({
                      method: 'GET',
                      url: "https://graph.facebook.com/v2.10/ludifubook?access_token="+access_token+"&debug=all&fields=posts,fan_count,name,picture&format=json&method=get&pretty=0&suppress",

                  })
                  .then(function(response){
                    console.log(response);
                    $scope.pageDetails["pageName"] = response.data.name;
                    $scope.pageDetails["page_like_count"] = response.data.fan_count;
                    $scope.pageDetails["page_picture_url"] = response.data.picture.data.url;
                    for (var i = 0; i < 10; i++) {
                      $scope.posts.push(response.data.posts.data[i]["id"]);
                    }
                    $scope.getLikes();
                    console.log($scope.posts);
                  });
                  $scope.getLikes = function(){
                      for (var j = 0; j <$scope.posts.length; j++) {
     $http({
                      method: 'GET',
                      url: "https://graph.facebook.com/v2.10/"+$scope.posts[j]+"/likes?access_token="+access_token+"&debug=all&format=json&method=get&pretty=0&summary=true&suppress_http_code=1",

                  })
                  .then(function(response){
                     console.log(Object.keys(response.data));
                   var id = $scope.posts[j];
                    var likes_count = response.data.summary.total_count;
                                       $scope.postLikes.push(likes_count);
                   if($scope.postLikes.length==10){
                    $scope.showData = true;
                    console.log($scope.postLikes);
                       }
                    });
                  };

  }

}]);

// 355850631456944_503374800037859/likes?summary=true
