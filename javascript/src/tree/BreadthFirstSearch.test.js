const { BreadthFirstSearch } = require('./BreadthFirstSearch');
const { BinarySearchTree } = require('./BinarySearchTree');

describe('Breadth First Search', () => {
    const bfs = new BreadthFirstSearch();
    
    it('should return empty array if binary search tree is empty', () => {
        const bst = new BinarySearchTree();
        expect(bfs.traverse(bst)).toStrictEqual([]);
    });

    it('should return traverse result for non empty binary search tree', () => {
        const bst = new BinarySearchTree();
        bst.insert(30);
        bst.insert(20);
        bst.insert(40);
        expect(bfs.traverse(bst)).toStrictEqual([30,20,40]);
    });
});