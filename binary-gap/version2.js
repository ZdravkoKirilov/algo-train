function isInteger(input) {
  return input === parseInt(input, 10);
}

function isInRange(input) {
  return input >= 0 && input <= 2147483647;
}

function toBinaryArray(input) {
  return input.toString(2).split("");
}

function fillGaps(sourceArray, gaps) {
  const nextIndex = sourceArray.indexOf("1");

  if (nextIndex >= 0) {
    gaps.push(nextIndex);
    fillGaps(sourceArray.slice(nextIndex + 1), gaps);
  }
}

function solution(input) {
  if (isInteger(input) && isInRange(input)) {
    const asBinaryArray = toBinaryArray(input);
    const firstIndex = asBinaryArray.indexOf("1");
    const gaps = [];

    if (firstIndex >= 0 && firstIndex + 1 !== asBinaryArray.length) {
      const secondIndex = asBinaryArray.indexOf("1");

      if (secondIndex >= 0) {
        gaps.push(secondIndex);
        fillGaps(asBinaryArray.slice(secondIndex + 1), gaps);
      }

      return gaps.length > 0 ? Math.max.apply(Math, gaps) : 0;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
