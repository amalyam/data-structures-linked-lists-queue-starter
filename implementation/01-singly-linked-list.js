// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new SinglyLinkedNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
    //return `head: { value: ${this.head.value}, next: ${this.head.next}, length: ${this.length}`;
    // Write your hypothesis on the time complexity of this method here
  }

  addToTail(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      for (let i = 1; i < this.length; i++) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
    return this;
    //console.log(`${this}`);
    //return `head: { value: ${this.head.value}, next: ${this.head.next}, length: ${this.length}`;
  }

  removeFromHead() {
    if (this.head) {
      let removedHead = this.head;
      this.head = this.head.next;
      this.length--;

      return removedHead;
    }

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    let tail;
    if (this.head) {
      if (this.length === 1) {
        tail = this.head;
        this.head = null;
      } else {
        let penultimate = this.head;
        for (let i = 1; i < this.length - 1; i++) {
          penultimate = penultimate.next;
        }
        tail = penultimate.next;
        penultimate.next = null;
      }
      this.length--;
      return tail;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    if (this.head) return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    if (this.length > 0) {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
      console.log("NULL");
    }
    // Write your hypothesis on the time complexity of this method here
  }
}

/* let linkedList = new SinglyLinkedList();
  linkedList.addToHead("B");
  linkedList.addToHead("A"); */

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
