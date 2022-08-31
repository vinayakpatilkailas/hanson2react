import React from "react";

const Submits = (props) => {

  const { submitData } = props;

  return (
    <div className="Parent">
      
      {submitData.map((v) => {
        return (
          <>
          <div className="Child1" key={v.id}>
            <div className="Child2">
              <p>Name: {v.name} </p>
              <p>Department: {v.dept} </p>
              <p>Rating: {v.rate} </p>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
}

export default Submits;
