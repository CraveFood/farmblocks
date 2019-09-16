import { useEffect, useState } from "react";
import POSITIONS, { AUTO } from "./constants/positions";

const useAutoAlign = ({
  originalPositionX,
  originalPositionY,
  tooltipRef,
  isVisible,
  offset,
}) => {
  const [ready, setReady] = useState(false);
  const [positionX, setPositionX] = useState(originalPositionX);
  const [positionY, setPositionY] = useState(originalPositionY);
  const [triggerHeight, setTriggerHeight] = useState();

  useEffect(() => {
    if (!isVisible) {
      setReady(false);
    } else {
      let tHeight = 0;
      if (tooltipRef?.current && !triggerHeight) {
        // the tooltip trigger is always the container's previous sibling
        const trigger =
          tooltipRef.current.parentElement?.previousElementSibling;

        if (trigger) {
          tHeight = trigger.getBoundingClientRect()?.height;
          setTriggerHeight(tHeight);
        }
      }

      // eslint-disable-next-line no-use-before-define
      const positionData = getPositionData({
        tooltipRef,
        offset,
        triggerHeight: tHeight,
      });

      if (originalPositionX === AUTO) setPositionX(positionData.x);
      if (originalPositionY === AUTO) setPositionY(positionData.y);

      setReady(true);
    }
  }, [isVisible]);

  return { positionX, positionY, triggerHeight, ready };
};

export function getPositionData({ tooltipRef, offset, triggerHeight }) {
  const positionData = {
    x: POSITIONS.X.LEFT,
    y: POSITIONS.Y.BOTTOM,
  };

  if (tooltipRef.current) {
    const { right, y, height } = tooltipRef.current.getBoundingClientRect();

    const maxRight = window.innerWidth;
    const maxHeight = window.innerHeight;

    if (right >= maxRight) positionData.x = POSITIONS.X.RIGHT;
    // Check if tooltip should be rendered on the top when it is not
    // fully visible on screen
    if (y + height >= maxHeight) {
      const tooltipWithTriggerSpace =
        height + triggerHeight + Number.parseInt(offset, 10);

      // Now we check if the tooltip would be fully rendered on TOP.
      // If it wouldn't be fully rendered, we don't change its position to TOP
      if (y - tooltipWithTriggerSpace > 0) {
        positionData.y = POSITIONS.Y.TOP;
      }
    }

    return { ...positionData, height };
  }
  return positionData;
}

export default useAutoAlign;
