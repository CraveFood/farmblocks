# Farmblocks Text Input

A form field to input simple text

## Installation

```
npm install @crave/farmblocks-input-text
```

## Usage

```
```

See the stories source code for more usage examples.

## Properties

The core of the Text Input component is an html ``input``
element of default type ``type="text"``. So the APIs are very similar.

For example, ``value``, ``placeholder``, ``disabled``, ``maxLength``,
``onChange`` and others not listed here, should work as expected, you can assume
that the property will be forwarded to the core html input element.

### Extra properties

In addition to the normal input properties, there are some other
optional properties that provides enhanced functionality:

| property | type | description |
|----------|------|-------------|
| label | string | a text to be used as label for the field |
| invalid | boolean | if passed will style the field as a field that needs attention / corrections |
| validationMessages | array of strings | text messages to display if the invalid property is present / true |
| errorIconSrc | string | the url for a custom icon to be displayed before all error messages |
| tooltipText | string | the tooltip text is displayed on mouseover for the disabled field, use this property if you need to change the default text |

##  Built-in constraint validation

Modern browsers have some built-in validation checks that you can use,
such as marking that a field cannot be empty with the ``required`` property
for example. This can be useful to prevent a trip to your server-side when
you know before hand that a field cannot be empty.

Other html input attributes that have built-in browser validation
checks are the type attribute, like ``type="email"``, ``type="URL"``, 
``type="number"``, etc... and even regular expression patterns with 
the ``pattern`` attribute. See [this MDN page](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation).

If used, and supported by the browser, The Text Input component will
override the default native browser balloon and display the validation message
provided by the browser using the farmblocks styling.

We recomend however that you do back-end validation regardless of the browser constraint
support, and then use the ``invalid`` and ``validationMessages`` properties
to present the returned field errors of your server-side validations.


## License

MIT
