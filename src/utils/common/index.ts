import {
  getObjectEntries,
  getObjectKeys,
  getObjectValues
} from "./getObjectProperties";
import { getRandomColor } from "./getRandomColor";
import { propertiesToString } from "./propertiesToString";
import { reverseNumber } from "./reverseNumber";
import { splitCamelCase } from "./splitCamelCase";
import { toKebabCase } from "./toKebabCase";

const common = {
  getObjectEntries,
  getObjectKeys,
  getObjectValues,
  toKebabCase,
  propertiesToString,
  getRandomColor,
  reverseNumber,
  splitCamelCase
};

export { common };
