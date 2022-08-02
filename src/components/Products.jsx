import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Cart } from './../Pages/Cart';
import { add, remove } from '../store/cartSlice'
import { useSelector, useDispatch } from 'react-redux';

export const Products = () => {

    const baseUrl = process.env.REACT_APP_BASE_URL
    const dispatch = useDispatch()

    const [prod, setProd] = useState([]);

    useEffect(() => {
        // https://fakestoreapi.com/products


        const get = async () => {
            const res = await axios(`${baseUrl}/product`)
            console.log(res.data.products)
            setProd(res.data.products)
        }

        get()

    }, [])

    const AddtoCart = (prod) => {
        dispatch(add(prod))
    }
    return (
        <div className="grid grid-cols-4 gap-x-2 " >
            {prod.map((item) => {
                return (
                    <div className=" hover:shadow-2xl cursor-pointer p-4 rounded-xl" >
                        <img className="w-44 h-56 m-auto justify-center items-center" src={item.img_url} alt="item_img" />
                        <p className="text-[#728E3C]">₹{item.price}</p>
                        <p className="truncate font-bold ">{item.name}</p>
                        <p className="truncate">{item.description}</p>
                        <p className="bg-[#388E3C] w-10 m-auto rounded-lg truncate text-white">{item.rating}⭐</p>
                        <button onClick={() => AddtoCart(item)} className=" text-white px-6 py-4 mt-4 border-1  active:bg-[#e39518]  bg-[#FF9F00] rounded">ADD TO CART</button>
                    </div>
                )
            })
            }

        </div>
    )
}
