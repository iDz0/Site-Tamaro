
j1 = "Joueur 1"
j2 = "Joueur 2"

$(document).ready(function(){
  $("#player").toggle();
  $("#jeu").toggle();
});


$(document).ready(function(){
  $("#resume").click(function(){
    $("#mode").toggle(1000);
    $("#jeu").toggle(1000);
  });
});




$(document).ready(function(){
  $("#new").click(function(){
    $("#mode").toggle(1000, function(){
      $("#player").toggle(1000, function(){

        $("#submit").click(function(){
          
          if($("input[name=J1]").val().length > 4 &&  $("input[name=J2]").val().length > 4){
            window.p1.nom = $("input[name=J1]").val();
            window.p2.nom = $("input[name=J2]").val();
          }
          else if($("input[name=J1]").val().length > 4){
            window.p1.nom = $("input[name=J1]").val();
          }
          else if($("input[name=J2]").val().length > 4){
            window.p2.nom = $("input[name=J2]").val();
          }

          $("#player").toggle(1000);
          $("#jeu").toggle(1000);
          
        });

      });
    });
    
  });
});


