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

  insert(value) {
    const node = new LLNode(value);
    this.tail.next = node;
    this.tail = node;
    this.size++;
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
}

module.exports = { LLNode, LinkedList };
