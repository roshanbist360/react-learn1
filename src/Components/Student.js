import React from 'react'
// import PropTypes from 'prop-types'
import Card from './shared/Card'
import Button from './subComponents/Button' 

export default function Student({student, handleDelete}) {
  const studentStyle = {
     margin: "40px",
     background: "#ccc",
     width: "180px",
     padding: "20px"

  }

  return (
    <>
         { student.length===0?"***** No Students Data to display *********":
           student.map((stu, index)=>{
           return(  
              <Card reverse={ true } style={studentStyle}  key={index}>
                  <h3>Name: {stu.Name.toUpperCase()}</h3>
                  <h3>Faculty: {stu.Faculty}</h3>
                  <h3>Roll: {stu.Roll}</h3>
                  <h3>Ratings: {stu.Ratings}</h3>
                  <Button> 
                      <span onClick={()=>handleDelete(stu.id)}> Delete</span> 
                  </Button>
              </Card>
          )})}
    </>
  )
}

// Student.defaultProps = {
// }
// Student.PropTypes = {
//        student: PropTypes.arrayOf(
//         PropTypes.shape({
//           Name: PropTypes.string.isRequired,
//           Faculty: PropTypes.string.isRequired,
//           Roll: PropTypes.number.isRequired
//         })
//        )
// }