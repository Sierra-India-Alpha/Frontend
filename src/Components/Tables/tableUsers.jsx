import React from 'react'
import Table from './Table/table'
import api from '../../Service/api'

const TableUsers = () => {
  const  { useEffect, useState } = React
  const [data, setData] = useState([])
  const token = sessionStorage.getItem("token")

  useEffect(() => {

    api.get('/users', {
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
        Header: 'Nome de usuário',
        accessor: 'username',
      },
    ],
    []
  )

  return (
    <Table data={data} columns={columns}/>
  )
}

export default TableUsers