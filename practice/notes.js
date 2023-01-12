// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  addToTail(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
    return this.head;
  }

  listLength() {
    // Returns the length of the list

    // O(n) time
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
    //  O(1) time -> add length property
  }

  sumOfNodes() {
    // Returns the sum of the values of all the nodes
    // O(n)

    let total = 0;
    let current = this.head;
    while (current) {
      total += current.value;
      current = current.next;
    }
    return total;
  }

  averageValue() {
    // Returns the average value of all the nodes
    // O(n)

    let total = 0;
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      total += current.value;
      current = current.next;
    }
    return total / count;

    // O(n^2)?
    //return this.sumOfNodes()/this.listLength();
  }

  findNthNode(n) {
    // Returns the node at the nth index from the head
    // O(n) (O(1) if first node)

    let count = 0;
    let current = this.head;
    while (current) {
      if (count === n) return current;
      count++;
      current = current.next;
    }
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here

    //how to do this recursively?

    let mid = Math.ceil(this.listLength() / 2);

    let count = 1;
    let current = this.head;
    while (current) {
      if (count === mid) return current;
      count++;
      current = current.next;
    }
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here
    let reversedList = new SinglyLinkedList();

    for (let i = this.listLength() - 1; i >= 0; i--) {
      let lastItem = this.findNthNode(i);
      reversedList.addToTail(lastItem.value);
    }

    return reversedList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    //recursive?

    //switch head and tail
    let newHead = this.findNthNode(this.length - 1);
    let newTail = this.head;

    this.head = this.head.next;
    newHead.next = newTail;
    newTail.next = null;
    newHead.next = this.head;
    this.head = newHead;
  }
}

class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this.head;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;

    return this.head;
  }

  findMid() {
    // Returns the middle node
    // Implement this as a singly linked list then as a doubly linked list
    // How do the implementation for singly and doubly vary if at all?
    // Write your hypothesis on the time complexity of this method here

    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    let mid = Math.ceil(length / 2);

    let count = 1;
    current = this.head;
    while (current) {
      if (count === mid) return current;
      count++;
      current = current.next;
    }
  }

  reverse() {
    // Returns a new reversed version of the linked list
    // Write your hypothesis on the time complexity of this method here

    /* 
    let reversedList = new SinglyLinkedList();
    let length = this.listLength;
    let copy = new SinglyLinkedList();
    copy = this;
    let end = copy.head;
    let penultimate;

    for (let i = 1; i < length; i++) {
      while (end) {
        end = end.next;
      }
      //remove the last node on copy
      reversedList.addToTail(end.value);
    }

    return reversedList; */

    let reversedList = new DoublyLinkedList();

    let current = this.tail;
    while (current) {
      reversedList.addToTail(current.value);
      current = current.prev;
    }
    return reversedList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here

    //find the lengt of the list
    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    //switch head and tail
    let newHead = this.head.next;

    this.addToTail(this.head.value);
    this.head = newHead;

    return this;
  }
}
/* 

    let newTail = this.tail.prev;
    this.tail.next = this.head;
    this.head.prev = this.tail;
    this.head = this.tail;
    this.head.prev = null;
    this.tail = newTail;

    let moveNext = this.tail.prev.prev;
    while (moveNext) {
      newTail = this.tail.prev;
      //moveNext = this.tail.prev.prev;
      moveNext.next = this.tail;
      newTail.prev = this.tail;
      newTail.next = null;
      this.tail.next = newTail;
      this.tail.prev = moveNext;
      moveNext = this.tail.prev.prev;


    this.

    this.head.next = this.tail.prev;
    this.tail.prev.prev = this.head.
    this.tail.prev = null;
    this.head = this.tail;
    this.tail = this.head.next;

    this.addToTail(this.tail.prev); */

/*     let end = this.head;

    let current = this.tail;
    while (current) {
      let nextNode = current.prev;
      if (nextNode === end) {
        
        break;  
    }
    current.prev = nextNode;
    current.next = this.head;
    this.head = current;


      current = nextNode;
    } */

/* let list = new SinglyLinkedList();

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);

const reversed = list.reverse();

let cur = reversed.head;
for (let i = 0; i < list.listLength(); i++) {
  console.log(cur.value);
  cur = cur.next;
} */

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};


reverse() {
  // Returns a new reversed version of the linked list
  // Write your hypothesis on the time complexity of this method here
  let reversedList = new SinglyLinkedList();
  let length = this.listLength;
  let copy = new SinglyLinkedList();
  copy = this;
  let end = copy.head;
  let penultimate;

  for (let i = this.listLength;; i > 0; i++) {
    while (end) {
      end = end.next;
    }
    //remove the last node on copy
    reversedList.addToTail(end.value);
  }

  return reversedList;
}

