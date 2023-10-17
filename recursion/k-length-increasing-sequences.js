/*
'''
Print all K-length increasing sequences

Given two positive integers *seqLen* and *upperBound*, print all increasing sequences of length *seqLen* such that the elements in every sequence are from the first *upperBound* natural numbers. 

You can assume *seqLen* will be positive and <= *upperBound*. You may want to write a helper method to recurse easier.
 

EXAMPLE(S)
printSeq(seqLen=2, upperBound=3)
[1, 2]
[1, 3]
[2, 3]

printSeq(seqLen=3, upperBound=4)
[1, 2, 3]
[1, 2, 4]
[1, 3, 4]
[2, 3, 4]

printSeq(seqLen=1, upperBound=5)
[1]
[2]
[3]
[4]
[5]
 
'''
*/

function printSeq(seqLen, upperBound, currentSeq = []) {
  if (currentSeq.length == seqLen) {
    return console.log(currentSeq)
  }

  // determine the range of valid values that can be pushed to currentSeq
  // has to be greater than the value to the left
  // has to less than or equal to realUpper, where realUpper is the maximum value 
  // it can be while still allowing all subsequent elements to be increasing integers
  const realUpper = upperBound - seqLen + currentSeq.length + 1;
  const lower = (currentSeq[currentSeq.length - 1] || 0) + 1

  for (let i = lower; i <= realUpper; i++) {
    printSeq(seqLen, upperBound, [...currentSeq, i]);
  }
}