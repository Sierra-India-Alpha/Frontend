import {useForm} from 'react-hook-form';
import './style.css'
const ConsultUser = () => {
    const {register} = useForm();
    
    console.log('RENDER');
 
    return(
    <div className='app-container'>
        <div className='form-wrapper'>
            <div className='input-group'>
            
                <div className='form-group'>
                    <label>Tipo Usuário</label>
                        <select
                        {...register('user')}
                        // className={errors?.profession && "input-error"}
                        >
                        <option value='0'>Tipo Usuário</option>
                        <option value='a'>B</option>
                        <option value='other'>Outra</option>
                    </select>

                </div>

                <div className='form-group'>
                    <label>Unidade</label>
                        <select
                        {...register('unit')}
                        // className={errors?.profession && "input-error"}
                        >
                        <option value='0'>Unidade</option>
                        <option value='a'>B</option>
                        <option value='other'>Outra</option>
                    </select>
                    
                </div>
            </div>
        </div>
    </div>
    
    )
};
    



export default ConsultUser;