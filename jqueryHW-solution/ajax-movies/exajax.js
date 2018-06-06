var ul = "";
var container = "";

var apiKey = "ffa5acbc";
var mainUrl = "http://www.omdbapi.com/?";

var buttons = {
    about: function () {
        aboutUI();
    },
    home: function () {
        homeUI();
    },
    cars: function () {
        carsUI();

    },
    search: function () {
        createSearch();

    }
}



$(function () {
    container = $("#cont");




    for (var key in buttons) {
        if (buttons.hasOwnProperty(key)) {
            $('#' + key).click(function () { //key = //about //home //cars
                container.html(buttons[this.id]());
            })
        }
    }


    $("span").click(function () {
        if ($("#mySidenav").css("width") == "450px") {
            toggleSideBar(0);
            $(this)
                .css({ left: "0px", color: "black" })
                .removeClass("glyphicon glyphicon-triangle-left")
                .addClass("glyphicon glyphicon-triangle-right");
            $("#mainContainer").removeClass("mrt-fade");
        } else {
            toggleSideBar(450);
            $(this)
                .css({ left: "430px", color: "white", zIndex: 999 })
                .removeClass("glyphicon glyphicon-triangle-right")
                .addClass("glyphicon glyphicon-triangle-left");
            $("#mainContainer").addClass("mrt-fade");
        }
    });
});

function toggleSideBar(w) {
    $("#mySidenav").css("width", w);
}
function aboutUI() {
    container.html("aboutUI");
}
function homeUI() {
    container.html("homeUI");
}


function createSearch() {
    var searchBox = "<div><input id='searchInput' type='text'/><button id='searchAction'>Search </button></div>";
    container.append(searchBox);
    $("#searchAction").on('click', function () {


        searchServer($("#searchInput").val());

    })

}

function getKey() {
    return "apiKey=" + apiKey;
}

function searchServer(input) {
    console.log("searchServer start");
    $.ajax({
        url: mainUrl + getKey() + "&s=" + input, //"http://www.omdbapi.com/?apikey=ffa5acbc&s='input'";
        method: "get",
        success: function (data, success, reponse) {
            console.log("data resolved - searchServer");
            $.each(data.Search, function (i, element) {
                container.append("<div  class='movies' ><h2>" + element.Title + " " + element.Year + "</h2><h4> " + element.imdbID + "</h4> <img src='" + element.Poster + "' /></div> ");
            })

            $('.movies').click(function () {

                // var res = getMovieById($(this));
                getMovieById(function (data) {
                    console.log(data);
                }, $(this)) //$(this)
                // console.log(res.Production);
                // setTimeout(function () {
                //     console.log(res);
                // }, 0);
            })


        },
        error: function (data, error, reponse) {
            console.log("request error");
        }

    })

    console.log("searchServer finish");
}
//callback = function(){}
function getMovieById(callback, div) {
    console.log("getMovieById start");
    $.ajax({
        url: mainUrl + getKey() + "&i=" + div.find("h4")[0].innerText,
        method: "GET",
        success: function (data) {
            console.log("data resolved - getMovieById");
            // div.append("<h4>Production: " + data.Production + "<h4>");
            callback(data);
        },
        error: function (data) {
            alert("error in getMovieById");

        }
    })
    console.log("getMovieById finish");
}