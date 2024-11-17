/* TODO EXERCISES */

// -----------------------------------------------

/* Practice with Array Destructuring */
function printFirst2Fruits() {
  // Here, we have an array of fruit names.
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  const [fruit1, fruit2] = fruits;
  console.log(fruit1,fruit2);
}

printFirst2Fruits();

// -----------------------------------------------

/* Practice with Object Destructuring */
function printCharacterDetails() {
  // In this example, we have an object representing a character.
  const character = {
    name: "Luke Skywalker",
    species: "Human",
    occupation: "Jedi Knight",
    homePlanet: "Tatooine",
  };

  const { species, occupation } = character;
  console.log(species, occupation);

  /* TODO: Destructure 'species' and 'occupation' from the character object.
         Remember, when destructuring objects, the variable names must match the object keys.
         Assign them to variables and log those variables to the console. */
  // Example: const { species, occupation } = character;
}

printCharacterDetails();

// -----------------------------------------------

/* Practice with Destructuring and Executing Functions from Arrays */
function printMissionDetails() {
  // In this example, we have an object representing a space mission.
  const mission = {
    name: "Voyager 1",
    planet: "Jupiter",
    year: 1979,
    missionType: "Flyby",
  };

  const { planet, year } = mission;
  console.log(planet, year);

  /* TODO: Destructure 'planet' and 'year' from the mission object.
         Use object destructuring to extract these two properties.
         Assign them to variables and log those variables to the console. */
  // Example: const { planet, year } = mission;
}

printMissionDetails();


// DO NOT EDIT CODE BEYOND THIS LINE
// console.log("printFirst2Cars:");
// printFirst2Cars();
// console.log("printJediNameAndAge:");
// printJediNameAndAge();
// console.log("executeSomeFunction:");
// executeSomeFunction();
// console.log("printFirst2Fruits:");
// printFirst2Fruits();
// console.log("printCharacterDetails:");
// printCharacterDetails();
// console.log("printMissionDetails:");
// printMissionDetails();
