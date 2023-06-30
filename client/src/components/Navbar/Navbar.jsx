import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile, tablet, desktop } from '../../responsive';
// Styled Components
const Container = styled.div`
    height:60px;
    ${mobile({height:'50px'})}
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({padding:'10px 0px'})}
`
    const Left = styled.div`
        flex:1;
        display:flex;
        align-items:center;
        ${mobile({display:'none'})}
    `
        const Language = styled.span`
            font-size:14px;
            cursor:pointer;
            ${mobile({display:'none'})}
        `
        const SearchContainer = styled.div`
            display:flex;
            align-items:center;
            border:0.5px solid lightgray;
            margin-left:25px;
            padding:5px;
            ${mobile({display:'none'})}

        `
        const Input = styled.input`
            border:none;
            outline:none;
            ${mobile({width:'50px'})}
        `
        const Logo = styled.span`
            font-weight:bold;
            font-size: 30px;
            ${mobile({fontSize:'14px'})}
        `
    const Center = styled.div`
        flex:1;
        text-align:center;
    `
    const Right = styled.div`
        flex:1;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        gap:25px;
        ${mobile({justifyContent:'center', flex:2})}
    `

    const MenuItem = styled.div`
        font-size:14px;
        cursor:pointer;
        ${mobile({fontSize:'12px'})}
    `


const Navbar = () => {
    return (
        <div className='navbar'>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                            <Search style={{ color: 'gray', fontSize:'16px'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Wolf Wears Sheep</Logo>
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
