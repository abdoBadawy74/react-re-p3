import React, { useState } from 'react'

export default function Register() {

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


function submitRegisterform(e){
  e.preventDefault();
  console.log("submit");
  console.log(user);
}

  return (
  <>
  <div className="w-75 mx-auto">
  <h2>Register Now</h2>
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
