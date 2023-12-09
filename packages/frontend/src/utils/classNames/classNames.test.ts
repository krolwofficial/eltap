import { classNames } from "./classNames";

describe("classNames", () => {
  it("should join its arguments with a space", () => {
    expect(classNames("foo", "bar")).toBe("foo bar");
  });

  it("should omit falsy values", () => {
    expect(classNames("foo", false, null, undefined, "bar")).toBe("foo bar");
  });
});
