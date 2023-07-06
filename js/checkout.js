'use strict'

// Exercise 6
let ERRORS = 0;
const FORM = document.querySelector("form.form");
const INPUTS = document.querySelectorAll('form.form input');
const getInputData = (input) => {
	const FIELD = input.id.substring(1);
	const NAME = FIELD == "LastN" ? "last name" : FIELD.toLowerCase();
	const ERROR = document.getElementById("error" + FIELD);

	return {FIELD: FIELD, NAME: NAME, ERROR: ERROR}
}
const valMinLength = (input, trim, isName, minLength) => {
	const {NAME} = getInputData(input);
	let VALUE = input.value;
	let TESTVALUE = VALUE; 

	if (trim || isName) {
		VALUE = VALUE.trim();
		TESTVALUE = VALUE
	}

	if (isName) {
		VALUE = VALUE.replace(/\s+/g, ' ');
		TESTVALUE = VALUE.replace(/\s+/g, '')
	}
	
	input.value = VALUE;

	if (minLength == 0 && TESTVALUE.length > 0)
		return "The " + NAME + " is required.";

	if (TESTVALUE.length < minLength) {
		if (minLength == 1)
			return "The " + NAME + " is required and must have, at least, one character."
		else
			return "The " + NAME + " is required and must have, at least, " + minLength + " characters.";
	}

	return ""
}
// Must be checked ater the minimum length validation
const valOnlyCharacters = (input, withSpaces) => {
	const VALUE = input.value;
	let REGEXP = /[a-zaeiouàèìòùáéíóúäëïöüÀÈÌÒÙÁÉÍÓÚÄËÏÖÜ·'ñÑ]+/g;

	if (withSpaces)
		REGEXP = /[\sa-zaeiouàèìòùáéíóúäëïöüÀÈÌÒÙÁÉÍÓÚÄËÏÖÜ·'ñÑ]+/g;

	const MATCH = VALUE.match(REGEXP);

	input.value = VALUE;

	if (MATCH == null || MATCH != VALUE) {
		if (withSpaces)
			return "The " + NAME + " must have only letters and spaces."
		else
			return "The " + NAME + " must have only letters.";
	}

	return ""
}
const validateInput = (input) => {
	const {FIELD, ERROR} = getInputData(input);
	let ERROR_TEXT = ""
console.log(input, FIELD)	
	if (new Set(['Name', 'LastN']).has(FIELD)) {
		ERROR_TEXT = valMinLength(input, true, true, 3)
console.log(ERROR_TEXT)
		if (!ERROR_TEXT.length) ERROR_TEXT = valOnlyCharacters(input, true);
	}

	ERROR.innerText = ERROR_TEXT

	if (!ERROR_TEXT.length ) {
		input.classList.remove('is-invalid');
		return
	}
	ERRORS++;
	input.classList.add('is-invalid');
	//FORM.classList.remove('was-validated');
	// const validation = () => {
	// 	if (re01.test(email.value)) {
	// 		email.classList.remove('is-invalid');
	// 		form.classList.add('was-validated');
	// 		setTimeout(function () {
	// 			form.classList.remove('was-validated');
	// 		}, 2500)
	// 		return;
	// 	} else if (re02.test(email.value)) {
	// 		emailErr.innerHTML = "Illegal domain extension suffix";
	// 	} else if ((email.value).trim() == "") {
	// 		emailErr.innerHTML = "Empty email address";
	// 	} else {
	// 		emailErr.innerHTML = "Invalid email address";
	// 	}
	// 	email.classList.add('is-invalid');
	// 	form.classList.remove('was-validated');
	// }

	//valRequired(input)
	// Array.prototype.slice.call(INPUTS)
	// 	.forEach(input => {
	// 		valRequired(input)
	// 	})
	// var error = 0;
	// // Get the input fields
	// var fName = document.getElementById("fName");
	// var fEmail = document.getElementById("fEmail");

	// // Get the error elements
	// var errorName = document.getElementById("errorName");
	// var errorEmail = document.getElementById("errorEmail");  
	
	// // Validate fields entered by the user: name, phone, password, and email
	// if(fName.value == ""){
	// 	error++;
	// }

	// if(fEmail.value == ""){
	// 	error++;
	// }
	 
	// if(error>0){
	// 	alert("Error");
	// }else{
	// 	alert("OK");
	// }

}
const validate = () => {
	// INPUTS.prototype.slice.call(input)
	// 	.forEach(input => validateInput(input))
	ERRORS = 0;
console.log(INPUTS)
	INPUTS.forEach(INPUT => validateInput(INPUT))

	if (!ERRORS) {
		FORM.classList.add('was-validated');
		setTimeout(() => {
			FORM.classList.remove('was-validated');
		}, 2500)
	}
}

(function () {
	const blurEvent = (event) => {
		const INPUT = event.target;
		const ISCONTROL = INPUT.classList.contains("form-control");

		if (ISCONTROL && INPUT.value.length > 0)
			validateInput(INPUT)
	};

	Array.prototype.slice.call(INPUTS)
		.forEach(input => {
			input.addEventListener("blur", blurEvent)
	})
	

	// Disable submit event
	FORM.addEventListener('submit', function (event) {
		event.preventDefault()
		event.stopPropagation()
	}, false)
})()
