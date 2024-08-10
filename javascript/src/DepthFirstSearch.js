class DepthFirstSearch {
    preOrderTraverse(binarySearchTree) {
        let temp = binarySearchTree.getRoot();
        if (temp === null) {
            return [];
        }
        let result = [];
        const traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(temp);
        return result;
    }
}

module.exports = { DepthFirstSearch };