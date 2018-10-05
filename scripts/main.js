

const y = document.getElementById("sortingHat");
const houseLabel =  document.getElementById("houseName")
// Code for Chrome, Safari and Opera
y.addEventListener("webkitAnimationEnd", myEndFunction);

function startSort(){
  console.log("here")
 houseLabel.className="houseInvisible"; 
  y.className="sorting";
}
function myEndFunction(){
  var x=Math.floor(Math.random() * 13);
  if(x<=2){
    houseLabel.innerHTML="Gryffindor!";

  } else if(x>2 && x<=5){

    houseLabel.innerHTML="Slytherin!";

  }
  else if (x>5 && x<=9){
    houseLabel.innerHTML="Hufflepuff!";
  } else{
    houseLabel.innerHTML="Ravenclaw!"
  }
  y.className="";
  houseLabel.className="houseVisible";
}
/*Modernizr */