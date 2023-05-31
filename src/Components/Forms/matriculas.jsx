import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import api from '../../Service/api'

const Enrollments = ({ submitButtonTitle, onSubmit, enrollment }) => {

    const [cursos, setCursos] = useState([])
    const [unidades, setUnidades] = useState([])
    const [turmas, setTurmas] = useState([])
    const token = sessionStorage.getItem("token")

    useEffect(()=>{
        api.get('/cursos', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res)=>{
            console.log(res.data)
            setCursos(res.data)
        })

    }, [])

    useEffect(()=>{
        api.get('/unidades', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res)=>{
            console.log(res.data)
            setUnidades(res.data)
        })

    }, [])

    useEffect(()=>{
        api.get('/turmas', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res)=>{
            console.log(res.data)
            setTurmas(res.data)
        })

    }, [])
   

    console.log(enrollment)

    // const unidades = api.get("/unidades")
    // const turmas = api.get("/turmas")

    let defaultValues = {}
    if (enrollment) {
        defaultValues = {

            //student information
            "student_cpf": enrollment.student.cpf,
            "student_rg": enrollment.student.rg,
            "student_gender": enrollment.student.gender,
            "student_sair_sozinho": enrollment.student.sair_sozinho,
            "student_name": enrollment.student.name,
            "student_birth_date": enrollment.student.birth_date,

            //responsible information
            "responsible_cpf": enrollment.responsible.cpf,
            "responsible_rg": enrollment.responsible.rg,
            "responsible_gender": enrollment.responsible.gender,
            "responsible_name": enrollment.responsible.name,
            "responsible_birth_date": enrollment.responsible.birth_date,
            "responsible_email": enrollment.responsible.email,
            "responsible_phone_number": enrollment.responsible.phone_number,


            //address information
            "responsible_street": enrollment.responsible.street,
            "responsible_zipcode": enrollment.responsible.zipcode,
            "responsible_number": enrollment.responsible.number,
            "responsible_complement": enrollment.responsible.complement,
            "responsible_neighborhood": enrollment.responsible.neighborhood,
            "responsible_city": enrollment.responsible.city,
            "responsible_uf": enrollment.responsible.uf,

            //enrollment info
            "course_id": enrollment.course.id,
            "unit_id": enrollment.unit.id,
            "class_id": enrollment.class.id,

        }
    }

    console.log(defaultValues)

    const { register, handleSubmit } = useForm({ defaultValues });


    return (
        <div className='form-container'>
            <div className='form-wrapper'>
                <h1>Cadastrar Aluno</h1>

                <div className='dados aluno'>
                    <div className='input-group'>
                        <div className='form-group'>
                            <label>CPF*</label>
                            <input
                                //className{errors?.cpf_student && "input-error"}
                                type='number'
                                placeholder='CPF'
                                {...register('student_cpf',
                                    // {required: }
                                )}
                                maxLength={14}
                                pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                            />
                            {/* {errors?.cpf_student && <p className="error-message">{errors?.cpf_student}</p>} */}
                        </div>

                        <div className="form-group">
                            <label>RG</label>
                            <input
                                //className{errors?.rg && "input-error"}
                                type="text"
                                placeholder="RG"
                                {...register('student_rg_student')}
                            />
                            {/* {errors?.rg && <p className="error-message">{errors?.rg}</p>} */}
                        </div>

                        <div className='form-group'>
                            <label>Sexo</label>
                            <div className='checkbox-group'>
                                <div className='checkbox'>
                                    <input type="radio" name='feminino' value="1" {...register('student_gender')} />
                                    <label>Feminino</label>
                                </div>
                                <div className='checkbox'>
                                    <input type="radio" name='masculino' value="2" {...register('student_gender')} />
                                    <label>Masculino</label>
                                </div>
                                <div className='checkbox'>
                                    <input type="radio" name='outro' value="3" {...register('student_gender')} />
                                    <label>Outro</label>
                                </div>
                            </div>
                        </div>
                        {/* {errors?.privacyTerms && <p className="error-message">{errors?.privacyTerms</p>} */}
                    </div>

                    <div className='input-group'>
                        <div className='form-group'>
                            <label>Pode sair sozinho?</label>
                            <div className='checkbox-group'>
                                <div className='checkbox'>
                                    <input type="radio" name='sim' value="1" {...register('student_sair_sozinho')} />
                                    <label>Sim</label>
                                </div>
                                <div className='checkbox'>
                                    <input type="radio" name='nao' value="2" {...register('student_sair_sozinho')} />
                                    <label>Não</label>
                                </div>
                            </div>
                            {/* {errors?.privacyTerms && <p className="error-message">{errors?.privacyTerms</p>} */}
                        </div>
                        <div className='form-group'>
                            <label>Nome*</label>
                            <input
                                // className={errors?.name && 'input-error'}
                                type="text"
                                placeholder='Seu Nome'
                                {...register("student_name",)}
                            // {required })}
                            />
                            {/* {errors?.name && <p className="error-message">{errors?.name}</p>} */}
                        </div>



                        <div className='form-group'>
                            <label>Data</label>
                            <input
                                // className={errors?. date && 'input-error'}
                                type='date'
                                placeholder='DD/MM/AA'
                                {...register("student_date")}
                            />
                            {/* {errors?.date && <p className="error-message">{errors?.date}</p>} */}
                        </div>
                    </div>

                    <div className='input-group'>


                        {/* <div className='form-group'>
                        <label>Email</label>
                        <input
                            //className{errors?.email && "input-error"}
                            type='email'
                            placeholder='Email'
                            {...register('email')}
                            />
                        {errors?.email && <p className="error-message">{errors?.email}</p>}
                    </div>

                    <div className='form-group'>
                        <label>Telefone</label>
                        <input
                            //className{errors?.phone && "input-error"}
                            type='tel'
                            placeholder='Telefone'
                            {...register('number')}
                            />
                        {errors?.number && <p className="error-message">{errors?.number}</p>}
                    </div> */}
                    </div>
                </div>
                <h1>Cadastrar Responsável</h1>
                <div className='input-group'>
                    <div className='form-group'>
                        <label>CPF*</label>
                        <input
                            //className{errors?.cpf_resp && "input-error"}
                            type='text'
                            placeholder='CPF'
                            {...register('responsible_cpf',
                                // { required: }
                            )}
                            maxLength={14}
                            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        />
                        {/* {errors?.cpf_resp && <p className="error-message">{errors?.cpf_resp}</p>} */}
                    </div>

                    <div className="form-group">
                        <label>RG*</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="RG"
                            {...register('responsible_rg',
                                // {required: }
                            )}
                        />
                        {/* {errors?.rg_resp && <p className="error-message">{errors?.rg_resp}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Sexo</label>
                        <div className='checkbox-group'>
                            <div className='checkbox'>
                                <input type="radio" name='feminino' value="1" {...register('responsible_gender')} />
                                <label>Feminino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="radio" name='masculino' value="2" {...register('responsible_gender')} />
                                <label>Masculino</label>
                            </div>
                            <div className='checkbox'>
                                <input type="radio" name='outro' value="3" {...register('responsible_gender')} />
                                <label>Outro</label>
                            </div>
                        </div>
                        {/* {errors?.privacyTerms && <p className="error-message">{errors?.privacyTerms</p>} */}
                    </div>
                </div>

                <div className='input-group'>
                    <div className='form-group'>
                        <label>Nome*</label>
                        <input
                            // className={errors?.name_resp && 'input-error'}
                            type="text"
                            placeholder='Seu Nome'
                            {...register("responsible_name",
                                // {required }
                            )}
                        />
                        {/* {errors?.name_resp && <p className="error-message">{errors?.name_resp}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Data</label>
                        <input
                            // className={errors?. date && 'input-error'}
                            type='date'
                            placeholder='DD/MM/AA'
                            {...register("responsible_date")}
                        />
                        {/* {errors?.date && <p className="error-message">{errors?.date}</p>} */}
                    </div>
                </div>

                <div className='input-group'>

                    <div className='form-group'>
                        <label>Email*</label>
                        <input
                            //className{errors?.email && "input-error"}
                            type='email'
                            placeholder='Email'
                            {...register('responsible_email')}
                        // {required})}
                        />
                        {/* {errors?.email && <p className="error-message">{errors?.email}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Telefone*</label>
                        <input
                            //className{errors?.phone && "input-error"}
                            type='tel'
                            placeholder='Telefone'
                            {...register('responsible_tel')}
                        // {required})}
                        />
                        {/* {errors?.tel && <p className="error-message">{errors?.tel}</p>} */}
                    </div>
                </div>

                <div className='input-group'>
                    <div className="form-group">
                        <label>Logradouro</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Logradouro"
                            {...register('responsible_street')}
                        />
                        {/* {errors?.logradouro && <p className="error-message">{errors?.logradouro}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>CEP</label>
                        <input
                            type='text'
                            placeholder='CEP'
                            {...register('responsible_cep')}
                        />
                        {/*{errors.cep && <p className="error-message">{errors.cep}</p>}*/}
                    </div>

                    <div className='form-group'>
                        <label>Número</label>
                        <input
                            type='text'
                            placeholder='Número'
                            {...register('responsible_number')}
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
                            {...register('responsible_complement')}
                        />
                        {/* {errors?.complemento && <p className="error-message">{errors?.complemento}</p>} */}
                    </div>

                    <div className="form-group">
                        <label>Bairro</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Bairro"
                            {...register('responsible_neighborhood')}
                        />
                        {/* {errors?.bairro && <p className="error-message">{errors?.bairro}</p>} */}
                    </div>

                    <div className="form-group">
                        <label>Cidade</label>
                        <input
                            //className{errors?.rg && "input-error"}
                            type="text"
                            placeholder="Cidade"
                            {...register('responsible_city')}
                        />
                        {/* {errors?.cidade && <p className="error-message">{errors?.cidade}</p>} */}
                    </div>

                    <div className="form-group">
                        <label>UF</label>
                        <input
                            //className{errors?.uf && "input-error"}
                            type="text"
                            placeholder="UF"
                            {...register('responsible_uf')}

                        />
                        {/*{errors.uf && <p className="error-message">{errors.uf}</p>}*/}
                    </div>
                </div>


                <div className='input-group'>

                    <div className='form-group'>
                        <label>Curso</label>
                        <select
                            {...register('course_id')}
                        // className={errors?.profession && "input-error"}
                        >
                            {cursos.map((course, index) => (
                                <option value={course.id}>{course.name}</option>
                            ))}
                        </select>

                        {/* {errors?.profession && (<p className="error-message">{errors?.profession}</p>)} */}
                    </div>

                    <div className='form-group'>
                        <label>Unidade</label>
                        <select
                            {...register('unit_id')}
                        // className={errors?.profession && "input-error"}
                        >
                            {unidades.map((unidade, index) => (
                                <option value={unidade.id}>{unidade.name}</option>
                            ))}
                          
                        </select>

                        {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                    </div>

                    <div className='form-group'>
                        <label>Turma</label>
                        <select
                            {...register('class_id')}
                        // className={errors?.profession && "input-error"}
                        >
                             {turmas.map((turma, index) => (
                                
                                <option value={turma.id}>{turma.name}</option>
                            ))}
                        </select>

                        {/* {errors?.profession && <p className="error-message">{errors?.profession}</p>} */}
                    </div>

                </div>
                <div className='form-group'>
                    <button onClick={e => handleSubmit(onSubmit)()}>{submitButtonTitle}</button>
                </div>
            </div>
        </div>
    )
}
export default Enrollments