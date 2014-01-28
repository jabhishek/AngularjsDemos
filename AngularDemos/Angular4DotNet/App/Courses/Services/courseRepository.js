app.factory('courseRepository', ['$resource', function ($resource) {
    return {
        get: function () {
            return $resource('/api/Courses').query();
        }
    };
}]);