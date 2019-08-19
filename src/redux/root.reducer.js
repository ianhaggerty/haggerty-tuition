import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sidebarReducer from "./sidebar/sidebar.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["sidebar"]
};

const rootReducer = combineReducers({
  sidebar: sidebarReducer
});

export default persistReducer(persistConfig, rootReducer);
