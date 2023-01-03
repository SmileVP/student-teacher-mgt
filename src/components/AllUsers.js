import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { deleteUser } from '../redux/userReducer'
import { useNavigate } from 'react-router-dom'

function AllUsers() {
  //useSelector takes current state as an argument and returns data whatever you want from it 
  let data=useSelector((state)=>state.users.userData)
  
  let dispatch=useDispatch()
  let navigate=useNavigate()

  return <div className='container-fluid'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Student Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Batch</th>
          <th>Mentor Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
      data.map((e,i)=>{
        return <tr key={i}>
        <td>{i+1}</td>
          <td>{e.studentName}</td>
          <td>{e.email}</td>
          <td>{e.mobile}</td>
          <td>{e.batch}</td>
          <td>{e.mentorName}</td>
          <td>
            <Button variant="primary" onClick={()=>navigate(`/edit-users/${i}`)}>Edit</Button>
          &nbsp;&nbsp;
            <Button variant="danger" onClick={()=>dispatch(deleteUser({index:i}))}>Delete</Button>
          </td>
        </tr>

      })
      }
        
       
      </tbody>
    </Table>
    </div>
  
}

export default AllUsers