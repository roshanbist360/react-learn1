// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Student from './Components/Student.js'
import StudentData from './data/StudentData'
import StudentStats from './Components/StudentStats';
import { useState } from 'react'


function App() {
  const [student, setStudent] = useState(StudentData)

  const deleteItem = (id)=>{
    setStudent(student.filter((item)=> item.id !== id));
  }

  return (
    <> 
      <StudentStats student={StudentData}/>
      <Student student={StudentData} handleDelete={deleteItem}/>
    </>  
  );
}

export default App;
