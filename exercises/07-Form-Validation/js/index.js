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

// *** Form Submittion & Validation ***
// Form Submission button
const buttonSubmit = document.querySelector("[type=submit]");
buttonSubmit.addEventListener("click", e => {
  e.preventDefault();
  formValidation();
});

// BONUS POINTS #2: Form Reset function passed to the Clear button in html file
function formReset() {
  document.getElementById('form').reset();
}
      
function formValidation() {
  // *** State ***
  let infoObj = {},
      nameValue = '',
      birthdayValue = '',
      genderValue = 0,
      guestCountValue = 0,
      registrationValue = '';

  // *** INPUT FIELDS ***
  const form = document.querySelector('#form');
    nameValue = form.elements.name.value;
    birthdayValue = form.elements.birthday.value;
    genderValue = form.elements.gender.value;
    guestCountValue = form.elements.guestcount.value;
    registrationValue = form.elements.registration.value;

  // If there is no value, then add class error to the input, which shows a red border box to indicate the field 'must' be filled out before submission will be accepted 
  // *** Refactored Using forEach to loop over content instead of a bunch of if/else statements
  // Loop over all inputs
  const inputs = document.querySelectorAll('input');
    inputs.forEach(e => {
      if(!e.value) {
        e.classList.add('error');
        // BONUS POINTS #1
        if(e.placeholder === 'NAME') e.placeholder = 'Please submit a Name...';
        if(e.placeholder === 'BIRTHDATE') e.placeholder = 'Please submit a Birthdate...';
        if(e.placeholder === 'REGISTRATION CODE') e.placeholder = 'Please submit a Registration Code...';
      } else {
        e.classList.remove('error');
      } 
  });

  // Loop over all selected dropdowns
  const select = document.querySelectorAll('select');
    select.forEach(e => {
      if(e.value === 'GENDER' || e.value === 'How many Guest') {
        e.classList.add('error');
      } else {
        e.classList.remove('error');
      }
  });


  // Checks if all values are truthy
  if(nameValue && birthdayValue && genderValue && guestCountValue && registrationValue) {
    const form = document.querySelector("#form");

    // Using Object instead with Key/value pairs so when I loop over it I can use the keys as well
    infoObj.Name = nameValue;
    infoObj.Birthday = birthdayValue;
    infoObj.Gender = genderValue;
    infoObj['Guest Count'] = guestCountValue;
    infoObj.Registration = registrationValue;

    // Hides the form after submission 
    form.classList.add('hiddenForm');
    
    // Shows div box after submission
    const box = document.getElementById("box");
    box.style.display = "block";
    
    // Shows completedForm after submission
    const completedForm = document.getElementById("completed-form");
    completedForm.style.display = "block";
  }

  // *** Object to Array then mapped to Display ***
  // Turn Object into an array to loop over it
  let infoArray = Object.entries(infoObj);

  // Looping over info to display user input on page after submission 
  const userInfo = infoArray.map((e, i) => {
    return `
      <div key="${i}" style="padding-left: 25px; display: flex; justify-content: flex-start; align-items: center;">
      <h4>${e[0]}: ${e[1]}</h4>
    </div>`;
  });
  document.getElementById('completed-form').innerHTML = userInfo.join('');
}
