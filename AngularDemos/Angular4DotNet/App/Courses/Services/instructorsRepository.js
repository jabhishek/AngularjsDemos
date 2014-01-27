app.factory('instructorRepository', ['$http', '$q', function ($http, $q) {
    return {
        get: function () {
            var deferred = $q.defer();
            $http.get('/api/Instructors')
                .success(deferred.resolve)
                .error(deferred.reject);
            return deferred.promise;
        }
    };
}]);