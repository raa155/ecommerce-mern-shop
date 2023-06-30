import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile, tablet, desktop } from '../../responsive';
import { Link } from 'react-router-dom';
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
            ${tablet({ display: 'none' })}
        `
        const SearchContainer = styled.div`
            display:flex;
            align-items:center;
            border:0.5px solid lightgray;
            margin-left:25px;
            padding:5px;
            ${mobile({ display: 'none' })}
            ${tablet({ marginLeft: '0px' })}

        `
        const Input = styled.input`
            border:none;
            outline:none;
            ${tablet({width:'100px'})}
        `
        const Logo = styled.span`
            font-weight:bold;
            font-size: 30px;
            ${tablet({fontSize:'18px'})}
            ${mobile({fontSize:'14px'})}
        `
    const Center = styled.div`
        flex:1;
        text-align:center;
        ${mobile({ textAlign: 'left', marginLeft: '20px' })}
        ${tablet({flex:'1'})}
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
                    <Logo><Link className="link" to="/">Wolf Wears Sheep</Link></Logo>
                </Center>
                <Right>
                    <MenuItem><Link className="link" to="/register">REGISTER</Link></MenuItem>
                    <MenuItem><Link className="link" to="/login">SIGN IN</Link></MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color='primary'>
                            <Link className="link" to="/cart"><ShoppingCartOutlined/></Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>

        </div>
    )
}

export default Navbar
