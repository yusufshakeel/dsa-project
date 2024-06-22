const { LinkedList } = require("./LinkedList");

describe("Testing LinkedList", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  describe("Testing insert", () => {
    it("should be able to insert new node", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      expect(ll.getSize()).toBe(2);
    });
  });

  describe("Testing remove", () => {
    it("should be able to remove node", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);

      expect(ll.remove().value).toBe(30);
      expect(ll.getSize()).toBe(2);

      expect(ll.remove().value).toBe(20);
      expect(ll.getSize()).toBe(1);

      expect(ll.remove().value).toBe(10);
      expect(ll.getSize()).toBe(0);
    });

    it("should throw error when trying to remove node from an empty linked list", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);
      expect(() => ll.remove()).not.toThrow();
      expect(() => ll.remove()).not.toThrow();
      expect(() => ll.remove()).not.toThrow();
      expect(ll.getSize()).toBe(0);
      expect(() => ll.remove()).toThrow("LinkedList is empty.");
    });
  });

  describe("Testing traverse", () => {
    it("should be able to traverse", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.traverse();

      expect(ll.getSize()).toBe(2);
      expect(console.log).toHaveBeenCalledTimes(2);
      expect(console.log).toHaveBeenNthCalledWith(1, 10);
      expect(console.log).toHaveBeenNthCalledWith(2, 20);
    });

    it("should throw error when trying to traverse an empty linked list", () => {
      const ll = new LinkedList(10);
      ll.remove();
      expect(ll.getSize()).toBe(0);
      expect(() => ll.traverse()).toThrow("LinkedList is empty.");
    });
  });
});
