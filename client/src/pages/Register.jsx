import { React, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { register } from "../api/auth";

import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    margin: 20px 0px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

export const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.user)

    const submit = (e) => {
        e.preventDefault()
        if (password === confirm) {
            // api call to register
            register(dispatch, { name, email, password })
        }
        else {
            alert('Passwords don\'t match')
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>
                    Create your account
                </Title>
                <Form>
                    <Input placeholder="Name" onChange={(e) => setName(e.target.value)} required></Input>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email" required></Input>
                    <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password" required></Input>
                    <Input placeholder="Confirm" onChange={(e) => setConfirm(e.target.value)} type="password" required></Input>
                    <Button onClick={submit} disabled={isFetching}>Sign Up</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
