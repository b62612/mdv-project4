alert("JavaScript works!");//alert("JavaScript works!");
																					
// Ejiroghene Efevberha
// SDI 1308
// Deliverable 4
// My Function Library

var myFunctionLibrary = function() {
					// try switch statement
					// To check string to see if it matches phone format
					var checkIfPhone = function(stringToCheck){ // implement charCodeAt, charAt (3) = "-", charAt(7) = "-", 
						var stringToCheck = "505-857-8057";
						var checkChars1 = stringToCheck.substring(0, 3);
						var checkChars2 = stringToCheck.substring(4, 7);
						var checkChars3 = stringToCheck.substring(8, 12);
						
						
						if (stringToCheck.length != 12)
							return false;
						if (stringToCheck.indexOf(".") != -1)
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


					// To check string to see if it matches email format
					
							//check occurence of "@" = 1
							// check occurence of "." = 1
							// "@" must come first before "."
							
							
			
var checkIfEmail = function (myString){



var myString = "ejayefe.gmail@com";
var foundAtPosition = 0;
var atCount = 0;
var foundPeriodPosition = 0;
var periodCount = 0;


            while (foundAtPosition != -1)
{
            foundAtPosition = myString.indexOf("@",foundAtPosition);
            if (foundAtPosition != -1)
                                        {
                                            atCount++;
                                            foundAtPosition++;

                                        }
                while (foundPeriodPosition != -1)
{
            foundPeriodPosition = myString.indexOf(".",foundPeriodPosition);
            if (foundPeriodPosition != -1)
                                        {
                                            periodCount++;
                                            foundPeriodPosition++;

                                        }
        
}                           
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
        
}
     if (((atCount != 1) || (periodCount != 1))||((myString.indexOf("@")) > (myString.indexOf(".")))){
    return false;}
   else 
   {return true;}
   
      
            
}
console.log (checkIfEmail(myString));












}