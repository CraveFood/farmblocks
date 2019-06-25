import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { colors } from "@crave/farmblocks-theme";
import PropTypes from "prop-types";
import Text, { fontSizes, fontTypes } from "@crave/farmblocks-text";
import Image from "@crave/farmblocks-image";
import Link from "@crave/farmblocks-link";
import Button, { buttonSizes, buttonTypes } from "@crave/farmblocks-button";
import { Dropdown, DropdownItem } from "@crave/farmblocks-dropdown";

import { Table, Column, SelectionBar, rowHeights } from ".";

const fruits = [
  { id: 0, name: "Apple", price: "$ 0.50" },
  { id: 1, name: "Banana", price: "$ 0.60" },
  { id: 2, name: "Cherry", price: "$ 9,999.99" },
  { id: 3, name: "Coconut", price: "$ 2.30" },
];

storiesOf("Table/Basic", module)
  .add("Default sizes", () => (
    <Table data={fruits}>
      <Column title="Fruit" text={row => row.name} />
      <Column title="Price" text={row => row.price} />
    </Table>
  ))
  .add("Light column", () => (
    <Table data={fruits}>
      <Column title="Fruit" text={row => row.name} fontWeight="light" />
      <Column title="Price" text={row => row.price} fontWeight="light" />
    </Table>
  ))
  .add("Empty column", () => (
    <Table data={fruits}>
      <Column title="Fruit" text={row => row.name} />
      <Column title="Price" />
    </Table>
  ))
  .add("null Table chidren", () => (
    <Table data={fruits}>
      {null}
      <Column title="Fruit" text={row => row.name} />
      {false}
      <Column />
      <Column title="Price" text={row => row.price} />
      {undefined}
    </Table>
  ))
  .add("Table with width set", () => (
    <Table data={fruits} width="1000px">
      <Column title="Fruit" text={row => row.name} />
      <Column title="Price" text={row => row.price} />
    </Table>
  ))
  .add("Featured column", () => (
    <Table data={fruits}>
      <Column title="Fruit" text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        text={row => row.price}
      />
    </Table>
  ))
  .add("Small row heights", () => (
    <Table rowHeight={rowHeights.SMALL} data={fruits}>
      <Column title="Fruit" text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        text={row => row.price}
      />
    </Table>
  ))
  .add("Clickable column titles", () => (
    <Table data={fruits} onTitleClick={action("title clicked")}>
      <Column title="Fruit" clickable text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        clickable
        text={row => row.price}
      />
    </Table>
  ))
  .add("Custom column header", () => (
    <Table data={fruits}>
      <Column title="Fruit" text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        text={row => row.price}
      />
      <Column
        customTitle={() => (
          <div
            style={{
              color: colors.GREY_16,
              border: `1px solid ${colors.GREY_16}`,
              borderRadius: 4,
              fontSize: 10,
              width: 32,
              height: 24,
              lineHeight: "30px",
              textAlign: "center",
            }}
          >
            <i className="wg-small-arrow-bottom" />
          </div>
        )}
        text={() => <div />}
      />
    </Table>
  ))
  .add("Custom align and width", () => (
    <Table data={fruits}>
      <Column title="Fruit" text={row => row.name} />
      <Column title="Type" text={() => "Organic"} align="center" width="30%" />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        align="right"
        width="300px"
        text={row => row.price}
      />
    </Table>
  ))
  .add("Custom white-space", () => (
    <Table data={fruits} width="500px">
      <Column title="Fruit" text={row => row.name} />
      <Column
        title="Normal"
        text={() =>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis felis non ultrices placerat. Donec."
        }
        width="30%"
      />
      <Column
        title="No Wrap"
        text={() => "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        whiteSpace="nowrap"
        width="30%"
      />
    </Table>
  ))
  .add("With row click listener", () => (
    <Table data={fruits} onRowClick={action("onRowClick")}>
      <Column title="Fruit" text={row => row.name} />
      <Column title="Price" text={row => row.price} />
    </Table>
  ))
  .add("With selectable rows", () => (
    <Table data={fruits} selectableRows>
      <Column title="Fruit" text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        text={row => row.price}
      />
    </Table>
  ))
  .add("With selectable rows and a selection header", () => {
    const ItemsManager = () => {
      const [items, setItems] = useState(fruits);

      return (
        <Table
          width="1000px"
          data={items}
          onRowClick={action("onRowClick")}
          selectableRows
          selectionHeader={(selectedRows, clearFunction) => (
            <SelectionBar
              selectedRows={selectedRows}
              clearSelection={clearFunction}
              title={count =>
                count === 1 ? "1 fruit selected" : `${count} Fruits selected`
              }
            >
              <div
                style={{ display: "grid", gridGap: 8, gridAutoFlow: "column" }}
              >
                <Button
                  type={buttonTypes.SECONDARY}
                  onClick={() => setItems([...items, ...fruits])}
                >
                  Add Fruits
                </Button>
                <Button
                  type={buttonTypes.PRIMARY}
                  onClick={() => setItems(fruits)}
                >
                  Reset Fruits
                </Button>
              </div>
            </SelectionBar>
          )}
        >
          <Column title="Fruit" text={row => row.name} />
          <Column
            fontType={fontTypes.FEATURED}
            title="Price"
            text={row => row.price}
          />
        </Table>
      );
    };
    return <ItemsManager />;
  })
  .add("extended style", () => {
    const ItemsManager = () => {
      const [items, setItems] = useState(fruits);

      return (
        <Table
          css="
            thead .text {
              font-size: 2em;
            }
            .visibleCheckbox {
              border-radius: 50%;
            }
            tbody .text {
              font-family: serif;
            }
          "
          width="1000px"
          data={items}
          onRowClick={action("onRowClick")}
          selectableRows
          selectionHeader={(selectedRows, clearFunction) => (
            <SelectionBar
              css="
                .title .text {
                  font-family: fantasy;
                }
                .actions {
                  background: floralwhite;
                  padding: 16px;
                }
              "
              selectedRows={selectedRows}
              clearSelection={clearFunction}
              title={count =>
                count === 1 ? "1 fruit selected" : `${count} Fruits selected`
              }
            >
              <div
                style={{ display: "grid", gridGap: 8, gridAutoFlow: "column" }}
              >
                <Button
                  type={buttonTypes.SECONDARY}
                  onClick={() => setItems([...items, ...fruits])}
                >
                  Add Fruits
                </Button>
                <Button
                  type={buttonTypes.PRIMARY}
                  onClick={() => setItems(fruits)}
                >
                  Reset Fruits
                </Button>
              </div>
            </SelectionBar>
          )}
        >
          <Column title="Fruit" text={row => row.name} />
          <Column
            fontType={fontTypes.FEATURED}
            title="Price"
            text={row => row.price}
          />
        </Table>
      );
    };
    return <ItemsManager />;
  });

const imgSrc = "https://picsum.photos/200?image=0";

const farms = [
  {
    name: "Madeline Farms",
    thumbnail: imgSrc,
    address: "7 Carroll Avenue, Newport, RI 02840",
    url: "http://example.com",
    distance: 2.8,
    created_date: "2017-07-23T12:00:00",
    type: "farm",
    status: "not_connected",
    slug: "madeline-farm",
  },
  {
    name: "Farm Honey",
    thumbnail: imgSrc,
    address: "7 Carroll Avenue, Newport, RI 02840",
    url: "http://example.com",
    distance: 2.8,
    created_date: "2017-07-23T12:00:00",
    type: "food_hub",
    status: "connected",
    slug: "farm-honey",
  },
];

const InfoCell = props => (
  <div style={{ display: "flex" }}>
    <Image src={props.imageSrc} />
    <div style={{ marginLeft: 8 }}>
      <div style={{ marginBottom: 8 }}>
        <Text fontWeight="title" size={fontSizes.MEDIUM}>
          {props.title}
        </Text>
      </div>
      <Link leftIcon="wg-place" href={props.linkSrc}>
        {props.linkText}
      </Link>
    </div>
  </div>
);
InfoCell.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  linkText: PropTypes.string,
  linkSrc: PropTypes.string,
};

