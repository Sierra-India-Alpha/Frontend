import {useForm} from 'react-hook-form';
import './style.css'
import TableCursos from '../../Components/Tables/tableCourses';

const ConsultCursos = () => {
    const {register} = useForm();
    
    console.log('RENDER');

    return(
    <div className='app-container'>
        <div className='form-wrapper'> 
            <h1>Consultar Cursos</h1>
            <div className='input-group'>
                <div className='form-group'>
                                <label>Unidade</label>
                                <select
                                {...register('unidade_couses')}
                                // className={errors?.profession && "input-error"}
                                >
                                <option value='0'>Unidade</option>
                                <option value='a'>B</option>
                                <option value='other'>Outra</option>
                            </select>

                        {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                </div>

                <div className='form-group'>
                            <label>Status</label>
                            <select
                            {...register('status_courses')}
                            // className={errors?.profession && "input-error"}
                            >
                            <option value='0'>Ativo</option>
                            <option value='a'></option>
                            <option value='other'>Outra</option>
                        </select>

                    {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                </div> 
            </div>
            <TableCursos/>
        </div>
    </div>
)

}

export default ConsultCursos;