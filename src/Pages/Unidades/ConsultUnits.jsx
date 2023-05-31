import React from 'react'
import Sidebar_ from '../../Components/Sidebar/sidebar_'
import TableUnidades from '../../Components/Tables/tableUnits'

const ConsultUnits = () => {
    return (
        <div className='app-container'>
            <div className="sidenav">
                <Sidebar_ />
            </div>
            <div className='app-wrapper'>
                <div className='form-wrapper'>
                    <h1>Consultar Unidades</h1>
                </div>

                <div className='table-wrapper'>
                    <TableUnidades />
                </div>
            </div>
        </div>
    )
}

export default ConsultUnits