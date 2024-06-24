import React from "react";
import style from "./doctor.module.css";
import { useNavigate } from "react-router-dom";
export default function InputForm({ item, onhandleChange, onSubmit_ }) {
  const Navigate = useNavigate();
  function handleSubmit(e) {
    onSubmit_(e);
    alert("Bạn đã thêm thông tin thành công !");
    Navigate("/");
  }
  return (
    <div className={style.doctorform}>
      <div className={`${style.container} ${style.doctorform}`}>
        <header className={style.doctorform}>DOCTOR'S INFORMATION</header>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={`form first`}>
            <div className={`${style.detail} personal`}>
              <span className={style.title}>Information About The Doctor</span>

              <div className={style.fields}>
                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Name <span>*</span>
                  </label>

                  <input
                    value={item.name || ""}
                    type="text"
                    name="name"
                    onChange={onhandleChange}
                    placeholder="Enter your full name:"
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Date in <span>*</span>
                  </label>
                  <input
                    value={item.startDate || ""}
                    type="date"
                    name="startDate"
                    onChange={onhandleChange}
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Date out <span>*</span>
                  </label>
                  <input
                    value={item.endDate || ""}
                    type="date"
                    name="endDate"
                    onChange={onhandleChange}
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Your height <span>*</span>
                  </label>
                  <input
                    value={item.height || ""}
                    type="text"
                    name="height"
                    onChange={onhandleChange}
                    placeholder="Height: "
                    required
                  />
                </div>

                <div className={style[`input-field`]}>
                  <label htmlFor="">
                    Department <span>*</span>
                  </label>
                  <select name="department" onChange={onhandleChange} required>
                    <option value={item.department || ""}>
                      {item.department || ""}
                    </option>
                    <option value="Diagnose">Diagnose</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Obstetrics and Gynecology">
                      Obstetrics and Gynecology
                    </option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Otolaryngology">Otolaryngology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Psychiatry">Psychiatry</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={style.button}>
            <button type="submit" className={style.summitBtn}>
              <span className={style[`summit-btn`]}>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
