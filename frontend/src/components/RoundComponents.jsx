import React from "react";
import styled from 'styled-components';

const RoundDiv = styled.div`
    width: 300px;
    height: 20px;
    border-radius: 30px;
    border: 2px solid #DB5353;
    padding: 10px;
    box-shadow: 1px 1px 1px #DCDCDC;
`

const RoundStyledButton = styled.button`
    width: 300px;
    height: 20px;
    border-radius: 30px;
    border: 2px solid #DB5353;
    padding: 10px;
    box-shadow: 1px 1px 1px #DCDCDC;
`

const IconSpan = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: auto 7px;
    margin-bottom: 2px;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
`

export const RoundInputBox = ({iconUrl=null, placeholder=null, type="text"}) => {
    return (
        <RoundDiv>
            {iconUrl? <IconSpan style={{backgroundImage: `url(${iconUrl})`}}></IconSpan> : <></>}
            <input type={type} placeholder={placeholder} />
        </RoundDiv>
    );
}

export const RoundButton = () => {
    return (
        <RoundDiv>
            Login
        </RoundDiv>
    );
}