import { useForm } from 'react-hook-form';
import './style.css'
import Turmas from '../../Components/Forms/turmas';
import Sidebar_ from '../../Components/Sidebar/sidebar_';
const CreateClass = () => {

    console.log('RENDER');

    const onSubmit = (data) => {
        console.log(data)
    };

    return (

        <div className="app-container">

            <div className='sidenav'>
                <Sidebar_/>
            </div>
            <div className="form-wrapper">
                <Turmas submitButtonTitle={"Cadastrar curso"} onSubmit={onSubmit} />
            </div>
        </div>

    )

}

export default CreateClass;