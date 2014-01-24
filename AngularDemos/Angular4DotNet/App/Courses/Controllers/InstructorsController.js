app.controller("InstructorsController", ['$scope', 'bootStrappedInstructors',
    function ($scope, bootStrappedInstructors) {
        $scope.instructors = bootStrappedInstructors.instructors;
    }
]);