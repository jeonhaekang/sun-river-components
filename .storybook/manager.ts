import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const myTheme = create({
  base: "light",
  brandTitle: "@sun-river/components",
  brandImage: require("./assets/storybook_logo.png")
});

addons.setConfig({
  theme: myTheme
});
