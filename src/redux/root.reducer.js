import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import tooltipReducer from "./tooltip/tooltip.reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tooltip", "router"]
};

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  router: connectRouter(history)
});

export default persistReducer(persistConfig, rootReducer);
