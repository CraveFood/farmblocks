import React from "react";
import Text, { fontSizes, fontTypes } from "@crave/farmblocks-text";

import {
  SmPlaceholder,
  MdWallet,
  SmEdit,
  LgGroceryItems,
  MdPickupLocationFilled,
} from ".";
import Icon from "./Icon";
import LgPhoto from "./svg/Actions/LgPhoto.svg";
import IconsBrowser, { Pre } from "./IconsBrowser";

export default {
  title: "Assets|Icons",
  component: Icon,
  parameters: {
    componentSubtitle: "A list of SVG icons in JSX",
  },
};

export const basic = () => <SmPlaceholder />;
export const insideText = () => (
  <>
    <Text type={fontTypes.POSITIVE}>
      <SmEdit /> The icons will inherit the color of the parent element.
    </Text>
    <Text size={fontSizes.SMALL}>
      <MdWallet /> They also inherit the text size.
    </Text>
    <Text>
      But you can override it with the <Pre>size</Pre> (
      <LgGroceryItems size={110} />) and <Pre>color</Pre> (
      <MdPickupLocationFilled color="indianred" />) props.
    </Text>
  </>
);
export const SVGFile = () => (
  <>
    <Text>You can import the original svg files intead of the JSX ones:</Text>
    <p>
      <Pre>
        {`import LgPhoto from '@crave/farmblocks-icon/svg/Actions/LgPhoto.svg';`}
      </Pre>
    </p>
    <Text>
      Doing this, you won&apos;t have the props to customize it, but you can do
      things like using it as <Pre>src</Pre> for an <Pre>img</Pre> element or as{" "}
      <Pre>background-image</Pre>:
    </Text>
    <textarea
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.9)),
          url(${LgPhoto})`,
        width: 270,
        height: 160,
      }}
    >
      Resize me
    </textarea>
  </>
);
export const allIcons = () => <IconsBrowser />;
