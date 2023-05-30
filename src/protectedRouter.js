import { Navigate, Outlet } from "react-router-dom";


const userAll = () => {
  if(sessionStorage.getItem('login') === 'true'){
    const user = true;
    return user;
  }
  return false;
}

function userCoordenador() {
  if(sessionStorage.getItem('role') === '2' && sessionStorage.getItem('login') === 'true'){
      const user = true
      return user;
  }
  return false;
}

function userDivulgador() {

  if(sessionStorage.getItem('role') === '3' && sessionStorage.getItem('login') === 'true'){
      const user = true
      return user;
  }
  return false;
}

// function userAdminUnidade() {

//   if(sessionStorage.getItem('role') === 'admin-unidade' && sessionStorage.getItem('login') === 'true'){
//       const user = true
//       return user;
//   }
//   return false;
// }

function userAdmin() {
    if(sessionStorage.getItem('role') === '1'  && sessionStorage.getItem('login') === 'true'){
        const user = true
        return user;
    }
    return false;
  }

const ProtectedAll = () => {
  const isAuth = userAll();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  );
}

function ProtectedCoordenador() {
  const isAuth = userCoordenador();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  );
}

function ProtectedDivulgador() {
  const isAuth = userDivulgador();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  );
}

// function ProtectedAdminUnidade() {
//   const isAuth = userAdminUnidade();
//   return (
//     isAuth ? <Outlet /> : <Navigate to='/' />
//   );
// }

function ProtectedAdmin() {
    const isAuth = userAdmin();
    return (
      isAuth ? <Outlet /> : <Navigate to='/' />
    );
  }

export {ProtectedDivulgador,
        ProtectedCoordenador,
        // ProtectedAdminUnidade,
        ProtectedAdmin,
        ProtectedAll};