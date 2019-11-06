/**
 * As a engineer, I would like to have my form validated so the information is safe and correct.
*  
*  All the fields should be required!!

*  If a field is left empty on form submission, 
*  the form will display a red box indicating to the user that there has been an error.
*  
*  If the form is valid, the form should submit(vanish or disappear), and the user should see a confirmation of information they filled out. (Developers Discretion on how the information is presented to the user)

* Bonus Points
*  1) In addition to adding a class when a field is not valid display a message requesting the user to enter their information. 
      (Example Please Under Name)
*  2) Create a button that resets the form. 


* Developer notes
*  1) An error class named .error you can use this class to apply the proper css to an invalid element.
*  2) You can edit this form however you see fit as the engineer to achieve your goals. (i.e add ids or additional classes if needed)
*/

// *** Variables ***
let nameValue = '',
    birthdayValue = '',
    genderValue = 0,
    guestCountValue = 0;
    registrationValue = '';


// *** INPUT FIELDS ***
const name = document.querySelector("#name");
name.addEventListener("input", e => {
  nameValue = e.target.value;
  console.log('Name: ', e.target.value);
});

const birthday = document.querySelector("#birthday");
birthday.addEventListener("input", e => {
  console.log('Birthday: ', e.target.value);
});

const gender = document.querySelector("#gender");
gender.addEventListener("input", e => {
  console.log('Gender: ', e.target.value);
});

const guestcount = document.querySelector("#guestcount");
guestcount.addEventListener("input", e => {
  console.log('Guestcount: ', e.target.value);
});

const registration = document.querySelector("#registration");
registration.addEventListener("input", e => {
  console.log('Registration: ', e.target.value);
});


// *** Form Submittion & Validation ***
    
const button = document.querySelector("[type=submit]");
button.addEventListener("click", e => {
  e.preventDefault();
  formValidation();
  console.log(e.target);
});
      
function formValidation() {
  console.log(nameValue);
  // const form = document.querySelector("#form");
  // form.addEventListener("onsubmit", e => {
  //   console.log("Form Elements Submitted: ", e.target.elements);
  // });
  // console.log(document.form.name.value);
  // If there is no value, then add class error to the input, which should show a red border box
  // NAME
  if(!document.form.name.value) {
    name.classList.add('error');
    if(name.classList.contains('error')) {
      // I know it's adding the error class because this is logging to the console
      console.error("has class Error");
    }
  } else {
   name.classList.remove('error');
  }

  // BIRTHDAY  
  if(!document.form.birthday.value) {
   birthday.classList.add('error');
  } else {
   birthday.classList.remove('error');
  }

  // Registration
  if(!document.form.registration.value) {
    registration.classList.add('error');
   } else {
    registration.classList.remove('error');
   }
}
