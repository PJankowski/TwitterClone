(function(){
  'use strict';

  angular.module('TwitterClone')
  .factory('Auth', ['$http', '$rootScope', '$q', function($http, $rootScope, $q){
    var user = {};

    return {
      login: function (user, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('/api/user/login', user)
        .success(function(loggedIn){
          user = loggedIn;
          $rootScope.user = loggedIn;
          deferred.resolve(loggedIn);
          return cb();
        })
        .error(function(err){
          deferred.reject(err);
          return cb(err);
        });

        return deferred.promise;
      },

      signup: function (user) {
        $http.post('/api/user/', user)
        .success(function(newUser){
          user = newUser;
          $rootScope.user = newUser;
          return true;
        })
        .error(function(err){
          return false;
        });
      },

      loggedIn: function(){
        if(user.username){
          return true;
          console.log(user);
        }else{
          return false;
        }
      },

      loggedInAsync: function(cb){
        if(user.hasOwnProperty('$promise')) {
          user.$promise.then(function(){
            cb(true);
          }).catch(function(){
            cb(false);
          });
        } else if(user.username && $rootScope.user.username){
          cb(true);
        } else{
          cb(false);
        }
      },

      logout: function(){
        $http.get('/api/user/logout')
          .success(function(){
            user = {};
            $rootScope.user = null;
          })
          .error(function(err){
            console.log(err);
          });
      },

      me: function(){
        return user;
      }

    };

  }]);
  
})();