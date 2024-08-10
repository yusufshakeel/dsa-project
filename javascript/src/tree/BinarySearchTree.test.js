const { BSTNode, BinarySearchTree } = require('./BinarySearchTree');

describe('Testing Binary Search Tree', () => {
    let bst;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getRoot', () => {
        it('Should be able to create an empty Binary Search Tree', () => {
            expect(new BinarySearchTree().getRoot()).toBeNull();
        });

        it('should be able to insert the root node', () => {
            bst.insert(10);
            expect(bst.getRoot()).toBeInstanceOf(BSTNode);
            expect(bst.getRoot().value).toBe(10);
        });
    });

    describe('insert', () => {
        it('should be able to insert multiple nodes', () => {
            bst.insert(20);
            bst.insert(20);
            bst.insert(10);
            bst.insert(12);
            bst.insert(30);
            bst.insert(28);
            const root = bst.getRoot();
            const left = root.left;
            const right = root.right;
            expect(root.value).toBe(20);
            expect(left.value).toBe(10);
            expect(right.value).toBe(30);
        });
    });

    describe('contains', () => {
        it('should return false when binary search tree is empty', () => {
            expect(bst.contains(100)).toBeFalsy();
        });

        it('should return false when value is not present in the binary search tree', () => {
            bst.insert(20);
            bst.insert(10);
            bst.insert(30);
            expect(bst.contains(1)).toBeFalsy();
            expect(bst.contains(100)).toBeFalsy();
        });

        it('should return true when value is present in the binary search tree', () => {
            bst.insert(20);
            bst.insert(10);
            bst.insert(30);
            expect(bst.contains(10)).toBeTruthy();
            expect(bst.contains(20)).toBeTruthy();
            expect(bst.contains(30)).toBeTruthy();
        });
    });
});