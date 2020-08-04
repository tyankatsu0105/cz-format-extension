import Cosmiconfig from "cosmiconfig";
import { initialize } from "../../src/util/initialize";
import * as Const from "../../src/util/const";

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
    it("configプロパティにcosmiconfigのconfig値が返ってくるか", () => {
      expect(initialize()).toHaveProperty("config");
    });

    it("cosmiconfigにczfeのconfigが渡されているか", () => {
      expect((Cosmiconfig as any).cosmiconfigSync.mock.calls[0][0]).toBe(
        Const.MODULE_NAME
      );
    });

    it("cosmiconfigにconfigファイルが渡されていないとエラーがスローされるか", () => {
      expect(() => {
        initialize();
      }).toThrowError("Could not find config file.");
    });
  });
});
