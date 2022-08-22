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
    <div className="student-filter">
      <h3>Students</h3>
      <h4>Select a student to filter the bar chart</h4>
      <div className="radio-buttons">
        {radioButtons}
      </div>
    </div>
  )
}

export default StudentFilter