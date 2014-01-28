app.controller("InstructorsController", ['$scope', 'instructorRepository',
    function ($scope, instructorRepository) {
                $scope.instructors = instructorRepository.get()
    }
]);