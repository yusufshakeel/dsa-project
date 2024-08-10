const { QuickSort } = require('./QuickSort');

describe('Quick Sort', () => {
    const quickSort = new QuickSort();

    it('should be able to sort array in ascending order', () => {
        expect(quickSort.sort([5,1,3,2,4])).toStrictEqual([1,2,3,4,5]);
    });
});