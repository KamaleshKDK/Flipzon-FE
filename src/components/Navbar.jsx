import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import {useSelector } from "react-redux"
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);

  const logoutUser =  () => {
    // await axios.get("http:/localhost:5000/user/logout")
    // localStorage.removeItem("token")
    window.location.replace = "/"
}

  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
             
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-JA8SRxE3OgvEsNQ2iM3-h1tTyjpOppIa6FN9N0E8xHDCJpo1Yeg1QYmlfNXk7nMul4&usqp=CAU" style={{width: "30px", height: "30px" , paddingRight: "10px"}} alt="" />
          <Link className="link" to="/">

          <h2 className="link">FLIPZON</h2  >
           </Link>
        </Left>
        <Center>
          <Link className="link" to="/">
          <Logo className="link">FLIPZON</Logo>
          </Link>
        </Center>
        <Right>
        {
          !user
            ?
            <>
             
      
                 <Link className="link" to="/login">
                    <MenuItem>
                    LOGIN
                    </MenuItem>
                  </Link>
              
                  <Link className="link" to="/register">
                    <MenuItem>
                    REGISTER
                    </MenuItem>
                  </Link>
                
              
            </>
            :
            <>
              
              <MenuItem  onclick={logoutUser}>
            LOGOUT
          </MenuItem>
            </>
        }
          {/* <Link to="/register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link> */}
          <Link to="/cart">
          <MenuItem>
            <Badge
              badgeContent={quantity}
              color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
                </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
