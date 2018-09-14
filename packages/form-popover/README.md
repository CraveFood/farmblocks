# Farmblocks Form Popover

A popover container for entering values, with options for cancel and save.

## Installation

```
npm install @crave/farmblocks-form-popover
```

## Usage

```jsx
<FormPopover
  titleLabel="Action Name"
  cancelLabel="Cancel"
  saveLabel="Save Changes"
  onCancel={() => console.log("form dismissed")}
  onSave={formData => console.dir(formData)}
  formData={myFormData}
  content={formData => <MyContents data={formData} />}
/>
```

The FormPopover component is a container for form data, the contents of
the form is defined by the **content** property, that is a rendder
function, a function that receives data and return a React node.

The initial data supplied by to this render function can be supplied
with the **formData** property. When the user changes the values
of your form inputs and hit the Save button, the function provided in the
**onSave** property will be called passing the new formdata as the argument.

### Properties

| propery     | type                    | description                                                                                                                                  |
| ----------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| title       | string                  | The text to be used as the title of the popover                                                                                              |
| cancelLabel | string                  | The text to be used in the Cancel link                                                                                                       |
| saveLabel   | string                  | The text to be used by the Save button                                                                                                       |
| onCancel    | function                | Callback to be called if the user dismiss the popover                                                                                        |
| onSave      | function                | Save form handler, will be called with the formdata values for all inputs inside the popover                                                 |
| formData    | [FormData][mdnformdata] | Values to fill the form with                                                                                                                 |
| content     | function                | A render function that returns the node to be used as the contents of the popover form, will be called with the latest state of the formdata |

[mdnformdata]: https://developer.mozilla.org/en-US/docs/Web/API/FormData

## License

MIT
