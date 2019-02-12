
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import cat1 from './_shared/img/1.jpg'
import cat2 from './_shared/img/2.jpg'
import cat3 from './_shared/img/3.jpg'
import cat4 from './_shared/img/4.jpg'
import cat5 from './_shared/img/5.jpg'
import cat6 from './_shared/img/6.jpg'
import cat7 from './_shared/img/7.jpg'

let arr=[cat1,cat2,cat3,cat4,cat5,cat6,cat7]
let i=0;
setInterval(function(){
	if (i >=arr.length){
		i=0;
	}
	console.log(i)
	document.querySelector("#cats").src=arr[i] // changer la source
	i++ // incrémenter de 1 
}, 10000)

