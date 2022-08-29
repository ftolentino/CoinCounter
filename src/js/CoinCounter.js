const quarterCoinCounter = function(num)  {
  return quarterCount(num);
}

const incrementCounter = (counter) => {
  if(counter > 3) {
    return counter;
  } else {
    console.log(counter);
    return incrementCounter(counter + 1);
  }
}

// four separate variables 25, 10, 5, 1
// let
// for(let i = 0; i < num; i++)
//    if num > 25
//        

const quarterCount = (num) => {
  const n = num * 100;
  const arr = [];
  if (n < 1) {
    return [0, 0, 0, 0];
  } else {
    // else if n > 25
    // return count(num % 25)
    //
    // else if n > 10
    // return count(num % 10)
    // else if n > 5
    // else if n > 1
    // checkRem(cent, total);
    const qRem = checkRem(25, n);
    //                 return 499 % 25 = 24;
    //    24
    // newSub(rem, total);
    const qTotal =  newSub(qRem, n);
    //              return 499 - 24 = 475;
    //    475
    // checkCount(cent, total, rem);
    const qCount = checkCount(25, qTotal);
    //             return 475 / 25 = 19;
    //    19
    // count will be pushed into array;
    const dRem = checkRem(10, qRem); 
    //            return 24 % 10 = 4;
    const dTotal = newSub(dRem, qRem);
    //             return 24 - 4 = 20;
    const dCount = checkCount(10, dTotal);
    const nRem = checkRem(5, dRem);
    const nTotal = newSub(nRem, dRem);
    const nCount = checkCount(5, nTotal);
    const pRem = checkRem(1, nRem);
    const pTotal = newSub(pRem, nRem);
    const pCount = checkCount(1, pTotal);
    return array = [qCount, dCount, nCount, pCount];
    //             [    19,      2,      0,      4];
  }
};

const checkRem = function(cent, total) {
  return total % cent;
}

const newSub = function(rem, total) {
  return total - rem;
}

const checkCount = function(cent, total) {
  return total / cent;
}

const qNeeded = count[0];
//    19
console.log(qNeeded + " Quarters");


//num = 4.99;
//put a bool if statement to return to divisible by?
//function count(num) {
//  const n = num * 100;
//  if (n < 1){
//    return [0, 0, 0, 0];
// } else {
//  pennyCount, nickleCount, dimeCount, quarterCount;
//  would return an array that stores the numbers
//        check all divisible by largest first        
//          499 % 25 => 24 % 10 => 4 % 5 cant run => 4 % 1 => 0
//          total % cent
//             subtract remainder from num and divide by cent again
//              499 - 24 = 475 => 475 / 25 = 19
//              total - rem
//             division return will be put into array
//              array.push()
//  return = [19, 2, 0, 4]
// }
//}