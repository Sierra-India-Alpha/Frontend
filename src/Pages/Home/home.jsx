import React from 'react'
// import { useProSidebar } from "react-pro-sidebar";
// import Sidenav from '../../Components/Sidebar/sidebar';
// import TableCourses from '../../Components/Tables/tableCourses';
// import TableSelectRow from '../../Components/Tables/TableSelectRow/tableSelectRow';
import { useState } from 'react'
import "../Home/style.css"
import ReactModal from "react-modal"
import GoodForms from "../../Components/Forms/users"
import Cursos from '../../Components/Forms/cursos'
import Enrollments from '../../Components/Forms/matriculas'
import Sidebar_ from '../../Components/Sidebar/sidebar_'


function Home() {
  // const { collapseSidebar } = useProSidebar();
  const [showModal, setShowModal] = useState(false)

  const handleClose = () =>{
    setShowModal(false)
}

  const handleOpen = () =>{
    setShowModal(true)
  }

  const onSubmit= data =>{
    console.log(data)
   }

  return (
    <div className='app-container'>
      <div className='sidenav'>
      <Sidebar_/>
      </div>

    {/* <ReactModal 
      isOpen={showModal}
      contentLabel="Minimal Modal Example"
    >
      <Enrollments submitButtonTitle={"Atualizar"} onSubmit={onSubmit}/>
      <button onClick={e => handleClose()}>Cancel</button>
    </ReactModal> */}

    {/* <main>
    <button onClick={e => handleOpen()}>Teste</button>
    </main> */}
    </div>
  )
}

export default Home