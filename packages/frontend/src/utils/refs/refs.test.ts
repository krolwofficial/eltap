import { mergeRefs } from "./refs";

describe("refs", () => {
  describe("mergeRefs", () => {
    it("should handle each ref", () => {
      const funcRef = jest.fn();
      const objectRef = { current: null };
      const testValue = {};

      const combinedRef = mergeRefs([funcRef, objectRef]);

      combinedRef(testValue);

      expect(funcRef).toHaveBeenCalledTimes(1);
      expect(funcRef).lastCalledWith(testValue);

      expect(objectRef.current).toBe(testValue);
    });
  });
});
