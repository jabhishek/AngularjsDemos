app.factory('accountRepository', ['$resource', function ($resource) {
    return {
        save: function (student) {
            return $resource('/api/Account').save(student);
        }
    };
}]);