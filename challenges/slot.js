/**
 * You are working in a casino and are tasked with developing a classic slot game machine.
 *
 * Considering a slot machine with three rows and three vertical reels defined like this:
 * Reel1: ['cherry', 'lemon', 'apple',  'lemon', 'banana', 'banana', 'lemon', 'lemon']
 * Reel2: ['lemon', 'apple',  'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon']
 * Reel3: ['lemon', 'apple',  'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon']
 *
 * Using these reels, complete the calculateResult function so that, when it's called, it gives back the result of a spin.
 * The calculateResult function takes 3 arguments, each specifying a stopping position for the corresponding reel.
 * The stopping positions describe the array index of the first symbol shown in each column. Since the machine shows
 * three rows of each reel, given a stopping position i, the reel will show symbols i, i+1, and i+2.
 *
 * 3 Cherries in a row: won 50 coins
 * 2 Cherries in a row: won 40 coins
 * 3 Apples in a row: won 20 coins
 * 2 Apples in a row: won 10 coins
 * 3 Bananas in a row: won 15 coins
 * 2 Bananas in a row: won 5 coins
 * 3 Lemons in a row: won 3 coins
 *
 *
 *   Example:
 *    Given the stopping positions (0, 2, 7), the slot machine would look like this:
 *
 *       Reel1      Reel2     Reel3
 *    --------------------------------
 *    |  cherry  |  lemon  |  lemon  |
 *    |  lemon   |  lemon  |  lemon  |
 *    |  apple   |  cherry |  apple  |
 *    --------------------------------
 *
 *   The machine shows three lemons in the second row (gives 3 coins) and two apples in the third row (gives 10 coins).
 *   Therefore the total win amount is 13.
 *
 */

// Create 3 reel array constants.
const reel1 = ['cherry', 'lemon', 'apple',  'lemon', 'banana', 'banana', 'lemon', 'lemon'],
 reel2 = ['lemon', 'apple',  'lemon', 'lemon', 'cherry', 'apple', 'banana', 'lemon'],
 reel3 = ['lemon', 'apple',  'lemon', 'apple', 'cherry', 'lemon', 'banana', 'lemon'];

function calculateResult(position1, position2, position3) {
  const row = [] // create constant variable that I will use to fill with all 9 items that reels have after spin.

  // for loop to fill the row constant variable.
  for(let i = 0; i < 3; i++) {
    row.push([reel1[position1 % 8], reel2[position2 % 8], reel3[position3 % 8]]);
    position1++;
    position2++;
    position3++;
  }

  // function that counts how many coins each row won.
  function countCoins(arr) {
    const count = {}; // constant that will be filled with {key: value} object pairs of the row. Example: {cherry: 1, lemon: 2}.
    let coins = 0; // variable that sum all coins in the row.

    // for loop that checks how many duplicates the row has and fills the 'count' constant.
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      count[item] = count[item] ? count[item] + 1 : 1;
    }

    // for...in loop to go through the count object with switch case to fill the coins variable.
    for(const key in count) {
      switch(key) {
        case 'cherry':
          if(count[key] == 2) coins += 40;
          if(count[key] == 3) coins += 50;
          break;
        case 'lemon':
          if(count[key] == 3) coins += 3;
          break;
        case 'apple':
          if(count[key] == 2) coins += 10;
          if(count[key] == 3) coins += 20;
          break;
        case 'banana':
          if(count[key] == 2) coins += 5;
          if(count[key] == 3) coins += 15;
          break;
      }
    }
    return coins;
  }

  // create total variable and go through each row
  let total = 0;
  for(let i = 0; i < 3; i++) {
    total += countCoins(row[i]);
  }
  return total;
}

module.exports = calculateResult;
