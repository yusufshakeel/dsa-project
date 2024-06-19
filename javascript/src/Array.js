class Arr {
    constructor(size) {
        this.arr = new Array(size);
        this.tailIndex = -1;
        this.lastArrayIndex = size - 1;
    }

    isFull() {
        return this.tailIndex === this.lastArrayIndex;
    }

    insert(value) {
        if(this.isFull()) {
            throw new Error('Array is full.');
        }
        this.arr[++this.tailIndex] = value;
    }

    traverse() {
        for(let i = 0; i <= this.tailIndex; i++) {
            console.log(this.arr[i]);
        }
    }

    reverseTraverse() {
        for(let i = this.tailIndex; i >= 0; i--) {
            console.log(this.arr[i]);
        }
    }
}

module.exports = { Arr };