// import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import logo from '../../Images/logo-sia.png'
import {FaBars} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'
import { IconContext } from "react-icons/lib";
import './style.css'
import { Link } from "react-router-dom";

const Sidenav = () => {
    const { collapseSidebar } = useProSidebar();
    const handleLogout = () =>{

    }

    return (
        <IconContext.Provider value={{size: "1.8em", color: "#F0F0F0"}}>
        <div style={{ height: "100vh" }}>
            <Sidebar className="sidebar" backgroundColor="#223243">
                    <div className="sideHeader">
                    <img src={logo} className="logo" alt="logo-sia" onClick={() => collapseSidebar()}></img>
                    </div>
            <IconContext.Provider value={{size: "1.7em", color: "#223243"}}>
                <Menu className="menu" 
                transitionDuration={800}>
                    <SubMenu id="sub1" className="submenu" label="Usuários" prefix={<BiLogOut/>}>
                        <MenuItem component={<Link to="/create-user"/>} className="menuitem">
                            Cadastro de Usuário
                        </MenuItem>
                        <MenuItem component={<Link to="/consult-users"/>} className="menuitem">
                            Consulta de Usuário</MenuItem>
                        <MenuItem component={<Link to="/"/>} className="menuitem">
                            Ranking de vendas</MenuItem>
                    </SubMenu>
                    <SubMenu id="sub2" className="submenu" label="Unidades" prefix={<BiLogOut/>}>
                        <MenuItem component={<Link to="/create-unidade"/>} className="menuitem">Cadastro de Unidades</MenuItem>
                        <MenuItem component={<Link to="/consult-unidades"/>} className="menuitem">Consulta de Unidades</MenuItem>
                        <MenuItem component={<Link to="/create-turma"/>} className="menuitem">Criar Turmas</MenuItem>
                        <MenuItem component={<Link to="/consult-turmas"/>} className="menuitem">Consulta de Turmas</MenuItem>
                        <MenuItem component={<Link to="/"/>} className="menuitem">Ligações</MenuItem>
                    </SubMenu>
                    <SubMenu id="sub3" className="submenu" label="Cursos" prefix={<BiLogOut/>}>
                        <MenuItem component={<Link to="/create-curso"/>} className="menuitem">Cadastro de Cursos</MenuItem>
                        <MenuItem component={<Link to="/consult-cursos"/>} className="menuitem">Consulta de Cursos</MenuItem>
                        {/* <MenuItem component={<Link to="/"/>} className="menuitem">Cadastro de Módulos</MenuItem> */}
                    </SubMenu>
                    <SubMenu id="sub4" className="submenu" label="Alunos" prefix={<BiLogOut/>}>
                        <MenuItem component={<Link to="/create-matricula"/>} className="menuitem">Cadastro de Matrículas</MenuItem>
                        <MenuItem component={<Link to="/consult-matriculas"/>} className="menuitem">Consulta de Matrículas</MenuItem>
                    </SubMenu>
                </Menu>
            </IconContext.Provider>
            </Sidebar>
            
        </div>
        </IconContext.Provider>
    );
};

export default Sidenav;
