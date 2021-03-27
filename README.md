# Password Generator


## User Story
**AS AN** employee with access to sensitive data<br>
**I WANT** to randomly generate a password that meets certain criteria<br>
**SO THAT** I can create a strong password that provides greater security<br><br>
<hr>

## Acceptance Criteria

**GIVEN** I need a new, secure password<br><br>
**WHEN** I click the button to generate a password<br>
**THEN** I am presented with a series of prompts for password criteria<br><br>
**WHEN** prompted for password criteria<br>
**THEN** I select which criteria to include in the password<br><br>
**WHEN** prompted for the length of the password<br>
**THEN** I choose a length of at least 8 characters and no more than 128 characters<br><br>
**WHEN** prompted for character types to include in the password<br>
**THEN** I choose lowercase, uppercase, numeric, and/or special characters<br><br>
**WHEN** I answer each prompt<br>
**THEN** my input should be validated and at least one character type should be selected<br><br>
**WHEN** all prompts are answered<br>
**THEN** a password is generated that matches the selected criteria<br><br>
**WHEN** the password is generated<br>
**THEN** the password is either displayed in an alert or written to the page<br><br>

<hr>

## Description
 
 This is what I did for my code: 
 1. user will click on button to start password-generator
 2. when button is clicked prompt will pop up asking user to enter in a valid amount between 8 and 128 if user puts in an invalid amount they will get a message telling them to put in a valid amount. when the input is a valid number length, function will store that value into a variable called "passwordLength"
```
function getPasswordLength(){
    
    passwordLength = prompt("please enter in a password length that is greater than 8 characters but less than 128 characters");
    
    
    if (passwordLength >= 8 && passwordLength<= 128){
        confirm("you have entered "+passwordLength);
        console.log(passwordLength);}
    
    
    else {alert("please enter in a valid number");
    getPasswordLength()}
    }
    
```
 3. after user confirms password length, user will be prompted with a confirmation popup to see if they want to inclue uppercase letters, if yes, this will be stored into a variable called "upperCase" with a boolean value of true, if no, variable will be logged as false. 
 ```
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
```
 4. after user has confirmed to include or exclude uppercase, user will be prompted with a confirmation popup to see if they want to include lowercase letters, if yes, function will store response into the variable "lowerCase" with a boolean value of true, otherwise the function will log it as false
```
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
```

5. after user has confirmed to include or exclude lowercase, user will be prompted with a confirmation popup to see if they want to include numeric value, if yes, function will store response into the variable "numericValue" with a boolean value of true, otherwise the function will log it as false
```
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
```

6. after user has confirmed to include or exclude numeric value the function will prompt the user to see if they want to include special characters. if yes, the function will store the respose as a boolean value of true to the "specialChar" variable. otherwise it will log the variable as false. 
```
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

```
7. Once the variables: <br>
```var upperCase;```<br>
```var lowerCase;```<br>
```var numericValue;```<br>
```var specialChar;```<br>
```var passwordLength;```<br>
 have been defined, I ran a series of conditional statements for every possible combination of user responses as follows:
    ### 1 Parameter Password
* UpperCase Only  
* LowerCase Only     		
* Number Only        		 
* Special Chararacter Only		
    ### 2 Parameter Password

* UpperCase & LowerCase		
* UpperCase & Number			
* UpperCase & Special Character		
* LowerCase & Number Only			
* LowerCase & Special Character		
* Number & Special Character		

    ### 3 Parameter Password
* UpperCase & LowerCase & Number				
* UpperCase & Number & Special Characters			
* UpperCase & LowerCase & Special Characters				
* LowerCase & Number & Special Characters

   ### 4 Parameter Password
* UpperCase & Lower Case & Number & Special Characters

8. In the global scope, I have created 4 different arrays:
upperCaseLetters, lowerCaseLetters, numbers, and specialCharacters.

9. Depending on the combination of password parameters that the user has selected, I used the array method <br>```.concat()``` to join the selected arrays together and stored that into a new array. 

10. Once the arrays have been concatenated into a single new array, I used an algorithm called the ***Fisher-Yates Algorithm*** to randomly shuffle the array and returned the items in a randomly shuffled order. this is the function that I used:

```
function shuffleArray(array){
    for (var i =array.length-1; i>0; i--){
var j= Math.floor(Math.random()*(i+1));
var temp = array[i];
array[i] = array[j];
array[j] = temp;
    }
return array;
};
```

11. once the array has been randomly shuffled, I used the array method ```.slice()``` where I fed in 2 parameters; the start of the array which is index [0] , and the second paramer will take in the value of ```passwordLength``` this will return part of the shuffled array from the index [0] to the index of the user specified password length. 

12. Once we sliced out the section of the array, I used the ```.join()``` array method to combine the items in the array to a single string and assigned it to a variable called ```finalPassword``` and plugged that variable into an ```alert()``` pop up as well as plugging that string into the text box on the UI. 
<hr>

## Technology Used
1. HTML
2. CSS
3. Javascript
4.  [The Fisher-Yates Shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
<hr>

## Screenshot

![alt text](/assets/images/photo.png)
