import { React, useState } from 'react'
import { StoreOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../api/auth';
import { Badge } from '@material-ui/core';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { Button, FormControl } from 'react-bootstrap';

export const NavigationBar = () => {

  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const onSearch = (e) => {
    e.preventDefault()
    // API call to search
  }

  const onCategoryClick = (e) => {
    const category = e.target.innerHTML
    // API call to products

  }

  const onLogout = (e) => {
    e.preventDefault()
    // API call to logout
    logout(dispatch, user)
  }

  return (
    <Container>
      <Navbar bg='light'>
        <Container>
          <Navbar.Brand href='/'>yEtsy</Navbar.Brand>
          <Form onSubmit={onSearch} className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant='outline-success' type='submit'>Search</Button>
          </Form>
          <Nav className='d-flex'>
            <Nav.Link href='/login' hidden={user}>Login</Nav.Link>
            <Nav.Link href='/register' hidden={user}>Register</Nav.Link>
            <Nav.Link href='/shop'>
              <Badge hidden={!user} color='primary'><StoreOutlined /></Badge>
            </Nav.Link>
            <Nav.Link href='/cart'>
              <Badge badgeContent={0} color='primary'><ShoppingCartOutlined /></Badge>
            </Nav.Link>
            <Nav.Link onClick={onLogout} hidden={!user}>Logout</Nav.Link>
            <Nav.Link href='/profile' hidden={!user}>Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar >
      <Navbar bg='light'>
        <Container>
          <Nav>
            <Nav.Link onClick={onCategoryClick}>Home Favourites</Nav.Link>
            <Nav.Link>Jewellery &amp; Accessories</Nav.Link>
            <Nav.Link>Home &amp; Living</Nav.Link>
            <Nav.Link>Wedding &amp; Party</Nav.Link>
            <Nav.Link>Toys &amp; Entertainment</Nav.Link>
            <Nav.Link>Arts &amp; Collectibles</Nav.Link>
            <Nav.Link>Craft Supplies</Nav.Link>
            <Nav.Link>Gifts &amp; Gift Cards</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container >

  )
}
