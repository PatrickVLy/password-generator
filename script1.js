// declare user input variables

var upperCase;
var lowerCase;
var numericValue;
var specialChar;
var passwordLength;

//declare arrays
var upperCaseLetters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6];
var specialCharacters =["*", ".", "!", "@", "#", "$", "%", "^", "&", "(", ")", "{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?", "/", "~", "_", "+", "-", "=", "|"]

//arrays for all possible user outcomes

var includeAll = upperCaseLetters.concat(lowerCaseLetters, numbers, specialCharacters);
var upperCaseOnly = upperCaseLetters;           
var lowerCaseOnly = lowerCaseLetters;       
var numberOnly = numbers;                
var specialCharOnly = specialCharacters;    

var upperCaseLowerCaseOnly = upperCaseLetters.concat(lowerCaseLetters);     
var upperCaseNumberOnly = upperCaseLetters.concat(numbers); 
var upperCaseSpecialCharOnly = upperCaseLetters.concat(specialCharacters);      
var lowerCaseNumberOnly = lowerCaseLetters.concat(numbers);         
var lowerCaseSpecialCharOnly = lowerCaseLetters.concat(specialCharacters);      
var numberSpecialCharOnly = numbers.concat(specialCharacters);          

var upperLowerNumber = upperCaseLetters.concat(lowerCaseLetters, numbers);              
var upperNumberSpecial = upperCaseLetters.concat(numbers, specialCharacters);           
var upperLowerSpecial = upperCaseLetters.concat(lowerCaseLetters, specialCharacters);           
var lowerNumberSpecial = lowerCaseLetters.concat(numbers, specialCharacters)


//declare function to log if user wants to include upper case
function includeUppercase(){

    var upperCaseResponse = window.confirm("Include Uppercase?");
    if (upperCaseResponse==true) {
        upperCase=true;
        console.log("user wants to inclue uppercase "+upperCase)
        alert("you have included uppercase");
        
    }
    else {
        upperCase=false;
        console.log("user wants to exclude uppercase "+upperCase)
        alert("you have excluded uppercase");}
    }
//declare function to include lower case letters
function includeLowercase(){
    var lowerCaseResponse = window.confirm("Include lowercase?");
        if (lowerCaseResponse==true) {
               
        lowerCase=true;
        console.log("user wants to inclue lowerCase "+lowerCase)
        alert("you have included lowerCase");
        }
        else {
                
        lowerCase=false;
        console.log("user wants to exclude lowerCase "+lowerCase)
        alert("you have excluded lowerCase");}
            }

//declare funtion to include numbers
function includeNumber(){
    
    var numericValueResponse = window.confirm("Include numericValue");
    if (numericValueResponse==true) {
        numericValue=true;
        console.log("user wants to inclue numeric value "+numericValue)
        alert("you have included numericValue");
    }
    else {
        numericValue=false;
        console.log("user wants to exclude numeric value "+numericValue)
        alert("you have excluded numeric value");}
    }

//declare function to include special characters
function includeSpecialChar(){
    var specialCharResponse = window.confirm("Include special character?");
               if (specialCharResponse==true) {
                specialChar=true;
                console.log("user wants to inclue special character? "+specialChar)
                alert("you have included special character?");
            }
            else {
                specialChar=false;
                console.log("user wants to exclude special character "+specialChar)
                alert("you have excluded special character");}
            }


// declare function to get password length
function getPasswordLength(){
    
    passwordLength = prompt("please enter in a password length that is greater than 8 characters but less than 128 characters");
    
    
    if (passwordLength >= 8 && passwordLength<= 128){
        confirm("you have entered "+passwordLength);
        console.log(passwordLength);}
    
    
    else {alert("please enter in a valid number");
    getPasswordLength()
    
    }
    }