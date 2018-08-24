import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import MapBalloon, { requiredIfNoSingleImage } from "./MapBalloon";
import Pin from "./styledComponents/Pin";
import Balloon from "./styledComponents/Balloon";

Enzyme.configure({ adapter: new Adapter() });

describe("MapBalloon", () => {
  describe("click events", () => {
    let reference, event, onPinClickSpy, onBalloonClickSpy, commonProps;
    beforeEach(() => {
      reference = "some Id";
      event = {};
      onPinClickSpy = jest.fn();
      onBalloonClickSpy = jest.fn();
      commonProps = {
        reference,
        x: 400,
        y: 400,
        caption: "Paloma Orchards",
        imageSet: [
          {
            image: "https://picsum.photos/640/?random",
            name: "Romaine Lettuce"
          }
        ]
      };
    });
    afterEach(() => {
      reference = null;
      event = null;
      onPinClickSpy.mockReset();
      onBalloonClickSpy.mockReset();
      commonProps = null;
    });

    describe("onPinClick", () => {
      test("should pass the reference", () => {
        const wrapper = shallow(
          <MapBalloon onPinClick={onPinClickSpy} {...commonProps} />
        );
        wrapper.find(Pin).simulate("click", event);

        expect(onPinClickSpy).toHaveBeenCalledTimes(1);
        expect(onPinClickSpy).toHaveBeenCalledWith(reference, event);
      });
    });

    describe("onBalloonClick", () => {
      test("should pass the reference", () => {
        const wrapper = shallow(
          <MapBalloon onBalloonClick={onBalloonClickSpy} {...commonProps} />
        );
        wrapper.find(Balloon).simulate("click", event);

        expect(onBalloonClickSpy).toHaveBeenCalledTimes(1);
        expect(onBalloonClickSpy).toHaveBeenCalledWith(reference, event);
      });
    });
  });

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
