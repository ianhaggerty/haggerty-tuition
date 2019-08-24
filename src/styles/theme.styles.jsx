import camelCase from "camelcase";
import colors from "./colors";

const theme = {
  appWidth: "130rem",
  appHeight: "92.8rem",
  sidebarWidthClosed: "9rem",
  sidebarWidthOpen: "30rem",
  sidebarTransition: ".5s ease",
  iconWidth: "3.8rem", // firefox wont scale SVG with REM
  iconColor: colors.whiteTint,
  gridColWidth: "33rem",
  gridColGap: "8.8rem",
  navItemHeight: "5.8rem",
  shadowFlat: "0 .6rem 1.5rem rgba(0, 0, 0, 0.2)",
  shadowElevated: "0 .8rem 2rem rgba(0, 0, 0, 0.2)",
  shadowDepressed: "0 .5rem 1.2rem rgba(0, 0, 0, 0.2)",
  shadowLong: "0 .5rem 5rem rgba(0, 0, 0, 0.15)"
};

for (const [key, value] of Object.entries(colors)) {
  theme[camelCase(["color", key])] = value;
}

export default theme;
