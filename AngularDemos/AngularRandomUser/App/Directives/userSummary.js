app.directive("userSummary", function() {
    return {
        restrict: "A",
        replace: true,
        scope: {
            user : "=" 
        },
        link: function(scope, elem) {
            scope.show = function (user) {
                alert(user.firstName);
            }
        },
        //template: '<div>{{user.firstName}}</div>',
        templateUrl: "App/Templates/userSummary.html" 
    };
});