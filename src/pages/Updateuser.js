import axios from 'axios'
import React from 'react'

const Updateuser = () => {
    const token = JSON.parse(localStorage.getItem("token"))

    const handleUpdate = async(e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
       await axios.patch("http://localhost:8000/account/update/", form,{
            headers:{
              "Authorization": "Bearer " + token.access
            }
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  return (
    <div className='w-50 m-auto'>
    <form onSubmit={(e) => handleUpdate(e)}>
    <div>
        <label htmlFor=''>First name</label>
        <input type='firstname' className='form-control' name='First_name'/>
      </div>

      <div>
        <label htmlFor=''>Last name</label>
        <input type='lastname' className='form-control' name='Last_name'/>
      </div>


      <button type='submit' className='btn btn-primary mt-4'>Update user</button>
      </form>
    </div>
  )
}

export default Updateuser;