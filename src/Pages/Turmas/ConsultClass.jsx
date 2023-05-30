import {useForm} from 'react-hook-form';
import './style.css'
import Sidenav from '../../Components/Sidebar/sidebar';
const ConsultClass = () => {
    const {register, handleSubmit} = useForm();
    
    console.log('RENDER');
 
    const onSubmit = (data)=> {
        console.log(data)
    };
    return(
        <div className='app-container'>
            <div className='sidenav'>
                <Sidenav />
            </div>

            <div className='form-wrapper'>
            <h1>Consultar Turma</h1>
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

                        {/* {errors?.profession && (<p className="error-message">{errors?.profession}</p>)} */}
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

                        {/* {errors?.profession && (<p className="error-message">{errors?.profession}</p>)} */}
                        </div>
                 </div>
                
                <div className='input-group'>
                    <div className='form-group'>
                        <label>Nome</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='Nome'
                            {...register("name_create_course")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>
                    <div className='form-group'>
                        <label>Limite Aluno</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="number"
                            placeholder=''
                            {...register("limit_class")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>
                </div>
                
                <div className='input-group'>
                    <label>Horário</label>
                    <div className='form-group'>
                            <label>Dia da Semana</label>
                            <select
                            {...register('week_class')}
                            // className={errors?.profession && "input-error"}
                            >
                            <option value='0'>Domingo</option>
                            <option value='1'>Segunda</option>
                            <option value='2'>Terça</option>
                            <option value='3'>Quarta</option>
                            <option value='4'>Quinta</option>
                            <option value='5'>Sexta</option>
                            <option value='6'>Sabado</option>
                        </select>

                        {/* {errors?.profession && (<p className="error-message">{errors?.profession}</p>)} */}
                    </div>
                    
                    <div className='form-group'>
                        <label>Inicio</label>
                        <input
                            type='time'
                            placeholder=''
                            {...register("inicio_aula_turma")}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Fim</label>
                        <input
                            type='time'
                            placeholder=''
                            {...register("fim_aula_turma")}
                        />
                    </div>
                </div>
           
                {/* <div className='form-group botao'>
                    <button onClick={()=> handleSubmit(onSubmit)()}>Lista de Frequência</button>
                </div> */}
                
                </div>

        </div>
    )

}

export default ConsultClass;