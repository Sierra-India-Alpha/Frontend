import { useForm } from 'react-hook-form';
import './style.css'
import Sidebar_ from '../../Components/Sidebar/sidebar_';
import TableClasses from '../../Components/Tables/tableClasses';
const ConsultClassUnit = () => {
    const { register, handleSubmit } = useForm();

    console.log('RENDER');

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div className='app-container'>
            <div className='sidenav'>
                <Sidebar_ />
            </div>
            <div className="app-wrapper">
                <div className="form-wrapper">
                    <h1>Consulta de Turmas</h1>
                    <div className='input-group'>
                        <div className='form-group'>
                            <label>Unidade</label>
                            <select
                                {...register('unit_class')}
                            // className={errors?.profession && "input-error"}
                            >
                                <option value='0'>Unidade</option>
                                <option value='xxxx'>xxxx</option>
                                <option value='xxxx'>Outra</option>
                            </select>
                        </div>

                        <div className='form-group'>
                            <label>Curso</label>
                            <select
                                {...register('course_enrrolment')}
                            // className={errors?.profession && "input-error"}
                            >
                                <option value='0'>Curso</option>
                                <option value='xxxx'>xxxx</option>
                                <option value='xxxx'>Outra</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="table-wrapper">
                    <TableClasses />
                </div>
            </div>
        </div>
    )

}

export default ConsultClassUnit;