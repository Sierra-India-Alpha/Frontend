import {useForm} from 'react-hook-form';
import './style.css'
import Enrollments from '../../Components/Forms/matriculas';
import Sidenav from '../../Components/Sidebar/sidebar';

const CreateEnrollments = () => {
    
    const onSubmit = (data)=> {
        console.log(data)
    };
    return (
        <div className='app-container'>
        <div className='sidenav'>
            <Sidenav></Sidenav>
        </div>
        <div className='form-wrapper'>
        <Enrollments submitButtonTitle={"Atualizar"} onSubmit={onSubmit}/>
        </div>    
        </div>
    )



};

export default CreateEnrollments;