const ThumbnailCell = props => (
  <div style={{ display: "flex" }}>
    <div style={{ marginRight: 8 }}>
      <Image badge size={24} src={props.imageSrc} />
    </div>
    <Text type={fontTypes.NEUTRAL}>{props.text}</Text>
  </div>
);
ThumbnailCell.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
};

storiesOf("Table/Custom Cells", module)
  .add("Image + title + link (custom cell example)", () => {
    return (
      <Table data={farms} selectableRows>
        <Column
          title="Farm"
          customCell={row => (
            <InfoCell
              imageSrc={row.thumbnail}
              title={row.name}
              linkText={row.address}
              linkSrc={row.url}
            />
          )}
        />
        <Column
          fontType={fontTypes.NEUTRAL}
          title="Distance"
          text={row => `${row.distance} miles from you`}
        />
      </Table>
    );
  })
  .add("Button Column (custom cell example)", () => (
    <Table data={fruits} selectableRows>
      <Column title="Fruit" text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        text={row => row.price}
      />
      <Column
        customCell={row => (
          <Button
            type={buttonTypes.PRIMARY}
            icon="wg-check"
            onClick={action(`button clicked`)}
          >
            Accept ({row.id})
          </Button>
        )}
      />
    </Table>
  ))
  .add("Menu Column (custom cell example)", () => (
    <Table data={fruits} selectableRows>
      <Column title="Fruit" text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        text={row => row.price}
      />
      <Column
        customCell={() => (
          <div>
            <Button
              size={buttonSizes.MEDIUM}
              type={buttonTypes.SECONDARY}
              icon="wg-order"
              onClick={action(`button clicked`)}
            >
              Message
            </Button>
          </div>
        )}
      />
      <Column
        customCell={(_row, { rowIndex }) => (
          <Dropdown
            zIndex={fruits.length - rowIndex}
            align="right"
            width="268px"
            handleSelection={action("handleSelection")}
          >
            <DropdownItem value={1} text="Connection Settings" />
            <DropdownItem value={1} text="View Profile" />
          </Dropdown>
        )}
      />
    </Table>
  ))
  .add("Small with Menu Column (custom cell example)", () => (
    <Table data={fruits} selectableRows rowHeight={rowHeights.SMALL}>
      <Column title="Fruit" text={row => row.name} />
      <Column
        fontType={fontTypes.FEATURED}
        title="Price"
        text={row => row.price}
      />
      <Column
        customCell={() => (
          <div>
            <Button
              size={buttonSizes.SMALL}
              type={buttonTypes.SECONDARY}
              icon="wg-order"
              onClick={action(`button clicked`)}
            >
              Message
            </Button>
          </div>
        )}
      />
      <Column
        customCell={(_row, { rowIndex }) => (
          <Dropdown
            zIndex={fruits.length - rowIndex}
            size={buttonSizes.SMALL}
            align="right"
            width="268px"
            handleSelection={action("handleSelection")}
          >
            <DropdownItem value={1} text="Connection Settings" />
            <DropdownItem value={1} text="View Profile" />
          </Dropdown>
        )}
      />
    </Table>
  ))
  .add("Borderless", () => (
    <Table data={fruits} borderless>
      <Column title="Fruit" text={row => row.name} />
      <Column title="Price" text={row => row.price} />
    </Table>
  ))
  .add("Complete example", () => {
    const formattedDateColumnCell = rowData =>
      `${new Date(rowData.created_date).toDateString()}`;
    const thumbnails = {
      farm: "https://picsum.photos/100?image=42",
      food_hub: "https://picsum.photos/100?image=13",
    };
    const accountTypes = {
      farm: "Farm",
      food_hub: "Food Hub",
    };
    return (
      <Table selectableRows data={farms} onTitleClick={action("title clicked")}>
        <Column
          title="Leads"
          customCell={row => (
            <InfoCell
              imageSrc={row.thumbnail}
              title={row.name}
              linkText={row.address}
              linkSrc={row.url}
            />
          )}
        />
        <Column
          fontType={fontTypes.NEUTRAL}
          title="Distance"
          text={row => `${row.distance} miles from you`}
        />
        <Column
          clickable
          title="Member since"
          text={formattedDateColumnCell}
          fontType={fontTypes.NEUTRAL}
        />
        <Column
          clickable
          title="Account Type"
          customCell={row => (
            <ThumbnailCell
              imageSrc={thumbnails[row.type]}
              text={accountTypes[row.type]}
            />
          )}
        />
        <Column
          align="right"
          width="300px"
          customCell={() => (
            <div>
              <Button
                size={buttonSizes.MEDIUM}
                type={buttonTypes.SECONDARY}
                icon="wg-order"
                onClick={action(`button clicked`)}
              >
                Connect
              </Button>
            </div>
          )}
        />
      </Table>
    );
  })
  .add("With colspan", () => {
    const description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quam urna, commodo in efficitur sit amet, convallis ac risus. Pellentesque commodo justo id egestas fermentum. Sed dui felis, feugiat et laoreet sed, condimentum sed lorem.";
    const data = [
      {
        description,
        number: "1234567890",
        merged: false,
      },
      {
        description,
        number: "11111111111",
        merged: true,
      },
      {
        description,
        number: "0987654321",
        merged: false,
      },
    ];
    return (
      <Table data={data} width="600px">
        <Column title="Merged" text={row => (row.merged ? "Yes" : "No")} />
        <Column
          title="Description"
          customCell={(row, { addProps }) => {
            if (row.merged) addProps({ colSpan: 2 });
            return <Text>{row.description}</Text>;
          }}
        />
        <Column
          title="Number"
          customCell={row => (row.merged ? null : <Text>{row.number}</Text>)}
        />
      </Table>
    );
  });

