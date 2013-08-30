alert("JavaScript works!");//alert("JavaScript works!");
																					
// Ejiroghene Efevberha
// SDI 1308
// Deliverable 4
// My Function Library

var myFunctionLibrary = function() {
					
					var checkIfPhone = function(stringToCheck){ 
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

// function to check string if it is a url

var checkForUrl = function (myString){
var myString = "HTTp://TROPICOSmicitY.COM";
var myLowerString= myString.toLowerCase();
               
               var mySubLower1 = myLowerString.substr(0,7);
                var mySubLower2 = myLowerString.substr(0,8);



if ((mySubLower1 === "http://") || (mySubLower2 === "https://")){
return true;}

else {
return false;}

}

checkForUrl(myString);


//format number to specific decimal places



var myNumber = 345.987111;
var roundThisUp = function (number, dp){

var roundedNumber = myNumber.toFixed(2);
return roundedNumber;

}



console.log (roundThisUp(myNumber));




//convert string number to actual number



var stringNumber = "56289";
var converToNum = function (string){

if (stringNumber != parseInt(stringNumber)){
console.log ("string passed in is not a number");
}
else {

var convertedStringNumber = parseFloat(stringNumber);
return convertedStringNumber;


}
}

console.log (converToNum(stringNumber));


//
// to check change given string to title case
// first convert string to lowercase
// convert char at position 0 to uppercase, convert every character that comes after " " to uppercase.



var converToTitle = function (myNonTitle){
            var myNonTitle = "I have been CoDing like FOREVER";
            var myLowNonTitle= myNonTitle.toLowerCase();
console.log (myNonTitle.toLowerCase());
            var myFirstChar = myLowNonTitle.charAt(0);
            var myNewFirstChar = myFirstChar.toUpperCase();
console.log (myFirstChar);
var foundAtPosition = 0;
var spaceCount = 0;

var myConvertedString;

            while (foundAtPosition != -1){
            
            var charToConvert = myLowNonTitle.charAt(myLowNonTitle.indexOf((" ")+ 1));
            var charConverted = charToConvert.toUpperCase();
            
            foundAtPosition = myString.indexOf(" ",foundAtPosition);
            if (foundAtPosition != -1)
                                        {
            
                                            spaceCount++;
                                            foundAtPosition++;
        
                                        } 
                                        
    return charConverted();
}
     
    
    converToTitle(myNonTitle);
}












}
var newLib = new myFunctionLibrary();