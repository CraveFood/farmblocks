import { requiredIfNoSingleImage } from "./MapBalloon";

describe("MapBalloon", () => {
  describe("requiredIfNoSingleImage", () => {
    test("prop should be optional if singleImage exists", () => {
      const propTypeMock = jest.fn();
      const props = {
        singleImage: "an image url"
      };
      const args = [props, "another argument"];
      requiredIfNoSingleImage(propTypeMock)(...args);

      expect(propTypeMock).toBeCalledWith(...args);
    });
    test("prop should be required if singleImage does not exists", () => {
      const propTypeMock = { isRequired: jest.fn() };
      const props = {};
      const args = [props, "another argument"];
      requiredIfNoSingleImage(propTypeMock)(...args);

      expect(propTypeMock.isRequired).toBeCalledWith(...args);
    });
  });
});
