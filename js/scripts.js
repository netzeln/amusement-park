$(document).ready(function() {
  var height = parseInt(prompt("What's your Height in Inches?"));

  if (height >= 63) {
    $(".tall").show();
  } else {
    $(".short").show();
  }
  
});
