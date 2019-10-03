import React from "react";

import PhoneInput from ".";

export default { title: "Phone Input", component: PhoneInput };

export const enabled = () => <PhoneInput value="tel:+12133734253" />;

export const disabled = () => <PhoneInput value="tel:+12133734253" disabled />;
