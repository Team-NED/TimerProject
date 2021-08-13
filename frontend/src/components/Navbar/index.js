import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/group' activeStyle>
                        그룹찾기
                    </NavLink>
                    <NavLink to='/goal' activeStyle>
                        나의목표
                    </NavLink>
                    <NavLink to='/success' activeStyle>
                        성공담
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to='/signin'>Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navbar;
