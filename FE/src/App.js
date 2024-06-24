import React, { useState } from "react";
import InputForm from "./exercise/InputForm";
import ToDoList from "./exercise/ToDoList";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Update from "./exercise/Update";
export default function App() {
  const [item, setItem] = useState({
    id: "",
    name: "",
    startDate: "",
    endDate: "",
    height: "",
    department: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleUpdate = (id, arrUsers) => {
    const updatedItemIndex = arrUsers.findIndex((item) => item.id === id);
    setItem(arrUsers[updatedItemIndex]);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (item.id) {
      dispatch({ type: "UPDATE_USER", payload: item });
      // const loadedDataFromLocal = loadData();
      // const updatedUsers = loadData().UserReducer.map((u) =>
      //   u.id === item.id ? item : u
      // );
      // saveData(updatedUsers);
      axios
        .put(`http://localhost:8000/updateUser/${item.id}`, item)
        .then((res) => console.log(res.data))
        .catch((err) => console.log("fron end error", err));
    } else {
      const newItem = { ...item, id: new Date().getTime() };
      dispatch({ type: "ADD_USER", payload: newItem });
      axios
        .post("http://localhost:8000/createUser", newItem)
        .then((res) => console.log(res))
        .catch((err) => console.log("frontend", err));
    }
    handleReset();
  }
  const handleReset = () => {
    setItem({
      id: "",
      name: "",
      startDate: "",
      endDate: "",
      height: "",
      department: "",
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ToDoList onhandleUpdate={handleUpdate} />}
        ></Route>
        <Route
          path="/createUser"
          element={
            <InputForm
              item={item}
              onhandleChange={handleChange}
              onSubmit_={handleSubmit}
            />
          }
        ></Route>
        <Route
          path="/updateUser"
          element={
            <Update
              item={item}
              onhandleChange={handleChange}
              onSubmit_={handleSubmit}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
