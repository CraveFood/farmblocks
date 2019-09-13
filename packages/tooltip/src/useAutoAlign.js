import { useEffect, useState } from "react";
import POSITIONS, { AUTO } from "./constants/positions";

const useAutoAlign = ({
  originalPositionX,
  originalPositionY,
  tooltipRef,
  isVisible,
}) => {
  const [ready, setReady] = useState(false);
  const [positionX, setPositionX] = useState(originalPositionX);
  const [positionY, setPositionY] = useState(originalPositionY);
  const [triggerHeight, setTriggerHeight] = useState();

  useEffect(() => {
    if (!isVisible) {
      setReady(false);
    } else {
      // eslint-disable-next-line no-use-before-define
      const positionData = getPositionData(tooltipRef);

      if (originalPositionX === AUTO) setPositionX(positionData.x);
      if (originalPositionY === AUTO) setPositionY(positionData.y);

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

  return { positionX, positionY, triggerHeight, ready };
};

export function getPositionData(tooltipRef) {
  const positionData = {
    x: POSITIONS.X.LEFT,
    y: POSITIONS.Y.BOTTOM,
  };

  if (tooltipRef.current) {
    const { right, y, height } = tooltipRef.current.getBoundingClientRect();

    const maxRight = window.innerWidth;
    const maxHeight = window.innerHeight;

    if (right >= maxRight) positionData.x = POSITIONS.X.RIGHT;
    if (y + height >= maxHeight) positionData.y = POSITIONS.Y.TOP;

    return { ...positionData, height };
  }
  return positionData;
}

export default useAutoAlign;
