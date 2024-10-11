export default function ProductCard(props) {
    const brand = props.brand
    const pcName = props.pcName

    return (
        <>
            <div>
                <image alt="image"></image>
                <div>{brand}</div>
                <div>{pcName}</div>
            </div>
        </>
    )
}