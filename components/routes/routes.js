var app = angular.module('app');

app.config(function($stateProvider,$urlRouterProvider) {

  $stateProvider
    .state("facebook", {
      url: '/fb',
      templateUrl: 'pages/user_facebook.html',
      authenticate:false
      })
    .state("instagram", {
      url: '/insta',
      templateUrl: 'pages/user_instagram.html',
      authenticate:false
      });
      $urlRouterProvider.otherwise("/insta");
});
