alert("JavaScript works!");//alert("JavaScript works!");
																					
// Ejiroghene Efevberha
// SDI 1308
// Deliverable 4
// My Function Library

var myFunctionLibrary = function() {

					// To check string to see if it matches phone format
						
					var checkIfPhone = function(stringToCheck){ // implement charCodeAt, charAt (3) = "-", charAt(7) = "-", 
						var stringToCheck = "404-857-8057";
						var checkChars1 = stringToCheck.substring(0, 3);
						var checkChars2 = stringToCheck.substring(4, 7);
						var checkChars3 = stringToCheck.substring(8, 12);
						
						if (stringToCheck.length == 0)
					   		return false;
					
							if ((stringToCheck.charAt(3)!= "-") || (stringToCheck.charAt(7) != "-"))
					   		return false;
					
					
					if 	(isNaN(checkChars1)) {
					return false;}
					if 	(isNaN(checkChars2)) {
					return false;}
					if 	(isNaN(checkChars3)) {
					return false;}
					
					else {
					return true;}
					
					};
					
					
					checkIfPhone(stringToCheck);
	};
	return stringToCheck;
};
























}