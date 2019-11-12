/**
 * You have three challenges to solve below with Vanilla JavaScript.
 * You are allowed to make changes to the HTML and CSS.
 */

/**
 * Challenge 1: Show comments for the news story.
 *
 * When the user clicks on the "View Comments" button, the comment section should appear.
 * Right now, the comments are hidden because they have the class ".hidden".
 *
 * BONUS: Clicking on the button should toggle instead of just show the comments.
 * If the comments are open, change the button text from "View Comments" to "Hide Comments".
 */

// How I solved it
//  const commentBtn = document.querySelector('.btn');
//  commentBtn.addEventListener('click', () => {
//    const card = document.querySelector('.card');
//    card.classList.remove('hidden');
//  });

// Instructor Solution (use ID's instead of classes to keep separate)
const showCommentsBtn = document.querySelector('#showComments');
showCommentsBtn.addEventListener('click', () => {
  const comments = document.querySelector('#comments');
  // BONUS: I added the if/else if statement to toggle the button
  if(comments.classList.value.includes('hidden')) comments.classList.remove('hidden');
  else if(!comments.classList.value.includes('hidden')) comments.classList.add('hidden');
});
 

/**
 * Challenge 2: Display the results of the world's most pointless search engine.
 *
 * When the user types in the textbox  and clicks
 * "Search", display the message "No results for ___ found" inside of this <p></p> below.
 * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
 * (Since there are no oceans near Albany, NY, the search engine should
 * display the "No results for ___ found" message every time.)
 *
 * The exercise must be completed with a form handler
 * and you must prevent the page from refreshing when the form is submitted.
 */

const form = document.querySelector('.form-group');
form.addEventListener('submit', e => {
  e.preventDefault();
   const userInput = document.getElementById('search');
  //  console.log("Form submitted! Elements are ", event.target.elements[0].value);
    const searchText = document.querySelector('.text-white');
    searchText.textContent = `No results for ${userInput.value} found`;
});



/**
 * Challenge 3: Adding pagination to the student table.
 *
 * First, when the page initially loads, only the first 10 students should be visible.
 * (That is, every student row that has data-group="1"). You can just use CSS / HTML to do this.
 *
 * Second, clicking on the pagination below should show and hide different students in the table:
 * - Clicking on the "«" and "1" buttons should show everything in data-group="1" and hide everything in data-group="2".
 * - Clicking on the "2" and "»" buttons should show everything in data-group="2" and hide everything in data-group="1".
 */

const groupOne = document.querySelectorAll('[data-group="1"]');
const groupTwo = document.querySelectorAll('[data-group="2"]');
  console.log(groupTwo);
  for(let person of groupTwo) {
    if(person.matches('[data-group="2"]')) {
     person.classList.add('hidden');
    }
  }

const button = document.querySelectorAll('[type="button"]');

button[0].addEventListener('click', () => {
  for(let person of groupOne) {      
    if(person.matches('[data-group="1"]')) {
       person.classList.remove('hidden');
    }
  }
  for(let person of groupTwo) {
    if(person.matches('[data-group="2"]')) {
      person.classList.add('hidden');
    }
  }
});

button[1].addEventListener('click', () => {
  for(let person of groupOne) {      
    if(person.matches('[data-group="1"]')) {
       person.classList.remove('hidden');
    }
  }
  for(let person of groupTwo) {
    if(person.matches('[data-group="2"]')) {
      person.classList.add('hidden');
    }
  }
});

button[2].addEventListener('click', () => {
  for(let person of groupOne) {      
    if(person.matches('[data-group="1"]')) {
       person.classList.add('hidden');
    }
  }
  for(let person of groupTwo) {
    if(person.matches('[data-group="2"]')) {
      person.classList.remove('hidden');
    }
  }
});

button[3].addEventListener('click', () => {
  for(let person of groupOne) {      
    if(person.matches('[data-group="1"]')) {
       person.classList.add('hidden');
    }
  }
  for(let person of groupTwo) {
    if(person.matches('[data-group="2"]')) {
      person.classList.remove('hidden');
    }
  }
});
  



 