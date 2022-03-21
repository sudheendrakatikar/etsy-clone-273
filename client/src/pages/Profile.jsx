import { React, useEffect, useState } from "react";
import { request } from "../requests";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"

import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Product from "../components/Product";

export const Profile = () => {

    const user = useSelector((state) => state.user.currentUser);
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const getFavourites = async () => {
            try {
                console.log(user)
                const res = await axios.get('http://localhost:5000/api/favourite', { params: { user_id: user.user_id } })
                setFavourites(res.data.message)
            } catch (err) { }
        }
        getFavourites()
    })

    return (
        <Container>
            <Container>
                Profile
            </Container>
            <Container>My favourites
                {favourites.slice(0, 8).map((item) => <Product item={item} key={item.product_id} />)}
            </Container>
        </Container>
    )
}