const orders = [
  {
    name: "Farm A",
    orderDate: "20181206",
    itemQty: 1,
    totalLabel: "$ 5",
    status: "accepted",
  },
  {
    name: "Farm Market 1",
    totalLabel: "$ 20",
    itemQty: 4,
    suborders: [
      {
        name: "Farm B",
        orderDate: "20181306",
        itemQty: 2,
        totalLabel: "$ 10",
        status: "pending",
      },
      {
        name: "Farm C",
        orderDate: "20181206",
        itemQty: 2,
        totalLabel: "$ 10",
        status: "accepted",
      },
    ],
  },
  {
    name: "Farm D",
    orderDate: "20181206",
    itemQty: 1,
    totalLabel: "$ 5",
    status: "accepted",
  },
  {
    name: "Farm Market 2",
    totalLabel: "$ 15",
    itemQty: 4,
    suborders: [
      {
        name: "Farm E",
        orderDate: "20181306",
        itemQty: 2,
        totalLabel: "$ 10",
        status: "pending",
      },
      {
        name: "Farm F",
        orderDate: "20181206",
        itemQty: 2,
        totalLabel: "$ 5",
        status: "accepted",
      },
      {
        name: "Farm G",
        orderDate: "20181206",
        itemQty: 2,
        totalLabel: "$ 5",
        status: "canceled",
      },
    ],
  },
];

