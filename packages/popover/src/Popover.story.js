import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Link from "@crave/farmblocks-link";
import Text from "@crave/farmblocks-text";
import { POSITIONS } from "@crave/farmblocks-tooltip";

import Popover from ".";

storiesOf("Popover", module)
  .add("Default - Link as a trigger", () => (
    <Popover
      trigger={<Link>Trigger</Link>}
      content={() => <Text>Popover content</Text>}
      onOutsideClick={action("onOutsideClick")}
    />
  ))
  .add("Button as a trigger - Right aligned", () => (
    <div style={{ width: 300, textAlign: "right" }}>
      <Popover
        trigger={<button>Trigger</button>}
        content={() => <Text>Popover content</Text>}
        tooltipProps={{ positionX: POSITIONS.X.RIGHT }}
        onOutsideClick={action("onOutsideClick")}
      />
    </div>
  ))
  .add("Center aligned", () => (
    <div style={{ width: 300, textAlign: "right" }}>
      <Popover
        trigger={<Link>Trigger</Link>}
        content={() => <Text>Centered Popover</Text>}
        tooltipProps={{ positionX: POSITIONS.X.CENTER }}
        onOutsideClick={action("onOutsideClick")}
      />
    </div>
  ))
  .add("Disabled", () => (
    <Popover
      trigger={<Link>It won&apos;t open</Link>}
      content={() => <Text>Popover content</Text>}
      onOutsideClick={action("onOutsideClick")}
      disabled
    />
  ))
  .add("Dismissable", () => (
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
  .add("onOpen/onClose", () => (
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
  .add("Custom padding", () => (
    <Popover
      trigger={<button>Trigger</button>}
      onOutsideClick={action("onOutsideClick")}
      content={dismiss => (
        <div>
          <Text>Popover content</Text>
          <button onClick={dismiss}>Dismiss</button>
        </div>
      )}
      tooltipProps={{ padding: "50px" }}
    />
  ))
  .add("Nested popover", () => (
    <Popover
      trigger={<button>hit me</button>}
      onOutsideClick={action("onOutsideClick")}
      content={dismiss => (
        <div style={{ display: "flex" }}>
          <button onClick={dismiss}>dismiss foo</button>
          <Popover
            trigger={<button>other popover</button>}
            content={dismissSecond => (
              <button onClick={dismissSecond}>dismiss bar</button>
            )}
          />
        </div>
      )}
    />
  ))
  .add("trigger as function", () => (
    <Popover
      trigger={isVisible => (
        <Link>{`This Popover is ${isVisible ? "open" : "closed"}`}</Link>
      )}
      content={() => <Text>Popover content</Text>}
      onOutsideClick={action("onOutsideClick")}
    />
  ))
  .add("custom triggerWidth", () => (
    <Popover
      triggerWidth="300px"
      trigger={
        <div
          style={{
            background: "AliceBlue",
            padding: 20,
            textAlign: "center",
          }}
        >
          Trigger
        </div>
      }
      content={() => <Text>Popover content</Text>}
      onOutsideClick={action("onOutsideClick")}
    />
  ))
  .add("w/ Tooltip arrow", () => (
    <Popover
      showTooltipArrow
      tooltipProps={{ hideArrow: false }}
      trigger={<Link>Trigger</Link>}
      content={() => <Text>Popover content</Text>}
      onOutsideClick={action("onOutsideClick")}
    />
  ))
  .add("onBeforeOpen - 2s delay", () => (
    <Popover
      trigger={<Link>Trigger</Link>}
      content={() => <Text>Popover content</Text>}
      onBeforeOpen={() => {
        action("onBeforeOpen")();
        return new Promise(resolve => setTimeout(resolve, 2000));
      }}
      onOpen={action("onOpen")}
      onOutsideClick={action("onOutsideClick")}
    />
  ))
  .add("onBeforeOpen - prevent open", () => (
    <Popover
      trigger={<Link>Trigger</Link>}
      content={() => <Text>Popover content</Text>}
      onBeforeOpen={() => {
        action("onBeforeOpen")();
        return Promise.reject();
      }}
      onOpen={action("onOpen")}
      onOutsideClick={action("onOutsideClick")}
    />
  ))
  .add(
    "onBeforeOpen - no promise",
    () => (
      <Popover
        trigger={<Link>Trigger</Link>}
        content={() => <Text>Popover content</Text>}
        onOpen={action("onOpen")}
        onBeforeOpen={action("onBeforeOpen")}
        onOutsideClick={action("onOutsideClick")}
      />
    ),
    {
      info: `
      if \`onBeforeOpen\` don't return a promise, the popover will open immediately
      `,
    },
  )
  .add("extended style", () => (
    <Popover
      css="
        border: solid 2px lightseagreen;
        padding: 10px;
        .tooltip {
          background: cornsilk;
        }
      "
      trigger={<Link>Trigger</Link>}
      content={() => <Text>Popover content</Text>}
      onOutsideClick={action("onOutsideClick")}
    />
  ))
  .add("Tooltip positioned on top", () => (
    <Popover
      css="margin: 100px 0"
      trigger={<Link>Trigger</Link>}
      content={() => <Text>Popover content</Text>}
      onOutsideClick={action("onOutsideClick")}
      tooltipProps={{ positionY: POSITIONS.Y.TOP }}
    />
  ));
