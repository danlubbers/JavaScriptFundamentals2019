/**
 *  CreateGraduateObject function takes in several arguments and returns an object.
 *
 * @param {string} name  eg 'Eddie Wilard'
 * @param {number} graduationYear eg 2019
 * @param {object} skills eg {1:'Javascript',2:'React',3:'CSS'}
 * @param {Array} links eg [https://github.com/example/profile, https://linkedin.com/profile]
 * 
 * @returns 
 *  const graduate = {
    name: "Eddie Willard",
    graduationYear: 2019,
    skills: ["JavaScript", "React", "CSS"],
    links: {
    github: "https://github.com/example/profile",
    linkedIn: "https://linkedin.com/profile"
    }
   };
 *  
 */

function createGraduateObject(name, graduationYear, skills, links) {
  return {
    name, 
    graduationYear,
    skills: Object.values(skills), 
    links: {
      github:links[0],
      linkedIn:links[1],
    }
  };
}

/**
 * Loop through a nested array of people. For each person in the array,
 * format and return a string of marketing demographics about each person.
 * You will be getting the data from:
 * @see /challenges/10-7-challenges/people.json
 *
 * @param {array} people an array of nested objects, where each object
 * contains information about a person. It's each object in this file:
 * @see /challenges/10-7-challenges/people.json
 *
 * @returns {string} string in CSV format that you can be saved and then opened in Excel, Numbers
 * or another spreadsheet program. This means that you are going return a very large string,
 * where pieces of information will be separated with new line characters (\n), commas and quotes.
 * The first line should contain labels like this: "Name","Gender","Location","DOB"\n
 * Then each following line will represent a single person, with the data about that person:
 * @example
 * "Name","Gender","Location","DOB"\n"Georgia Wagner","female","Skookumchuck, VA","1977-02-26"\n"Meredith Holt","female","Coltman, WV","1957-09-22"\n"Cora Bradley","female","Fairland, GA","1995-07-19"\n"Carol Scott","female","Two Brooks, WI","1973-08-17"\n"Vincent Silva","male","Brookhaven, DC","1959-07-30"\n"Clifton Armstrong","male","Cimarron, WA","1971-10-08"\n"Deanna Stanley","female","Morgan Mill, OK","1971-04-20"\n"Sidney Walker","male","Scottsville, KS","1987-01-05"\n"Guillermo Gross","male","Del Rey Oaks, RI","1998-05-31"\n"Daniel Steele","male","Martins Corner, TX","1963-07-09"\n"Brett Jimenez","male","East Waterford, ME","1958-05-06"\n
 *
 * @ For those of you who are curious about CSV files:
 * Open this file in Excel, Numbers or another spreadsheet program:
 * @see /challenges/10-7-challenges/people-example.csv
 * It should look something like this:
 * @see /challenges/10-7-challenges/people-example.png
 */

let people = [
  {
    "name": "Georgia Wagner",
    "gender": "female",
    "location": "Skookumchuck, VA",
    "dob": "1977-02-26"
  },
  {
    "name": "Meredith Holt",
    "gender": "female",
    "location": "Coltman, WV",
    "dob": "1957-09-22"
  },
  {
    "name": "Cora Bradley",
    "gender": "female",
    "location": "Fairland, GA",
    "dob": "1995-07-19"
  },
  {
    "name": "Carol Scott",
    "gender": "female",
    "location": "Two Brooks, WI",
    "dob": "1973-08-17"
  },
  {
    "name": "Vincent Silva",
    "gender": "male",
    "location": "Brookhaven, DC",
    "dob": "1959-07-30"
  },
  {
    "name": "Clifton Armstrong",
    "gender": "male",
    "location": "Cimarron, WA",
    "dob": "1971-10-08"
  },
  {
    "name": "Deanna Stanley",
    "gender": "female",
    "location": "Morgan Mill, OK",
    "dob": "1971-04-20"
  },
  {
    "name": "Sidney Walker",
    "gender": "male",
    "location": "Scottsville, KS",
    "dob": "1987-01-05"
  },
  {
    "name": "Guillermo Gross",
    "gender": "male",
    "location": "Del Rey Oaks, RI",
    "dob": "1998-05-31"
  },
  {
    "name": "Daniel Steele",
    "gender": "male",
    "location": "Martins Corner, TX",
    "dob": "1963-07-09"
  },
  {
    "name": "Brett Jimenez",
    "gender": "male",
    "location": "East Waterford, ME",
    "dob": "1958-05-06"
  }
];

function createCsvString(people) {
  let headerTitles = `"Name","Gender","Location","DOB"\n`;
  let valuesStr = '';
  
  for(let i = 0; i < people.length; i++) {
    // console.log(people[i].name);
    valuesStr += `"${people[i]['name']}","${people[i]['gender']}","${people[i]['location']}","${people[i]['dob']}"\n`; 
  }
  return headerTitles + valuesStr;
}

console.log(createCsvString(people));


module.exports = {
  createGraduateObject,
  createCsvString
};
