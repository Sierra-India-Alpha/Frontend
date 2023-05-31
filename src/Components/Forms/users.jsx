import React from 'react'
import { useForm } from 'react-hook-form';
import '../../Pages/FormTESTE/style.css'

const Users = ({ submitButtonTitle, onSubmit }) => {
    const { register, handleSubmit } = useForm();
    return (
        <div className="form-container">
            <div className='form-wrapper'>
                <h1>Cadastrar Usuário</h1>
                <div className='select-group'>

                    <div className='form-group'>
                        <label>Tipo de usuário</label>
                        <select
                            {...register('profession')}
                        // className={errors?.profession && "input-error"}
                        >
                            <option value='0'>Divulgador..</option>
                            <option value='developer'>Desenvolvedor</option>
                            <option value='other'>Outra</option>
                        </select>


                    </div>
                    <div className='form-group'>
                        <label>Tipo de usuário</label>
                        <select
                            {...register('unit')}
                        // className={errors?.profession && "input-error"}
                        >
                            <option value='0'>Divulgador..</option>
                            <option value='developer'>Desenvolvedor</option>
                            <option value='other'>Outra</option>
                        </select>
                        {/* {errors?.profession && (<p className="error-message">{errors?.profession}</p>)} */}
                    </div>

                </div>
                <div className='input-group reverse'>


                    <div className='form-group'>
                        <label>Data</label>
                        <input
                            // className={errors?. date && 'input-error'}
                            type='date'
                            placeholder='DD/MM/AA'
                            {...register("date")}
                        />
                        {/* {errors?.date && (<p className="error-message">{errors?.date}</p>)} */}
                    </div>

                    <div className='form-group'>
                        <label>Nome</label>
                        <input
                            // className={errors?.name && 'input-error'}
                            type="text"
                            placeholder='Seu Nome'
                            {...register("name")}
                        />
                        {/* {errors?.name && (<p className="error-message">{errors?.name}</p>)} */}
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
                        {/* {errors?.email && (<p className="error-message">{errors?.email}</p>)} */}
                    </div>

                    <div className='form-group'>
                        <label>Telefone</label>
                        <input
                            //className{errors?.phone && "input-error"}
                            type='tel'
                            placeholder='Telefone'
                            {...register('number')}
                        />
                        {/* {errors?.number && (<p className="error-message">{errors?.number}</p>)} */}
                    </div>

                </div>



                <div className='input-group'>


                    <div className='form-group'>
                        <label>CPF</label>
                        <input
                            //className{errors?.cpf && "input-error"}
                            type='text'
                            placeholder='CPF'
                            {...register('cpf')}
                            maxLength={14}
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        />
                        {/* {errors?.cpf && (<p className="error-message">{errors?.cpf}</p>)} */}
                    </div>
                    <div className="form-group">
                        <label>RG</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="RG"
                            {...register('rg')}
                        />
                        {/* {errors?.rg && (<p className="error-message">{errors?.rg}</p>)} */}
                    </div>

                    <div className='form-group'>
                        <label>Sexo</label>
                        <div className='checkbox-group'>
                            <div className='checkbox'>
                                <input type="checkbox" name='feminino' {...register('feminino')} />
                                <label>Feminino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="checkbox" name='masculino' {...register('masculino')} />
                                <label>Masculino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="checkbox" name='outro' {...register('outro')} />
                                <label>Outro</label>
                            </div>
                        </div>
                        {/* {errors?.privacyTerms && (<p className="error-message">{errors?.privacyTerms</p>)} */}
                    </div>
                </div>

                <div className='input-group'>
                    <div className='form-group'>
                        <label>CEP</label>
                        <input
                            type='text'
                            placeholder='CEP'
                            {...register('cep')}
                        />
                        {/*{errors.cep && (<p className="error-message">{errors.cep}</p>)}*/}
                    </div>

                    <div className='form-group'>
                        <label>Logradouro</label>
                        <input
                            // className={errors?.logradouro && 'input-error'}
                            type="text"
                            placeholder=''
                            {...register("logradouro")}
                        />
                        {/* {errors?.logradouro && (<p className="error-message">{errors?.logradouro}</p>)} */}
                    </div>
                    <div className='form-group'>
                        <label>Número</label>
                        <input
                            type='text'
                            placeholder='Número'
                            {...register('residenceNumber')}
                        />
                        {/*{errors.residenceNumber && <p className="error-message">{errors.residenceNumber.message}</p>)}*/}
                    </div>
                </div>

                <div className='input-group'>


                    <div className="form-group">
                        <label>Complemento</label>
                        <input
                            //className{errors?.complemento && "input-error"}
                            type="text"
                            placeholder="Complemento"
                            {...register('complemento')}
                        />
                        {/* {errors?.complemento && (<p className="error-message">{errors?.complemento}</p>)} */}
                    </div>

                    <div className="form-group">
                        <label>Bairro</label>
                        <input
                            //className{errors?.bairro && "input-error"}
                            type="text"
                            placeholder="Bairro"
                            {...register('bairro')}
                        />
                        {/* {errors?.bairro && (<p className="error-message">{errors?.bairro}</p>)} */}
                    </div>

                    <div className="form-group">
                        <label>Cidade</label>
                        <input
                            //className{errors?.cidade && "input-error"}
                            type="text"
                            placeholder="Cidade"
                            {...register('cidade')}
                        />
                        {/* {errors?.cidade && (<p className="error-message">{errors?.cidade}</p>)} */}
                    </div>

                    <div className="form-group">
                        <label>UF</label>
                        <input
                            //className{errors?.uf && "input-error"}
                            type="text"
                            placeholder="UF"
                            {...register('uf')}
                        />
                        {/*{errors.uf && (<p className="error-message">{errors.uf}</p>)}*/}
                    </div>
                </div>
                <div className='input-group'>
                    <div className='cadastro'>
                        <button onClick={e => handleSubmit(onSubmit)()}>{submitButtonTitle}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Users