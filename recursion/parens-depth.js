function solution(parenString, depth) {
  if (depth === 0) {
    return parenString;
  }
  
  return solution(outerParenContents(parenString), depth - 1)
}

function outerParenContents(str) {
  let foundLeft = false;
  let foundRight = false;
  let left = 0;
  let right = str.length - 1;

  while (!foundLeft && !foundRight && left < str.length - 1) {
    if (!foundLeft && str[left] === '(') {
      foundLeft = true;
    } else {
      left ++;
    }

    if (!foundRight && str[right] === ')') {
      foundRight = true;
    } else {
      right --;
    }
  }

  return str.slice(left + 1, right)
}
