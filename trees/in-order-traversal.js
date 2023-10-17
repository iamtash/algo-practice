function inOrderTraversal(root){
  const result = [];
  let current = root 

  let top = root
 
  let keepGoing = true
  
  while(keepGoing){
    if (!current.left || current.left.added) {
      if (!current.added) { 
        result.push(current.value)
      }
      current.added = true;
      if (current.right && !current.right.added){
        current.right.parent = current;
        current = current.right
      }
      else if (current.parent){
        current = current.parent
      }
    }
    while(current.left && !current.left.added) {
      current.left.parent = current
      current = current.left;
    }

    if (current == top && current.left.added && current.right.added) {
      keepGoing = false
    }
  }