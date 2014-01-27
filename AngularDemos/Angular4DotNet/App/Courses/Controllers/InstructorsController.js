app.controller("InstructorsController", ['$scope', 'instructorRepository',
    function ($scope, instructorRepository) {
        instructorRepository.get()
            .then(function (instructors) {
                $scope.instructors = instructors;
            });
    }
]);