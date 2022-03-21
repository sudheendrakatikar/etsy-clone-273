import React from 'react'
import styled from 'styled-components'

import Products from '../components/Products'

const Container = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Home = () => {
    return (
        <Container>
            <Products />
        </Container>
    )
}