import { ProtectedAdmin, ProtectedAdminUnidade, ProtectedAll, ProtectedDivulgador, ProtectedCoordenador } from "./protectedRouter";
import "./App.css"
import React from "react";
import { Route, Routes } from "react-router-dom";
import GoodForm from "./Pages/FormTESTE/GoodForm";
import Home from "./Pages/Home/home";
import CreateEnrollments from "./Pages/Matriculas/CreateEnrollments";
import CreateCourse from "./Pages/Cursos/CreateCourse";
import CreateClass from "./Pages/Turmas/CreateClass";
import ConsultEnrollments from "./Pages/Matriculas/ConsultEnrollments";
// import ConsultEnrollmentsUnit from "./Pages/Matriculas/ConsultEnrollmentsUnit";
import ConsultClass from "./Pages/Turmas/ConsultClass";
import CreateUser from "./Pages/Users/CreateUser";
import ConsultUser from "./Pages/Users/ConsultUser";
import Login from "./Pages/Login/Login";
import ConsultCurso from "./Pages/Cursos/ConsultCurso";
import ConsultCursos from "./Pages/Cursos/ConsultCursos";
import ConsultClassUnit from "./Pages/Turmas/ConsultClassUnit";
import CreateUnit from "./Pages/Unidades/CreateUnit";
import ConsultUnit from "./Pages/Unidades/ConsultUnit";
import ConsultUnits from "./Pages/Unidades/ConsultUnits";
function App() {
  // sessionStorage.setItem("role", "admin")
  // sessionStorage.setItem("login", "true")
  return (
    <Routes>
      
      {/* <Route element={<ProtectedAll />}>
      </Route>
      
      <Route element={<ProtectedCoordenador />}>
        <Route path="/create-enrollment" element={<CreateEnrollments />} />
      </Route>

      <Route element={<ProtectedDivulgador />}>
      <Route path="/goodform" element={<GoodForm />}/>
      </Route>

      <Route element={<ProtectedAdminUnidade />}>
        <Route path="/create-enrollment" element={<CreateEnrollments />} />
      </Route>

      <Route element={<ProtectedAdmin />}>
        <Route path="/create-enrollment" element={<CreateEnrollments />} />
      </Route> */}
      
      {/*<Route path="/home" element={<Home />}/>
      <Route path="/" element={<Login />} />*/}

      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      <Route path="/create-curso" element={<CreateCourse />}/>
      <Route path="/consult-curso" element={<ConsultCurso />}/>
      <Route path="/consult-cursos" element={<ConsultCursos />}/>

      <Route path="/create-matricula" element={<CreateEnrollments />} />
      <Route path="/consult-matriculas" element={<ConsultEnrollments />} />
      {/* <Route path="/consult-matriculas-unidade" element={<ConsultEnrollmentsUnit />} /> */}

      <Route path="/create-turma" element={<CreateClass />}/>
      <Route path="/consult-turma" element={<ConsultClass />}/>
      <Route path="/consult-turmas" element={<ConsultClassUnit />}/>
      {/* <Route path="/consult-turmas-unidade" element={<CreateCourse />}/> */}

      <Route path="/create-unidade" element={<CreateUnit />}/>
      <Route path="/consult-unidade" element={<ConsultUnit />}/>
      <Route path="/consult-unidades" element={<ConsultUnits />}/>

      <Route path="/create-user" element={<CreateUser />}/>
      <Route path="/consult-users" element={<ConsultUser />}/>

    </Routes>
  );
}

export default App;
