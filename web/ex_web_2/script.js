
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
let n1=0;
let n2=0;
let total=0;

document.querySelector('#moins').addEventListener("click", ()=>{
  let value1 = document.querySelector("#textbox1").value;
  n1=Number(value1);
  let value2= document.querySelector("#textbox2").value;
  n2=Number(value2);
  total=n1-n2;
  document.querySelector("#myanswer").innerText="Résultat : " + total;
});

document.querySelector('#plus').addEventListener("click", ()=>{
  let value1 = document.querySelector("#textbox1").value;
  n1=Number(value1);
  let value2= document.querySelector("#textbox2").value;
  n2=Number(value2);
  total=n1+n2;
  document.querySelector("#myanswer").innerText="Résultat : " + total;
});

document.querySelector('#fois').addEventListener("click", ()=>{
  let value1 = document.querySelector("#textbox1").value;
  n1=Number(value1);
  let value2= document.querySelector("#textbox2").value;
  n2=Number(value2);
  total=n1*n2;
  document.querySelector("#myanswer").innerText="Résultat : " + total;
});
document.querySelector('#divise').addEventListener("click", ()=>{
  let value1 = document.querySelector("#textbox1").value;
  n1=Number(value1);
  let value2= document.querySelector("#textbox2").value;
  n2=Number(value2);
  total=n1/n2;
  document.querySelector("#myanswer").innerText="Résultat : " + total;
});



