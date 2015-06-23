'use strict';

angular.module('app.api', ["ngResource"])
.factory('resources', function($resource) {
    return new Resources($resource, "/api", []);
});
