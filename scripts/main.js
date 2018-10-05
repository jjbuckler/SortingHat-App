var y = document.getElementById("sortingHat");

// Code for Chrome, Safari and Opera
y.addEventListener("webkitAnimationEnd", myEndFunction);

function startSort(){
  document.getElementById("houseName").className="houseInvisible"; 
  document.getElementById("sortingHat").className="sorting";
}
function myEndFunction(){
  var x=Math.floor(Math.random() * 13);
  console.log(x)
  if(x<=2){
    
    console.log("Griffindor");
  } else if(x>2 && x<=5){
    console.log("Slytherin");
  }
  else if (x>5 && x<=9){
    console.log("HufflePuff");
  } else{
      console.log("RavenClaw")
  }
  document.getElementById("houseName").className="houseVisible";
}
/*Modernizr */