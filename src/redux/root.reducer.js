import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { reducer as formReducer } from "redux-form";

import tooltipReducer from "./tooltip/tooltip.reducer";
import queryStringReducer from "./query-string/query-string.reducer";
import enquiryPageReducer from "./enquiry-page/enquiry-page.reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tooltip", "router"]
};

export const history = createBrowserHistory();

export const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  queryString: queryStringReducer,
  router: connectRouter(history),
  form: formReducer,
  enquiryPage: enquiryPageReducer
});

export default persistReducer(persistConfig, rootReducer);
