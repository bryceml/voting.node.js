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
      var g3 = Number(data.before) + Number(data.after);
      $("#beforegraph").height(data.before / g3 * 100);
      $("#aftergraph").height(data.after / g3 * 100);
      $("#reportPageLoads").html("Total Page Loads: " + data.pageloads)
    });
  }