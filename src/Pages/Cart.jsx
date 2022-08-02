import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { remove } from "../store/cartSlice"
export const Cart = () => {



    const dispatch = useDispatch()
    const prods = useSelector((state) => {
        return state.cart
    })

    const RemoveFromCart = (id) => {
        dispatch(remove(id))
    }
    return (
        <div>Cart
            <div className="grid grid-cols-4  gap-x-2 " >
                {prods.map((item) => {
                    return (
                        <div className="bg-red-100 p-4 rounded-xl" >
                            <img className="w-44 h-56 m-auto justify-center items-center" src={item.img_url} alt="item_img" />
                            <p>₹{item.price}</p>
                            <p className="truncate ">{item.title}</p>
                            <p className="truncate">{item.description}</p>
                            <p className="text-yellow-600 truncate">{item.rating}⭐</p>
                            <button onClick={() => RemoveFromCart(item.id)} className=" mt-4 border-2 active:bg-red-800 border-red-600 bg-red-400 rounded-xl px-2">Remove</button>
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}
