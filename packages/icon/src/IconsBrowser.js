/* eslint-disable no-console, import/no-extraneous-dependencies */
import React from "react";
import styled from "styled-components";
import { colors } from "@crave/farmblocks-theme";
import Text, { fontSizes } from "@crave/farmblocks-text";
import Link, { linkTypes } from "@crave/farmblocks-link";

import * as icons from "./jsx";
import { croppedSizes } from "../sizes";

export const Pre = styled.pre`
  display: inline-block;
  font-size: 1rem;
  background: aliceblue;
  color: darkslateblue;
  margin: 0;
  padding: 4px;
`;

const Grid = styled.div`
  display: grid;
  grid: auto-flow min-content / repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 8px;
  padding: 8px;
  background: ${colors.SUGAR};
`;
const GroupHeader = styled(Text)`
  grid-column-start: 1;
  grid-column-end: -1;
  align-self: end;
  background: white;
  margin-top: 1em;
  padding: 8px;
  position: sticky;
  top: 0;
  border: solid ${colors.SUGAR};
  border-width: 8px 0;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 180px;
  padding: 8px;
  align-items: center;
  background: white;
  color: ${colors.CARBON};
`;
const IconCanvas = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  svg.farmblocks-icon {
    background: #fafafa
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"         fill-opacity=".05" ><rect x="200" width="200" height="200" /><rect y="200" width="200" height="200" /></svg>');
    background-size: 32px 32px;
    background-position: center;
    border: 1px solid #ddd;
  }
`;

const grouped = Object.keys(icons).reduce((acc, iconName) => {
  const Icon = icons[iconName];
  return {
    ...(acc || {}),
    [Icon.groupName]: [
      ...(acc[Icon.groupName] || []),
      { name: iconName, size: croppedSizes[iconName.substr(0, 2)] },
    ],
  };
}, {});
const groupNames = Object.keys(grouped).sort();

export default () => (
  <>
    <Text size={fontSizes.HUGE}>Farmblocks Icons</Text>
    <Text>
      Use the names bellow the icons to import it.
      <br />
      Example:{" "}
      <Pre>{`import { SmPlaceholder } from '@crave/farmblocks-icon';`}</Pre>
    </Text>
    <hr />
    <Grid>
      {groupNames.map((groupName) => (
        <>
          <GroupHeader size={fontSizes.X_LARGE} key={groupName}>
            {groupName}
          </GroupHeader>
          {grouped[groupName].map(({ name, size }) => {
            const Icon = icons[name];
            return (
              <Item key={name}>
                <IconCanvas>
                  <Icon size={size} aria-label={name} />
                </IconCanvas>
                <Text size={fontSizes.SMALL}>
                  {name}
                  <Link
                    leftIcon={<icons.SmDownload />}
                    href={`https://raw.githubusercontent.com/CraveFood/farmblocks/master/packages/icon/src/svg/${groupName}/${name}.svg`}
                    type={linkTypes.NEUTRAL}
                    target="_blank"
                  />
                </Text>
              </Item>
            );
          })}
        </>
      ))}
    </Grid>
  </>
);
