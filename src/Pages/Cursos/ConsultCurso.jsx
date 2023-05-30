import {useForm} from 'react-hook-form';
import './style.css'
const ConsultCurso = () => {
    const {register, handleSubmit} = useForm();
    
    console.log('RENDER');
 
    const onSubmit = (data)=> {
        console.log(data)
    };
    return(

    <div className='app-container'>
        <div className='form-wrapper'>
            <h1>Cadastrar Curso</h1>
                    <div className='form-group'>
                        <label>Nome</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='Seu Nome'
                            {...register("name_create_course")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Descrição</label>
                        <textarea   
                            name="descricao"
                            rows={4}
                            cols={40}
                            {...register('descricao_create_course')}
                        />
                    </div>
                <div className='input-group'>
                    <div className='form-group'>
                            <label>Valor da Mensalidade</label>
                            <input
                            // className={errors?.name && 'input-error'}
                            type="tel"
                            placeholder='Seu Nome'
                            {...register("mensalidade_create_course")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>

                    <div className='form-group'>
                            <label>Duração em meses</label>
                            <input
                            // className={errors?.duracao && 'input-error'}
                            type="number"
                            placeholder='Seu Nome'
                            {...register("duracao_create_course")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.duracao}</p>} */}
                    </div>
                </div>
            <div className='form-group'>
                <button onClick={()=> handleSubmit(onSubmit)()}>Confirmar Cadastro</button>
            </div>
        </div>
    </div>
)

}

export default ConsultCurso;