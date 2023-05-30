import {useForm} from 'react-hook-form';
import './style.css'
const ConsultCurso = () => {
    const {register, handleSubmit} = useForm();
    
    console.log('RENDER');
 
    const onSubmit = (data)=> {
        console.log(data)
    };
    return(

        <div className='course-container'>
            <h1>Cadastrar Curso</h1>
                    <div className='form-group nome-curso'>
                        <label>Nome</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='Seu Nome'
                            {...register("name_create_course")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>

                    <div className='form-group desc-curso'>
                        <label>Descrição</label>
                        <textarea   
                            name="descricao"
                            rows={4}
                            cols={40}
                            {...register('descricao_create_course')}
                        />
                    </div>
                <div className='input-group'>
                    <div className='form-group mesalidade-curso'>
                            <label>Valor da Mensalidade</label>
                            <input
                            // className={errors?.name && 'input-error'}
                            type="tel"
                            placeholder='Seu Nome'
                            {...register("mensalidade_create_course")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>

                    <div className='form-group duracao-curso'>
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
            <div className='form-group botao'>
                <button onClick={()=> handleSubmit(onSubmit)()}>Confirmar Cadastro</button>
            </div>
        </div>
    
    )

}

export default ConsultCurso;