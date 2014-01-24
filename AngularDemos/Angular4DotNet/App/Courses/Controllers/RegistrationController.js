app.controller("InstructorsController", ['$scope', 'bootStrappedRegistrations',
    function ($scope, bootStrappedRegistrations) {
        $scope.registrations = bootStrappedRegistrations.registrations;
    }
]);