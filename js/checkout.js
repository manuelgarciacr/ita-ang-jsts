'use strict'

// Exercise 6
let ERRORS = 0;
const FORM = document.querySelector("form.form");
const INPUTS = document.querySelectorAll('form.form input');
const getInputData = (input) => {
	const FIELD = input.id.substring(1);
	const NAME = FIELD == "LastN" ? "last name" : FIELD.toLowerCase();
	const ERROR = document.getElementById("error" + field);

	return {field: FIELD, name: NAME, error: ERROR}
}
const valRequired = (input) => {
	const {field, name, error} = getInputData(input);

	if (input.value.length < 3 )
		return "The " + name + " is required and must have, at least, 3 characters.";
	
	return ""
}
const valOnlyCharacters = (input) => {
	const {field, name, error} = getInputData(input);

	if (!/[\sa-zaeiouàèìòùáéíóúäëïöüÀÈÌÒÙÁÉÍÓÚÄËÏÖÜ·'ñÑ]+/.test(word))
		return "The " + name + " must have only letters.";
	
	return ""
}
const validateInput = (input) => {
	const {field, name, error} = getInputData(input);
	const ERROR_TEXT = valRequired(input)

	error.innerText = ERROR_TEXT
	if (!ERROR_TEXT.length ) {
		input.classList.remove('is-invalid');
		return
	}
	ERRORS++;
	input.classList.add('is-invalid');
	FORM.classList.remove('was-validated');
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
const validateAll = () => {
	// INPUTS.prototype.slice.call(input)
	// 	.forEach(input => validateInput(input))
	ERRORS = 0;
	
	INPUTS.forEach(input => validateInput(input))

	if (!ERRORS) {
		form.classList.add('was-validated');
		setTimeout(function () {
			form.classList.remove('was-validated');
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
