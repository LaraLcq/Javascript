
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

import axios from 'axios';

/*
  Put the JavaScript code you want below.
*/

let arr;

async function getBeers() {
	let response = await axios.get('https://api.punkapi.com/v2/beers');
	arr=response.data;
	console.log(arr);

	for(let i=0; i<arr.length;i++){
		let logo=arr[i].image_url;
		let name=arr[i].name;
		let year=arr[i].first_brewed;
		let tagline=arr[i].tagline;
		console.log(name +" "+year+" "+tagline+" "+logo);

		let elements=document.createElement("div"); // ("") élément HTML
		elements.setAttribute("class","beer")
		elements.setAttribute("id","beer"+i);
		document.querySelector("#beers").appendChild(elements);

		let logoB=document.createElement("img");
		logoB.setAttribute("class","logo");
		logoB.setAttribute("id","logo"+i);
		document.querySelector("#beer"+i).appendChild(logoB);
		logoB.src=logo;

		let names=document.createElement("p");
		names.setAttribute("id","name"+i);
		document.querySelector("#beer"+i).appendChild(names);
		names.innerText=name;

		let years=document.createElement("p");
		years.setAttribute("id","year"+i);
		document.querySelector("#beer"+i).appendChild(years);
		years.innerText=year;

		let tags=document.createElement("p");
		tags.setAttribute("id","tagline"+i);
		document.querySelector("#beer"+i).appendChild(tags);
		tags.innerText=tagline;



	}
}

getBeers();

let elements=document.createElement

