import { useEffect, useState } from "react";
import alignments from "./constants/alignments";
import positions from "./constants/positions";

const useAutoAlign = ({
  originalAlign,
  originalPosition,
  boundariesSelector,
  tooltipRef,
}) => {
  const [align, setAlign] = useState(originalAlign);
  const [position, setPosition] = useState(originalPosition);

  useEffect(() => {
    if (
      originalAlign === alignments.AUTO ||
      originalPosition === positions.AUTO
    ) {
      // eslint-disable-next-line no-use-before-define
      const alignedData = getAutoAlign(tooltipRef, boundariesSelector);

      if (originalAlign === alignments.AUTO) setAlign(alignedData.align);
      if (originalPosition === positions.AUTO)
        setPosition(alignedData.position);
    }
  }, []);

  return { align, position };
};

export function getAutoAlign(tooltipRef, boundariesSelector) {
  const alignedData = {
    align: alignments.LEFT,
    position: positions.BOTTOM,
  };

  if (tooltipRef.current) {
    const { right, y } = tooltipRef.current.getBoundingClientRect();

    const boundariesNode =
      boundariesSelector && tooltipRef.current.closest(boundariesSelector);
    const maxRight =
      boundariesNode?.getBoundingClientRect().right || window.innerWidth;
    const maxHeight =
      boundariesNode?.getBoundingClientRect().y || window.innerHeight;

    if (right >= maxRight) alignedData.align = alignments.RIGHT;
    if (y >= maxHeight) alignedData.position = positions.TOP;

    return alignedData;
  }
  return alignedData;
}

export default useAutoAlign;
