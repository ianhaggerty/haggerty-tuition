import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sidebarReducer from "./sidebar/sidebar.reducer";
import tooltipReducer from "./tooltip/tooltip.reducer";
import overlayReducer from "./overlay/overlay.reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tooltip"]
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  tooltip: tooltipReducer,
  overlay: overlayReducer
});

export default persistReducer(persistConfig, rootReducer);
