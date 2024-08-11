import { BinarySearchTree } from "../../src/tree/BinarySearchTree";

describe("BinarySearchTree", () => {
    let bst: BinarySearchTree;

    beforeEach(() => {
        bst = new BinarySearchTree();
    });

    it("Should be able to create an empty Binary Search Tree", () => {
        expect(bst.getRoot()).toBeNull();
    });

    describe("insert", () => {
        it("Should be able to insert root node", () => {
            bst.insert(10);
            const root = bst.getRoot();
            expect(root).not.toBeNull();
            expect(root!.value).toBe(10);
        });

        it("Should be able to insert multiple nodes", () => {
            bst.insert(20);
            bst.insert(20);
            bst.insert(10);
            bst.insert(5);
            bst.insert(30);
            bst.insert(40);
            expect(bst.getRoot()).not.toBeNull();
        });
    });

    describe("contains", () => {
        it("should return false when binary search tree is empty", () => {
            expect(bst.contains(100)).toBeFalsy();
        });

        it("should return false when value is not present in the binary search tree", () => {
            bst.insert(20);
            bst.insert(10);
            bst.insert(30);
            expect(bst.contains(1)).toBeFalsy();
            expect(bst.contains(100)).toBeFalsy();
        });

        it("should return true when value is present in the binary search tree", () => {
            bst.insert(20);
            bst.insert(10);
            bst.insert(30);
            expect(bst.contains(10)).toBeTruthy();
            expect(bst.contains(20)).toBeTruthy();
            expect(bst.contains(30)).toBeTruthy();
        });
    });
});