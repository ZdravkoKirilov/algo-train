// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  function isInteger(input) {
      return input === parseInt(input, 10);
  }

  function isInRange(input) {
      return input >= 0 && input <= 2147483647;
  }

  function turnToBinary(input) {
      return input.toString(2);
  }

  const gaps = [];

  function getGaps(fromIndex, currentArray) {
      const nextArray = currentArray.slice(fromIndex + 1);

      const nextGap = nextArray.indexOf('1');

      if (nextGap > 0) {
          gaps.push(nextGap);
          getGaps(nextGap, nextArray.slice(nextGap + 1))
      }
      
  }

  if (isInteger(N) && isInRange(N)) {
      const startArray = turnToBinary(N).split('');

      const startIndex = startArray.indexOf('1');

      if (startIndex >= 0) {
          getGaps(startIndex, startArray);
      }

      return gaps.length > 0 ? Math.max.apply(Math, gaps) : 0;
  }

  return 0;
}
