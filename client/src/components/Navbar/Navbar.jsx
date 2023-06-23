import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import { Badge } from '@mui/material';

// Styled Components
const Container = styled.div`
    height:60px;

`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
    const Left = styled.div`
        flex:1;
        display:flex;
        align-items:center;
    `
        const Language = styled.span`
            font-size:14px;
            cursor:pointer;
        `
        const SearchContainer = styled.div`
            display:flex;
            align-items:center;
            border:0.5px solid lightgray;
            margin-left:25px;
            padding:5px;

        `
        const Input = styled.input`
            border:none;
            outline:none;
        `
        const Logo = styled.h1`
            font-weight:bold;
        `
    const Center = styled.div`
        flex:1;
        text-align:center;
    `
    const Right = styled.div`
        flex:1;
    `

    const MenuItem = styled.div`
        font-size:14px;
        cursor:pointer;
    `


const Navbar = () => {
    return (
        <div className='navbar'>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>ROMAN.</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
        
        </div>
    )
}

export default Navbar