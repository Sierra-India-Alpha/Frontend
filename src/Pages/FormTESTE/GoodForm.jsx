import './style.css';
import CreateEnrollments from '../Matriculas/CreateEnrollments';

const GoodForm = () => {

    return (
        <div className='app-container'>
        <div className='sidenav'>
            <Sidenav></Sidenav>
        </div>    
        <CreateEnrollments />
        </div>
    );


};
export default GoodForm;
