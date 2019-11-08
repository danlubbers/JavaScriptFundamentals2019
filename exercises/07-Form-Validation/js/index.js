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
    guestCountValue = 0,
    registrationValue = '';


// *** INPUT FIELDS ***
const name = document.querySelector("#name");
name.addEventListener("input", e => {
  nameValue = e.target.value;
  console.log('Name: ', e.target.value);
});

const birthday = document.querySelector("#birthday");
birthday.addEventListener("input", e => {
  birthdayValue = e.target.value;
  console.log('Birthday: ', e.target.value);
});

const gender = document.querySelector("#gender");
gender.addEventListener("input", e => {
  genderValue = e.target.value;
  console.log('Gender: ', e.target.value);
});

const guestcount = document.querySelector("#guestcount");
guestcount.addEventListener("input", e => {
  guestCountValue = e.target.value;
  console.log('Guestcount: ', e.target.value);
});

const registration = document.querySelector("#registration");
registration.addEventListener("input", e => {
  registrationValue = e.target.value;
  console.log('Registration: ', e.target.value);
});


// *** Form Submittion & Validation ***
    
const buttonSubmit = document.querySelector("[type=submit]");
buttonSubmit.addEventListener("click", e => {
  e.preventDefault();
  formValidation();
  console.log(e.target);
});

// WHY DOES IT FLASH WITH ALL THE RED BORDER BOXES???
// The flash bug was due to the onsubmit = return formValidation() in the html file
// I deleted that bit of code so it doesn't automatically invoke formValidation()
const buttonClear = document.querySelector("[type=clear]");
buttonClear.addEventListener("click", () => {

  nameValue = '';
  birthdayValue = '';
  genderValue = 0;
  guestCountValue = 0;
  registrationValue = '';

  document.getElementById('name', 'birthday', 'registration').innerHTML = '';
  document.getElementById('gender', 'guestcount').innerHTML = 0;

console.log(name.value);

});

      
function formValidation() {
  // Array to collect User Input
  // let infoArray = [];
  let infoObj = {};

  // If there is no value, then add class error to the input, which shows a red border box to indicate the field 'must' be filled out before submission will be accepted 
  // NAME
  if(!nameValue) {
    name.classList.add('error');
    name.placeholder = "Please submit a Name...";
    console.log(name);
    
  } else {
    name.classList.remove('error');
  }
  
  // BIRTHDAY  
  if(!birthdayValue) {
    birthday.classList.add('error');
    birthday.placeholder = "Please submit a Birthday...";
  } else {
    birthday.classList.remove('error');
  }
  
  if(!genderValue) {
    gender.classList.add('error');
  } else {
    gender.classList.remove('error');
  }
  
  if(!guestCountValue) {
    guestcount.classList.add('error');
  } else {
    guestcount.classList.remove('error');
  }
  
  // Registration
  if(!registrationValue) {
    registration.classList.add('error');
    registration.placeholder = "Please submit a Registration Code...";
   } else {
    registration.classList.remove('error');
   }

  // Checks is all values are truthy
  if(nameValue && birthdayValue && genderValue && guestCountValue && registrationValue) {
    const form = document.querySelector("#form");
    console.log(form);

    // Push All values into Array to loop over and display later
    // infoArray.push(nameValue);
    // infoArray.push(birthdayValue);
    // infoArray.push(genderValue);
    // infoArray.push(guestCountValue);
    // infoArray.push(registrationValue);

    // Using Object instead with Key/value pairs so when I loop over it I can use the keys as well
    infoObj.Name = nameValue;
    infoObj.Birthday = birthdayValue;
    infoObj.Gender = genderValue;
    infoObj['Guest Count'] = guestCountValue;
    infoObj.Registration = registrationValue;
    console.log(infoObj);
    

    // Hides the form after submission 
    form.classList.add('hiddenForm');
    
    // Shows div box after submission
    const box = document.getElementById("box");
    box.style.display = "block";
    
    // Shows completedForm after submission
    const completedForm = document.getElementById("completed-form");
    completedForm.style.display = "block";
    
  }

  // console.log(infoArray);

  // *** Was trying to map over the content and display it ***
  // const userInfo = infoArray.map((e, i) => {
  //   return `
  //   <div key="${i}" style="padding-left: 25px; display: flex; justify-content: flex-start; align-items: center;">
  //       <h3>${e}</h3>
  //     </div>
  //   `;
  // });
  // document.getElementById('completed-form').innerHTML = userInfo;
  // console.log(userInfo);

  // Turn Object into an array to loop over it
  let infoArray = Object.entries(infoObj);
  console.log(infoArray);
  // Looping over info to display user input on page after submission 
  const userInfo = infoArray.map((e, i) => {
    return `
    <div key="${i}" style="padding-left: 25px; display: flex; justify-content: flex-start; align-items: center;">
        <h4>${e[0]}: ${e[1]}</h4>
      </div>
    `;
  });
  document.getElementById('completed-form').innerHTML = userInfo;
  console.log(userInfo);




  // Ended up statically showing User Information
  // document.getElementById('completed-form').innerHTML = `
  // <div style="padding-left: 25px; display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column;">
  //    <span style="display: flex; flex-direction: row;"><h3>Name: </h3><h3 style="padding-left: 10px;">${infoArray[0]}</h3></span>
  //    <span style="display: flex; flex-direction: row;"><h3>Birthday: </h3><h3 style="padding-left: 10px;">${infoArray[1]}</h3></span>
  //    <span style="display: flex; flex-direction: row;"><h3>Gender: </h3><h3 style="padding-left: 10px;">${infoArray[2]}</h3></span>
  //    <span style="display: flex; flex-direction: row;"><h3>Guest Count: </h3><h3 style="padding-left: 10px;">${infoArray[3]}</h3></span>
  //    <span style="display: flex; flex-direction: row;"><h3>Registration Code: </h3><h3 style="padding-left: 10px;">${infoArray[4]}</h3></span>
  // </div>
  // `;
}
