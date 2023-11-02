//// Lecture 1

let country = "India";
let continent = "Asia";
let population = 1450000000;

console.log(country);
console.log(continent);
console.log(population);

//// Lecture 2

const isIsland = false;
let language;
console.log(isIsland);
console.log(language);

//// Lecture 3

language = "Marathi";
console.log(language);

//// Lecture 4

console.log(population / 2);

population++;

console.log(population);
const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
let averagePopulation = 3300000;
console.log(averagePopulation > population);

let description =
  "Protugal is in Europe and its 11 million people speak portuguese";

//// Lecture 5

// const numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border!");
// } else if (Number(numNeighbours) > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders");
// }

//// Lecture 6

if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country} 😊`);
} else {
  console.log(`${country} does not meet your criteria 😔`);
}
