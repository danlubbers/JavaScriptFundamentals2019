/*** As a user, I would like to be able to see my weather forecast for the day , so I  can be informed about the weather.*/

/** Developer notes:
 *    Weather API: https://openweathermap.org/api
 *     Api key: 886705b4c1182eb1c69f28eb8c520e20
 *
 *  1) Retrieve the user's latitude and longitude by using this API: https://ipapi.co/json/
 *  2) Using the user's latitude and longitude return the weather using this API: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
 *   a sample call will look like this: http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=886705b4c1182eb1c69f28eb8c520e20
 *  3) You can edit this weather app  however you see fit to achieve your goals. (i.e add ids or additional classes if needed). Make the weather app look more whimsical (ie icons based off of the weather forecast).
 *
 *
 *
 */

( async () => {
  try {
    const apiKey = `886705b4c1182eb1c69f28eb8c520e20`;
    const userLocation = await axios.get(`https://ipapi.co/json/`);
    // console.log(userLocation.data);
    const lat = userLocation.data.latitude;
    const long = userLocation.data.longitude;
    // console.log('Lat: ', lat);
    // console.log('Long: ', long);

    const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
    let temp = Math.floor(((weather.data.main.temp - 273.15) * 1.8) + 32);
    // console.log('Weather: ', temp);

    const tempId = document.querySelector('#temp');
    const fc = document.querySelector('#fc');
    tempId.textContent = temp;

    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      if(fc.textContent === 'F') {
      const celcius = Math.round((temp - 32) / 1.8);
      tempId.textContent = celcius;
      fc.textContent = 'C';
    } else {
      tempId.textContent = temp;
      fc.textContent = 'F';
      }
    });

  } catch (err) {
    return console.error(err);
  } 
}) ();



