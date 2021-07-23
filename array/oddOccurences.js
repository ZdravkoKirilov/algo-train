function solution(A) {

  const isMissingKey = (map, key) => map[key] === undefined;

  const resultsMap = A.reduce((map, nextInteger) => {
      if (isMissingKey(map, nextInteger)) {
          map[nextInteger] = 0;
      }
      ++map[nextInteger];
      return map;
  }, {});

  const isOdd = num => (num % 2) !== 0;

  const result = Object.keys(resultsMap).find(key => isOdd(resultsMap[key]));

  return Number(result);
}