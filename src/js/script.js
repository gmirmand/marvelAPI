$(document).ready(function () {
    var val, description, count, name, valclick;
    var $result = $('#result');
    var $search = $('#search');
    var $propals = $("#proposals");
    $search.on('input', function () {
        val = $search.val();
    });
    $(function () {
        $search.autocomplete({
            source: function (request, response) {
                $.ajax({
                    type: "GET",
                    url: "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + val + "&apikey=a46dd2d60494b578a99e8c63c3c76451",
                    dataType: "json",
                    success: function (data) {
                        count = data['data']['count'];
                        if (count === 0) {
                            $result.empty().append('No match');
                        }
                        else {
                            $propals.empty();
                            for (var i = 0; i <3; i++){
                                name = data['data']['results'][i]['name'];
                                $propals.append("<span value='"+ name +"' class='proposal'>"+ name +"</span>");
                            }
                            name = data['data']['results'][0]['name'];
                            description = data['data']['results'][0]['description'];
                            $result.empty().append("<h2>" + name + "</h2>", "<p>" + description + "</p>");
                            setTimeout(function(){
                                proposal();
                            }, 300)
                        }
                    },
                    error: function (e) {
                        $result.empty().append('API Error');
                    }
                });
            },
            minLength: 1
        });
    });
    function proposal(){
        $(".proposal").on('click', function(){
            valclick = $(this).text();
            console.log(valclick);
            $.ajax({
                type: "GET",
                url: "https://gateway.marvel.com:443/v1/public/characters?name=" + valclick + "&apikey=a46dd2d60494b578a99e8c63c3c76451",
                dataType: "json",
                success: function (data) {
                    count = data['data']['count'];
                    if (count === 0) {
                        $result.empty().append('No match');
                    }
                    else {
                        $propals.empty();
                        name = data['data']['results'][0]['name'];
                        description = data['data']['results'][0]['description'];
                        $result.empty().append("<h2>" + name + "</h2>", "<p>" + description + "</p>");
                    }
                },
                error: function (e) {
                    $result.empty().append('API Error');
                }
            });
        });
    }
});