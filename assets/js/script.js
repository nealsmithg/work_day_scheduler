var now = moment();
var saved = {};

function init() {
    if(JSON.parse(localStorage.getItem("scheduleSave") !== null)){
        saved = JSON.parse(localStorage.getItem("scheduleSave"));
    };

    for (var i = 0; i < Object.keys(saved).length; i++){
        $("ul[data-time="+Object.keys(saved)[i]+"]").children(".description").val(saved[Object.keys(saved)[i]]);
    };

    setInterval(function() {
        now = moment();
        $("#currentDay").text(now.format("MMMM Do YYYY, h:mm:ss a"));
        $("ul").each(function(){
            if ((now.format("H") == $(this).data("time"))) {
                $(this).children(".description").addClass("present");
            };
            if ((now.format("H") > $(this).data("time"))) {
                $(this).children(".description").addClass("past")
            };
            if ((now.format("H") < $(this).data("time"))) {
                $(this).children(".description").addClass("future")
            };
        })
    }, 500);
};

$(".saveBtn").click(function(){
    var text = $(this).parent().children(".description").val();
    var time = $(this).parent().data("time");
    saved[time] = text;
    localStorage.setItem("scheduleSave", JSON.stringify(saved));
});

init();