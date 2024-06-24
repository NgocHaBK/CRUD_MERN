import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
// import { loadData } from "./LocalData";
export default function ToDoList({ onhandleUpdate }) {
  let dispatch = useDispatch();
  // let arrUsers = useSelector((state) => {
  //   return state.UserReducer;
  // });
  let [arrUsers_, setUsers_] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => setUsers_(res.data))
      .catch((err) => console.log(err));
  }, [arrUsers_]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/")
  //     .then((res) => setUsers_(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  function handleDelete(id) {
    dispatch({ type: "REMOVE_USER", payload: { id } });
    axios
      .delete("http://localhost:8000/delete/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container mt-5">
        <Link to="./createUser" className="btn btn-success">
          {" "}
          + Add
        </Link>
        <div className="text-center ">
          <table className="table" style={{ width: "75%" }}>
            <thead>
              <tr>
                <th>Tên</th>
                <th>id</th>
                <th>startDate</th>
                <th>endDate</th>
                <th>height</th>
                <th>department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {(arrUsers_ || []).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td> {item.id}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>{item.height}</td>
                    <td style={{ width: "150px" }}>{item.department}</td>
                    <td>
                      <Link
                        className="btn btn-warning"
                        onClick={() => {
                          onhandleUpdate(item.id, arrUsers_);
                        }}
                        to="/updateUser"
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => handleDelete(item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
