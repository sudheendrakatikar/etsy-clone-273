import { React, useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

import { useDispatch, useSelector } from "react-redux";

import { login } from "../api/auth";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    margin-bottom: 10px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const NavLink = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.user)

    const onClick = (e) => {
        e.preventDefault();
        // api call to login
        login(dispatch, { email, password })
    }

    return (
        <Container>
            <Wrapper>
                <Title>
                    Sign In
                </Title>
                <Form>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email"></Input>
                    <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password"></Input>
                    <Button onClick={onClick} disabled={isFetching}>Go</Button>
                    <NavLink>Forgot password?</NavLink>
                    <Link to="/register"><NavLink>Create an account</NavLink></Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
