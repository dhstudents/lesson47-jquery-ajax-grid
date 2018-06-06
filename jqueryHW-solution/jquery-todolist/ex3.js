var todoList = ["Watch GOT", "Buy Milk", "Get married", "Flight to Vegas"];

$(function () {

  todoList.forEach(function (element) {
    var label = $("<label style='display:block'>");
    label.addClass("label label-primary");
    label.text(element);

    label.on("click", function () {

      // $(this).parent().siblings()[0].append(this);


      $(this).appendTo($(this).parent().siblings()[0]).
        toggleClass("label label-primary").
        toggleClass("label label-success");
    })

    $("#todo").append(label);

  }, this);

})