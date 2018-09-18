# Farmblocks Filter Popover

A component composed by farmblocks-popover and farmblocks-form-wrapper.

## Installation

```
npm install @crave/farmblocks-filter-popover
```

## Usage

```jsx
<FilterPopover
  hasValue
  triggerLabel="Filter"
  formTitle="Form Title"
  onFormSaveClick={action("onActionButtonClick")}
  formContent={
    <div>
      <TextInput label="Product" value="Apple" name="product" />
      <TextInput label="Owner" />
    </div>
  }
/>
```

Output:

![image](https://user-images.githubusercontent.com/17936244/45629616-30ef7080-ba6d-11e8-8438-c23b1df2f820.png)

## Properties

| propery         | type     | description                                    | required | default |
| --------------- | -------- | ---------------------------------------------- | -------- | ------- |
| triggerLabel    | string   | text to be used as children on Popover trigger | Yes      |         |
| formTitle       | string   | title to be used on FormWrapper                |          |         |
| formContent     | node     | children to be used on FormWrapper             |          |         |
| formLoading     | bool     | loading to be used on FormWrapper              |          |         |
| formSaveLabel   | string   | saveLabel to be used on FormWrapper            |          | Filter  |
| onFormSaveClick | function | onSave to be used on FormWrapper               |          |         |
| align           | string   | Popover align                                  |          |         |
| dismissOnSave   | bool     | automatically dismiss Popover on save event    |          |         |
| hasValue        | bool     | changes style of trigger popover               |          |         |

## License

MIT
