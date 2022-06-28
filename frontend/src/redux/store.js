import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

import { dataReducer } from "./data/reducer";
import { authReducer } from "./authToken/reducer";

const rootRedcer = combineReducers({
  dataReducer,
  authReducer,
});

export const store = createStore(rootRedcer, applyMiddleware(thunk));
