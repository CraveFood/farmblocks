![logo-farmblocks](https://user-images.githubusercontent.com/7760/31051341-4d280118-a63c-11e7-9e8f-3b375ca8f9a0.png)

# Farmblocks-Footer

[See Storybook](https://cravefood.github.io/farmblocks/index.html?selectedKind=Footer)
![image](https://user-images.githubusercontent.com/17936244/33085136-f1703734-ceca-11e7-8a75-196259ad049e.png)

## Design spec

See it on
[zeplin](https://scene.zeplin.io/project/595a9cd3b401bf1876faab27/screen/59f0de70475a900a39883f95)

## Usage

```jsx
import React, { Component } from "react";
import { render } from "react-dom";
import Footer from "@crave/farmblocks-footer";
import Button, { buttonTypes, buttonSizes } from "@crave/farmblocks-button";

const App = () => (
  <div>
    <Footer
      helpText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      helpLinkHref="#"
      helpLinkText="Get support"
      actions={[
        <Button
          onClick={() => console.log("handle onCancelClick")}
          size={buttonSizes.MEDIUM}
          text="Cancel"
          key="cancel"
        />,
        <Button
          onClick={() => console.log("handle onSaveClick")}
          type={buttonTypes.PRIMARY}
          size={buttonSizes.MEDIUM}
          text="Save"
          key="save"
        />
      ]}
    />
  </div>
);

render(<App />, document.getElementById("root"));
```

## API

Helper section:

* `helpText`: string (required)
* `helpLinkText`: string (required)
* `helpLinkHref`: string (required)

Action section:

* `actions`: array of dom nodes

See it in the
[source](https://github.com/CraveFood/farmblocks/blob/master/packages/footer/src/components/Footer.js#L49:#L66)

## License

MIT
