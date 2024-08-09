class BreadthFirstSearch {
    traverse(binarySearchTree) {
        let temp = binarySearchTree.getRoot();
        if (temp === null) {
            return [];
        }
        let queue = [temp];
        let result = [];
        while(queue.length) {
            temp = queue.shift();
            result.push(temp.value);
            if (temp.left) {
                queue.push(temp.left);
            }
            if (temp.right) {
                queue.push(temp.right);
            }
        }
        return result;
    }
}

module.exports = { BreadthFirstSearch };