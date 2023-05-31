import React from 'react'
import Table from './Table/table'
import api from '../../Service/api'

const TableClasses = () => {
  const  { useEffect, useState } = React
  const [data, setData] = useState([])
  const token = sessionStorage.getItem("token")

  useEffect(() => {

    api.get('/turmas', {
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
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Curso',
        accessor: 'course.name',
      },
      {
        Header: 'Limite de alunos',
        accessor: 'max_students',
      },
      {
        Header: 'Início',
        accessor: 'start_of_class',
      },
      {
        Header: 'Fim',
        accessor: 'end_of_class',
      },
    ],
    []
  )

  return (
    <Table data={data} columns={columns}/>
  )
}

export default TableClasses