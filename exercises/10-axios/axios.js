/**
 *
 * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
 *
 * For this exercise, use the API to populate the dropdown.
 * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
 *
 *
 * Create a list of characters using the API
 * This is the URL for the API you will be using. The method should be GET.
 * To get all characters use this
 * https://rickandmortyapi.com/documentation/#get-all-characters
 * To get an individual character use this:
 * https://rickandmortyapi.com/documentation/#get-a-single-character
 *
 * Use the AXIOS library to make AJAX requests.
 */

const dropdown = document.querySelector('#dropdown');

  axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      const characters = res.data.results;
        characters.map(character => {
          const newCharacter = document.createElement('option');
      
            newCharacter.textContent = character.name;
            newCharacter.value = character.id;      
            dropdown.appendChild(newCharacter);   
    });
  })
    .catch(err => console.error(err));
  
// Selecting the character off the dropdown 
dropdown.addEventListener('input', character => {
  const id = character.target.value;

  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      const image = document.querySelector('#get-schwifty');
        image.src = res.data.image;

      const title = document.querySelector('#title-head');
        title.textContent = res.data.name;

      const photoCaption = document.querySelector('#photo-caption');
        photoCaption.textContent = res.data.origin.name;
        

      });
  })
    .catch(err => console.error(err));
    
  
