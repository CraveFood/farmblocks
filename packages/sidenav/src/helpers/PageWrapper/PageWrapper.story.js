import React, { useState } from "react";
import Radio, { RadioGroup } from "@crave/farmblocks-input-radio";
import Button from "@crave/farmblocks-button";

import variants, { PUSH } from "../../constants/variants";
import useToggle from "../../utils/useToggle";
import PageWrapper from "./PageWrapper";

export default { title: "SideNav/helpers/PageWrapper", component: PageWrapper };

export const PageWrapperDefault = () => {
  const PageWrapperWithToggle = () => {
    const [expanded, { toggle }] = useToggle(false);
    const [selectedVariant, setSelectedVariant] = useState(PUSH);
    return (
      <>
        <PageWrapper
          expanded={expanded}
          style={{ height: "100vh", width: "100%", backgroundColor: "#FFAF8D" }}
          variant={selectedVariant}
          overlayProps={{ onClick: toggle }}
        >
          <div style={{ padding: "24px 56px" }}>
            <h3>Expanded - {expanded.toString()}</h3>
            <Button onClick={toggle}>{expanded ? "Collapse" : "Expand"}</Button>
            <h3>Variant - {selectedVariant}</h3>
            <RadioGroup
              name="pagewrapperVariant"
              onChange={setSelectedVariant}
              defaultValue={PUSH}
            >
              {Object.keys(variants)
                .slice()
                .reverse()
                .map((variant) => (
                  <Radio
                    key={variant}
                    value={variants[variant]}
                    label={variants[variant]}
                  />
                ))}
            </RadioGroup>
          </div>
        </PageWrapper>
      </>
    );
  };

  return <PageWrapperWithToggle />;
};
