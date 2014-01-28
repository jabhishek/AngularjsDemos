app.controller("AccountController", ['$scope', 'accountRepository', '$location',
function ($scope, accountRepository, $location) {
    $scope.student = {
    };
    $scope.errors = [];


    $scope.reset = function () {
        $scope.errors = [];
        $scope.student = {
        };
    };

    $scope.save = function (student) {
        accountRepository.save(student).$promise.then(function () {
            console.log("Saved.");
            $location.url("Registration/Courses");
        }, 
        function (response) {
            console.log(response);
            $scope.errors = response.data;
        });
    };

    }
]);