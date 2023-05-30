import {useForm} from 'react-hook-form';
import './style.css'
const ConsultClassUnit = () => {
    const {register, handleSubmit} = useForm();
    
    console.log('RENDER');
 
    const onSubmit = (data)=> {
        console.log(data)
    };
    return(
        <div className='class-unit-container'>
            <h1>Consulta de Turmas</h1>
                <div className='input-group'>
                    <div className='form-group unidade'>
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

                    <div className='form-group curso'>
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
    )

}

export default ConsultClassUnit;