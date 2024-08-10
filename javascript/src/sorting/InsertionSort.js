class InsertionSort {
    sort(arr) {
        for(let i = 1; i < arr.length; i++) {
            const temp = arr[i];
            let j = i - 1;
            while (temp < arr[j] && j >= 0) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
        return arr;
    }
}

module.exports = { InsertionSort };