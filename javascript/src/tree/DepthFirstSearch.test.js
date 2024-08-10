const { DepthFirstSearch } = require('./DepthFirstSearch');
const { BinarySearchTree } = require('./BinarySearchTree');

describe('Depth First Search', () => {
    let bst;
    const dfs = new DepthFirstSearch();

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    describe('Pre order traversal', () => {
        it('should return empty array if binary search tree is empty', () => {
            expect(dfs.preOrderTraverse(bst)).toStrictEqual([]);
        });

        it('should return pre order traversal result for non-empty binary search tree', () => {
            bst.insert(40);
            bst.insert(20);
            bst.insert(70);
            bst.insert(10);
            bst.insert(30);
            bst.insert(50);
            bst.insert(80);
            expect(dfs.preOrderTraverse(bst)).toStrictEqual([40,20,10,30,70,50,80]);
        });
    });

    describe('Post order traversal', () => {
        it('should return empty array if binary search tree is empty', () => {
            expect(dfs.postOrderTraversal(bst)).toStrictEqual([]);
        });

        it('should return post order traversal result for non-empty binary search tree', () => {
            bst.insert(40);
            bst.insert(20);
            bst.insert(70);
            bst.insert(10);
            bst.insert(30);
            bst.insert(50);
            bst.insert(80);
            expect(dfs.postOrderTraversal(bst)).toStrictEqual([10,30,20,50,80,70,40]);
        });
    });

    describe('In order traversal', () => {
        it('should return empty array if binary search tree is empty', () => {
            expect(dfs.inOrderTraversal(bst)).toStrictEqual([]);
        });

        it('should return in order traversal result for non-empty binary search tree', () => {
            bst.insert(40);
            bst.insert(20);
            bst.insert(70);
            bst.insert(10);
            bst.insert(30);
            bst.insert(50);
            bst.insert(80);
            expect(dfs.inOrderTraversal(bst)).toStrictEqual([10,20,30,40,50,70,80]);
        });
    });
});