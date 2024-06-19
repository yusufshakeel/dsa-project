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

    describe('Testing insertAtBeginningWithoutRightShift', () => {
        it('should be able to insert at the 0th index even if the array has no element', () => {
            const arr = new Arr(3);

            expect(arr.isEmpty()).toBeTruthy();
            expect(arr.getTailIndex()).toBe(-1);

            arr.insertAtBeginningWithoutRightShift(10);

            expect(arr.isEmpty()).toBeFalsy();
            expect(arr.getTailIndex()).toBe(0);
        });

        it('should be able to insert at the 0th index even if the array has some elements', () => {
            const arr = new Arr(3);
            arr.insert(10);
            arr.insert(20);
            arr.insert(30);

            expect(arr.getElementAtIndex(0)).toBe(10);
            expect(arr.getTailIndex()).toBe(2);

            arr.insertAtBeginningWithoutRightShift(100);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getElementAtIndex(0)).toBe(100);
        });
    });

    describe('Testing insertAtBeginningWithRightShift', () => {
        it('should only insert the new element at 0th index when array is empty', () => {
            const arr = new Arr(5);

            expect(arr.isEmpty()).toBeTruthy();
            expect(arr.getTailIndex()).toBe(-1);

            arr.insertAtBeginningWithRightShift(10);

            expect(arr.getElementAtIndex(0)).toBe(10);
            expect(arr.getTailIndex()).toBe(0);
        });

        it('should insert the new element at 0th index and also right shift the existing elements', () => {
            const arr = new Arr(3);
            arr.insert(10);

            expect(arr.getTailIndex()).toBe(0);

            arr.insertAtBeginningWithRightShift(100);

            expect(arr.getTailIndex()).toBe(1);
            expect(arr.getRaw()).toStrictEqual([100, 10, null]);

            arr.insertAtBeginningWithRightShift(200);

            expect(arr.getTailIndex()).toBe(2);
            expect(arr.getRaw()).toStrictEqual([200, 100, 10]);
        });
    });
});