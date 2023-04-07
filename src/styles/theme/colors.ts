export const gray = {
  content1: "#1c1c1c",
  content2: "#585757",
  content3: "#969696",
  border: "#e8e8e8",
  backgroundSecondary: "#f7f7f7",
  backgroundPrimary: "#ffffff"
} as const;

export const blue = {
  base: "#0085ff",
  hover: "#339dff",
  pressed: "#1272cc",
  border: "#cce7ff",
  background: "#e5f3ff"
} as const;

export const green = {
  base: "#00ba34",
  hover: "#f89e32",
  pressed: "#00952a",
  border: "#ccf1d6",
  background: "#e5f8eb"
} as const;

export const orange = {
  base: "#f78601",
  hover: "#f89e32",
  pressed: "#c76b00",
  border: "#fde7cc",
  background: "#fef6e8"
} as const;

export const red = {
  base: "#e92d2c",
  hover: "#ed5656",
  pressed: "#ba2323",
  border: "#fbd5d5",
  background: "#fdebeb"
} as const;

const colors = {
  gray,
  blue,
  green,
  orange,
  red
} as const;

export default colors;
