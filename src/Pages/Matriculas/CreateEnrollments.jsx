import {useForm} from 'react-hook-form';
import './style.css'
import Enrollments from '../../Components/Forms/matriculas';
import Sidebar_ from '../../Components/Sidebar/sidebar_';
import api from '../../Service/api';

const CreateEnrollments = () => {
    
    const onSubmit = (data)=> {
        console.log(data)
        api.post("/matriculas", data).then((res)=>{
            if(res.status == 200){
                if(!res.data.erro){
                alert("Cadastro com sucesso")
                    
                } else {
                    alert(res.data.erro)
                    console.log(res.data.erro)
                }
            } else {
                alert(res.data.erro)

                console.log(res.data.erro)

            }
        }).catch(error =>{
            console.log(error)
        })
    };
    return (
        <div className='app-container'>
        <div className='sidenav'>
            <Sidebar_/>
        </div>
        <div>
        <Enrollments submitButtonTitle={"Atualizar"} onSubmit={onSubmit}/>
        </div>    
        </div>
    )



};

export default CreateEnrollments;