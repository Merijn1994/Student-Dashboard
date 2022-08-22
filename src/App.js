import "./App.css";
import { useState } from "react"
import BarChart from "./Components/BarChart";
import studentsData from "./studentsData";
import StudentFilter from "./Components/StudentFilter";
import LineChart from "./Components/LineChart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  // initialize state
  const [data] = useState(studentsData)
  const [filteredData, setFilteredData] = useState()

  // compile all students and give unique id
  const allStudentNames = data.map(students => students.name)
  const studentNames = [...new Set(allStudentNames)]
  .map((name, index) => {
    return {
      name: name,
      id: index + 1
    }
  })

  // filter the data for individual students
  const filterIndividualStudent = name => {
    return data.filter(student => {
      return student.name === name
    })
  }
  
  // apply filter changes to the chart
  const handleChange = event => {
    setFilteredData(filterIndividualStudent(event.target.value))
  }
  
  // Calculate average
  const groupedData = Object.values(data.reduce((acc, { assignment, difficulty, fun }) => { 
    acc[assignment] = acc[assignment] || { assignment, difficulty: 0, fun: 0, participants: 0 };
    acc[assignment].difficulty += difficulty;
    acc[assignment].fun += fun;
    acc[assignment].participants++;
    return acc;
}, []))

  const averageData = groupedData.map(({ assignment, participants, difficulty, fun }) => { 
    return { 
        assignment,
        participants,
        avgDifficulty: difficulty / participants,
        avgFun: fun / participants
    }
});

  return (
    <div>
      <Header />
      <BarChart data={!filteredData? data: filteredData}/>
      <StudentFilter 
        studentNames={studentNames}
        handleChange={handleChange}
      />
      <LineChart data={averageData}/>
      <Footer />
    </div>
  )
}

export default App;