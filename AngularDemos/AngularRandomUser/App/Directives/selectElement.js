app.directive("selectElement", function ($timeout) {
    return {
        restrict: "A",

        link: function (scope, elem, attrs) {
            elem.on("click", function () {
                $timeout(function () {
                    var anchor = angular.element(elem);
                    console.log(scope.pagingInfo);
                    allAnchors = anchor.parent().parent().find('a');
                    allAnchors.removeClass('selected');
                    anchor.addClass('selected');

                }, 10);
            });
        }
    };
});