import { NavbarRenter } from "./Navbar"
import ProductCardInFeed from "./ProductCardInFeed"
import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001'//process.env.REACT_APP_SERVER_URL 

export default function Feed() {
    const [ products, setProducts ] = useState([])
    const navigate = useNavigate()    

    const getProducts = useCallback(async () => {
        try{
            const response = await fetch(`${SERVER_URL}/feed`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if(response.ok) {
                const result = await response.json()
                setProducts(result ? result : []);
                console.log(result)
            } else {
                console.log('something went wrong while fetching laptop products.')
            }
        } catch(err) {
            console.log('Error fetching products: ' + err)
        }
    }, [])


    useEffect(() => {
        navigate('/feed')
        getProducts()
    }, [getProducts, navigate])

    return (
        <>
            <NavbarRenter/>
            <div className="renter-header">Discover Lappies for Rent</div>
            <div id="feedComponent-container">
                {products.length > 0 ? (
                    products.map(prod => (
                        <ProductCardInFeed
                            key={prod.product_id}
                            model={prod.model}
                            plan={prod.plan}
                            availability={prod.availability}
                        />
                    ))
                ) : (
                    <span style={{width: "200px", margin: "auto", marginTop: "170px"}}>No products available at the moment.</span>
                )}
            </div>
        </>
    )
}