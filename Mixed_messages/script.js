const data = require('./data.js')

// write a function to get a random item from an arr
const getRandItem = arr => arr[Math.floor(Math.random() * arr.length)]

// get random adv, adj, noun
randAdv = getRandItem(data.adv)
randAdj = getRandItem(data.adj)
randNoun = getRandItem(data.noun)

//console.log(randAdv, randAdj, randNoun)


// read user's input and output as user's name
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Would you like to know who is your best friend? Please write down your name: ', name => {
    console.log(`Woah! ${name}'s best friend is the ${randAdv} ${randAdj} ${randNoun}!`);
    readline.close();
  });
