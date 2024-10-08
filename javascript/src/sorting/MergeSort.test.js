const { MergeSort } = require('./MergeSort');

describe('Merge Sort', () => {
    const mergeSort = new MergeSort();

    it('should be able to merge two arrays', () => {
        expect(mergeSort.merge([1,3,5], [2,6,7])).toStrictEqual([1,2,3,5,6,7])
        expect(mergeSort.merge([1,3,5,4], [2])).toStrictEqual([1,2,3,5,4])
    });

    it('should be able to sort array in ascending order', () => {
        expect(mergeSort.sort([5,1,3,2,4])).toStrictEqual([1,2,3,4,5]);
    });
});