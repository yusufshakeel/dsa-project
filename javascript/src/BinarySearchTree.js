class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }

    insert(value) {
        const node = new BSTNode(value);
        if (this.getRoot() === null) {
            this.root = node;
            return this;
        }

        let temp = this.getRoot();

        while(true) {
            if (node.value === temp.value) {
                return this;
            }

            // insert in the left subtree
            if (node.value < temp.value) {
                if (temp.left === null) {
                    temp.left = node;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = node;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        let temp = this.getRoot();
        while(temp) {
            if (value === temp.value) {
                return true;
            }
            if (value < temp.value) {
                temp = temp.left;
            }
            else {
                temp = temp.right;
            }
        }
        return false;
    }
}

module.exports = { BSTNode, BinarySearchTree };