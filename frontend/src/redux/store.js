import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";

import { dataReducer } from "./data/reducer";
import { cartProductReducer } from "./cart/reducer";

const rootRedcer = combineReducers({
  dataReducer,
  cartProductReducer,
});

export const store = createStore(rootRedcer, applyMiddleware(thunk));
