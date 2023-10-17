function isPalindrome(head) {
    if (!head) {
        return true
      }
    
      let forwards = []
      let fast = head
      let slow = head
    
      while (fast.next && fast.next.next) {
        forwards.push(slow.val)
        fast = fast.next.next
        slow = slow.next
      }
    
      if (fast.next) {
        // even number of nodes
        forwards.push(slow.val)
      }
  
      // at this point, the array representation of the first half of the palindrome is built
    
      slow = slow.next 
    
      let i = forwards.length - 1
      while (slow) {
        if (slow.val != forwards[i]) {
          return false
        }
        slow = slow.next
        i--
      }
    
      return true
  }