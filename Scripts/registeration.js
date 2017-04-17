/**
 * Created by Ajay Bakari on 20/03/2017.
 */



myApp.controller('RegistrationController',
    ['$scope', 'Authentication',
        function($scope, Authentication) {

            $scope.login = function() {
                Authentication.login($scope.user);
            };

            $scope.logout = function() {
                Authentication.logout();
            };

            $scope.register = function() {
                Authentication.register($scope.user);
            }; //register

        }]); //Controller