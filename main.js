// #1 - Phone Number checker

var phoneNumber = prompt("Enter your phone number with dashes please:");

	if(phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-"){

		alert("Thanks for entering a valid number.");
	}
	else {
		alert("Did you just give me a fake number?");
	}


// #2 - DOB checker

var phoneNumber = prompt("Please enter your DOB in the xx/xx/xx format");

	if(phoneNumber.charAt(2) === "/" && phoneNumber.charAt(5) === "/"){

		alert("Thanks for entering a valid DOB.");
	}
	else {
		alert("Did you just give me a fake DOB?");
	}


// #3 - Zip code checker

var postalCode = prompt("Please enter your 5 or 9 digit postal code (with a dash");

var zipCode = Number(postalCode.toString().substring(0,5));
var zipExt = Number(postalCode.toString().substring(6,10));

var isNumber = function(n) {
 return !isNaN(parseFloat(n)) && isFinite(n);
};

	
	if(isNumber(postalCode) === true && postalCode.length === 5 || isNumber(zipCode) === true && isNumber(zipExt) === true && postalCode.charAt(5) === "-" && postalCode.length === 10){

		alert("Thanks for entering a valid zip code.");
	}
	else {
		alert("That does not appear to be a valid zip code.");
	}

// #4 State Abbreviation
var stateAbbrev = prompt("Please enter your 2 letter state abbrevation in caps");

	if(stateAbbrev.length === 2 && stateAbbrev === stateAbbrev.toUpperCase()){
		alert("Thanks for entering a valid state abbreviation.");
			}
	else {
		alert("That does not appear to be a valid uppercase state abbreviation.");
			}


// #5 Marriage Status

var marriageStatus = prompt("Are you married?  Please answer Yes or No");

	if(marriageStatus.toLowerCase() === "yes"){
		alert("I hope you're enjoying that ball and chain.");
			}
	else if(marriageStatus.toLowerCase() === "no"){
		alert("You're single and ready to mingle.");
			}
	else{
		alert("That is not a valid answer.")
	}
