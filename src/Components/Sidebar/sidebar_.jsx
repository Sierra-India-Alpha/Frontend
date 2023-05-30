// import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import logo from '../../Images/logo-sia.png'
import { IconContext } from "react-icons/lib";
import './style.css'
import { Link } from "react-router-dom";
import { SidebarData } from "./sidebarData";

const Sidebar_ = () => {
    const { collapseSidebar } = useProSidebar();
    const handleLogout = () => {
    }

    const tipoUsuario = sessionStorage.getItem("tipoUsuario");

    return (
        <IconContext.Provider value={{ size: "1.8em", color: "#F0F0F0" }}>
            <div style={{ height: "100vh" }}>
                <Sidebar className="sidebar" backgroundColor="#223243">
                    <div className="sideHeader">
                        <img src={logo} className="logo" alt="logo-sia" onClick={() => collapseSidebar()}></img>
                    </div>
                    <IconContext.Provider value={{ size: "1.7em", color: "#223243" }}>
                        <Menu className="menu"
                            transitionDuration={800}>
                            {SidebarData.map((menu, index) => (
                                menu.admin == tipoUsuario || menu.admin2 == tipoUsuario? (
                                <SubMenu key={index} label={menu.title} className="submenu" prefix={menu.icon}>
                                    {menu.items.map((submenu, subIndex) => (

                                        submenu.subadmin == tipoUsuario || submenu.subadmin2 == tipoUsuario?(
                                        <MenuItem key={subIndex} component={<Link to={submenu.link} />} className="menuitem">
                                            {submenu.title}
                                        </MenuItem>) : null
                                    ))}
                                </SubMenu>) : null
                            ))}
                        </Menu>
                    </IconContext.Provider>
                </Sidebar>

            </div>
        </IconContext.Provider>
    );
};

export default Sidebar_;
