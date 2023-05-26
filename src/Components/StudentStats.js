import React from 'react'

export default function StudentStats(props) {
   let average = props.student.reduce((acc, cur)=>{
      return acc + cur.Ratings     
   }, 0)/props.student.length
   
   average = average.toFixed(1).replace(/[.,]0$/, '') //if 3.0 occurs it replaces by 3

  return ( 
    <div className='StInfo'>
         <h1>No. of Students: {props.student.length}</h1>
         <h1>Average Ratings: { isNaN(average)? 0 : average} </h1>
    </div>
  )
}
