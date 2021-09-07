var now = moment();

function init() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        now = moment();
        $("#currentDay").text(now.format("MMMM Do YYYY, h:mm:ss a"))
    }, 100);
  };

  init();