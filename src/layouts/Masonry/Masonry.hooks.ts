import { useCallback, useEffect, useRef, useState } from "react";
import { Translate } from "../../utils";
import { MasonryStyleProps } from "./Masonry.types";

export const useMasonry = ({ column = 1, gap = 10 }: MasonryStyleProps) => {
  const columnHeights = useRef(Array(column).fill(0));

  const itemsRef = useRef<HTMLDivElement[]>([]);

  const [itemPositions, setItemPositions] = useState<Translate[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  const itemRegister = useCallback(
    (idx: number) => ({
      key: `masonry_item_${idx}`,
      ref: (item: HTMLDivElement) => {
        itemsRef.current[idx] = item;
      },
      ...itemPositions[idx]
    }),
    [itemPositions]
  );

  const positionUpdate = useCallback(() => {
    columnHeights.current = Array(column).fill(0);

    const positions = itemsRef.current.map(item => {
      const itemWidth = item.offsetWidth;

      const minHeightColumn = columnHeights.current.indexOf(
        Math.min(...columnHeights.current)
      );

      const x = itemWidth * minHeightColumn + gap * minHeightColumn;
      const y = columnHeights.current[minHeightColumn];

      columnHeights.current[minHeightColumn] += item.offsetHeight + gap;

      return { x, y };
    });

    setMaxHeight(Math.max(...columnHeights.current));
    setItemPositions(positions);
  }, [column, gap]);

  useEffect(() => {
    positionUpdate();

    window.addEventListener("resize", positionUpdate);

    return () => {
      window.removeEventListener("resize", positionUpdate);
    };
  }, [positionUpdate]);

  return {
    maxHeight,
    itemRegister
  };
};
