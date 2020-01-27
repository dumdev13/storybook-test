import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Square from "./Square";

export default {
  component: Square,
  title: "SquareLoader",
  decorators: [withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const spinnerData = {
  size: 150,
  color: "#ffffff",
  loading: true
};

export const Default = () => {
  return (
    <Square
      square={object("squareLoader", { ...spinnerData, color: "#ffffff" })}
    />
  );
};
