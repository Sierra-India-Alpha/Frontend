import { useForm } from 'react-hook-form';
import "./style.css";
import TableEnrollments from '../../Components/Tables/tableEnrollments';
import Sidebar_ from '../../Components/Sidebar/sidebar_';

const ConsultEnrollments = () => {
    const { register } = useForm();

    console.log('RENDER');
    return (
        <div className='app-container'>

            <div className='sidenav'>
                <Sidebar_ />
            </div>
            <div className="app-wrapper">
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
                            <label>Status</label>
                            <select
                                {...register('profession')}
                            // className={errors?.profession && "input-error"}
                            >
                                <option value='0'>Ativo</option>
                                <option value='a'></option>
                                <option value='other'>Outra</option>
                            </select>

                            {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <TableEnrollments />
                    </div>

                </div>
            </div>
        </div>
    );

};

export default ConsultEnrollments;