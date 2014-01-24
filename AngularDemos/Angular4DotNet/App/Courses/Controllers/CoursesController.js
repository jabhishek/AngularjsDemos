app.controller("CoursesController", ['$scope', 'bootStrappedCourses',
    function ($scope, bootStrappedCourses) {
        $scope.courses = bootStrappedCourses.courses;
    }
]);