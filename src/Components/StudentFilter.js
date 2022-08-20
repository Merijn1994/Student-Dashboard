import React from "react";
import RadioButtons from "./RadioButtons";

function StudentFilter ( {studentNames, handleChange} ) {
  const radioButtons = studentNames.map((student)=> 
    <RadioButtons 
      names={student.name} 
      handleChange={handleChange}
      key={student.id}
    />
  )

  return(
    <div>
      <h2>Students</h2>
      {radioButtons}
    </div>
  )
}

export default StudentFilter