import {useForm} from 'react-hook-form';
import './style.css'
import jwt_decode,  { InvalidTokenError  } from 'jwt-decode';
import api from '../../Service/api';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {register, handleSubmit} = useForm();
    
    let navigate = useNavigate();
 
    const onSubmit = async function handleLogin(data) {
        try {
            const userData = await api.post("/login", data);
            sessionStorage.setItem("login", 'true');
            sessionStorage.setItem("token", userData.data);
            navigate('/home');
            
        } catch (error) {
            alert("aff deu erro :(")
        }    
    };


    return(
        
    <div className='APP-container'>
       <div className='form-wrapper'>    
           <div className='block'> 
            <div className='form-group'>
                <label className='labellogin'>Usuário</label>
                <input
                type='text'
                placeholder='Usuário'
                {...register("username")}
                /> 
            </div>

            <div className='form-group'>
                <label className='labellogin'>Senha</label>
                <input
                type='password'
                placeholder='Senha'
                {...register("password")}
                /> 
            </div>
            <div className='form-group'>
                <button onClick={()=> handleSubmit(onSubmit)()}>Entrar</button>
            </div>
            </div>
        </div>
    </div>
    
    )

}

export default Login;