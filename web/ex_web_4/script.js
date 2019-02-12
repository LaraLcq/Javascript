
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");


let bday = document.querySelector(".birthdate");
let dateOfTheDay = new Date();
let actualYear = actualDate.getFullYear();

// year button
for (let i = actualYear ; i >= 1900 ; i--){
	let yearValue = document.createElement("option");
	yearValue.value = i;
	yearValue.innerText = i;
	bday.querySelector("#year").appendChild(yearValue);
}

// month button
for (let i = 1; i <= 12 ; i++){
	let monthValue = document.createElement("option");
	monthValue.value = i;

	if (i < 10) {
		monthValue.innerText = "0" + i;
	} else {
		monthValue.innerText = i;
	}

	bday.querySelector("#month").appendChild(monthValue);
}

// day button
for (let i = 1; i <= 31 ; i++){
	let dayValue = document.createElement("option");
	dayValue.value = i;

	if (i < 10) {
		dayValue.innerText = "0" + i;
	} else {
		dayValue.innerText = i;
	}

	bday.querySelector("#day").appendChild(dayValue);
}

document.querySelector(".age-btn").addEventListener("click", function(){
	let year = bday.querySelector("#year").value;
	year = parseInt(year);

	let month = bday.querySelector("#month").value;
	month = parseInt(month);

	let day = bday.querySelector("#day").value;
	day = parseInt(day);

	let age = calculate_age(year, month, day);
	let leapYear = leap(year)

	if((month === 4 || month === 6 || month === 9 || month === 11) && (day === 31)){

		document.querySelector(".age").innerText = "Date doesn't exist!";

	} else if (month === 2 && day > 29) {

		document.querySelector(".age").innerText = "Datedoesn't exist!";

	} else if ((day===29) && (leapYear === false)){

		document.querySelector(".age").innerText = "Not a leap.";

	} else {

		if (year === 0 || month === 0 || day === 0){

			document.querySelector(".age").innerText = "Please, give me informations";

		} else if (age === 0){

			document.querySelector(".age").innerText = " Welcome!";

		} else if (age < 0){

			document.querySelector(".age").innerText = "Euuh Nop";

		} else {

			document.querySelector(".age").innerText = "You are " + age + " year(s) old." ;
		}
	}
});

function calculate_age(birth_year,birth_month,birth_day)
{
    let today_date = new Date();
    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth() + 1;
    let today_day = today_date.getDate();
    let age = today_year - birth_year;

    if (today_month < birth_month)
    {
        age--;
    } 
    if ((birth_month === today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}

// determinate if the year is a leap year
function leap(year){
	if ((year%4==0) && ((year%100!=0) || (year%400==0))){
		return true; // leap year
	} else {
		return false; // not leap year
	}
}