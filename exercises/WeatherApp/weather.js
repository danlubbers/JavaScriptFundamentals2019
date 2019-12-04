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
    
    const city = document.querySelector('#city');
    const state = document.querySelector('#state');

    city.textContent = userLocation.data.city;
    state.textContent = userLocation.data.region_code;
    
  
    const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
    // Test with static lat & long
    // const weather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=15.7835&lon=90.2308&appid=${apiKey}`);
    console.log(weather);
    
    // *** WEATHER ICONS ***
    const icon = document.querySelector('#icon');
    const weatherIcon = weather.data.weather[0].icon;
    const weatherID = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    icon.src = weatherID;
    
    // *** WEATHER DESCRIPTION ***
    const description = document.querySelector('#description');
    const weatherDescription = weather.data.weather[0].description;
    description.textContent = weatherDescription;
    
    
    // *** TEMPERATURE ***
    let temp = Math.floor(((weather.data.main.temp - 273.15) * 1.8) + 32);
    // console.log('Weather: ', temp);

    const tempId = document.querySelector('#temp');
    const fc = document.querySelector('#fc');
    tempId.textContent = temp + '°';

    // *** PRESSURE ***
    const pressureMB = weather.data.main.pressure;
    const pressureInches = (weather.data.main.pressure * 0.0295301).toFixed(2);
    console.log(pressureMB);

    const pressure = document.querySelector('#pressure');
    pressure.textContent = 'Pressure: ' + pressureMB + 'mb';
    

    // *** HUMIDITY ***
    const weatherHumidity = weather.data.main.humidity;
    console.log(weatherHumidity);

    const humidity = document.querySelector('#humidity');
    humidity.textContent = 'Humidity: ' + weatherHumidity + ' %';

    
    // *** SARCASM ***
    const sarcasm = document.querySelector('#weather-sarcasm');
    
    if(temp >= 90) sarcasm.textContent = `If you're outside and you arent cooling off in some water, we'll that's on you. I don't want to hear you complain about how hot it is...`;
    if(temp >= 80 && temp < 90) sarcasm.textContent = `The weather is still fairly nice, but it might get hot soon, so you'll want to find a swimming hole.`;
    if(temp >= 60 && temp < 80) sarcasm.textContent = `Weather is perfect, why are you on your computer. GO OUTSIDE and enjoy it! You're not getting any younger...`;
    if(temp >= 40 && temp < 60) sarcasm.textContent = `It's not hot, it's not cold. The weather just kind of is...`;
    if(temp >= 20 && temp < 40) sarcasm.textContent = `You might be cold, you might not. Depends on what you're wearing, but I'd def bring a heavy jacket!`;
    if(temp < 20) sarcasm.textContent = `I'd wear a goose down parka if I were you, but then again you could do the cold challenge and just go naked.`;

    const tempButton = document.querySelector('#tempBtn');
    tempButton.addEventListener('click', () => {
      if(fc.textContent === 'F') {
      const celcius = Math.round((temp - 32) / 1.8);
      tempId.textContent = celcius + '°';
      fc.textContent = 'C';
    } else {
      tempId.textContent = temp + '°';
      fc.textContent = 'F';
      }
    });

    const pressureButton = document.querySelector('#pressureBtn');
    pressureButton.addEventListener('click', () => {
      if(!pressure.textContent.match(/mb/)) {
        pressure.textContent = 'Pressure: ' + pressureMB + 'mb';    
      } else {
        pressure.textContent = 'Pressure: ' + pressureInches + 'in';    
      }
    });

  } catch (err) {
    return console.error(err);
  } 
}) ();



