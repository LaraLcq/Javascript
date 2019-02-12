
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

async function getCats() {
	let response = await axios.get('https://aws.random.cat/meow')
	console.log(response.data.file)
	document.querySelector("#cats").src=response.data.file // data = API
}

getCats();