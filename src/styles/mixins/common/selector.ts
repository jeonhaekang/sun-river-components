import { css } from "@emotion/react";
import { CSSProperties } from "react";
import { utils } from "../../../utils";

const CSSSelector = ["base", "hover", "active", "focus"] as const;

export type CSSSelectorOptions<CSSProperty extends keyof CSSProperties> = {
  [CSSSelector in (typeof CSSSelector)[number]]?: CSSProperties[CSSProperty];
};

export const setSelectorStyle = (
  property: keyof CSSProperties,
  options: CSSSelectorOptions<typeof property>
) => {
  const kebabProperty = utils.common.toKebabCase(property);

  const _options = { ...options };

  delete _options.base;

  const selectorStyle = Object.entries(_options).reduce(
    (acc, [selector, propertyValue]) => {
      let _acc = acc;

      _acc += `&:${selector} { ${kebabProperty}: ${propertyValue} };`;

      return _acc;
    },
    ""
  );

  return css`
    ${options.base && `${kebabProperty}: ${options.base};`}

    &:not(:disabled) {
      ${selectorStyle}
    }
  `;
};
