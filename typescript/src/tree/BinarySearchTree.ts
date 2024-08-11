class BSTNode {
    public value: number;
    public left: BSTNode | null;
    public right: BSTNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    private root: BSTNode | null;

    constructor() {
        this.root = null;
    }

    getRoot() {
        return this.root;
    }

    private setRoot(node: BSTNode) {
        this.root = node;
    }

    insert(value: number) {
        const newNode = new BSTNode(value);

        let currentNode = this.getRoot();

        if (!currentNode) {
            this.setRoot(newNode);
            return this;
        }

        while(currentNode) {
            if (newNode.value === currentNode.value) {
                return this;
            }
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    contains(value: number): boolean {
        let node = this.getRoot();
        while(node) {
            if (value === node.value) {
                return true;
            }
            if (value < node.value) {
                node = node.left;
            }
            else {
                node = node.right;
            }
        }
        return false;
    }
}