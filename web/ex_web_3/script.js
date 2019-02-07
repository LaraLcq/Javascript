
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

document.querySelector('#Reset').addEventListener('click',() =>{
  document.getElementById('nom').value="";
  document.getElementById('pouvoir').value="";
  document.getElementById('motivation').value="";
  document.getElementById('conquer').value="";
});

document.querySelector("#display").addEventListener("click", () =>{
  let case1 = document.getElementById('nom').value;
  let case2 = document.getElementById('pouvoir').value;
  let case3 = document.getElementById('motivation').value;
  let case4 = document.getElementById('conquer').value;


  document.querySelector("#Reset").style.visibility = 'hidden';
  document.querySelector("#display").style.visibility = 'hidden';
  document.querySelector("#nom").innerText= "Name : " +case1;
  document.querySelector("#pouvoir").innerText= "Power : " +case2;
  document.querySelector("#motivation").innerText= "Motivation : " +case3;
  document.querySelector("#conquer").innerText= "Plan to conquer the world : " +case4;

  document.querySelector("#result").innerText= "Name : " +case1 + "\nPower : " +case2
   + "\nMotivation : " +case3 + "\nPlan to conquer the world : " +case4;
});




