class MergeSort {
    merge(arr1, arr2) {
        let result = [];
        let i = 0;
        let j = 0;
        while(i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }
        while(i < arr1.length) {
            result.push(arr1[i]);
            i++;
        }
        while(j < arr2.length) {
            result.push(arr2[j]);
            j++;
        }
        return result;
    }

    sort(arr) {
        if(arr.length === 1) {
            return arr;
        }

        const midIndex = Math.floor(arr.length / 2);
        const leftSubArray = this.sort(arr.slice(0, midIndex));
        const rightSubArray = this.sort(arr.slice(midIndex));

        return this.merge(leftSubArray, rightSubArray);
    }
}

module.exports = { MergeSort };