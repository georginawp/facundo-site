$(document).ready(function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var imageName = urlParams.get('img'); 

    $('#imageTag').attr('src', 'img/' + imageName);
});