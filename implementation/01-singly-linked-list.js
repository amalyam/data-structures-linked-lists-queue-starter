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
    this.tail = this.head;
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
      let curr = this.head;
      while (curr) {
        if (!curr.next) {
          curr.next = newNode;
          break;
        }
        curr = current.next;
      }
    }
    this.length++;
    return this;
    //console.log(`${this}`);
    //return `head: { value: ${this.head.value}, next: ${this.head.next}, length: ${this.length}`;
  }

  removeFromHead() {
    let removedHead;
    if (this.head) {
      let headNode = this.head.next;
      removedHead = this.head;
      removedHead.next = null;
      this.head = headNode;
      this.length--;
    }
    return removedHead;

    // Write your hypothesis on the time complexity of this method here
  }

  removeFromTail() {
    if (this.head) {
      let removedNode = null;
      if (!this.head.next) {
        removedNode = this.head;
        this.head = null;
      } else {
        let current = this.head;
        while (current) {
          if (!current.next.next) {
            removedNode = current.next;
            current.next = null;
            this.length--;
            return removedNode;
          }
          current = current.next;
        }
      }
      return removedNode;
    }
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    if (!this.head) {
      return undefined;
    }
    return this.head.value;
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    if (this.head) {
      if (this.head.next) {
        let current = this.head;
        while (current) {
          process.stdout.write(`${current.value} -> `);
          current = current.next;
        }
      } else {
        console.log(`${this.head}`);
      }
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
