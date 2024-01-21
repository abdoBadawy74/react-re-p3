import axios from 'axios';
import React, { useState } from 'react'

export default function Register() {

let base_url=""

let [error,setError]=useState("")

let [user,setUser] = useState(
  {
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:"",
  }
)

function getUserData(e){
  let myUser = {...user};
  myUser[e.target.name] =e.target.value;
  setUser(myUser);
  console.log(myUser);
}


async function submitRegisterform(e){
  e.preventDefault();
 let {data}= await axios.post({base_url}+"/signup",user)
//  let {data}= await axios.post("https://route-egypt-api.herokuapp.com/signup",user)

  if(data.message === "success"){
  // navigate to login page
  }else{
    setError(data.message)
  }

}

  return (
  <>
  <div className="w-75 mx-auto">
  <h2>Register Now</h2>
{
error.length > 0 ? 
 <div className='alert alert-danger' >{error}</div>
 : " "
}


  <form onSubmit={submitRegisterform}>

    <label  htmlFor='first_name' >First Name :</label>
    <input onChange={getUserData} type="text" className='form-control mb-2' id='first_name' name='first_name'/>

    <label  htmlFor='last_name' >Last Name :</label>
    <input onChange={getUserData} type="text" className='form-control mb-2' id='last_name' name='last_name'/>

    <label htmlFor='age' >Age :</label>
    <input onChange={getUserData} type="number" className='form-control mb-2' id='age' name='age'/>

    <label htmlFor='email' >Email :</label>
    <input onChange={getUserData} type="email" className='form-control mb-2' id='email' name='email'/>

    <label htmlFor='password' >Password :</label>
    <input onChange={getUserData} type="password" className='form-control mb-2' id='password' name='password'/>

    <button onChange={getUserData} type='submit' className='btn btn-outline-info'>Register</button>

  </form>
  </div>

  
  </>
  )
}
