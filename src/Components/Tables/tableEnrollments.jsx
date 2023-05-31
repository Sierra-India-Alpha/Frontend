import React from 'react'
import Table from './Table/table'
import TableSelectRow from './TableSelectRow/tableSelectRow'
import api from '../../Service/api'
import ReactModal from 'react-modal'
import Enrollments from '../Forms/matriculas'

const TableEnrollments = () => {
  const  { useEffect, useState } = React
  const [data, setData] = useState([])
  const [selected, setSelected] = useState({})
  const [showModal, setShowModal] = useState(false)

  const token = sessionStorage.getItem("token")

  const onEditClick = (enrollment) => {
    setSelected(enrollment)
    setShowModal(true)
    
  }

  const onSubmit = () =>{
    setShowModal(false)
    
  }

  useEffect(() => {

    api.get('/matriculas', {
      headers:{
        Authorization: 'Bearer ' + token 
      }
    })
      .then((res) => {
        const data = res.data
        setData(data)
      })
  }, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Nome',
        accessor: 'student.name', // accessor is the "key" in the data
      },
      {
        Header: 'Curso',
        accessor: 'course.name',
      },
      {
        Header: 'Turma',
        accessor: 'class.name',
      },
      {
        Header: 'Responsável',
        accessor: 'responsible.name',
      },
      {
        Header: 'E-mail',
        accessor: 'responsible.email',
      },
      {
        Header: 'Telefone',
        accessor: 'responsible.phone_number',
      },
      {
        Header: 'Status',
        accessor: 'status.name',
      },
    ],
    []
  )

  return (
    <>
    <TableSelectRow data={data} columns={columns} onEditClick={onEditClick}/>
    <ReactModal isOpen={showModal}>
      <Enrollments submitButtonTitle={"Atualizar"} onSubmit={onSubmit} enrollment={selected}/>
    </ReactModal>
    </>
  )
}

export default TableEnrollments