import { useEffect, useState } from "react";
import alignments from "./constants/alignments";
import positions from "./constants/positions";

const useAutoAlign = ({
  originalAlign,
  originalPosition,
  boundariesSelector,
  tooltipRef,
  isVisible,
}) => {
  const [ready, setReady] = useState(false);
  const [align, setAlign] = useState(originalAlign);
  const [position, setPosition] = useState(originalPosition);
  const [triggerHeight, setTriggerHeight] = useState();

  useEffect(() => {
    if (!isVisible) {
      setReady(false);
    } else {
      // eslint-disable-next-line no-use-before-define
      const alignedData = getAutoAlign(tooltipRef, boundariesSelector);

      if (originalAlign === alignments.AUTO) setAlign(alignedData.align);
      if (originalPosition === positions.AUTO)
        setPosition(alignedData.position);

      if (tooltipRef?.current && !triggerHeight) {
        // the tooltip trigger is always the container's previous sibling
        const trigger =
          tooltipRef.current.parentElement?.previousElementSibling;

        if (trigger) {
          setTriggerHeight(trigger.getBoundingClientRect()?.height);
        }
      }
      setReady(true);
    }
  }, [isVisible]);

  return { align, position, triggerHeight, ready };
};

export function getAutoAlign(tooltipRef, boundariesSelector) {
  const alignedData = {
    align: alignments.LEFT,
    position: positions.BOTTOM,
  };

  if (tooltipRef.current) {
    const { right, y, height } = tooltipRef.current.getBoundingClientRect();

    const boundariesNode =
      boundariesSelector && tooltipRef.current.closest(boundariesSelector);
    const maxRight =
      boundariesNode?.getBoundingClientRect().right || window.innerWidth;
    const maxHeight =
      boundariesNode?.getBoundingClientRect().y || window.innerHeight;

    if (right >= maxRight) alignedData.align = alignments.RIGHT;
    if (y >= maxHeight) alignedData.position = positions.TOP;

    return { ...alignedData, height };
  }
  return alignedData;
}

export default useAutoAlign;
