/*
'''
Print all K-length binary strings without consecutive 1s

Given an integer *maxLen*, print all binary strings of size *maxLen* that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume *maxLen* > 0.
 

EXAMPLE(S)
printBinaryWithoutConsecutive1s(maxLen=2)
00
01
10

printBinaryWithoutConsecutive1s(maxLen=3)
000
001
010
100
101
 
'''
*/

function printBinaryWithoutConsecutive1s(maxLen, currentStr = '') {
  if (currentStr.length == maxLen) {
    return console.log(currentStr)
  }

  const lastChar = currentStr[currentStr.length - 1] || ''
  
  if (lastChar == '0' || lastChar == '') {
    printBinaryWithoutConsecutive1s(maxLen, currentStr + '0')
    printBinaryWithoutConsecutive1s(maxLen, currentStr + '1')
  } else if (lastChar === '1') {
    printBinaryWithoutConsecutive1s(maxLen, currentStr + '0')
  }
}