reverse() {
  // Returns a new reversed version of the linked list
  // Write your hypothesis on the time complexity of this method here
  let reversedList = new SinglyLinkedList();
  let length = this.listLength;
  let copy = new SinglyLinkedList();
  copy = this;
  let end = copy.head;
  let penultimate;

  for (let i = 1; i < length; i++) {
    while (end) {
      end = end.next;
    }
    //remove the last node on
    reversedList.addToTail(end.value);
  }

  return reversedList;
}

/*   reverseHelper(current, reversedList) {
  if (!current.next) {
    let newNode = current.value;
    return reversedList.addToTail();
  } else if (current) {
    return this.addToTail(this.reverseHelper(current.next, reversedList));
  }
} */

/*   reverseHelper(current, length, reversedList) {
  if (!length) {
    let length = this.listLength();
  }
  if (!current.next) {
    reversed.addToTail(current);
    return;
  }
  length--;
  return reversedList + reverseHelper(current.next, length); //something + reverseHelper?
} */


reverse() {
  // Returns a new reversed version of the linked list
  // Write your hypothesis on the time complexity of this method here

  /* 
  let reversedList = new SinglyLinkedList();
  let length = this.listLength;
  let copy = new SinglyLinkedList();
  copy = this;
  let end = copy.head;
  let penultimate;

  for (let i = 1; i < length; i++) {
    while (end) {
      end = end.next;
    }
    //remove the last node on copy
    reversedList.addToTail(end.value);
  }

  return reversedList; */

  let reversedList = new DoublyLinkedList();

  let current = this.tail;
  while (current) {
    reversedList.addToTail(current.value);
    current = current.prev;
  }
  return reversedList;
}

reverseInPlace() {
  // Reverses the linked list in-place
  // Write your hypothesis on the time complexity of this method here

  //find the lengt of the list
  let length = 0;
  let current = this.head;
  while (current) {
    length++;
    current = current.next;
  }

  //switch head and tail
  let newHead = this.head.next;

  this.addToTail(this.head.value);
  this.head = newHead;

  return this;
}
}
/* 

  let newTail = this.tail.prev;
  this.tail.next = this.head;
  this.head.prev = this.tail;
  this.head = this.tail;
  this.head.prev = null;
  this.tail = newTail;

  let moveNext = this.tail.prev.prev;
  while (moveNext) {
    newTail = this.tail.prev;
    //moveNext = this.tail.prev.prev;
    moveNext.next = this.tail;
    newTail.prev = this.tail;
    newTail.next = null;
    this.tail.next = newTail;
    this.tail.prev = moveNext;
    moveNext = this.tail.prev.prev;


  this.

  this.head.next = this.tail.prev;
  this.tail.prev.prev = this.head.
  this.tail.prev = null;
  this.head = this.tail;
  this.tail = this.head.next;

  this.addToTail(this.tail.prev); */

/*     let end = this.head;

  let current = this.tail;
  while (current) {
    let nextNode = current.prev;
    if (nextNode === end) {
      
      break;  
  }
  current.prev = nextNode;
  current.next = this.head;
  this.head = current;


    current = nextNode;
  } */

/* let list = new SinglyLinkedList();

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);

const reversed = list.reverse();

let cur = reversed.head;
for (let i = 0; i < list.listLength(); i++) {
console.log(cur.value);
cur = cur.next;
} */

module.exports = {
SinglyLinkedNode,
SinglyLinkedList,
DoublyLinkedNode,
DoublyLinkedList,
};


reverse() {
// Returns a new reversed version of the linked list
// Write your hypothesis on the time complexity of this method here
let reversedList = new SinglyLinkedList();
let length = this.listLength;
let copy = new SinglyLinkedList();
copy = this;
let end = copy.head;
let penultimate;

for (let i = this.listLength;; i > 0; i++) {
  while (end) {
    end = end.next;
  }
  //remove the last node on copy
  reversedList.addToTail(end.value);
}

return reversedList;
}

reverse() {
// Returns a new reversed version of the linked list
// Write your hypothesis on the time complexity of this method here
let reversedList = new SinglyLinkedList();
let length = this.listLength;
let copy = new SinglyLinkedList();
copy = this;
let end = copy.head;
let penultimate;

for (let i = 1; i < length; i++) {
  while (end) {
    end = end.next;
  }
  //remove the last node on
  reversedList.addToTail(end.value);
}

return reversedList;
}
