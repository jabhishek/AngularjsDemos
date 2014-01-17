app.directive('pageLink', [function () {
    return {
        restrict: "A",
        scope: {
            pageNumber:"@"
        },
        replace: true,
        link: function (scope, element, attrs) {
            console.log(scope);
            console.log(element);
            console.log(attrs);
            //element.html("a");

            element.bind("click", function () {
                scope.$apply(function () {
                    console.log(element);
                    element.parent().parent().find('a.selected').removeClass('selected');
                    element.addClass('selected');
                });
            });
        },
        template: "<a href='#'>{{pageNumber}}</a>"
    }
}]);