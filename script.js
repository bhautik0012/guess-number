// let js = 'amazing';
//         if(js === 'amazing') alert('javascript is FUL!')

//       const firstName = 'Jonas';
//       const job = 'teacher';
//       const birthYear = 1991;
//       const year = 2037;

//       const jonas = "I'm " + firstName + ', a' + (year - birthYear) + ' year old ' + job + '!';
//       console.log(jonas);

// const age = 15;

// if (age >= 18){
//         console.log(`Search can start driving license 🚗`)

// } else {
//         const yearsLeft = 18 - age;
//         console.log(`Search is too young. Wait another ${yearsLeft} years :)`)
// }

// const birthYear = 1998 ;
// let century;

//   if (birthYear <= 2000){
//          century = 20;
//   }
//   else {
//          century = 21;
//   }
//   console.log(century)

// const day = prompt();

// switch (day) {
//     case 'monday':
//         console.log('plan course structure');
//         console.log('Go To coding meetup');
//         break;

//     case 'tuesday':
//         console.log('prepare theory videos');
//         break;

//     case 'wedenday':
//     case 'thursday':
//         console.log('Write code example');
//         break;

//     case 'friday':
//         console.log('Recode video');
//         break;

//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;

//     default:
//         console.log('Not a valid dat!');

// }

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice)
// console.log(fruitProcessor(5,0))

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3))

// const calcAverange = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverange(3, 4, 5));

// const scoreDolphics = calcAverange(44, 23, 71);
// const scoreKoalas = calcAverange(65, 54, 49);
// console.log(scoreDolphics,scoreKoalas)

// const friend1 = 'Michael';
// const friend2 = 'steven';
// const friend3 = 'peter';

// const friends = ['Michael', 'Steven', 'peter'];
// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);

// console.log (friends[0]);
// console.log (friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length-2])

// const jonasArray = [
//     'jonas',
//     'Schmedtmann',
//     '2037 - 1991',
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName:'Jonas',
//     lastName:'Schmedtmann',
//     age: 2037 - 1991,
//     job:'teacher',
//     friends:['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// const interestenIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends ')

// if (jonas[interestenIn]) {
//     console.log (jonas[interestenIn]);
// }
// else{
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// jonas.location = 'portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   clacAge: function(birthYear) {
//     console.log(this);
//     return 2037-birthYear
//   }

// };
// console.log(jonas.clacAge(1991));

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function(){
//     this.bmi = this.mass/ this.height ** 2;
//     return this.bmi;
//   }
// };

// const john = {
//   fullNmae:'john Smith',
//   mass:92,
//   height:1.95,
//   calcBMI : function(){
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi)

// for (let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep} 🏋️`)
// }

// const jonas = [
//   'jonas',
//   'Schmedtmann',
//   '2037 - 1991',
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// const types = [];

// for (let i = 0; i < jonas.length ; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);

// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i=0; i < years.length; i++){
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// console.log('--- ONLY STRINGS ---');
// for (let i = 0; i < jonas.length; i++){
//   if (typeof jonas[i] === 'number') continue;

//   console.log(jonas[i], typeof jonas[i]);

// const jonas = [
//   'jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// for (let i = jonas.length - 1; i >= 0; i--){
//   console.log(i,jonas[i]);
// }

// for (let exercise = 1; exercise<= 4 ; exercise++){
//   console.log(`------ Starting exercise ${exercise}`);

//   for (let rep=1 ; rep < 6; rep++){
//     console.log(`Lifting weight repetition ${rep}`)
//   }
// }

// for (let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weight repetition ${rep}`)
// }

// let rep =1;
// while (rep <= 10){
//   console.log(`Lifting weight repetition ${rep}`)

// }

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weight repetition ${rep}`)
// }

// let rep=1;
// while (rep <= 10){
//     console.log(`Lifting weight repetition ${rep}`)
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }

// const calcTip = function (bill){
//     return bill >= 50 && bill <=300 ? bill * 0.50 : bill * 0.2;
// }

// const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals)

// const x = 23;
// if ( x === 23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1950));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {

//   const temps = t1.concat(t2);
//   console.log(temps)

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };

// const amplitude = calcTempAmplitudeNew([3,5,1],[9,0,1]);
// console.log(amplitudeNew);

// const measureKelvin =  function(){
//     const measurement ={
//         type:'temp',
//         unit:'celsius',
//         value:Number(prompt('Degress celsius:'))
//     };

//     console.log(measurement);
//     console.table(measurement)
//     // console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// console.log(measureKelvin())

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];
// console.log(`... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ....`);

// const printForecast = function (arr){
//     let str = '';
//     for (let i = 0; i< arr.length; i++){
//         str = str + `${arr[i]}C`;
//     };
//     console.log(str)
// }
// printForecast(data1);
// 'use strict'

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value)

// const number =Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage  = function (message) {
  document.querySelector ('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ NO number';
    displayMessage('⛔ NO number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ?  '📈 Too high' : '📉 Too low!';
      displayMessage(guess  > secretNumber ?  '📈 Too high' : '📉 Too low!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game !';
      displayMessage('💥 You lost the game !')
      document.querySelector('.score').textContent = 0;
    }
  }
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game !';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...'); 

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
