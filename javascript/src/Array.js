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

    insertAtIndex(index, value) {
        if (index < 0 || index > this.lastArrayIndex) {
            throw new Error('Invalid index.');
        }
        
        this.arr[index] = value;

        if (this.tailIndex < index) {
            this.tailIndex = index;
        }
    }

    delete() {
        if (this.isEmpty()) {
            throw new Error('Array is empty.');
        }

        const deletedElement = this.arr[this.tailIndex];
        this.arr[this.tailIndex--] = null;
        return deletedElement;
    }

    deleteFromBeginning() {
        if (this.isEmpty()) {
            throw new Error('Array is empty.');
        }

        const deletedElement = this.arr[0];

        for(let i = 1; i <= this.tailIndex; i++) {
            this.arr[i - 1] = this.arr[i];
        }

        this.arr[this.tailIndex--] = null;

        return deletedElement;
    }

    deleteAtIndex(index) {
        if (this.isEmpty()) {
            throw new Error('Array is empty.');
        }

        if (index < 0 || index > this.lastArrayIndex) {
            throw new Error('Invalid index.');
        }

        if (index > this.tailIndex) {
            throw new Error('Provided index is greater than tail index.');
        }

        const deletedElement = this.arr[index];

        for(let i = index + 1; i <= this.tailIndex; i++) {
            this.arr[i - 1] = this.arr[i];
        }

        this.arr[this.tailIndex--] = null;

        return deletedElement;
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

    reverse() {
        if (this.isEmpty()) {
            throw new Error('Array is empty.');
        }
        
        for(let start = 0, end = this.tailIndex; start < end; start++, end--) {
            const temp = this.arr[start];
            this.arr[start] = this.arr[end];
            this.arr[end] = temp;
        }
    }
}

module.exports = { Arr };