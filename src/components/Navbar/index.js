import React from 'react';
import { Bars, Nav, NavBtn, NavBtnLink, NavMenu, NavLink } from './NavbarElements'
import Logo from '../../img/logo.svg';
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} alt="logo"/>
                </NavLink>  
                <Bars/>  
                <NavMenu>
                    <NavLink to="/acerca-de" >
                        Acerca de
                    </NavLink>
                    <NavLink to="/servicios" >
                        Servicios
                    </NavLink>
                    <NavLink to="/contactar">
                        Contactar
                    </NavLink>
                    <NavLink to="/registrarse">
                        Registrarse
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/iniciar-sesion">Iniciar Sesión</NavBtnLink>
                </NavBtn>
            </Nav>   
        </>
    )
}

export default Navbar
