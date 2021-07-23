const isArrayOfLength = (input, length) => {
  return Array.isArray(input) && input.length <= length;
}

const isIntInRange = (input, min, max) => {
  return input === parseInt(input, 10) && input >= min && input <= max;
}

const rotateArray = (inputArray) => {
  const lastElem = inputArray.pop();
  const newArray = [lastElem, ...inputArray];
  return newArray;
};


function solution(A, K) {

  if (isIntInRange(K, 0, 100) && isArrayOfLength(A, 100) && input.length > 1) {
      let result = [...A];

      for (let i = 0; i < K; i++) {
          result = rotateArray(result);
      }
      return result;
  }
  return A || [];
}