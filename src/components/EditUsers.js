import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useNavigate,useParams } from 'react-router-dom';
import { editUser } from '../redux/userReducer';

function EditUsers() {
  //use params to get the url params
  let {id}=useParams()
  let data=useSelector((state)=>state.users.userData)

  //use state to dynamically update the state values
  let[studentName,setName]=useState("")
  let[email,setEmail]=useState("")
  let[mobile,setMobile]=useState("")
  let[batch,setBatch]=useState("")
  let[mentorName,setMentor]=useState("")

  let dispatch=useDispatch();
  let navigate=useNavigate();


  //to pre-populate the data
  useEffect(()=>{
    if(id && id<data.length){
     setName(data[id].studentName)
     setEmail(data[id].email)
     setMobile(data[id].mobile)
     setBatch(data[id].batch)
     setMentor(data[id].mentorName)
    }else{
      navigate('/all-users')
    }
  },[])

  //function when submit button is clicked
  let handleSubmit=()=>{
    dispatch(editUser({index:id,data:{studentName,email,mobile,batch,mentorName}}))
    navigate('/all-users')
  }

  return <div className='container-fluid'>
    <Form>

      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" value={studentName} placeholder="Enter StudentName" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

     
      <Form.Group className="mb-3" >
        <Form.Label>Email address </Form.Label>
        <Form.Control type="email"  value={email} placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text"  value={mobile} placeholder="Enter Mobile"  onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mentor Name</Form.Label>
        <Form.Control type="text"  value={mentorName} placeholder="Enter Mentor Name"  onChange={(e)=>setMentor(e.target.value)}/>
      </Form.Group>
     
     
      <Button variant="primary" type="submit" onClick={()=>{
       handleSubmit()
      }}>
        Submit
      </Button>
    </Form>
    </div>
 
}

export default EditUsers;