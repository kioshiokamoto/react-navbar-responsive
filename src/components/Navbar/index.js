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
                    <NavLink to="/acerca-de" activeStyle>
                        Acerca de
                    </NavLink>
                    <NavLink to="/servicios" activeStyle>
                        Servicios
                    </NavLink>
                    <NavLink to="/contactar" activeStyle>
                        Contactar
                    </NavLink>
                    <NavLink to="/registrarse" activeStyle>
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
