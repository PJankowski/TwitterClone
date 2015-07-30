(function(){
  'use strict';

  angular.module('TwitterClone')
  .controller('LoginCtrl', ['$scope', '$state', 'Auth', function($scope, $state, Auth){

    $scope.login = function(user){
      Auth.login(user)
      .then(function(){
        $state.go('profile');
      })
      .catch(function(err){
        alert(err);
      });
    };
    
  }]);
})();