/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.length += 1;

    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) this.tail = newNode;

    if (this.head !== null) newNode.next = this.head;

    this.length += 1;

    this.head = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      let currentHead = this.head;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return currentHead.val;
    };

    let currentTail = this.tail;
    let currentNode = this.head;

    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;
    this.length -= 1;
    return currentTail.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    // guard against empty list + one item
    // empty -> throw error
    // single -> set both head + tail to null
    if (this.length === 0) throw new Error("THATS ILLEGAL");

    if (this.length === 1) {
      const currentValue = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return currentValue;
    }

    // capture current head, make current head : next to this.head
    const currentHead = this.head.val;
    this.head = this.head.next;
    this.length--;

    // return current head
    return currentHead;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // counter value init to 0
    // while loop ending condition : counter value < idx
    // return currentNode value
    if ((idx < 0) || (idx >= this.length)) throw new Error("THATS OUT OF RANGE");
    if (this.length === 0) throw new Error("THATS ILLEGAL");

    let counter = idx;
    let currentNode = this.head;

    while (counter > 0) {
      currentNode = currentNode.next;
      counter--;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // check if idx is out of range
    if ((idx < 0) || (idx >= this.length)) throw new Error("THATS OUT OF RANGE");

    // while loop starting at 0, set newval & next
    let counter = 0;
    let currentNode = this.head;

    while (counter < idx) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode.val = val;
    return;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // check if idx is out of range


    if (idx < 0) {

      let newNode = new Node(val);
      let currentNode = this.head;
      newNode.next = currentNode;
      this.head = newNode;
      this.length++;
      return;
    }

    // if ((idx < 0) || (idx >= this.length)) throw new Error("THATS OUT OF RANGE");

    let newNode = new Node(val);

    let counter = 0;
    let currentNode = this.head;

    // loop start at 0
    // update next of idx - 1
    while (counter < idx) {
      console.log("idx", idx);
      console.log("length", this.length);

      if (counter === idx - 1) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
    // set our node at idx and update length
    currentNode.val = val;
    this.length += 1;
    return;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
