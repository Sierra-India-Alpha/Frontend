import {useForm} from 'react-hook-form';
import "./style.css";
import TableEnrollmentsUnit from '../../Components/Tables/tableEnrollmentsUnit';
import Sidebar_ from '../../Components/Sidebar/sidebar_';

const ConsultEnrollmentsUnit = () => {
    const {register} = useForm();
    
    console.log('RENDER');
    return (
        <div className ='app-container'>

<div className='sidenav'>
            <Sidebar_/>
        </div>
            <div className='form-wrapper'>
            <h1>Consultar Matrículas</h1> 
                <div className='input-group'>
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

                        {/* {errors?.profession && (<p className="error-message">{errors?.profession}</p>)} */}
                    </div>

                    <div className='form-group'>
                        <label>Turma</label>
                        <select
                        {...register('unidade')}
                        // className={errors?.profession && "input-error"}
                        >
                        <option value='0'>Turma</option>
                        <option value='developer'>Desenvolvedor</option>
                        <option value='other'>Outra</option>
                    </select>

                    {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                    </div>

                    <div className='form-group'>
                            <label>Unidade</label>
                            <select
                            {...register('unit_enrollment')}
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
                            {...register('status_enrollment')}
                            // className={errors?.profession && "input-error"}
                            >
                            <option value='0'>Ativo</option>
                            <option value='a'></option>
                            <option value='other'>Outra</option>
                        </select>

                        {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                    </div> 

                </div>
                <TableEnrollmentsUnit/>
             </div>
             
        </div>
    );

};

export default ConsultEnrollmentsUnit;