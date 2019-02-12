
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let troll = document.querySelector('#stupid');

troll.addEventListener("mouseover",function(){
  let top = Math.floor(Math.random() * 101)+"%" // string pourcent
  let left = Math.floor(Math.random() * 101)+"%"
   
   troll.style.position="fixed";
   troll.style.top=top;
   troll.style.left=left;
  

})