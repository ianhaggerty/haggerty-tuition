import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sidebarReducer from "./sidebar/sidebar.reducer";
import tooltipReducer from "./tooltip/tooltip.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar"]
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  tooltip: tooltipReducer
});

export default persistReducer(persistConfig, rootReducer);
