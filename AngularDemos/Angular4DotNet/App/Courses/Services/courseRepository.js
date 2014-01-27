app.factory('courseRepository', ['$http', '$q', function ($http, $q) {
    return {
        get: function () {
            var deferred = $q.defer();
            $http.get('/Courses/GetCourses')
                .success(deferred.resolve)
                .error(deferred.reject);
            return deferred.promise;
        }
    };
}]);