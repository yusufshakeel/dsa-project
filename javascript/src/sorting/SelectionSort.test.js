const { SelectionSort } = require('./SelectionSort');

describe('Selection Sort', () => {
    it('should be able to sort the array in ascending order', () => {
        const arr = [5,1,3,2,4];
        expect(new SelectionSort().sort(arr)).toStrictEqual([1,2,3,4,5]);
    });
});