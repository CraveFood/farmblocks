import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Link from "@crave/farmblocks-link";
import Text from "@crave/farmblocks-text";

import Popover from ".";

storiesOf("Popover", module)
  .add(
    "Default - Link as a trigger",
    withInfo()(() => (
      <Popover
        trigger={<Link>Trigger</Link>}
        content={() => <Text>Popover content</Text>}
      />
    ))
  )
  .add(
    "Button as a trigger - Right aligned",
    withInfo()(() => (
      <div style={{ width: 300, textAlign: "right" }}>
        <Popover
          trigger={<button>Trigger</button>}
          content={() => <Text>Popover content</Text>}
          align="right"
        />
      </div>
    ))
  )
  .add(
    "Center aligned",
    withInfo()(() => (
      <div style={{ width: 300, textAlign: "right" }}>
        <Popover
          trigger={<Link>Trigger</Link>}
          content={() => <Text>Centered Popover</Text>}
          align="center"
        />
      </div>
    ))
  )
  .add(
    "Dismissable",
    withInfo()(() => (
      <Popover
        trigger={<Link>Trigger</Link>}
        content={dismiss => (
          <div>
            <Text>Popover content</Text>
            <button onClick={dismiss}>Dismiss</button>
          </div>
        )}
      />
    ))
  )
  .add(
    "Custom padding",
    withInfo()(() => (
      <Popover
        trigger={<button>Trigger</button>}
        content={dismiss => (
          <div>
            <Text>Popover content</Text>
            <button onClick={dismiss}>Dismiss</button>
          </div>
        )}
        padding="50px"
      />
    ))
  );
