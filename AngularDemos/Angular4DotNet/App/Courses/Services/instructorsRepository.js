app.factory('instructorRepository', ['$resource', function ($resource) {
    return {
        get: function () {
            return $resource('/api/Instructors').query();
        }
    };
}]);