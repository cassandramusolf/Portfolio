$(document).ready(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: $(this).serialize(),
        url: 'https://api.github.com/users/cassandramusolf/repos',
        success: function (projects) {
            for (var i = 0; i < 20; i++) {
                $('.projects').append('<h4>' + projects[i].name + '</h4>');
            }
            console.log("hello");
        }
    });
});