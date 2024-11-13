import React from 'react'
import Button from '../../components/Button'

const Home = () => {
const students = [
  { firstName: "Alice", grade: "A", age: 15 },
  { firstName: "Bob", grade: "B", age: 16 },
  { firstName: "Charlie", grade: "A", age: 17 },
  { firstName: "Diana", grade: "C", age: 15 },
  { firstName: "Evan", grade: "B", age: 16 }
  
];

  return (
    <main> 
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='py-5'>
              <h1 className='mb-0 text-center'>This is Learning React Home Page with Bootstrap </h1>
              <div className='p-5 text-center'>
              <Button/> 
              <Button type="danger" text = 'danger Button' /> 
              <Button type="success" text = 'success Button' /> 
              <Button type="secondary" text = 'secondary Button' /> 
              <Button type="dark" text = 'dark Button' /> 
              <Button type="light" text = 'light Button' /> 
              <Button type="info" text = 'info Button' /> 
              <Button type="warning" text = 'warning Button' /> 
              {/* <button className='btn btn-light'>light button</button> */} 
              </div>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">Grade</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student, ind)=>{
      return (
    <tr>
      <th>{ind+1}</th>
      <td>{student.firstName}</td>
      <td>{student.grade}</td>
      <td>{student.age}</td>
    </tr>

      )

    })}
    
    
  </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home