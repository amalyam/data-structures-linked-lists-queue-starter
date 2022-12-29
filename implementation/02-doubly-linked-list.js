// Node class is implemented for you, no need to look for bugs here!
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
    this.length = 0;
  }

  addToHead(val) {
    // There are bugs in this method! Fix them!!!
    // Write your hypothesis on the time complexity of this method here

    // Add node of val to head of linked list
    let newNode = new DoublyLinkedNode(val);

    if (this.length >= 1) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  addToTail(val) {
    const newNode = new DoublyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else if (this.length === 1) {
      this.tail = newNode;
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.tail.next = null;
    } else if (this.length >= 2) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = null;
      this.tail = newNode;
    }
    this.length++;
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromHead() {
    if (this.head) {
      const removedHead = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (this.length === 2) {
        this.head = this.tail;
      } else if (this.length > 2) {
        let newHead = this.head.next;
        newHead.prev = null;
        this.head = newHead;
        removedHead.prev = null;
        removedHead.next = null;
      }

      this.length--;
      return removedHead.value;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    if (this.head) {
      const removedTailVal = this.tail.value;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (this.length === 2) {
        this.tail.prev = null;
        this.head.next = null;
        this.tail = this.head;
      } else if (this.length > 2) {
        this.tail = this.tail.prev;
        this.tail.next.prev = null;
        this.tail.next = null;
      }
      this.length--;
      return removedTailVal;
    }

    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    if (this.head) return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtTail() {
    if (this.head) return this.tail.value;
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode,
};
