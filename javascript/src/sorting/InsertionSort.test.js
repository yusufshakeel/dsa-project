const { InsertionSort } = require('./InsertionSort');

describe('Insertion Sort', () => {
    it('should be able to sort an array in ascending order', () => {
        const arr = [5,1,3,2,4];
        expect(new InsertionSort().sort(arr)).toStrictEqual([1,2,3,4,5]);
    });
});