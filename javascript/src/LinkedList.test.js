const { LinkedList } = require("./LinkedList");

describe("Testing LinkedList", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  describe("Testing removeFromBeginning", () => {
    it("should be able to remove node", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);

      expect(ll.removeFromBeginning().value).toBe(10);
      expect(ll.getSize()).toBe(2);

      expect(ll.removeFromBeginning().value).toBe(20);
      expect(ll.getSize()).toBe(1);

      expect(ll.removeFromBeginning().value).toBe(30);
      expect(ll.getSize()).toBe(0);
    });

    it("should throw error when trying to remove node from an empty linked list", () => {
      const ll = new LinkedList(10);

      expect(ll.getSize()).toBe(1);
      expect(() => ll.removeFromBeginning()).not.toThrow();
      expect(ll.getSize()).toBe(0);
      expect(() => ll.removeFromBeginning()).toThrow("LinkedList is empty.");
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

  describe("Testing insertAtBeginning", () => {
    it("should be able to insert a new node at the beginning", () => {
      const ll = new LinkedList(10);
      ll.insertAtBeginning(20);
      ll.traverse();

      expect(ll.getSize()).toBe(2);
      expect(console.log).toHaveBeenCalledTimes(2);
      expect(console.log).toHaveBeenNthCalledWith(1, 20);
      expect(console.log).toHaveBeenNthCalledWith(2, 10);
    });

    it("should be able to insert a new node at the beginning even when linked list is empty", () => {
      const ll = new LinkedList(10);
      ll.remove();
      ll.insertAtBeginning(20);
      ll.traverse();

      expect(ll.getSize()).toBe(1);
      expect(console.log).toHaveBeenCalledTimes(1);
      expect(console.log).toHaveBeenNthCalledWith(1, 20);
    });
  });

  describe("Testing get", () => {
    it("should throw error if index is invalid", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);
      expect(() => ll.get(-10)).toThrow("Invalid index.");
      expect(() => ll.get(4)).toThrow("Invalid index.");
    });

    it("should be able to get value at the given index", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.get(1).value).toBe(20);
    });
  });

  describe("Testing set", () => {
    it("should throw error if index is invalid", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);
      expect(() => ll.set(-10, 100)).toThrow("Invalid index.");
      expect(() => ll.set(4, 100)).toThrow("Invalid index.");
    });

    it("should be able to set value at a given index", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);

      ll.set(1, 100);

      expect(ll);
    });
  });

  describe("Testing insertAtIndex", () => {
    it("should throw error if index is invalid", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);
      expect(() => ll.insertAtIndex(-10, 100)).toThrow("Invalid index.");
      expect(() => ll.insertAtIndex(4, 100)).toThrow("Invalid index.");
    });

    it("should be able to insert at the beginning", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);

      ll.insertAtIndex(0, 100);

      expect(ll.getSize()).toBe(4);
      expect(ll.getValues()).toStrictEqual([100, 10, 20, 30]);
    });

    it("should be able to insert at the end", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);

      ll.insertAtIndex(2, 100);

      expect(ll.getSize()).toBe(4);
      expect(ll.getValues()).toStrictEqual([10, 20, 100, 30]);
    });

    it("should be able to insert between start and end index", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.insert(30);

      expect(ll.getSize()).toBe(3);

      ll.insertAtIndex(1, 100);

      expect(ll.getSize()).toBe(4);
      expect(ll.getValues()).toStrictEqual([10, 100, 20, 30]);
    });
  });
});