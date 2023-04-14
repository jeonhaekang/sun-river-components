import { css } from "@emotion/react";
import { CSSProperties } from "react";
import { utils } from "~/utils";

const CSSSelector = ["hover", "active", "focus"] as const;

export type CSSSelectorOptions<CSSProperty extends keyof CSSProperties> = {
  [CSSSelector in (typeof CSSSelector)[number]]?: CSSProperties[CSSProperty];
};

export const getSelectorStyle = (
  property: keyof CSSProperties,
  options: CSSSelectorOptions<typeof property>
) => {
  const kebabProperty = utils.common.toKebabCase(property);

  const selectorStyle = Object.entries(options).reduce(
    (acc, [selector, propertyValue]) => {
      let _acc = acc;

      _acc += `&:${selector} { ${kebabProperty}: ${propertyValue} };`;

      return _acc;
    },
    ""
  );

  return css`
    &:not(:disabled) {
      ${selectorStyle}
    }
  `;
};
