$(document).ready(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: $(this).serialize(),
        url: 'https://api.github.com/users/cassandramusolf/repos',
        success: function (projects) {
            for (var i = 0; i < projects.length; i++) {
                //$('.projects').append('<h4>' + projects[i].name + '</h4>' + '<h3>' + projects[i].stargazers_count + '</h3>');
                if (projects[i].stargazers_count > 0) {
                    $('.projects').append('<h1>' + projects[i].name + '</h1>');
                }
            }
            console.log("hello");
        }
    });
});