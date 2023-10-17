function validParentheses(s) {
  const openers = [];
  const match = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (const char of s) {
    if (char in match) {
      openers.push(char);
    } else {
      if (match[openers[openers.length - 1]] == char) {
        openers.pop();
      } else {
        return false;
      }
    }
  }
  return openers.length == 0;
}

function validParentheses(s) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (const char of s) {
    if (char in pairs) {
      stack.push(pairs[char]);
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length == 0;
}