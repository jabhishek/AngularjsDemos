// Start from filter
app.filter('startFrom', function () {
    return function(input, start) {         
        return input.slice(start);
    }
});