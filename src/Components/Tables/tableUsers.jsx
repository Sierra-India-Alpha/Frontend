import React from 'react'
import axios from 'axios'
import Table from './Table/table'

const TableUsers = () => {
  const  { useEffect, useState } = React
  const [data, setData] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3333/cursos")
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
        Header: 'Curso',
        accessor: 'desc',
      },
    ],
    []
  )

  return (
    <Table data={data} columns={columns}/>
  )
}

export default TableUsers