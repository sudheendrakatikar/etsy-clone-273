import React from 'react'
import { useSelector } from "react-redux"

import CreateShop from '../components/CreateShop'

import { checkShopCreated } from '../api/shop';

export const Shop = () => {

    const user_id = useSelector((state) => state.user.currentUser.user_id);
    checkShopCreated(user_id).then((res) => {
        console.log(res)
        if (!res) {
            return <CreateShop />
        }
        else {
            return (
                <div>Shop</div>
            )
        }
    })
}
