import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { loadData } from "./LocalData";

const preloadedState = loadData();

const store = createStore(rootReducer, preloadedState);
console.log("preloadstate 6,", preloadedState, store.getState());
// console.log("sau preloadstate 8");

export default store;
