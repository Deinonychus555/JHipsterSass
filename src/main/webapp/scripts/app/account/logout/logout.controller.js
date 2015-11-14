'use strict';

angular.module('jhipstersassApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
