import React from 'react'
import Sidenav from '../../Components/Sidebar/sidebar'
import Users from '../../Components/Forms/users'
import Sidebar_ from '../../Components/Sidebar/sidebar_';

const CreateUser = () => {
  const onSubmit = (data)=> {
    console.log(data)
};

  return (
    <>
    <div className='app-container'>

        <div className='sidenav'>
            <Sidebar_/>
        </div>

        <div className='form-wrapper'>
        <Users submitButtonTitle={"Atualizar"} onSubmit={onSubmit}/>
        </div>
        
    </div>
    </>
  )
}

export default CreateUser