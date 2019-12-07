import { rgba } from "polished";
import { COLOR_WHITE_PURE } from "./styles/variables";

import paper from "./assets/photos/a4-paper.jpg";

import AboutMe from "./pages/about-me/about-me.component";
import MyBackground from "./pages/my-background/my-background.component";

export default [
  {
    path: "about-me",
    windowColor: rgba(COLOR_WHITE_PURE, 0.96),
    backgroundImage: paper,
    component: AboutMe
  },
  {
    path: "background",
    windowColor: rgba(COLOR_WHITE_PURE, 0.96),
    backgroundImage: paper,
    component: MyBackground
  }
];
