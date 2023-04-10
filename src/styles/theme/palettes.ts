export const blue = {
  base: "#0085ff",
  hover: "#339dff",
  active: "#1272cc",
  border: "#cce7ff",
  background: "#e5f3ff",
  focused: "0px 0px 2px 2px rgba(0, 133, 255, 0.15)"
} as const;

export const green = {
  base: "#00ba34",
  hover: "#33c85d",
  active: "#00952a",
  border: "#ccf1d6",
  background: "#e5f8eb",
  focused: "0px 0px 2px 2px rgba(0, 186, 52, 0.15)"
} as const;

export const orange = {
  base: "#f78601",
  hover: "#f89e32",
  active: "#c76b00",
  border: "#fde7cc",
  background: "#fef6e8",
  focused: "0px 0px 2px 2px rgba(233, 44, 44, 0.15)"
} as const;

export const red = {
  base: "#e92d2c",
  hover: "#ed5656",
  active: "#ba2323",
  border: "#fbd5d5",
  background: "#fdebeb",
  focused: "0px 0px 2px 2px rgba(249, 134, 0, 0.15)"
} as const;

const palettes = {
  blue,
  green,
  orange,
  red
};

export default palettes;
