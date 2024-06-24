// LocalData.js

// import userReducer from "./UserReducer";

export function loadData() {
  try {
    const serializedState = localStorage.getItem("items");
    if (serializedState === null) {
      return { UserReducer: [] };
    }
    const parseData = JSON.parse(serializedState);
    if (parseData) {
      return { UserReducer: parseData };
    }
    return { UserReducer: [] };
  } catch (err) {
    return { UserReducer: [] };
  }
}

export const saveData = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("items", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};
