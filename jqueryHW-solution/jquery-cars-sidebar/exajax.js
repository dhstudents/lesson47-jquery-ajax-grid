// https://stackoverflow.com/questions/867916/creating-a-div-element-in-jquery
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
var ul = "";
var container = "";
var buttons = {
    about: function () {
        aboutUI();
    },
    home: function () {
        homeUI();
    },
    cars: function () {
        container.html("");
        carsUI();

    },
    search: function () {
        openSearch();

    }
}

$(function () {
    container = $("#cont");


    $("#draggable").draggable();
  //  $("#tabs").tabs();

    for (var key in buttons) {
        if (buttons.hasOwnProperty(key)) {
            $('#' + key).click(function () { //key : about | home | cars
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
            $("#mainContainer").removeClass("mrt-move");
        } else {
            toggleSideBar(450);
            $(this)
                .css({ left: "430px", color: "white", zIndex: 999 })
                .removeClass("glyphicon glyphicon-triangle-right")
                .addClass("glyphicon glyphicon-triangle-left");
            $("#mainContainer").addClass("mrt-move");
        }
    });
});

function toggleSideBar(w) {
    $("#mySidenav").css("width", w);
}

function aboutUI() {
    container.html("<h1>aboutUI</h1>");
}

function homeUI() {
    container.html("<h1>homeUI</h1>");
}

function carsUI() {

    data.forEach(function (element) {
        var car = new CarUI(element);
        container.append(car.CarUIOutput());
    }, this);
}

function CarUI(car) {

    this.manufacturer = $("<div>manufacturer: </div>").append(car.manufacturer);
    this.manufacturer.attr("class", "panel-heading");
    this.manufacturer.click(function () {
        $(this).next().toggle(1000);
    });
    this.model = $("<h2> Model: </h2>").append(car.model);
    this.model.hide();
    this.CarUIOutput = function () {
        var div = $("<div></div>");
        div.attr("class", "panel panel-primary");
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                if (typeof (this[key]) != 'function') {
                    div.append(this[key]);
                }
            }
        }
        return $("<div style='cursor: pointer;' class='col-lg-3' style='height:500px;'></div>").html(div);
    }
}

function openSearch() {
    $('#draggable').css("visibility", "visible");
}