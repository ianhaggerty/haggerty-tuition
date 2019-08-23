import camelCase from "camelcase";
import colors from "./colors";

const theme = {
  appWidth: "143.2rem",
  appHeight: "92.8rem",
  sidebarWidthClosed: "9rem",
  sidebarWidthOpen: "30rem",
  sidebarTransition: ".5s ease",
  iconWidth: "4rem", // firefox wont scale SVG with REM
  iconColor: colors.whiteTint,
  gridColWidth: "33rem",
  gridColGap: "8.8rem",
  navItemHeight: "6rem",
  shadowFlat: "0 6px 15px rgba(0, 0, 0, 0.2)",
  shadowElevated: "0 8px 20px rgba(0, 0, 0, 0.2)",
  shadowDepressed: "0 5px 12px rgba(0, 0, 0, 0.2)"
};

for (const [key, value] of Object.entries(colors)) {
  theme[camelCase(["color", key])] = value;
}

export default theme;
