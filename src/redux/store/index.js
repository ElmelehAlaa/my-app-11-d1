import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";
import queryReducer from "../reducers/queryReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  favorites: favoritesReducer,
  query: queryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
