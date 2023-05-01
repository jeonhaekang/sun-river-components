import { PropsWithElement } from "../../utils";
import { useTooltip } from "./Tooltip.hooks";
import * as Styled from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  ...props
}: PropsWithElement<TooltipProps>) => {
  const { position, translate, anchorRef, targetRef } = useTooltip(props);

  return (
    <Styled.TooltipContainer ref={anchorRef}>
      {children}

      <Styled.Tooltip
        {...props}
        position={position}
        fixPosition={translate}
        ref={targetRef}
      >
        위 코드에서는 newX와 maxX 값을 사용하여 translate.x 값을 계산합니다.
        newX는 화면의 좌측 경계를 넘어가지 않도록 하는 값이며, maxX는 화면의
        우측 경계를 넘어가지 않도록 하는 값입니다. 이 두 값 중 작은 값을 화면의
        좌측 경계를 넘어가지 않도록 하는 값이며, maxX는 화면의 우측
      </Styled.Tooltip>
    </Styled.TooltipContainer>
  );
};
