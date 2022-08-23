import React from "react";
import IndividualStudents from "./Individual Students";

function StudentFilter ( {studentNames} ) {
  const studentList = studentNames.map((student)=> 
    <IndividualStudents 
      name={student.name} 
      key={student.id}
    />
  )

  return(
    <div className="student-filter">
      <h3>Students</h3>
      <h4>Select a student to filter the bar chart</h4>
      <div className="student-list">
        {studentList}
      </div>
    </div>
  )
}

export default StudentFilter