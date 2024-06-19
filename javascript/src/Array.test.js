const { Arr } = require('./Array');

describe('Testing Array', () => {
    beforeAll(() => {
        jest.spyOn(console, 'log');
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('Testing insert', () => {
        it('should be able to fill the array of given size', () => {
            const arr = new Arr(5);

            arr.insert(10);
            arr.insert(20);
            arr.insert(30);
            arr.insert(40);

            expect(arr.isFull()).toBeFalsy();

            arr.insert(50);

            expect(arr.isFull()).toBeTruthy();
        });

        it('should throw error when array is full and we try to insert a new value', () => {
            const arr = new Arr(3);
            expect(() => arr.insert(10)).not.toThrow();
            expect(() => arr.insert(20)).not.toThrow();
            expect(() => arr.insert(30)).not.toThrow();
            expect(arr.isFull()).toBeTruthy();
            expect(() => arr.insert(40)).toThrow();
        });
    });

    describe('Testing traverse', () => {
        it('should be able to traverse the array', () => {
            const arr = new Arr(3);
            arr.insert(10);
            arr.insert(20);
            arr.insert(30);
            arr.traverse();

            expect(console.log).toHaveBeenCalledTimes(3);
            expect(console.log).toHaveBeenCalledWith(10);
            expect(console.log).toHaveBeenCalledWith(20);
            expect(console.log).toHaveBeenCalledWith(30);
        });
    });

    describe('Testing reverseTraverse', () => {
        it('should be able to traverse the array in reverse', () => {
            const arr = new Arr(3);
            arr.insert(10);
            arr.insert(20);
            arr.insert(30);
            arr.reverseTraverse();

            expect(console.log).toHaveBeenCalledTimes(3);
            expect(console.log).toHaveBeenNthCalledWith(1, 30);
            expect(console.log).toHaveBeenNthCalledWith(2, 20);
            expect(console.log).toHaveBeenNthCalledWith(3, 10);
        });
    });
});