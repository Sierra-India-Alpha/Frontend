import {useForm} from 'react-hook-form';
import './style.css'
import Turmas from '../../Components/Forms/turmas';
import Sidenav from '../../Components/Sidebar/sidebar';
const CreateClass = () => {
    
    console.log('RENDER');
 
    const onSubmit = (data)=> {
        console.log(data)
    };

    return(

        <>
        <Sidenav />
        <Turmas submitButtonTitle={"Cadastrar curso"} onSubmit={onSubmit}/>
        </>
    )

}

export default CreateClass;