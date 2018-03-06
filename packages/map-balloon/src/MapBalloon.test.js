import { requiredIfNoLogo } from "./MapBalloon";

describe("MapBalloon", () => {
  describe("requiredIfNoLogo", () => {
    test("prop should be optional if logo exists", () => {
      const propTypeMock = jest.fn();
      const props = {
        logo: "a logo url"
      };
      const args = [props, "another argument"];
      requiredIfNoLogo(propTypeMock)(...args);

      expect(propTypeMock).toBeCalledWith(...args);
    });
    test("prop should be required if logo does not exists", () => {
      const propTypeMock = { isRequired: jest.fn() };
      const props = {};
      const args = [props, "another argument"];
      requiredIfNoLogo(propTypeMock)(...args);

      expect(propTypeMock.isRequired).toBeCalledWith(...args);
    });
  });
});
