import {useForm} from 'react-hook-form';
import './style.css'
import Cursos from '../../Components/Forms/cursos';
import Sidebar_ from '../../Components/Sidebar/sidebar_'
const CreateCourse = () => {
    const {register, handleSubmit} = useForm();
    
    console.log('RENDER');
 
    const onSubmit = (data)=> {
        console.log(data)
    };
    return(

        <div className='app-container'>
            <div className='sidenav'>
                <Sidebar_ />
            </div>
            <div>
            <Cursos submitButtonTitle={"Cadastrar curso"} onSubmit={onSubmit}/>
            </div>
        </div>
    
    )

}

export default CreateCourse;