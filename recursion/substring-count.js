/*
'''
❓ PROMPT
Given a string and a non-empty substring *sub*, compute recursively the number of times that sub appears in the string, without the substrings overlapping.

Example(s)
strCount("catcowcat", "cat") == 2
strCount("catcowcat", "cow") == 1
strCount("catcowcat", "dog") == 0
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function strCount(word,  sub) {
def strCount(word: str,  sub: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

// initial
function strCount(str, sub) {
  if (sub === "") {
    return 0;
  }

  const asArr = str.split('');
  let count = 0;

  function helper(arr) {
    if (arr.length == 0) {
      return count;
    }

    const test = arr.slice(0, sub.length);
    if (test.join('') === sub) {
      arr.splice(0, sub.length);
      count ++;
    } else {
      arr.splice(0, 1);
    }
    return helper(arr);
  }

  return helper(asArr);
}

// improved base case
function strCount(str, sub) {
  if (sub === "") {
    return 0;
  }

  let count = 0;

  function helper(str) {
    if (str.length < sub.length) {
      return count;
    }

    const test = str.slice(0, sub.length);
    if (test === sub) {
      str = str.slice(sub.length);
      count ++;
    } else {
      str = str.slice(1);
    }
    return helper(str);
  }

  return helper(str);
}

// formation's solution
function strCount(str, sub) {
  if (str.length < sub.length || sub.length == 0) {
    return 0;
  }

  if (str.startsWith(sub)) {
    return 1 + strCount(str.slice(sub.length), sub);
  } else {
    return 0 + strCount(str.slice(1), sub);
  }
}

console.log(strCount("catcowcat", "cat") == 2)
console.log(strCount("catcowcat", "cow") == 1)
console.log(strCount("catcowcat", "dog") == 0)

console.log(strCount("dog", "") == 0)

// empty word and non-empty sub
console.log(strCount("", "dog") == 0)

// 1 character word
console.log(strCount("a", "a") == 1)
console.log(strCount("a", "ab") == 0)

// word matches sub
console.log(strCount("dog", "dog") == 1)

// word is the sub twice
console.log(strCount("dogdog", "dog") == 2)

// word contains sub somewhere
console.log(strCount("hellodoghello", "dog") == 1)

// word has sub at the beginning and end
console.log(strCount("doghellodog", "dog") == 2)

// word has sub followed by some text followed by sub
console.log(strCount("hellodoghellodog", "dog") == 2)

// word has overlapping sub
console.log(strCount("dadad", "dad") == 1)

console.log(strCount("catcowcat", "cat") == 2)
console.log(strCount("catcowcat", "cow") == 1)
console.log(strCount("catcowcat", "dog") == 0)
console.log(strCount("cacatcowcat", "cat") == 2)
console.log(strCount("xyx", "x") == 2)
console.log(strCount("iiiijj", "i") == 4)
console.log(strCount("iiiijj", "ii") == 2)
console.log(strCount("iiiijj", "iii") == 1)
console.log(strCount("iiiijj", "j") == 2)
console.log(strCount("iiiijj", "jj") == 1)
console.log(strCount("aaabababab", "ab") == 4)
console.log(strCount("aaabababab", "aa") == 1)
console.log(strCount("aaabababab", "a") == 6)
console.log(strCount("aaabababab", "b") == 4)
