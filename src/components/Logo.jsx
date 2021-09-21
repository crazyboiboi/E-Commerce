import React from 'react'

import { Storefront } from '@material-ui/icons'

import styled from "styled-components"

const LogoStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    color: ${props=>props.color};
`;

const Logo = ({color}) => {
    return (
        <LogoStyle color={color}>
            <Storefront style={{fontSize: '2.5rem'}} />
            Commerce
        </LogoStyle>
    )
}

Logo.defaultProps = {
    color: "black",
}

export default Logo
