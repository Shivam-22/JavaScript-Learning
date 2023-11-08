//// Function
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

const country1 = describeCountry("India", 153, "Delhi");
const country2 = describeCountry("USA", 150, "D C Washington");
const country3 = describeCountry("France", 60, "Paris");

console.log(country1);
console.log(country2);
console.log(country3);

//// Function Declaritive vs Expression
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

const indiaPercentage = percentageOfWorld(1800);
const chinaPercentage = percentageOfWorld(1441);
const usaPercentage = percentageOfWorld(1400);

console.log(`India has ${indiaPercentage}% of total population of world`);
console.log(`India has ${chinaPercentage}% of total population of world`);
console.log(`India has ${usaPercentage}% of total population of world`);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const indiaPercentage2 = percentageOfWorld2(1800);
const chinaPercentage2 = percentageOfWorld2(1441);
const usaPercentage2 = percentageOfWorld2(1400);
console.log(`2 : India has ${indiaPercentage2}% of total population of world`);
console.log(`2 : India has ${chinaPercentage2}% of total population of world`);
console.log(`2 : India has ${usaPercentage2}% of total population of world`);

//// Arrow Functions
const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};
const indiaPercentage3 = percentageOfWorld3(1800);
const chinaPercentage3 = percentageOfWorld3(1441);
const usaPercentage3 = percentageOfWorld3(1400);
console.log(`3 : India has ${indiaPercentage3}% of total population of world`);
console.log(`3 : India has ${chinaPercentage3}% of total population of world`);
console.log(`3 : India has ${usaPercentage3}% of total population of world`);

//// Functions Calling Other Functions
const describePopulation = function (country, population) {
  const populationPercentage = percentageOfWorld(population);
  return `${country} has ${population} million people, which is about ${populationPercentage} of the world.`;
};

const indiaPercent = describePopulation("India", 1500);
const chinaPercent = describePopulation("China", 1400);
const usaPercent = describePopulation("USA", 1000);
console.log(indiaPercent);
console.log(chinaPercent);
console.log(usaPercent);

//// Arrays
const populations = [1500, 1400, 1000, 700];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];
console.log(percentages);

//// Basic Array Operations Methods

const neighbours = ["UK", "France", "Italy"];
console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (neighbours.includes("Germany")) {
  console.log("Probably not a central European country 😁");
}

const countryIndex = neighbours.indexOf("Italy");
console.log(countryIndex);
neighbours[countryIndex] = "Spain";
console.log(neighbours);

//// Objects

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1555,
  neighbours: ["Nepal", "Sri Lanka", "Bangladesh"],
  descibe: function () {
    console.log(
      `Describe Method : ${this.country} has ${this.population} million using ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    //this.isIsland = this.neighbours.length === 0 ? true : false;
    this.isIsland = !Boolean(this.neighbours.length);
  },
};
console.log(myCountry);

//// Dot vs Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million using ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

//// Object Methods

myCountry.descibe();
myCountry.checkIsland();
console.log(myCountry);

//// FOR Loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

//// Looping Arrays, Breaking and Continue
const populations1 = [1500, 1400, 1000, 700];
const percentage2 = [];

for (let i = 0; i < populations1.length; i++) {
  percentage2[i] = percentageOfWorld(populations1[i]);
}
console.log(percentage2);

//// Looping Backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
console.log(listOfNeighbours);

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

//// While Condition

let i = 0;
let percentage3 = [];
while (i < populations1.length) {
  percentage3[i] = percentageOfWorld(populations1[i]);
  i++;
}
console.log(percentage3);
