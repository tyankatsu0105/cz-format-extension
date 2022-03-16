import * as Engine from './engine'
import * as Util from "./util";

jest.mock('./util', () => {
  return {
    __esModule: true,
    ...jest.requireActual<typeof Util>('./util'),
    initialize: () => {
      return {
        config: 'config'
      }
    }

  }
})

describe('engine', () => {
  describe('Name of the group', () => {
    it('should ', () => {
      const result = Engine.engine()

      expect(result).toHaveProperty('prompter');
    });
  });
});