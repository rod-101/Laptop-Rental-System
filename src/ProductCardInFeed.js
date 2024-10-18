import { useState } from "react";

export default function ProductCardInFeed(props) {
    const plan = props.plan;
    const model = props.model;
    const availability = props.availability
    const [product, setProduct] = useState([])
    
    
    const handleClick = () => {
        const userConfirmed = window.confirm("Do you want to proceed with this available laptop?");
        if (userConfirmed) {
            setProduct(true);
            console.log(product)
        } else {
            setProduct(false);
            console.log(product)
        }
    }

    return (
        <>
            <div id="productCard-feed" className="product-card-hover" onClick={handleClick}>
                <div id="productCard-img">
                    Image
                </div>
                <div id="productCard-info">
                    <div id="productCard-model">{model}</div>
                    <div id="productCard-footer">
                        <span>{plan}</span>
                        <span style={{ color: availability === "Available" ? "green" : "red" }}>
                            {availability}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}