$(function() {
	// if the focus is out
	// we will hide all the erros in the beginning
	$("#usernameErrorMessege").hide();
	$("#passwordErrorMessege").hide();
	$("#confirmPasswordErrorMessege").hide();
	$("#addressErrorMessege").hide();
	$("#professionErrorMessege").hide();

	// initialize the error variable to false
	// var usernameError = false;
	// var passwordError = false;
	// var confirmPasswordError = false;
	// var addressError = false;

	$("#floatingUserName").focusout(function() {
		checkUserName();
	});
	$("#floatingPassword").focusout(function() {
		checkPassword();
	});
	$("#floatingConfirmPassword").focusout(function() {
		checkConfirmPassword();
	});
	$("#floatingAddress").focusout(function() {
		checkAddress();
	});

	// check the username
	function checkUserName() {
		// generated a pattern
		var pattern = /^[a-zA-Z]*$/;
		// get the usernameError
		var username = $("#floatingUserName").val();
		if (pattern.test(username) && username !== "") {
			$("#usernameErrorMessege").hide();
			$("#floatingUserName").css("border-bottom", "2px solid #34F458");
		} else {
			$("#usernameErrorMessege").html("Should contain only characters");
			$("#usernameErrorMessege").show();
			$("#floatingUserName").css("border-bottom", "2px solid #F90A0A");
			usernameError = true;
		}
	}

	// check the password
	function checkPassword() {
		var size = $("#floatingPassword").val().length;
		var reg = /(?=.*[A-Z].*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])([^\s]).{9,}/;
		var password = $("#floatingPassword").val();
		if (reg.test(password)) {
			$("#passwordErrorMessege").hide();
			$("#floatingPassword").css("border-bottom", "2px solid #34F458");
		} else {
			$("#passwordErrorMessege")
					.html(
							"Password should contain: two uppercase, one numeric, one small case, one special charactaer, and should be 9 characters long");
			$("#passwordErrorMessege").show();
			$("#floatingPassword").css("border-bottom", "2px solid #F90A0A");
			passwordError = true;
		}
	}

	// confirm the password
	function checkConfirmPassword() {
		var password = $("#floatingPassword").val();
		var confirmPassword = $("#floatingConfirmPassword").val();
		if (confirmPassword.length === 0 || password !== confirmPassword) {
			$("#confirmPasswordErrorMessege").html("Passwords do not match");
			$("#confirmPasswordErrorMessege").show();
			$("#floatingConfirmPassword").css("border-bottom",
					"2px solid #F90A0A");
			confirmPasswordError = true;
		} else {
			$("#confirmPasswordErrorMessege").hide();
			$("#floatingConfirmPassword").css("border-bottom",
					"2px solid #34F458");
		}
	}

	// check the address
	function checkAddress() {
		var addressLen = $("#floatingAddress").val().length;
		if (addressLen > 500) {
			$("#addressErrorMessege").html(
					"Address should not be more than 500 characters");
			$("#addressErrorMessege").show();
			$("#floatingAddress").css("border-bottom", "2px solid #F90A0A");
			addressError = true;
		} else {
			$("#addressErrorMessege").hide();
			$("#floatingAddress").css("border-bottom", "2px solid #34F458");
		}
	}

	// if any fields have error dont let submit
	$("#registration")
			.submit(
					function() {
						var usernameError = false;
						var passwordError = false;
						var confirmPasswordError = false;
						var addressError = false;
						var radioMale = $("#gridRadiosMale:checked").val() ? true
								: false;
						var radioFemale = $("#gridRadiosFemale:checked").val() ? true
								: false;
						var radioOthers = $("#gridRadiosOthers:checked").val() ? true
								: false;
						var checkProfession = $("#inputProfession").val() === "select" ? false
								: true;
						checkUserName();
						checkPassword();
						checkConfirmPassword();
						checkAddress();

						if ((usernameError === false && passwordError === false
								&& confirmPasswordError === false
								&& addressError === false && radioMale === true)
								|| radioFemale === true
								|| (radioOthers === true && checkProfession === false)) {
							alert("Registration success!");
							return true;
						} else {
							alert("Please fill out all fields");
							return false;
						}
					});
});

// reset form
function reset() {
	$("#usernameErrorMessege").hide();
	$("#passwordErrorMessege").hide();
	$("#confirmPasswordErrorMessege").hide();
	$("#addressErrorMessege").hide();
	$("#professionErrorMessege").hide();
	document.getElementById("registration").reset();
}
