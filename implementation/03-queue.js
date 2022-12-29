const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this.length;

    /*     if ((this.length = 0)) {
      this.tail = newNode;
      this.head = this.tail;
    } else if (this.length === 1) {
      this.tail = newNode;
      this.head.next = this.tail;
    } else if (this.length >= 2) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    */

    // Write your hypothesis on the time complexity of this method here
  }

  dequeue() {
    // Remove node from front of queue (linked list)

    if (this.length === 0) {
      return null;
    }

    const removedVal = this.head.value;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = null;
      this.head = newHead;
    }
    this.length--;
    return removedVal;

    /*     let removedNode;
    if (this.length === 0) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (this.length >= 2) {
      removedNode = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return removedNode.value; */
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  Queue,
  SinglyLinkedNode,
};
