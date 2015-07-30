(function(){

  'use strict';

  angular.module('TwitterClone')
  .controller('ProfileCtrl', ['$scope', '$http', 'Auth', 'Post', function($scope, $http, Auth, Post){
    
    $scope.posts = [];

    $scope.user = Auth.me();

    $scope.addPost = function (post) {
      Post.addPost(post);
      $scope.posts.push(post);
    };

  }]);

})();