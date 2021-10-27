import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch("https://sanjid073.github.io/data/protin.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return {products,setProducts}
}
export default useProducts;