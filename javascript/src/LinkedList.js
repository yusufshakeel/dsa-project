class LLNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor(value) {
      const node = new LLNode(value);
      this.head = node;
      this.tail = this.head;
      this.size = 1;
    }
  
    isEmpty() {
      return !this.head;
    }
  
    getSize() {
      return this.size;
    }
  
    getValues() {
      const values = [];
      let temp = this.head;
      while (temp) {
        values.push(temp.value);
        temp = temp.next;
      }
      return values;
    }
  
    // push, append, insert at the end
    insert(value) {
      const node = new LLNode(value);
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  
    insertAtIndex(index, value) {
      if (index < 0 || index >= this.size) {
        throw new Error("Invalid index.");
      }
  
      // prepend
      if (index === 0) {
        this.insertAtBeginning(value);
      }
      // insert in the middle
      else {
        const node = new LLNode(value);
        let temp = this.head;
        let current = this.head;
        for (let i = 0; i < index; i++) {
          current = temp;
          temp = temp.next;
        }
        current.next = node;
        node.next = temp;
        this.size++;
      }
    }
  
    // prepend, unshift
    insertAtBeginning(value) {
      const node = new LLNode(value);
  
      if (this.isEmpty()) {
        this.head = node;
        this.tail = this.head;
        this.size = 1;
        return;
      }
  
      node.next = this.head;
      this.head = node;
      this.size++;
    }
  
    // pop, remove from the end
    remove() {
      if (this.isEmpty()) {
        throw new Error("LinkedList is empty.");
      }
  
      let temp = this.head;
      let current = this.head;
  
      while (temp.next) {
        current = temp;
        temp = temp.next;
      }
  
      this.tail = current;
      this.tail.next = null;
      this.size--;
  
      // if there is only one node in the linked list.
      // then after we remove it, the size will be zero.
      // hence we will set both head and tail as null.
      if (this.size === 0) {
        this.head = null;
        this.tail = null;
      }
  
      return temp;
    }
  
    // shift
    removeFromBeginning() {
      if (this.isEmpty()) {
        throw new Error("LinkedList is empty.");
      }
  
      const temp = this.head;
      this.head = this.head.next;
      this.size--;
  
      if (this.size === 0) {
        this.tail = null;
      }
  
      temp.next = null;
      return temp;
    }
  
    traverse() {
      if (this.isEmpty()) {
        throw new Error("LinkedList is empty.");
      }
  
      let temp = this.head;
      while (temp) {
        console.log(temp.value);
        temp = temp.next;
      }
    }
  
    get(index) {
      if (index < 0 || index >= this.size) {
        throw new Error("Invalid index.");
      }
  
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
  
      return temp;
    }
  
    set(index, value) {
      if (index < 0 || index >= this.size) {
        throw new Error("Invalid index.");
      }
  
      let temp = this.head;
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
  
      temp.value = value;
    }
  }
  
  module.exports = { LLNode, LinkedList };