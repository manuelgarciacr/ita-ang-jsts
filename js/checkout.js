
// Exercise 6
function validate() {
	const FORM = document.querySelector("form.form");
	const INPUTS = document.querySelectorAll('form.form input');
	const getNames = (input) => {
		const FIELD = input.id.substring(1);
		const NAME = FIELD == "LastN" ? "last name" : FIELD.toLowerCase();
		return {field: FIELD, name: NAME}
	}
	const valRequired = (field, name) => {
		const INPUT = document.getElementById("f" + field);
		const ERROR = document.getElementById("error" + field);

		if (INPUT.value == "")
			ERROR.innerText = "The " + name + " is required."
		else if (length(INPUT.value) < 3)
			ERROR.innerText = "The " + name + " must have, at least, 3 characters."
		else {
			INPUT.classList.remove('is-invalid');
			return true
		}
		INPUT.classList.add('is-invalid');
		FORM.classList.remove('was-validated');
		return false
	}
	const validation = () => {
		if (re01.test(email.value)) {
			email.classList.remove('is-invalid');
			form.classList.add('was-validated');
			setTimeout(function () {
				form.classList.remove('was-validated');
			}, 2500)
			return;
		} else if (re02.test(email.value)) {
			emailErr.innerHTML = "Illegal domain extension suffix";
		} else if ((email.value).trim() == "") {
			emailErr.innerHTML = "Empty email address";
		} else {
			emailErr.innerHTML = "Invalid email address";
		}
		email.classList.add('is-invalid');
		form.classList.remove('was-validated');
	}

	Array.prototype.slice.call(INPUTS)
		.forEach(input => {
			let {field, name} = getNames(input);
			console.log(field, name)
		})
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
