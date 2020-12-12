//get the client
const mysql = require('mysql2');
const fs = require("fs")
const process = require('process')

//configure 'secret key'
const dotenv = require('dotenv');
dotenv.config();

// create the connection to database
const db_connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'new_world',
  password: process.env.PASSWORD,
});

db_connection.on('error', (err) => {
  if (err) throw err;
});

async function init() {

  const arguments = process.argv.slice(2) //everything that is after index 1, which is an array
  console.log("argument is: " + arguments)

  switch (arguments[0]) {

    case 'capitalcity': {
      let grabArgument = arguments.slice(1)
      db_connection.execute(
        //What is the capital of country X ? (Accept X from user)
        'SELECT `Name`, `Capital` FROM `Country` WHERE `Name` = ? limit 0,10', grabArgument,
        function (err, results, fields) {
          if (err) {
            return console.error("There was an error: " + err);
          }
          let string = JSON.stringify(results)
          console.log("string " + string)
          let json = JSON.parse(string)
          json.forEach(element => {
            console.log(element)
          });
        }
      );
      break;
    }

    case 'citylanguages': {
      let grabArgument = arguments.slice(1)
      db_connection.execute(
        //Find the number of cities in which language Z is spoken (Accept Z from user)
        "SELECT COUNT(city.Name) FROM city INNER JOIN countrylanguage ON city.CountryCode=countrylanguage.CountryCode WHERE Language = ?", grabArgument,
        function (err, results, fields) {
          if (err) {
            return console.error("There was an error: " + err);
          }
          let string = JSON.stringify(results)
          console.log("string " + string)
          let json = JSON.parse(string)
          json.forEach(element => {
            console.log(element)
          });
        }
      );
      break;
    }

    case 'regionlanguage': {
      let grabArgument = arguments.slice(1)
      db_connection.execute(
        //List all the languages spoken in the region Y (Accept Y from user)
        "SELECT countrylanguage.Language, country.Region FROM countrylanguage INNER JOIN country ON countrylanguage.CountryCode = country.Code WHERE region = ?", grabArgument,
        function (err, results, fields) {
          if (err) {
            return console.error("There was an error: " + err);
          }
          let string = JSON.stringify(results)
          console.log("string " + string)
          let json = JSON.parse(string)
          json.forEach(element => {
            console.log(element)
          });
        }
      );
      break;
    }

    case 'continenttotallanguages': {
      let grabArgument = arguments.slice(1)
      db_connection.execute(
        //List all the continents with the number of languages spoken in each continent
        "SELECT country.Continent, COUNT(countrylanguage.Language) FROM countrylanguage JOIN country ON countrylanguage.CountryCode = country.Code GROUP BY country.Continent",
        function (err, results, fields) {
          if (err) {
            return console.error("There was an error: " + err);
          }
          let string = JSON.stringify(results)
          console.log("string " + string)
          let json = JSON.parse(string)
          json.forEach(element => {
            console.log(element)
          });
        }
      );
      break;

      /* 
      SELECT c1.Name, c2.Name, c1.Region, c2.Region, cl1.Language, cl2.Language FROM country AS c1, country AS c2, countrylanguage AS cl1, countrylanguage AS cl2
      INNER JOIN country ON CountryCode = Code
      WHERE c1.Region = c2.Region
      AND c1.Code != c2.Code 
      AND cl1.IsOfficial = "T"
      AND cl2.IsOfficial = "T"
      AND cl1.Language = cl2.Language 
      AND c1.GNP < "1000" AND c2.GNP < "1000" #trying´to be beteref fek
      GROUP BY c1.Name;
      */

    }

    case 'help': {
      console.log("type capitalcity to see the capital of country X")
      console.log("type citylanguages to find the number of cities in which language Z is spoken")
      console.log("type regionlanguage to List all the languages spoken in the region Y")
      console.log("type continenttotallanguages to list all the continents with the number of languages spoken in each continent")
      break;
    }
    default: {
      console.log("type help to see a list of what you can do!")
    }
  }
}

init();



//What is the capital of country X ? (Accept X from user)

//List all the languages spoken in the region Y (Accept Y from user)

//Find the number of cities in which language Z is spoken (Accept Z from user)

//List all the continents with the number of languages spoken in each continent
