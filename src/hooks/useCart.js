import { useState } from "react"

const useCart = () =>{
    const [selected, setSelected] = useState([])
    const addToCart = (product) =>  {
        const cart = [...selected, product]
        setSelected(cart)
    }
    return{selected, setSelected, addToCart}
}

export default useCart;