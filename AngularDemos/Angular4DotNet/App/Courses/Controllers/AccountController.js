app.controller("AccountController", ['$scope', 'accountRepository', '$location',
function ($scope, accountRepository, $location) {
    $scope.student = {
    };
    $scope.error = false;


    $scope.reset = function () {
        $scope.error = false;
        $scope.student = {
        };
    };

    $scope.save = function (student) {
        accountRepository.save(student).$promise.then(function () {
            console.log("Saved.");
            $location.url("Registration/Courses");
        }, 
        function () {
            console.log("Failed.");
            $scope.error = true;
        });
    };

    }
]);