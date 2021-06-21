import { createMuiTheme } from "@material-ui/core/styles";

export const pipelineColor = "#3cbfc5";
export const primaryColor = "#edc139";
export const secondaryColor = "#d02441";

export const palette = {
  text: {
    main: "white",
  },
};

export const typography = {
  h1: {
    fontWeight: 600,
    fontSize: 60,
    color: pipelineColor
  },
};

export const colors = {
  pipelineColor: "#3cbfc5",
  primaryColor: "#edc139",
  secondaryColor: "#d02441",
};

export const materialTheme = createMuiTheme({ palette, typography });

export default materialTheme;
