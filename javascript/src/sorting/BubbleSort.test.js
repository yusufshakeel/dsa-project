const { BubbleSort } = require('./BubbleSort');

describe('Bubble Sort', () => {
    it('should be able to sort an array in ascending order', () => {
        const arr = [5,1,3,4,2];
        expect(new BubbleSort().sort(arr)).toStrictEqual([1,2,3,4,5]);
    });
});