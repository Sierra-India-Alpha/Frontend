import React from 'react'
import Table from './Table/table'
import api from '../../Service/api'

const TableEnrollments = () => {
  const  { useEffect, useState } = React
  const [data, setData] = useState([])
  const token = sessionStorage.getItem("token")
  useEffect(() => {

    api.get('/matriculas', {
      headers:{
        Authorization: 'Bearer ' + token 
      }
    })
      .then((res) => {
        const data = res.data
        console.log(data)
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
        accessor: 'status.name.',
      },
    ],
    []
  )

  return (
    <Table data={data} columns={columns}/>
  )
}

export default TableEnrollments