import { useState, useCallback } from "react";

export default (initialState) => {
  const [expanded, setExpanded] = useState(initialState);
  const toggle = useCallback(() => setExpanded((e) => !e), []);
  const collapse = useCallback(() => setExpanded(false), []);
  const expand = useCallback(() => setExpanded(true), []);

  return [expanded, { toggle, collapse, expand }];
};
