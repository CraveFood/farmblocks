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

export const basic = () => (
  <PhoneInput value="tel:+12133734253" label="Phone" />
);

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
        label={`Value -> "${value}"`}
      />
    );
  };
  return <StateExample />;
};

export const withPriorityCountries = () => (
  <PhoneInput priorityCountries="US,CA,BR" />
);

export const changingDefaultCountry = () => {
  const Example = () => {
    const [defaultCountry, setDefaultCountry] = useState("US");
    const [value, setValue] = useState("");

    return (
      <>
        <PhoneInput
          onChange={newValue => {
            action("onChange")(newValue);
            setValue(newValue);
          }}
          value={value}
          defaultCountry={defaultCountry}
        />

        <button onClick={() => setDefaultCountry("BR")}>default to BR</button>
        <button onClick={() => setDefaultCountry("US")}>default to US</button>
        <button onClick={() => setValue("tel:+447400123456")}>
          set number
        </button>
        <button onClick={() => setValue("")}>clear number</button>
      </>
    );
  };
  return <Example />;
};

export const customTexts = () => (
  <PhoneInput
    textSelectCountryTitle="Selecione o país"
    textSelectCountryCancel="Cancelar"
    textSelectCountrySearch="Pesquisar"
  />
);

export const withTooltipProps = () => (
  <>
    <div style={{ height: 360 }} />
    <PhoneInput
      tooltipProps={{
        positionY: "top",
      }}
    />
  </>
);
