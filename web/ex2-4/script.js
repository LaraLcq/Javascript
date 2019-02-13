
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

async function getChar() {
	let response = await axios.get('https://character-database.becode.xyz/characters');
	arr=response.data;
	console.log(arr);
	for(let i=0;i<arr.length;i++){
		let name = arr[i].name;
		let desc=arr[i].description;
		let shortDesc=arr[i].shortDescription;
		let img =arr[i].image;
		console.log(name+" "+desc+" "+shortDesc)

		let Character=document.createElement("div");
		Character.setAttribute("class","char");
		Character.setAttribute("id","char"+i);
		Character.setAttribute("data-toggle","modal");
		Character.setAttribute("data-target","#exampleModal");
		document.querySelector("#Character").appendChild(Character);

		let names=document.createElement("p");
		names.setAttribute("class","nameCh");
		names.setAttribute("id","nameCh"+i);
		document.querySelector("#char"+i).appendChild(names);
		names.innerText=name;

		let descr=document.createElement("p");
		descr.setAttribute("class","desc");
		descr.setAttribute("id","desc"+i);
		document.querySelector("#char"+i).appendChild(descr);
		descr.innerText=desc;

		let shDesc=document.createElement("p");
		shDesc.setAttribute("class","shortDesc");
		shDesc.setAttribute("id","shortDesc"+i);
		document.querySelector("#char"+i).appendChild(shDesc);
		shDesc.innerText=shortDesc;

		let image=document.createElement("img");
		image.setAttribute("class","image");
		image.setAttribute("id","image"+i);
		document.querySelector("#char"+i).appendChild(image);
		image.src="data:image;base64,"+img; // transforme l'URL cryptée en images

		document.querySelector("#image"+i).addEventListener("click",()=>{
			superHero(name,img,desc);
		})





	}
}

getChar();
let Character=document.createElement

function superHero(heroname,heroimg,herodesc){
	let showModal = `
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">`+heroname+`</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      	<img src="data:image;base64,`+heroimg+`">
      	<p>`+herodesc+`</p>
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
	`
	document.querySelector(".modal-content").innerHTML=showModal;
}