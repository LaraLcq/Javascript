
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

document.querySelector('#blackb').style.backgroundColor="black";
document.querySelector('#blue').addEventListener("click", () => {
  document.querySelector('#blackb').style.backgroundColor="blue";
});
document.querySelector('#blackb').style.backgroundColor="black";
document.querySelector('#red').addEventListener("click", () => {
  document.querySelector('#blackb').style.backgroundColor="red";
});
document.querySelector('#blackb').style.backgroundColor="black";
document.querySelector('#green').addEventListener("click", () => {
  document.querySelector('#blackb').style.backgroundColor="green";
});
