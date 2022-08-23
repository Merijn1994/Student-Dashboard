import "./App.css";
import { useState } from "react"
import BarChart from "./Components/BarChart";
import studentsData from "./studentsData";
import StudentFilter from "./Components/StudentFilter";
import LineChart from "./Components/LineChart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import BarChartIndividualStudent from "./Components/BarChartIndividualStudent";

function App() {
  // initialize state
  const [data] = useState(studentsData)

  // compile all students and give unique id
  const allStudentNames = data.map(students => students.name)
  const studentNames = [...new Set(allStudentNames)]
  .map((name, index) => {
    return {
      name: name,
      id: index + 1
    }
  })
  
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
        difficulty: difficulty / participants,
        fun: fun / participants
    }
});

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={
              <div className="main-path">
                <BarChart data={averageData}/>
                <StudentFilter 
                  studentNames={studentNames}
                />
                <LineChart data={averageData}/>
              </div>}
          />
          <Route 
            path='/student/:name'
            element={
              <div>
                <BarChartIndividualStudent data={data}/>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;