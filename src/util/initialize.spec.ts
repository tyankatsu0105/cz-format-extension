import Cosmiconfig from "cosmiconfig";

import * as Const from "./const";
import { initialize } from "./initialize";

jest.mock("cosmiconfig", () => {
  const fake = jest.fn();
  const search = jest
    .fn()
    .mockImplementationOnce(() => {
      return { config: "config" };
    })
    .mockImplementationOnce(() => null);
  const cosmiconfigSync = jest.fn().mockImplementation(() => ({
    clearCaches: fake,
    clearLoadCache: fake,
    clearSearchCache: fake,
    load: fake,
    search,
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
