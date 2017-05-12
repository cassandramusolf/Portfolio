$(document).ready(function () {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        data: $(this).serialize(),
        url: 'https://api.github.com/users/cassandramusolf/starred',
        success: function (projects) {
            for (var i = 0; i <= 3; i++) {
                $('.projects').append('<div class=col-md-4>' + '<h2 class="project-name">' + projects[i].name.toUpperCase() + ' <br> <br>'  + projects[i].stargazers_count + ' Star </h2>' + '<br>' +
                '<a href="' + projects[i].html_url + '">' + 'View Project Here' + '</a>' + '</div>');
            }
        }
    });


$('.title').typeIt({
    strings: 'Junior Web Developer',
    speed: 100,
    autoStart: true,
    breakLines: true,
    cursor: false
});

});