storiesOf("Table/Row Groups", module)
  .add("With row groups", () => {
    return (
      <Table data={orders} rowGroupKey="suborders">
        <Column title="Name" text={row => row.name} />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("Expandable Groups", () => {
    return (
      <Table data={orders} collapsed rowGroupKey="suborders">
        <Column title="Name" text={row => row.name} />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("Expandable Groups - Wide table", () => {
    return (
      <Table width="800px" data={orders} collapsed rowGroupKey="suborders">
        <Column title="Name" text={row => row.name} />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("Expandable Groups with row click listener", () => {
    return (
      <Table
        data={orders}
        collapsed
        rowGroupKey="suborders"
        onRowClick={action("onRowClick")}
      >
        <Column title="Name" text={row => row.name} />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("With some groups flattened", () => {
    return (
      <Table
        data={orders}
        collapsed
        rowGroupKey="suborders"
        flatGroupCondition={row => row.name === "Farm Market 1"}
      >
        <Column title="Name" text={row => row.name} />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("Custom cells with some groups flattened", () => {
    return (
      <Table
        data={orders}
        collapsed
        rowGroupKey="suborders"
        flatGroupCondition={row => row.name === "Farm Market 1"}
      >
        <Column
          title="Name"
          customCell={(row, { grouped }) => (
            <Text>
              {row.name}
              {grouped && " (grouped)"}
            </Text>
          )}
        />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("Small height, Expandable Groups and Selectable row", () => {
    return (
      <Table
        data={orders}
        selectableRows
        collapsed
        rowGroupKey="suborders"
        flatGroupCondition={row => row.name === "Farm Market 1"}
        rowHeight={rowHeights.SMALL}
      >
        <Column title="Name" text={row => row.name} />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("Expandable, Selectable with selection header", () => {
    return (
      <Table
        data={orders}
        selectableRows
        selectionHeader={(selectedRows, clearFunction) => (
          <SelectionBar
            selectedRows={selectedRows}
            clearSelection={clearFunction}
            title={count =>
              count === 1 ? "1 Order selected" : `${count} Orders selected`
            }
          />
        )}
        collapsed
        rowGroupKey="suborders"
        rowHeight={rowHeights.SMALL}
      >
        <Column title="Name" text={row => row.name} />
        <Column title="Price" text={row => row.totalLabel} />
      </Table>
    );
  })
  .add("Table data updated after mount", () => {
    class MyStory extends React.Component {
      constructor() {
        super();
        this.state = {
          data: orders,
        };
      }

      render() {
        return (
          <div>
            <button
              type="button"
              onClick={() =>
                this.setState(prevState => {
                  return {
                    data: prevState.data.concat({
                      name: `Foo ${new Date().getTime()}`,
                      totalLabel: `$ ${Math.random()}`,
                    }),
                  };
                })
              }
            >
              Add row
            </button>
            <Table
              data={this.state.data}
              selectableRows
              selectionHeader={(selectedRows, clearFunction) => (
                <SelectionBar
                  selectedRows={selectedRows}
                  clearSelection={clearFunction}
                  title={count =>
                    count === 1
                      ? "1 Order selected"
                      : `${count} Orders selected`
                  }
                />
              )}
              collapsed
              rowGroupKey="suborders"
              rowHeight={rowHeights.SMALL}
            >
              <Column title="Name" text={row => row.name} />
              <Column title="Price" text={row => row.totalLabel} />
            </Table>
          </div>
        );
      }
    }
    return <MyStory />;
  });

storiesOf("Table/SelectionBar", module)
  .add("Default", () => <SelectionBar />)
  .add("One item selected", () => (
    <SelectionBar selectedRows={[{ name: "foo" }]} />
  ))
  .add("Two items selected", () => (
    <SelectionBar selectedRows={[{ name: "foo" }, { name: "bar" }]} />
  ))
  .add("Clear Button", () => (
    <SelectionBar
      selectedRows={[{ name: "foo" }, { name: "bar" }]}
      clearSelection={action("clear selection called")}
    />
  ))
  .add("One action button", () => (
    <SelectionBar
      selectedRows={[{ name: "foo" }]}
      clearSelection={action("clear selection called")}
    >
      <Button
        type={buttonTypes.PRIMARY}
        onClick={action("primary button clicked")}
      >
        Primary Action
      </Button>
    </SelectionBar>
  ))
  .add("Two action buttons", () => (
    <SelectionBar
      selectedRows={[{ name: "foo" }, { name: "bar" }]}
      clearSelection={action("clear selection called")}
    >
      <div style={{ display: "grid", gridGap: 8, gridAutoFlow: "column" }}>
        <Button
          type={buttonTypes.SECONDARY}
          onClick={action("secondary button clicked")}
        >
          Secondary Action
        </Button>
        <Button
          type={buttonTypes.PRIMARY}
          onClick={action("primary button clicked")}
        >
          Primary Action
        </Button>
      </div>
    </SelectionBar>
  ))
  .add("Actions dropdown", () => (
    <SelectionBar
      selectedRows={[{ name: "foo" }, { name: "bar" }]}
      clearSelection={action("clear selection called")}
    >
      <Dropdown
        size={buttonSizes.SMALL}
        text="Options"
        handleSelection={value => action(`${value} option selected`)()}
        align="right"
        width="150px"
      >
        <DropdownItem value="first">First Option</DropdownItem>
        <DropdownItem value="second">Second Option</DropdownItem>
        <DropdownItem value="third">Third Option</DropdownItem>
      </Dropdown>
    </SelectionBar>
  ));
