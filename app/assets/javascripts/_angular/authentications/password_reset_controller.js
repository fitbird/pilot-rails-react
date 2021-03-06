module.controller('PasswordResetCtrl', ['$auth', '$scope', '$state',
  function($auth, $scope, $state) {
    $scope.handlePasswordReset = function() {
      $auth.requestPasswordReset($scope.passwordReset)
        .then(function(response) {
          $state.go('welcome');
        })
        .catch(function(error) {
          $scope.error = error.errors[0];
          $state.go('welcome');
        });
    };
}]);
