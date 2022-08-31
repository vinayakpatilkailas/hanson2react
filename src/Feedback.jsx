import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import Submits from "./Submits";


const Feedback = ()  => {

  const [user, setUser] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState(0);
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setData([
      { name: user, dept: department, rate: rating, id: uuidv1() },
      ...data,
    ]);
    setUser("");
    setDepartment("");
    setRating(0);
  };
  return(
    <>
        <div className="Feedback">
        <h1 > Employee Feedback - Form</h1>
        <form action="" onSubmit={submitHandler}>
          <div className="input">
            <label htmlFor="">Name:- </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="">Department:-</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <label htmlFor="">Rating:-</label>
            <input
              type="number"
              value={rating}
              max={50}
              min={0}
              // step={0.1}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <input type="submit" className="Button" />
        </form>
      </div>
      <Submits submitData={data} />
      </>
  )
    
  
}

export default Feedback;
