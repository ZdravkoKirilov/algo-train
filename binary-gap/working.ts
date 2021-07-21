// NEW recursive function
let getGaps = function f(BinaryArray: string[], gaps: number[], counter = 0): any {
  //counter initialised by default
  // finding the first one via its index
  let firstOne = BinaryArray.indexOf('1');
  if (firstOne > -1) {
    // new array created taking a slice of original array
    // from the index of the firstOne + 1 index
    let NewBinaryArray = BinaryArray.slice(firstOne + 1); // finding second one via its index in new array slice
    let secondOne = NewBinaryArray.indexOf('1'); // accounting for no zeros
    if (firstOne > 0 && counter !== 0) {
      // adding 2 to our gaps array
      gaps.push(firstOne);
    }
    if (secondOne > 0) {
      // adding 2 to our gaps array
      gaps.push(secondOne);
    }
    counter++;
    // Pass array minus second one and gaps array
    return f(NewBinaryArray.slice(secondOne + 1), gaps, counter); //return new counter
  }
  // if gaps array length is empty return 0
  // otherwise return largest value in array
  return gaps.length > 0 ? Math.max.apply(Math, gaps) : 0;
}; // our function

function solution(N: any) {
  // Tests if our value is an integer
  // Tests if N is within range
  if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
    // Convert to binary
    const Binary = N.toString(2).split('');
    // calling our recursive function with initial empty gaps
    return getGaps(Binary, []);
  }
  // default if it doesn't meet the requirements
  return 0;
}
