import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import './Register.css';
const Container = styled.div`
width: 100vw;
height: 100vh;
background:
  url("https://images.pexels.com/photos/3764402/pexels-photo-3764402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;

  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 34px;
  text-align:center;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 14px;
  border-radius:20px;
  border : none;
  font-size:17px

`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
border-radius : 25px; 
cursor: pointer;
margin-bottom: 10px;
`;


const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
        const res = await axios.post("https://flipzon-be.herokuapp.com/api/auth/register", {
            username,
            email,
            password,
        });
    
        res.data &&   window.location.replace("/login");
    } catch (error) {
        if (error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500) {
            setError(error.response.data.message)
        }
    }
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form  onSubmit={handleSubmit}>
          <Input 
          type="text" 
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)} />
          <Input 
          type="email"
          placeholder="Enter Email"
           onChange={(e) => setEmail(e.target.value)} />
          <Input
          type="password"
           placeholder="Enter Password"
           onChange={(e) => setPassword(e.target.value)} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          
          <Button type="submit" >CREATE</Button>
        </Form>
        {/* <br></br> */}
          <Link className="link link-login" to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
            {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
      </Wrapper>
    </Container>
  )
}

export default Register