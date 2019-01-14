var p1 = {nom: $("#j1").innerText, src: "./img/case_croix.png", symb: " x "};
var p2 = {nom: $("#j2").innerText, src: "./img/case_rond.png", symb: " o "};

var players = [p1, p2];
var current_player = p1;

var grille = [
  " - ", " - ", " - ",
  " - ", " - ", " - ",
  " - ", " - ", " - "
]


function aff(){
  str = grille[0] + grille[1] + grille[2] + "\n" +
        grille[3] + grille[4] + grille[5] + "\n" +
        grille[6] + grille[7] + grille[8];
  return str;
}


window.onload = function(){
   imgs = document.getElementsByTagName('img');
   for(var i = 0; i<9; i++){
      imgs[i].onclick = function(){
         if(this.src.slice(-8) == "case.png"){
            this.src = current_player.src;
            grille[parseInt(this.id, 10)] = current_player.symb;
            game();
         }
      }
   }
}

function game(){
   if(verif()){
      win();
      return;
   }
   else if(!grille.includes(" - ")){
      nulle();
      return;
   }

   if(current_player == p1){
      current_player = p2;
   }
   else{
      current_player = p1;
   }

   // document.getElementsByTagName('h2')[0].innerHTML = "Joueur : " + current_player.nom;

}

function nulle(){
   console.log('Match nulle');
}

function win(){
  document.getElementsByTagName('h2')[0].innerText = "Joueur : " + current_player.nom + " won !";
}

function verif(){

   for(var i = 0; i < 7; i+=3){
     if(grille[i] == grille[i+1] && grille[i] == grille[i+2] && grille[i] != " - "){
       return true;
     }
   }

   for(var i = 0; i < 3; i++){
     if(grille[i] == grille[i+3] && grille[i] == grille[i+6] && grille[i] != " - "){
       return true;
     }
   }

   if(grille[0] == grille[4] && grille[0] == grille[8] && grille[0] != " - "){
     return true;
   }

   if(grille[2] == grille[4] && grille[2] == grille[6] && grille[2] != " - "){
     return true;
   }

   return false;

}
