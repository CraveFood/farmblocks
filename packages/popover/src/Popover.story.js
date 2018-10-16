import React from "react";
import { storiesOf, action } from "@storybook/react";
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
        onOutsideClick={action("onOutsideClick")}
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
          onOutsideClick={action("onOutsideClick")}
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
          onOutsideClick={action("onOutsideClick")}
        />
      </div>
    ))
  )
  .add(
    "Dismissable",
    withInfo()(() => (
      <Popover
        trigger={<Link>Trigger</Link>}
        onOutsideClick={action("onOutsideClick")}
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
    "onOpen/onClose",
    withInfo()(() => (
      <Popover
        trigger={<Link>Trigger</Link>}
        onOutsideClick={action("onOutsideClick")}
        onOpen={action("onOpen")}
        onClose={action("onClose")}
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
        onOutsideClick={action("onOutsideClick")}
        content={dismiss => (
          <div>
            <Text>Popover content</Text>
            <button onClick={dismiss}>Dismiss</button>
          </div>
        )}
        padding="50px"
      />
    ))
  )
  .add(
    "Nested popover",
    withInfo()(() => (
      <Popover
        trigger={<button>hit me</button>}
        onOutsideClick={action("onOutsideClick")}
        content={dismiss => (
          <div style={{ display: "flex" }}>
            <button onClick={dismiss}>dismiss foo</button>
            <Popover
              trigger={<button>other popover</button>}
              content={dismiss => (
                <button onClick={dismiss}>dismiss bar</button>
              )}
            />
          </div>
        )}
      />
    ))
  )
  .add(
    "trigger as function",
    withInfo()(() => (
      <Popover
        trigger={isVisible => (
          <Link>{`This Popover is ${isVisible ? "open" : "closed"}`}</Link>
        )}
        content={() => <Text>Popover content</Text>}
        onOutsideClick={action("onOutsideClick")}
      />
    ))
  );
