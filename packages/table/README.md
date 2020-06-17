# Farmblocks Table

A component for rendering data tables.

> ### ⚠️ Legacy
>
> This package was completely rewritten in v6
> If you're looking for documentation of the old version, check: <https://www.npmjs.com/package/@crave/farmblocks-table/v/5.0.11>

## Installation

```bash
npm install @crave/farmblocks-table
```

## Usage

This component works the same way as the default HTML table. It basically applies some style. To handle data mapping, we provide some [helper hooks](#helpers)

```jsx
import { Table, THead, TBody, TR, TH, TD } from "@crave/farmblocks-table";

export default () => (
  <Table>
    <THead>
      <TR>
        <TH>Fruit</TH>
        <TH>Price</TH>
        <TH></TH>
      </TR>
    </THead>
    <TBody>
      <TR>
        <TD>Apple</TD>
        <TD>$ 0.50</TD>
        <TD>
          <button onClick={() => addToCart(0)}>Add to cart</button>
        </TD>
      </TR>
      <TR>
        <TD>Banana</TD>
        <TD>$ 0.60</TD>
        <TD>
          <button onClick={() => addToCart(1)}>Add to cart</button>
        </TD>
      </TR>
      <TR>
        <TD>Cherry</TD>
        <TD>$ 9,999.99</TD>
        <TD>
          <button onClick={() => addToCart(2)}>Add to cart</button>
        </TD>
      </TR>
      <TR>
        <TD>Coconut</TD>
        <TD>$ 2.30</TD>
        <TD>
          <button onClick={() => addToCart(3)}>Add to cart</button>
        </TD>
      </TR>
    </TBody>
  </Table>
);
```

<h2 id="helpers">Helper Hooks</h2>
TODO

## License

MIT
