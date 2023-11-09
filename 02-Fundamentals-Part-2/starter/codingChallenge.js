//// Coding Challenge #1 Solution
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ( ${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ( ${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(avgDolphins, avgKoalas);

//// Coding Challenge #2 Solution
const calcTip = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total[i] = bills[i] + calcTip(bills[i]);
}

console.log(tips);
console.log(`Total : ${total}`);

//// Coding Challenge #3 Solution
const markBMI = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johnBMI = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markBMI.calcBMI();
johnBMI.calcBMI();
console.log(markBMI.bmi, johnBMI.bmi);

if (markBMI.bmi > johnBMI.bmi) {
  console.log(
    `${markBMI.fullName}'s BMI (${markBMI.bmi}) is higher than ${johnBMI.fullName}'s BMI (${johnBMI.bmi})`
  );
} else if (johnBMI.bmi > markBMI.bmi) {
  console.log(
    `${johnBMI.fullName}'s BMI (${johnBMI.bmi}) is higher than ${markBMI.fullName}'s BMI (${markBMI.bmi})`
  );
}

//// Coding Challenge #4 Solution
const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipss = [];
const totals = [];

for (let i = 0; i < billss.length; i++) {
  const tip = calcTips(billss[i]);
  tipss.push(tip);
  totals.push(tip + billss[i]);
}
console.log(bills, tipss, totals);
let sum = 0;
const calcAverages = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const average = sum / arr.length;
  console.log(average);
};

calcAverages(billss);
