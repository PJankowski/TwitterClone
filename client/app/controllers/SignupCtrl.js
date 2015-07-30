(function(){
  'use strict';

  angular.module('TwitterClone')
  .controller('SignupCtrl', ['$scope', 'Auth', function($scope, Auth){

    $scope.signup = function(user){
      Auth.signup(user);
    };

  }]);
})();