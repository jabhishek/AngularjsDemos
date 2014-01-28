app.controller("CoursesController", ['$scope', 'courseRepository',
    function ($scope, courseRepository) {
        $scope.courses = courseRepository.get();
    }
]);