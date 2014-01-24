app.controller("CoursesController", ['$scope', 'bootStrappedData',
    function ($scope, bootStrappedData) {
        $scope.courses = bootStrappedData.courses;
    }
]);