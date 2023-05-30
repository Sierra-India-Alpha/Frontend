import {useForm} from 'react-hook-form';
import './style.css'
import Cursos from '../../Components/Forms/cursos';
const CreateCourse = () => {
    const {register, handleSubmit} = useForm();
    
    console.log('RENDER');
 
    const onSubmit = (data)=> {
        console.log(data)
    };
    return(

        <div className='app-container'>
            <Cursos submitButtonTitle={"Cadastrar curso"} onSubmit={onSubmit}/>
        </div>
    
    )

}

export default CreateCourse;