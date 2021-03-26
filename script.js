// Assignment Code
var generateBtn = document.querySelector("#generate");

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


// Write password to the #password input
function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }


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

// declare function to shuffle array
//fisher-yates modern shuffle algorithm
function shuffleArray(array){
    for (var i =array.length-1; i>0; i--){
var j= Math.floor(Math.random()*(i+1));
var temp = array[i];
array[i] = array[j];
array[j] = temp;
    }
return array;
};
// Write password to the #password input
function writePassword(){
  var passwordText = document.querySelector("#password");
    getPasswordLength();
    includeUppercase();
    includeLowercase();
    includeNumber();
    includeSpecialChar()

    if (upperCase === true && lowerCase === true && numericValue === true && specialChar===true){
        shuffleArray(includeAll);
        console.log(includeAll);
        
var includeAllSlice=includeAll.slice(0, passwordLength);
console.log(includeAllSlice);
 var finalPassword= includeAllSlice.join('')
 console.log(finalPassword);
 alert(finalPassword);}
 //upperCase Only
 else if (upperCase === true && lowerCase === false && numericValue === false && specialChar===false){
    shuffleArray(upperCaseOnly);
    console.log(upperCaseOnly);
    
var upperCaseOnlySlice=upperCaseOnly.slice(0, passwordLength);
console.log(upperCaseOnlySlice);
var finalPassword= upperCaseOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }
 //lowerCase Only
 else if (upperCase === false && lowerCase === true && numericValue === false && specialChar===false){
    shuffleArray(lowerCaseOnly);
    console.log(lowerCaseOnly);
    
var lowerCaseOnlySlice=lowerCaseOnly.slice(0, passwordLength);
console.log(lowerCaseOnlySlice);
var finalPassword= lowerCaseOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }
//numberOnly
 else if (upperCase === false && lowerCase === false && numericValue === true && specialChar===false){
    shuffleArray(numberOnly);
    console.log(numberOnly);
    
var numberOnlySlice=numberOnly.slice(0, passwordLength);
console.log(numberOnlySlice);
var finalPassword= numberOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }
//special Character Only
 else if (upperCase === false && lowerCase === false && numericValue === false && specialChar === true){
    shuffleArray(specialCharOnly);
    console.log(specialCharOnly);
    
var specialCharOnlySlice=specialCharOnly.slice(0, passwordLength);
console.log(specialCharOnlySlice);
var finalPassword= specialCharOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }

//upperCaseLowerCaseOnly
else if (upperCase === true && lowerCase === true && numericValue === false && specialChar===false){
    shuffleArray(upperCaseLowerCaseOnly);
    console.log(upperCaseLowerCaseOnly);
    
var upperCaseLowerCaseOnlySlice=upperCaseLowerCaseOnly.slice(0, passwordLength);
console.log(upperCaseLowerCaseOnlySlice);
var finalPassword= upperCaseLowerCaseOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }

 //upperCaseNumberOnly
else if (upperCase === true && lowerCase === false && numericValue === true && specialChar===false){
    shuffleArray(upperCaseNumberOnly);
    console.log(upperCaseNumberOnly);
    
var upperCaseNumberOnlySlice=upperCaseNumberOnly.slice(0, passwordLength);
console.log(upperCaseNumberOnlySlice);
var finalPassword= upperCaseNumberOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }          

//upperCaseSpecialCharOnly
else if (upperCase === true && lowerCase === false && numericValue === false && specialChar===true){
    shuffleArray(upperCaseSpecialCharOnly);
    console.log(upperCaseSpecialCharOnly);
    
var upperCaseSpecialCharOnlySlice=upperCaseSpecialCharOnly.slice(0, passwordLength);
console.log(upperCaseSpecialCharOnlySlice);
var finalPassword= upperCaseSpecialCharOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }          

//lowerCaseNumberOnly
else if (upperCase === false && lowerCase === true && numericValue === true && specialChar===false){
    shuffleArray(lowerCaseNumberOnly);
    console.log(lowerCaseNumberOnly);
    
var lowerCaseNumberOnlySlice=lowerCaseNumberOnly.slice(0, passwordLength);
console.log(lowerCaseNumberOnlySlice);
var finalPassword= lowerCaseNumberOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }

//lowerCaseSpecialCharOnly  
else if (upperCase === false && lowerCase === true && numericValue === false && specialChar===true){
    shuffleArray(lowerCaseSpecialCharOnly);
    console.log(lowerCaseSpecialCharOnly);
    
var lowerCaseSpecialCharOnlySlice=lowerCaseSpecialCharOnly.slice(0, passwordLength);
console.log(lowerCaseSpecialCharOnlySlice);
var finalPassword= lowerCaseSpecialCharOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }  
//numberSpecialCharOnly
else if (upperCase === false && lowerCase === false && numericValue === true && specialChar===true){
    shuffleArray(numberSpecialCharOnly);
    console.log(numberSpecialCharOnly);
    
var numberSpecialCharOnlySlice=numberSpecialCharOnly.slice(0, passwordLength);
console.log(numberSpecialCharOnlySlice);
var finalPassword= numberSpecialCharOnlySlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }              

//upperLowerNumber
else if (upperCase === true && lowerCase === true && numericValue === true && specialChar===false){
    shuffleArray(upperLowerNumber);
    console.log(upperLowerNumber);
    
var upperLowerNumberSlice=upperLowerNumber.slice(0, passwordLength);
console.log(upperLowerNumberSlice);
var finalPassword= upperLowerNumberSlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }                              
//upperNumberSpecial
else if (upperCase === true && lowerCase === false && numericValue === true && specialChar===true){
    shuffleArray(upperNumberSpecial);
    console.log(upperNumberSpecial);
    
var upperNumberSpecialSlice=upperNumberSpecial.slice(0, passwordLength);
console.log(upperNumberSpecialSlice);
var finalPassword= upperNumberSpecialSlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }                          
//upperLowerSpecial 
else if (upperCase === true && lowerCase === true && numericValue === false && specialChar===true){
    shuffleArray(upperLowerSpecial);
    console.log(upperLowerSpecial);
    
var upperLowerSpecialSlice=upperLowerSpecial.slice(0, passwordLength);
console.log(upperLowerSpecialSlice);
var finalPassword= upperLowerSpecialSlice.join('')
console.log(finalPassword);
alert(finalPassword);
     
 }                          
//lowerNumberSpecial    
else if (upperCase === false && lowerCase === true && numericValue === true && specialChar===true){
    shuffleArray(lowerNumberSpecial);
    console.log(lowerNumberSpecial);
    
var lowerNumberSpecialSlice=lowerNumberSpecial.slice(0, passwordLength);
console.log(lowerNumberSpecialSlice);
var finalPassword= lowerNumberSpecialSlice.join('')
console.log(finalPassword);
alert(finalPassword);
 
}


passwordText.value = finalPassword;




}

generateBtn.addEventListener("click", writePassword)
