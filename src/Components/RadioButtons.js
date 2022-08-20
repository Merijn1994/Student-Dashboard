import React from "react";

function RadioButtons ( {handleChange, names}) {

  return(
      <label>
        <input 
          type="radio"
          className="radio"
          name="student"
          value={names}
          onChange={handleChange}
        /> {names}
      </label>
  )
}

export default RadioButtons