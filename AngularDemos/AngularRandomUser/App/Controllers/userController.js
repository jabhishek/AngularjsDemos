app.controller("userController", ['$scope', 'Users', '$interval', function ($scope, Users, $interval) {
    $scope.users = [];
    $scope.isLoading = false;
    $scope.waiting = false;
    $scope.pagingInfo = {
        pageSize: 10,
        currentPage: 1
    };

    Users.getMany().then(function (users) {
        $scope.users = users.data;
    });

    $scope.setCurrentPage = function (index) {
        $scope.pagingInfo.currentPage = index + 1;
    }

    $scope.getPages = function () {
        return Math.ceil($scope.users.length / $scope.pagingInfo.pageSize);
    };

    $scope.setPageSize = function () {
        var totalPages = Math.ceil($scope.users.length / $scope.pagingInfo.pageSize);
        if ($scope.pagingInfo.currentPage > totalPages)
            $scope.pagingInfo.currentPage = totalPages;
    };

    $scope.getNumberAsArray = function (num) {
        return new Array(num);
    };

    var stop;
    $scope.loadMore = function () {
        stop = $interval(function () {
            if ($scope.waiting)
                return;
            else {
                $scope.waiting = true;
            }
            Users.getMany(5).then(function (users) {
                $scope.waiting = false;
                for (var i = 0; i < users.data.length; i++) {
                    $scope.users.push(users.data[i]);
                }
                
            });
        }, 1);
        $scope.isLoading = true;
    };

    $scope.stopLoading = function () {
        if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
        }
        $scope.isLoading = false;
    };



    $scope.$on('$destroy', function () {
        // Make sure that the interval is destroyed too
        $scope.stopLoading();
    });

}]);