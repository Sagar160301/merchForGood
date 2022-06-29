import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

import { dataReducer } from "./data/reducer";

const rootRedcer = combineReducers({
  dataReducer,
});

export const store = createStore(rootRedcer, applyMiddleware(thunk));
