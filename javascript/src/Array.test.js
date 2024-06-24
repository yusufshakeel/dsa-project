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

    describe('Testing insertAtBeginningWithoutRightShift', () => {
        it('should be able to insert at 0th index when array is empty', () => {
            const arr = new Arr(5);
            expect(arr.isEmpty()).toBeTruthy();
            arr.insertAtBeginningWithoutRightShift(10);
            expect(arr.isEmpty()).toBeFalsy();
            expect(arr.getTailIndex()).toBe(0);
            expect(arr.getRaw()).toStrictEqual([10, null, null, null, null]);
        });

        it('should be able to insert at 0th index when array is not empty', () => {
            const arr = new Arr(5);
            arr.insert(10);
            arr.insert(20);
            arr.insert(30);
            
            expect(arr.isEmpty()).toBeFalsy();
            expect(arr.getRaw()).toStrictEqual([10, 20, 30, null, null]);

            arr.insertAtBeginningWithoutRightShift(40);

            expect(arr.getRaw()).toStrictEqual([40, 20, 30, null, null]);
        });
    });

    describe('Testing insertAtBeginningWithRightShift', () => {
        it('should be able to insert at 0th index when array is empty', () => {
            const arr = new Arr(3);

            expect(arr.getTailIndex()).toBe(-1);
            expect(arr.getRaw()).toStrictEqual([null, null, null]);

            arr.insertAtBeginningWithRightShift(10);

            expect(arr.getTailIndex()).toBe(0);
            expect(arr.getRaw()).toStrictEqual([10, null, null]);
        });

        it('should be able to insert at 0th index when array is not empty', () => {
            const arr = new Arr(3);
            arr.insert(10);
            arr.insert(20);

            expect(arr.getTailIndex()).toBe(1);
            expect(arr.getRaw()).toStrictEqual([10, 20, null]);

            arr.insertAtBeginningWithRightShift(40);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getRaw()).toStrictEqual([40, 10, 20]);
        });

        it('should be able to insert at 0th index when array is full', () => {
            const arr = new Arr(3);
            arr.insert(10);
            arr.insert(20);
            arr.insert(30);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getRaw()).toStrictEqual([10, 20, 30]);

            arr.insertAtBeginningWithRightShift(40);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getRaw()).toStrictEqual([40, 10, 20]);
        });
    });

    describe('Testing insertAtIndex', () => {
        it('should throw an error when index is less than zero.', () => {
            const arr = new Arr(3);
            expect(() => arr.insertAtIndex(-100, 1)).toThrow('Invalid index.');
        });

        it('should throw an error when index is greater than the last index of the array', () => {
            const arr = new Arr(3);
            expect(() => arr.insertAtIndex(10, 1)).toThrow('Invalid index.');
        });

        it('should be able to insert at a given index', () => {
            const arr = new Arr(3);
            arr.insert(10);

            expect(arr.getTailIndex()).toBe(0);
            expect(arr.getRaw()).toStrictEqual([10, null, null]);

            arr.insertAtIndex(2, 20);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getRaw()).toStrictEqual([10, null, 20]);
        });

        it('should be able to insert at a give index even when the array is full', () => {
            const arr = new Arr(3);
            arr.insert(10);
            arr.insert(20);
            arr.insert(30);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getRaw()).toStrictEqual([10, 20, 30]);

            arr.insertAtIndex(1, 100);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getRaw()).toStrictEqual([10, 100, 30]);
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