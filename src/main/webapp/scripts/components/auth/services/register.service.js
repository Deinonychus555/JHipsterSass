'use strict';

angular.module('jhipstersassApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


