import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@mui/icons-material'
import { Badge } from '@mui/material'
import {mobile} from "../../responsive";
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from '../../redux/userRedux';

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 17px;
  cursor: pointer;
  ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "40px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}

`;

const MenuItme = styled.div`
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}

`;

const Button = styled.button`
  font-size: 17px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    logout();
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color: "gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>E-Shop.</Logo>
        </Center>
        <Right>
          { user && (
            <>
              <Button onClick={handleClick}>Log out</Button>
              <Link to="/cart">
                <MenuItme>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined/>
                </Badge>
                </MenuItme>
              </Link>
            </>
          )} {!user && (
            <>
              <MenuItme>Sign Up</MenuItme>
              <Link to="/login" style={{textDecoration:"none", color: "black"}}>
                <MenuItme>Log In</MenuItme>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>  
    </Container>
  )
}

export default Navbar