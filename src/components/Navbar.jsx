import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
export const Navbar = () => {

    const prods = useSelector((state) => {
        return state.cart;
    })
    const total = prods.length;
    return (


        <div className="p-4 bg-[#2874F0] text-white text-xl  flex justify-between">


            <div className="w-2/12 justify-between flex">

                <Link to='/'> <img className="w-24" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="logo" /></Link>
                <Link to="/cart">Cart</Link>

            </div>

            <div>
                Total:-
                &nbsp;

                <span>
                    {total}
                </span>
                &nbsp;
                items
            </div>
        </div>
    )
}
