import Cosmiconfig from "cosmiconfig";
import { initialize } from "./initialize";
import * as Const from "./const";

jest.mock("cosmiconfig", () => {
  const fake = jest.fn();
  const search = jest
    .fn()
    .mockImplementationOnce(() => {
      return { config: "config" };
    })
    .mockImplementationOnce(() => null);
  const cosmiconfigSync = jest.fn().mockImplementation(() => ({
    search,
    load: fake,
    clearLoadCache: fake,
    clearSearchCache: fake,
    clearCaches: fake,
  }));

  return {
    cosmiconfigSync,
  };
});

describe("util/initialize", () => {
  describe("initialize()", () => {
    it("return the value of cosmiconfig property", () => {
      expect(initialize()).toHaveProperty("config");
    });

    it("cosmiconfig received config of czfe", () => {
      expect((Cosmiconfig as any).cosmiconfigSync.mock.calls[0][0]).toBe(
        Const.MODULE_NAME
      );
    });

    it("error is thrown when cosmiconfig received no config", () => {
      expect(() => {
        initialize();
      }).toThrowError("Could not find config file.");
    });
  });
});
