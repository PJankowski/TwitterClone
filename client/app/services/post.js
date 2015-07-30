(function(){
  'use strict';

  angular.module('TwitterClone')
  .factory('Post', ['$http', function($http){
    return {
      addPost: function(post){
        $http.post('/api/post/', post)
        .success(function(newPost){
          return newPost;
        })
        .error(function(err){
          console.log(err);
        });
      }
    };
  }]);
})();