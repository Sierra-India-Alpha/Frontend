import React from 'react'
import { useForm } from 'react-hook-form'

const Enrollments = ({submitButtonTitle, onSubmit}) => {
    const {register, handleSubmit} = useForm();
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <h1>Cadastrar Aluno</h1>
            
            <div className='dados aluno'>
                <div className='input-group'>
                    <div className='form-group'>
                        <label>CPF*</label>
                        <input
                                //className{errors?.cpf && "input-error"}
                            type='number'
                            placeholder='CPF'
                            {...register('cpf')}
                            maxLength={14}
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        />
                        {/* {errors?.cpf && <p className="error-message">{errors?.cpf}</p>} */}
                    </div>
                    
                    <div className="form-group">
                        <label>RG</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="RG"
                            {...register('rg')}
                        />
                        {/* {errors?.rg && <p className="error-message">{errors?.rg}</p>} */}
                    </div>
                    
                    <div className='form-group'>
                        <label>Sexo</label>
                        <div className='checkbox-group'>
                            <div className='checkbox'>
                                <input type="radio" name='feminino' value="1" {...register('checkbox')} />
                                <label>Feminino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="radio" name='masculino' value="2" {...register('checkbox')} />
                                <label>Masculino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="radio" name='outro' value="3" {...register('checkbox')} />
                                <label>Outro</label>
                            </div>
                        </div>
                    </div>
                    {/* {errors?.privacyTerms && <p className="error-message">{errors?.privacyTerms</p>} */}
                </div>

                <div className='input-group'>
                    <div className='form-group'>
                        <label>Nome</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='Seu Nome'
                            {...register("name")}
                        />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>

                    

                    <div className='form-group'>
                        <label>Data</label>
                        <input
                            // className={errors?. date && 'input-error'}
                            type='date'
                            placeholder='DD/MM/AA'
                            {...register("date")}
                        />
                        {/* {errors?.date && <p className="error-message">{errors?.date}</p>} */}
                    </div>
                </div>

                <div className='input-group'>
                    
                    <div className='form-group'>
                    <label>Pode sair sozinho?</label>
                        <div className='checkbox-group'>                           
                            <div className='checkbox'>
                                <input type="radio" name='sim' value="1" {...register('checkbox')} />
                                <label>Sim</label>
                            </div>
                            <div className='checkbox'>
                                <input type="radio" name='nao' value="2" {...register('checkbox')} />
                                <label>Não</label>
                            </div>
                        </div>
                    {/* {errors?.privacyTerms && <p className="error-message">{errors?.privacyTerms</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            //className{errors?.email && "input-error"}
                            type='email'
                            placeholder='Email'
                            {...register('email')}
                            />
                        {/* {errors?.email && <p className="error-message">{errors?.email}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Telefone</label>
                        <input
                            //className{errors?.phone && "input-error"}
                            type='tel'
                            placeholder='Telefone'
                            {...register('number')}
                            />
                        {/* {errors?.number && <p className="error-message">{errors?.number}</p>} */}
                    </div>
                </div>
            </div>
            <h1>Cadastrar Responsável</h1>
                <div className='input-group'>
                    <div className='form-group'>
                        <label>CPF*</label>
                        <input
                                //className{errors?.cpf && "input-error"}
                            type='text'
                            placeholder='CPF'
                            {...register('cpf')}
                            maxLength={14}
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        />
                        {/* {errors?.cpf && <p className="error-message">{errors?.cpf}</p>} */}
                    </div>
                
                    <div className="form-group">
                        <label>RG</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="RG"
                            {...register('rg')}
                        />
                        {/* {errors?.rg && <p className="error-message">{errors?.rg}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Sexo</label>
                        <div className='checkbox-group'>
                            <div className='checkbox'>
                                <input type="radio" name='feminino' value="1" {...register('checkbox')} />
                                <label>Feminino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="radio" name='masculino' value="2" {...register('checkbox')} />
                                <label>Masculino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="radio" name='outro' value="3" {...register('checkbox')} />
                                <label>Outro</label>
                            </div>
                        </div>
                    {/* {errors?.privacyTerms && <p className="error-message">{errors?.privacyTerms</p>} */}
                    </div>
                </div>
                
                <div className='input-group'>
                    <div className='form-group'>
                        <label>Nome</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='Seu Nome'
                            {...register("name")}
                            />
                        {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                    </div>
                
                    <div className='form-group'>
                        <label>Data</label>
                        <input
                            // className={errors?. date && 'input-error'}
                            type='date'
                            placeholder='DD/MM/AA'
                            {...register("date")}
                            />
                        {/* {errors?.date && <p className="error-message">{errors?.date}</p>} */}
                    </div>
                </div>

                <div className='input-group'>
                
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            //className{errors?.email && "input-error"}
                            type='email'
                            placeholder='Email'
                            {...register('email')}
                            />
                        {/* {errors?.email && <p className="error-message">{errors?.email}</p>} */}
                    </div> 

                    <div className='form-group'>
                        <label>Telefone</label>
                        <input
                            //className{errors?.phone && "input-error"}
                            type='tel'
                            placeholder='Telefone'
                            {...register('number')}
                            />
                        {/* {errors?.number && <p className="error-message">{errors?.number}</p>} */}
                    </div>
                </div>
                            
                <div className='input-group'>
                    <div className="form-group">
                        <label>Logradouro</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Logradouro"
                            {...register('logradouro')}
                        />
                        {/* {errors?.logradouro && <p className="error-message">{errors?.logradouro}</p>} */}
                    </div>

                    <div className='form-group'>
                            <label>CEP*</label>
                            <input
                                type='text'
                                placeholder='CEP'
                                {...register('cep_enrollment')}
                                />
                            {/*{errors.cep && <p className="error-message">{errors.cep}</p>}*/}
                    </div>
                                
                    <div className='form-group'>
                        <label>Número*</label>
                        <input
                            type='text'
                            placeholder='Número'
                            {...register('residenceNumber', {
                                required: 'Este campo é obrigatóri'
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
                            {...register('complemento')}
                        />
                        {/* {errors?.complemento && <p className="error-message">{errors?.complemento}</p>} */}
                    </div>               

                    <div className="form-group">
                        <label>Bairro</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Bairro"
                            {...register('bairro_enrollment')}
                        />
                        {/* {errors?.bairro && <p className="error-message">{errors?.bairro}</p>} */}
                    </div>
                    
                    <div className="form-group">
                        <label>Cidade</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Cidade"
                            {...register('cidade')}
                            />
                        {/* {errors?.cidade && <p className="error-message">{errors?.cidade}</p>} */}
                    </div>
                    
                    <div className="form-group">
                            <label>UF*</label>
                            <input
                                //className{errors?.uf && "input-error"}
                                type="text"
                                placeholder="UF"
                                {...register('uf_enrollment')}
                                
                                />
                            {/*{errors.uf && <p className="error-message">{errors.uf}</p>}*/}
                    </div>
                </div>        
                
            
            <div className='input-group'>

                <div className='form-group'>
                        <label>Tipo de usuário</label>
                        <select
                        {...register('course_enrrolment')}
                        // className={errors?.profession && "input-error"}
                        >
                        <option value='0'>Divulgador..</option>
                        <option value='xxxx'>xxxx</option>
                        <option value='xxxx'>Outra</option>
                    </select>

                    {/* {errors?.profession && (<p className="error-message">{errors?.profession}</p>)} */}
                </div>

                <div className='form-group'>
                        <label>Tipo de usuário</label>
                        <select
                        {...register('unidade')}
                        // className={errors?.profession && "input-error"}
                        >
                        <option value='0'>Divulgador..</option>
                        <option value='developer'>Desenvolvedor</option>
                        <option value='other'>Outra</option>
                    </select>

                    {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                </div>

                <div className='form-group'>
                        <label>Tipo de usuário</label>
                        <select
                        {...register('profession')}
                        // className={errors?.profession && "input-error"}
                        >
                        <option value='0'>A</option>
                        <option value='a'>B</option>
                        <option value='other'>Outra</option>
                    </select>

                    {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                </div>   

            </div>
            <div className='form-group'>
                <button onClick={e=> handleSubmit(onSubmit)()}>{submitButtonTitle}</button>
            </div>
        </div>         
    </div>
  )
}

export default Enrollments