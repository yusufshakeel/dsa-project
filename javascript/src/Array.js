class Arr {
    constructor(size) {
        this.arr = new Array(size);
        this.tailIndex = -1;
        this.lastArrayIndex = size - 1;
    }

    isFull() {
        return this.tailIndex === this.lastArrayIndex;
    }

    isEmpty() {
        return this.tailIndex === -1;
    }

    getSize() {
        return this.size;
    }

    getTailIndex() {
        return this.tailIndex;
    }

    getElementAtIndex(index) {
        return this.arr[index];
    }

    getRaw() {
        // deep clone
        return JSON.parse(JSON.stringify(this.arr));
    }

    insert(value) {
        if(this.isFull()) {
            throw new Error('Array is full.');
        }
        this.arr[++this.tailIndex] = value;
    }

    insertAtBeginningWithoutRightShift(value) {
        if (this.isEmpty()) {
            this.arr[++this.tailIndex] = value;
        } else {
            this.arr[0] = value;
        }
    }

    insertAtBeginningWithRightShift(value) {
        if (this.isEmpty()) {
            this.arr[++this.tailIndex] = value;
            return;
        }

        if (!this.isFull()) {
            this.tailIndex++;
        }

        for (let i = this.tailIndex; i >= 1; i--) {
            this.arr[i] = this.arr[i - 1];
        }

        this.arr[0] = value;
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