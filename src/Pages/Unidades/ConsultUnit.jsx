import {useForm} from 'react-hook-form';
import './style.css';
import Sidebar_ from '../../Components/Sidebar/sidebar_';

const ConsultUnit = () => {
    const {register} = useForm();
    
    console.log('RENDER');
 
    return(
    <div className='app-container'>
        <div className='sidenav'>
            <Sidebar_/>
        </div>
        <div className='form-wrapper'>    
            <h1>Consultar Unidade</h1>
            <div className='input-group'>
                    <div className='form-group'>
                        <label>Nome</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='Seu Nome'
                            {...register("name_unit")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>CNPJ*</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='CNPJ'
                            {...register("cnpj_unit")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>
            </div>
            <div className='input-group'>
                <div className='form-group'>
                        <label>Email</label>
                        <input
                            //className{errors?.email && "input-error"}
                            type='email'
                            placeholder='Email'
                            {...register('email_coordenador')}
                            />
                        {/* {errors?.email && <p className="error-message">{errors?.email}</p>} */}
                </div>

                <div className='form-group'>
                        <label>Telefone</label>
                        <input
                            //className{errors?.email && "input-error"}
                            type='tel'
                            placeholder='Telefone'
                            {...register('tel_coordenador')}
                            />
                        {/* {errors?.email && <p className="error-message">{errors?.email}</p>} */}
                </div>
                <div className='form-group'>
                    <label>Coordenador</label>
                    <select
                        {...register('coordenar_unit')}
                        >
                        <option value='0'>Coordenador</option>
                        <option value='a'>B</option>
                        <option value='other'>Outra</option>
                    </select>
                </div>

            </div>
            <div className='input-group'>
                    <div className="form-group">
                        <label>Logradouro</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Logradouro"
                            {...register('logradouro_unit')}
                        />
                        {/* {errors?.logradouro && <p className="error-message">{errors?.logradouro}</p>} */}
                    </div>

                    <div className='form-group'>
                            <label>CEP*</label>
                            <input
                                type='text'
                                placeholder='CEP'
                                {...register('cep_unit', {
                                    required: 'Este campo é obrigatório',
                                    pattern: {
                                    value: /^\d{5}-?\d{3}$/,
                                    message: 'Informe um CEP válido'
                                    }
                                })}
                                />
                            {/*{errors.cep && <p className="error-message">{errors.cep}</p>}*/}
                    </div>
                                
                    <div className='form-group'>
                        <label>Número*</label>
                        <input
                            type='text'
                            placeholder='Número'
                            {...register('residenceNumber_unit', {
                                required: 'Este campo é obrigatório'
                            })}
                            />
                        {/*{errors.residenceNumber && <p className="error-message">{errors.residenceNumber.message}</p>}*/}
                    </div>
            </div>

                <div className='input-group'>
                    <div className="form-group">
                        <label>Complemento</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Complemento"
                            {...register('complemento_unit')}
                        />
                        {/* {errors?.complemento && <p className="error-message">{errors?.complemento}</p>} */}
                    </div>               

                    <div className="form-group">
                        <label>Bairro</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Bairro"
                            {...register('bairro_unit')}
                        />
                        {/* {errors?.bairro && <p className="error-message">{errors?.bairro}</p>} */}
                    </div>
                    
                    <div className="form-group">
                        <label>Cidade</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Cidade"
                            {...register('cidade_unit')}
                            />
                        {/* {errors?.cidade && <p className="error-message">{errors?.cidade}</p>} */}
                    </div>
                    
                    <div className="form-group">
                            <label>UF*</label>
                            <input
                                //className{errors?.uf && "input-error"}
                                type="text"
                                placeholder="UF"
                                {...register('uf_unit', {
                                    required: 'Este campo é obrigatório',
                                    pattern: {
                                        value: /[A-Z]{2}/,
                                        message: 'Informe um UF válido com duas letras maiúsculas'
                                    }
                                })}
                                />
                            {/*{errors.uf && <p className="error-message">{errors.uf}</p>}*/}
                    </div>
                </div>
        </div>
    </div>
    
    )
}

export default ConsultUnit;