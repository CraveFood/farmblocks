# Farmblocks Form Wrapper

A wrapper container with options for cancel and save.

## Installation

```
npm install @crave/farmblocks-form-wrapper
```

## Usage

```jsx
<FormWrapper
  onCancel={e => console.log(e)}
  onSave={e => console.log(e)}
  title="Title"
  extraContent={<div>Extra content</div>}
>
  <Input label="First Name" />
  <Input label="Last Name" />
</FormWrapper>
```

Output:
![](https://user-images.githubusercontent.com/7760/36207007-95bdb1b6-117b-11e8-8dff-54da4e9c5298.png)

### Properties

| propery         | type     | description                                                                                                     | required | default      |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| title           | string   | The text to be used as the title                                                                                |          |              |
| cancelLabel     | string   | The text to be used in the Cancel link                                                                          |          | Cancel       |
| saveLabel       | string   | The text to be used by the Save button                                                                          |          | Save         |
| saveButtonProps | object   | The props for Save button ([check Button](https://github.com/CraveFood/farmblocks/tree/master/packages/button)) |          |              |
| onCancel        | function | Callback of Cancel link click                                                                                   | Yes      |              |
| onSave          | function | Callback of Save button click                                                                                   | Yes      |              |
| children        | node     | Contents to be rendered                                                                                         | Yes      |              |
| extraContent    | node     | Contents to be rendered after Save button                                                                       |          |              |
| loading         | boolean  | Loading state to be passed to Save button                                                                       |          |              |
| id              | string   | id attribute given to the wrapper and to the save and cancel actionables (with `-save` and `-cancel` sufixes)   |          | form-wrapper |

## License

MIT
