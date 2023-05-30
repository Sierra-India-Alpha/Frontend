import React from 'react'
import Table from './Table/table'
import api from '../../Service/api'

const TableEnrollments = () => {
  const  { useEffect, useState } = React
  const [data, setData] = useState([])
  const token = sessionStorage.getItem("token")
  console.log(token)
  useEffect(() => {

    api.get('/matriculas', {
      headers:{
        Authorization: 'Bearer ' + token 
      }
    })
      .then((res) => {
        const data = res.data
        console.log(data)
        // const aux = data
        // aux.student_name = data.student.name
        // setData(aux)
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
        Header: 'Responsável',
        accessor: 'responsible.name',
      },
    ],
    []
  )

  return (
    <Table data={data} columns={columns}/>
  )
}

export default TableEnrollments