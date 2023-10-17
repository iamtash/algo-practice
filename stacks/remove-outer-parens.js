/*
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

    For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

 

Constraints:

    1 <= s.length <= 105
    s[i] is either '(' or ')'.
    s is a valid parentheses string.

*/

// (()())(())

// (()())(())(()(()))

// ()()

// ((()())(()()))
// 01222211222210
// 1(()())
//  (()())(()())

// original
function removerOuterParens(s) {
  let result = '';
  let level = 0;
  for (let i = 0; i < s.length; i ++) {
    if (level > 0) {
      result += (s[i]);
    }
    if (s[i] == '(' && s[i+1] == '(') {
      level ++;
    } else if (s[i] == ')' && s[i+1] == ')') {
      level --;
    }
  }
  return result;
}

// optimized
function removerOuterParens(s) {
  let result = '';
  let level = 0;
  for (let p of s) {
    if (p == '(') {
      level ++;
      if (level > 1) {
        result += p;
      }
    } else {
      level --;
      if (level > 0) {
        result += p;
      }
    }
  }
  return result;
}

function removerOuterParens(s) {
  let result = '';
  let level = 0;
  for (let p of s) { 
    if (p == ')') {
      level --;
    }
    if (level > 0) {
      result += p;
    }
    if (p == '(') {
      level ++;
    }
  }
  return result;
}

console.log(removerOuterParens('()()'));
console.log(removerOuterParens('()()') == '');

console.log(removerOuterParens('(()())(())'));
console.log(removerOuterParens('(()())(())') == "()()()");

console.log(removerOuterParens("(()())(())(()(()))"))
console.log(removerOuterParens("(()())(())(()(()))") == "()()()()(())")

