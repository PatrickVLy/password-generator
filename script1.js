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

