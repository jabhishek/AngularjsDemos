app.controller("CoursesController", ['$scope', 'courseRepository',
    function ($scope, courseRepository) {
        courseRepository.get()
            .then(function (courses) {
                $scope.courses = courses;
            });
    }
]);