const { LinkedList } = require("./LinkedList");

describe("Testing LinkedList", () => {
  beforeAll(() => {
    jest.spyOn(console, "log");
  });

  describe("Testing insert", () => {
    it("should be able to insert new node", () => {
      const ll = new LinkedList(10);
      ll.insert(20);
      ll.traverse();
      expect(console.log).toHaveBeenCalledTimes(2);
      expect(console.log).toHaveBeenNthCalledWith(1, 10);
      expect(console.log).toHaveBeenNthCalledWith(2, 20);
    });
  });
});
