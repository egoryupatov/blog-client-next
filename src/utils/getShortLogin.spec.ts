import { getShortLogin } from "@/utils/getShortLogin";

describe("getShortLogin", () => {
  it("should return the original login if it is shorter than or equal to 15 characters", () => {
    const login = "john.doe";
    expect(getShortLogin(login)).toBe(login);
  });

  it("should return the first 15 characters of the login plus '...' if it is longer than 15 characters", () => {
    const login = "verylongloginname123";
    expect(getShortLogin(login)).toBe("verylongloginnam...");
  });

  it("should handle edge cases correctly, such as an empty string as input", () => {
    expect(getShortLogin("")).toBe("");
  });
});
