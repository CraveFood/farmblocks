import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import PhoneInput from ".";

export default {
  title: "Form|Phone Input",
  component: PhoneInput,
  decorators: [story => <div style={{ height: 400 }}>{story()}</div>],
  parameters: {
    componentSubtitle: "An Input component for international phone numbers",
  },
};

export const basic = () => <PhoneInput value="tel:+12133734253" />;

export const disabled = () => <PhoneInput value="tel:+12133734253" disabled />;

export const withState = () => {
  const StateExample = () => {
    const [value, setValue] = useState("");
    return (
      <PhoneInput
        onChange={newValue => {
          action("onChange")(newValue);
          setValue(newValue);
        }}
        value={value}
      />
    );
  };
  return <StateExample />;
};

export const withPriorityCountries = () => (
  <PhoneInput priorityCountries="US,CA,BR" />
);
