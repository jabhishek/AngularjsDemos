
app.factory("Users", function ($http) {
    return {
        getMany: function (count) {
            if (!count || count > 5)
                count = 5;
            return $http({
                method: "GET",
                url: "http://api.randomuser.me/0.2/?results=" + count,
                transformResponse: function (data, headers) {
                    //MESS WITH THE DATA
                    var users = JSON.parse(data).results;
                    var transformedUsers = _.map(users, function (user) {
                        
                        var toUpper = function (text) {
                            var first = text.substring(0, 1);
                            var rest = text.substring(1);
                            return first.toUpperCase() + rest;
                        };
                        return {
                            firstName: toUpper(user.user.name.first),
                            lastName: toUpper(user.user.name.last),
                            title: toUpper(user.user.name.title),
                            gender: user.user.gender,
                            picture: user.user.picture,
                            age: Math.floor(Math.random(0, 1) * 20) + 20,
                            email: user.user.email,
                            address: {
                                city: toUpper(user.user.location.city),
                                street: toUpper(user.user.location.street),
                                state: toUpper(user.user.location.state)
                            }
                        };
                    });
                    return transformedUsers;
                }
            });
        }
    };
});
