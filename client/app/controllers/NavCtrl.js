(function(){

  'use strict';

  angular.module('TwitterClone')
  .controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth){
    
    $scope.loggedIn = Auth.loggedIn;

    $scope.logout = function(){
      Auth.logout();
    };

  }]);

})();