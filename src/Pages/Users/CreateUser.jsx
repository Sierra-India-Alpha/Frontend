import React from 'react'
import Sidenav from '../../Components/Sidebar/sidebar'
import Users from '../../Components/Forms/users'

const CreateUser = () => {
  const onSubmit = (data)=> {
    console.log(data)
};

  return (
    <>
    <div className='app-container'>

        <div className='sidenav'>
        <Sidenav/>
        </div>

        <div className='form-wrapper'>
        <Users submitButtonTitle={"Atualizar"} onSubmit={onSubmit}/>
        </div>
        
    </div>
    </>
  )
}

export default CreateUser