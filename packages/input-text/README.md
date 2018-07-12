# Farmblocks Text Input

A form field to input simple text

## Installation

```
npm install @crave/farmblocks-input-text
```

## Usage

```javascript
import React, { Component } from "react";
import { render } from "react-dom";
import TextInput from "@crave/farmblocks-input-text";

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <div>
    <TextInput label="Text Field" placeholder="enter a text..." />
    <TextInput disabled label="Disabled Field" placeholder="disabled field" />
    <TextInput
      label="Number Field"
      type="number"
      placeholder="enter a number"
    />
  </div>,
  root
);
```

See the stories source code for more usage examples.

## Properties

The core of the Text Input component is an html `input` element of default type
`type="text"`. So the APIs are very similar.

For example, `value`, `placeholder`, `disabled`, `maxLength`, `onChange` and
others not listed here, should work as expected, you can assume that the
property will be forwarded to the core html input element.

### Extra properties

In addition to the normal input properties, there are some other optional
properties that provides enhanced functionality:

| property           | type             | description                                                                                                                                                                                                                                                           | default |
| ------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| label              | string           | a text to be used as label for the field                                                                                                                                                                                                                              |         |
| validationMessages | array of strings | text messages to display if the invalid property is present / true if passed will style the field as a field that needs attention / corrections                                                                                                                       |         |
| errorIconSrc       | string           | the url for a custom icon to be displayed before all error messages                                                                                                                                                                                                   |         |
| tooltipText        | string           | the tooltip text is displayed on mouseover for the disabled field, use this property if you need to change the default text                                                                                                                                           |         |
| protected          | boolean          | a flag that makes the field harder to edit, the user will have to unlock the field by clicking on a pencil icon, and after typing the new value, hit Enter to replace the previous value or Escape to leave the previous value                                        |         |
| onReplace          | function         | if the field is protected, pass a function that receives the new value for the field and it will be called when the user finished editing by pressing Enter, this handler will also be triggered if the property value of the component changes after the first mount |         |
| onCancel           | function         | if the field is protected, you can pass a function to be called when the user cancels the editing by pressing Esc                                                                                                                                                     |         |
| cancelButtonText   | string           | protected only: text to be used on save button                                                                                                                                                                                                                        | Cancel  |
| saveButtonText     | string           | protected only: text to be used on save button                                                                                                                                                                                                                        |

## Built-in constraint validation

Modern browsers have some built-in validation checks that you can use, such as
marking that a field cannot be empty with the `required` property for example.
This can be useful to prevent a trip to your server-side when you know before
hand that a field cannot be empty.

Other html input attributes that have built-in browser validation checks are the
type attribute, like `type="email"`, `type="URL"`, `type="number"`, etc... and
even regular expression patterns with the `pattern` attribute. See
[this MDN page](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation).

If used, and supported by the browser, The Text Input component will override
the default native browser balloon and display the validation message provided
by the browser using the farmblocks styling.

We recomend however that you do back-end validation regardless of the browser
constraint support, and then use the `validationMessages` propertiy to present
the returned field errors of your server-side validations.

## License

MIT
