import {useForm} from 'react-hook-form';
import './style.css';
import Sidebar_ from '../../Components/Sidebar/sidebar_';
import Unidades from '../../Components/Forms/unidades';
const CreateUnit = () => {
    
    const onSubmit = (data) => {
        console.log(data)
    };
 
    return(
    <div className='app-container'>
        <div className='sidenav'>
            <Sidebar_/>
        </div>
       <div className='form-wrapper'>     
            <Unidades submitButtonTitle={"Cadastrar"} onSubmit={onSubmit()}/>
        </div>
    </div>
    
    )
}

export default CreateUnit;