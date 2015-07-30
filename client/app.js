(function(){
  'use strict';

  /**
  * TwitterClone Module
  */
  angular.module('TwitterClone', ['ui.router', 'ngCookies'])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/profile');

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl: 'app/partials/home.html',
      authenticate: true
    })
    .state('profile', {
      url: '/profile',
      controller: 'ProfileCtrl',
      templateUrl: 'app/partials/profile.html',
      authenticate: true
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/partials/login.html',
      controller: 'LoginCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'app/partials/signup.html',
      controller: 'SignupCtrl'
    });
    
  }])
  .run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth){
    $rootScope.$on('$stateChangeStart', function (event, next){
      Auth.loggedInAsync(function (loggedIn){
        if(next.authenticate && loggedIn === false){
          $location.path('/login');
        }
      });
    });
  }]);
  
})();