        window.onload = update();
    
  $("#vimbutton").click(function(e) {
    e.preventDefault();
    $.getJSON("vim", function(data) {});
    update();
//    $("#vimbutton").attr('disabled', 'disabled');
//    $("#emacsbutton").attr('disabled', 'disabled');
  });
  $("#emacsbutton").click(function(e) {
    e.preventDefault();
    $.getJSON("emacs", function(data) {});
    update();
//    $("#vimbutton").attr('disabled', 'disabled');
//    $("#emacsbutton").attr('disabled', 'disabled');
  });
  $("#windowsbutton").click(function(e) {
    e.preventDefault();
    $.getJSON("windows", function(data) {});
    update();
//    $("#windowsbutton").attr('disabled', 'disabled');
//    $("#macbutton").attr('disabled', 'disabled');
//    $("#linuxbutton").attr('disabled', 'disabled');
  });
  $("#macbutton").click(function(e) {
    e.preventDefault();
    $.getJSON("mac", function(data) {});
    update();
//    $("#windowsbutton").attr('disabled', 'disabled');
//    $("#macbutton").attr('disabled', 'disabled');
//    $("#linuxbutton").attr('disabled', 'disabled');
  });
  $("#linuxbutton").click(function(e) {
    e.preventDefault();
    $.getJSON("linux", function(data) {});
    update();
//    $("#windowsbutton").attr('disabled', 'disabled');
//    $("#macbutton").attr('disabled', 'disabled');
//    $("#linuxbutton").attr('disabled', 'disabled');
  });
  $("#beforebutton").click(function(e) {
    e.preventDefault();
    $.getJSON("before", function(data) {});
    update();
  //  $("#beforebutton").attr('disabled', 'disabled');
  //  $("#afterbutton").attr('disabled', 'disabled');
  });
  $("#afterbutton").click(function(e) {
    e.preventDefault();
    $.getJSON("after", function(data) {});
    update();
  //  $("#beforebutton").attr('disabled', 'disabled');
  //  $("#afterbutton").attr('disabled', 'disabled');
  });
  $(document).ready(function(){
    update();
    setInterval(function() {
    update();
  }, 4000);
});

  function update() {
    $.getJSON("query", function(data) {
      $("#emacsusers").html("Votes for Emacs: " + data.emacs);
      $("#vimusers").html("Votes for Vim: " + data.vim + "&nbsp;&nbsp;&nbsp;&nbsp;");
      var g1 = Number(data.emacs) + Number(data.vim);
      $("#vimgraph").height(data.vim / g1 * 100);
      $("#emacsgraph").height(data.emacs / g1 * 100);

      $("#windowsusers").html("Votes for Windows: " + data.windows + "&nbsp;&nbsp;&nbsp;&nbsp;");
      $("#macusers").html("Votes for Mac: " + data.mac + "&nbsp;&nbsp;&nbsp;&nbsp;");
      $("#linuxusers").html("Votes for Linux: " + data.linux);
      var g2 = Number(data.windows) + Number(data.mac) + Number(data.linux);
      $("#windowsgraph").height(data.windows / g2 * 100);
      $("#macgraph").height(data.mac / g2 * 100);
      $("#linuxgraph").height(data.linux / g2 * 100);
      $("#beforeusers").html("Votes for the first: " + data.before + "&nbsp;&nbsp;&nbsp;&nbsp;");
      $("#afterusers").html("Votes for the second: " + data.after);
      if (data.vim < data.emacs){
          console.log("vim winner");
        $("#emacsusers").html("The winner is the emacs!");
        $("#vimusers").html("");

      }
      else if (data.vim == data.emacs){
          console.log("It's a tie!");
        $("#emacsusers").html("It's a tie!");
        $("#vimusers").html("It's a tie");

      }
      else {
//        console.log("vim winner");
        $("#vimusers").html("The winner is the vim!");
        $("#emacsusers").html("");
      }
      if (data.windows > data.mac){
          if(data.windows > data.linux){
            console.log("the winner is windows");
            $("#windowsusers").html("The winner is windows!");
            $("#macusers").html("");
            $("#linuxusers").html("");

          }
          else if (data.windows == data.linux){
//                    console.log("the winner is linux");
                $("#windowsusers").html("It's a tie between windows and linux!");
                $("#macusers").html("");
                $("#linuxusers").html("It's a tie between windows and linux!");

          }
          else {
            console.log("the winner is linux");
            $("#windowsusers").html("The winner is Linux!");
            $("#macusers").html("");
            $("#linuxusers").html("");
          }


      }
      else if (data.windows < data.mac){
          if(data.mac > data.linux){
            console.log("the winner is mac");
            $("#windowsusers").html("The winner is mac!");
            $("#macusers").html("");
            $("#linuxusers").html("");  
          }
          else{
                if (data.mac == data.linux){
//                    console.log("the winner is linux");
                $("#windowsusers").html("");
                $("#macusers").html("It's a tie between mac and linux!");
                $("#linuxusers").html("");
              }

          }
//          console.log("vim winner");
//        $("#emacsusers").html("The winner is Vim!");
//        $("#vimusers").html("");

      }
      else {
        if (data.windows == data.linux){
            $("#windowsusers").html("");
            $("#macusers").html("It's a tie!");
            $("#linuxusers").html(""); 
        }
        else if (data.windows < data.linux){
            $("#windowsusers").html("");
            $("#macusers").html("");
            $("#linuxusers").html("The winner is Linux!"); 
        }
        else {
            $("#windowsusers").html("It's a tie between mac and windows!");
            $("#macusers").html("It's a tie between mac and windows!");
            $("#linuxusers").html(""); 
        }
      }
        
      if (data.before < data.after){
          console.log("vim winner");
        $("#afterusers").html("The winner is the Second!");
        $("#beforeusers").html("");

      }
      else if (data.before == data.after){
          console.log("It's a tie!");
        $("#afterusers").html("It's a tie!");
        $("#beforeusers").html("It's a tie");

      }
      else {
//        console.log("vim winner");
        $("#beforeusers").html("The winner is the First!");
        $("#afterusers").html("");
      }
      var g3 = Number(data.before) + Number(data.after);
      $("#beforegraph").height(data.before / g3 * 100);
      $("#aftergraph").height(data.after / g3 * 100);
      $("#reportPageLoads").html("Total Page Loads: " + data.pageloads)
    });
  }