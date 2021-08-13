import React from "react";
import styled from 'styled-components';
import '../css/Login.css';
import loginImg from '../img/login_img.png';
import userId from '../img/userid.png';
import pass from '../img/pass.png';
import {RoundButton, RoundInputBox} from "../components/RoundComponents";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
`

const LoginImg = styled.div`
    background-image: url(${loginImg});
    background-size: 100%;
    background-repeat: no-repeat;
    width: 300px;
    height: 300px;
    filter: drop-shadow(1px 1px 1px #DCDCDC);
`

const Login = () => {
    return (
        <Wrapper>
            <Container>
                <LoginImg />
                <RoundInputBox type="text" placeholder="ID" iconUrl={userId}/>
                <RoundInputBox type="password" placeholder="PASSWORD" iconUrl={pass}/>
                <RoundButton />
                <RoundButton />
            </Container>
        </Wrapper>
    );
}

export default Login;

