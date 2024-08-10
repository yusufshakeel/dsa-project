class QuickSort {
    swap(arr, firstIndex, secondIndex) {
        const temp = arr[firstIndex];
        arr[firstIndex] = arr[secondIndex];
        arr[secondIndex] = temp;
    }

    pivot(arr, pivotIndex, lastIndex) {
        let swapIndex = pivotIndex;
        for(let i = pivotIndex + 1; i <= lastIndex; i++) {
            if(arr[i] < arr[pivotIndex]) {
                swapIndex++;
                this.swap(arr, swapIndex, i);
            }
        }
        this.swap(arr, pivotIndex, swapIndex);
        return swapIndex;
    }

    sort(arr) {
        const recursive = (arr, left, right) => {
            if (left < right) {
                const pivotIndex = this.pivot(arr, left, right);
                recursive(arr, left, pivotIndex  - 1);
                recursive(arr, pivotIndex + 1, right);
            }
            return arr;
        };
        return recursive(arr, 0, arr.length - 1);
    }
}

module.exports = { QuickSort };