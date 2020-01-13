

var myVar;    
function simulate(){
    $("#flight").addClass("run");
    setTimeout(function(){
      $("#flight").removeClass("run");
    },20000)
    myVar = setTimeout(simulate,5000);
  }
