$(document).ready(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: $(this).serialize(),
        url: 'https://api.github.com/users/cassandramusolf/starred',
        success: function (projects) {
            for (var i = 0; i <= 3; i++) {
                $('.projects').append('<h4>' + projects[i].name.toUpperCase() + '</h4>' + '<p>' + projects[i].html_url + '</p>' + '<h3>' + projects[i].stargazers_count + ' star' + '</h3>');
            }
        }
    });
});