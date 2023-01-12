// Basic implementation of Nodes and Linked List for you to use

function generateId() {
  return Math.random();
}

class SinglyLinkedNode {
  constructor(val) {
    this.id = generateId();
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

    let current = this.head;
    while (current) {
      let newNode = new SinglyLinkedNode(current.value);
      newNode.next = reversedList.head;
      reversedList.head = newNode;
      current = current.next;
    }

    /*    inefficient:
      for (let i = this.listLength() - 1; i >= 0; i--) {
      let lastItem = this.findNthNode(i);
      reversedList.addToTail(lastItem.value);
    } */

    return reversedList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here

    //improve pointers?

    let prev = null;
    let middle = this.head;
    let end = middle.next;

    while (middle) {
      middle.next = prev;
      prev = middle;
      middle = end;
      end = end?.next ?? null;
    }

    this.head = prev;
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
    let reversedList = new DoublyLinkedList();

    let current = this.head.next;
    let newNode = new DoublyLinkedNode(this.head.value);
    reversedList.head = newNode;
    reversedList.tail = reversedList.head;

    while (current) {
      let newNode = new DoublyLinkedNode(current.value);
      newNode.next = reversedList.head;
      reversedList.head.prev = newNode;
      reversedList.head = newNode;

      current = current.next;
    }

    return reversedList;
  }

  reverseInPlace() {
    // Reverses the linked list in-place
    // Write your hypothesis on the time complexity of this method here
    //O(n)
    let current = this.head;

    while (current) {
      let nextNode = current.next;
      current.next = current.prev;
      current.prev = nextNode;
      current = current.prev;
    }

    current = this.head;
    this.head = this.tail;
    this.tail = current;
  }
}

let dll = new DoublyLinkedList();

dll.addToTail(1);
dll.addToTail(2);
dll.addToTail(3);
dll.addToTail(4);
dll.addToTail(5);
dll.addToTail(6);
/*
list.addToTail(7);
list.addToTail(8);
list.addToTail(9);
list.addToTail(10);
list.addToTail(11);
list.addToTail(12);
list.addToTail(13);
list.addToTail(14);

dll.reverseInPlace();
*/

dll.reverseInPlace();

module.exports = {
  SinglyLinkedNode,
  SinglyLinkedList,
  DoublyLinkedNode,
  DoublyLinkedList,
};
