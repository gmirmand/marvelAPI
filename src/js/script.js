$(document).ready(function () {
    var $result = $('#result');
    var $search = $('#search');
    var results;
    $(function () {
        function log(message) {
            $("#result").empty().append(message);
        }

        $search.autocomplete({
            source: function (request, response) {
                $.ajax({
                    type: "GET",
                    url: "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + $search.val() + "&apikey=a46dd2d60494b578a99e8c63c3c76451",
                    dataType: "json",
                    success: function (data) {
                        results = data.data.results;
                        var name = [];
                        $.each(results, function (i) {
                            name.push(results[i].name);
                        });
                        response(name);
                    },
                    error: function (e) {
                        $result.empty().append('API Error');
                    }
                });
            },
            minLength: 1,
            select: function (event, ui) {
                console.log(results);
                $.each(results, function (i) {
                    if (results[i].name === ui.item.value) {
                        if (!results[i].description)
                            results[i].description = "Désolé, il n'y a pas de description.";

                        //Text and desc
                        log("<h2 class='script'><span>" + results[i].name + "</span></h2>" +
                            "<p> " + results[i].description + "</p>");
                        var img = results[i].thumbnail.path + '.' + results[i].thumbnail.extension;
                        $('.container').css('background-image', 'url(' + img + ')');
                        $('#result').css('border-bottom', '5px solid black');
                        //Comics
                        if (results[i].comics.items[0]) {
                            $('.comics').empty().removeClass('hide').append("<p class='more'>" + results[i].name + " apparait dans " + results[i].comics.available + " comics.<br>dont...</p>");

                        }
                        else
                            $('.comics').addClass('hide');

                        $.each(results[i].comics.items, function (j) {
                            $('.comics').append("<p class='txtshadow'><span>" + results[i].comics.items[j].name + "</span></p>");
                        });


                    }
                });
            }
        });
    });
});