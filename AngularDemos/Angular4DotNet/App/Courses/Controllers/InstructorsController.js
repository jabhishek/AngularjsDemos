app.controller("InstructorsController", ['$scope', 'bootStrappedData',
    function ($scope, bootStrappedData) {
        $scope.instructors = bootStrappedData.instructors;
    }
]);