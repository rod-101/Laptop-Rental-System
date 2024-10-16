
export default function DeviceCard(props) {
    const brand = props.branc
    const pcName = props.name

    return (
        <div className="card-device-container">
            
            <div className="card-device-photo-container">
                <image src={'photo.jpg'} alt={'images/photo.jpg'}/>
            </div>

            <div className="card-device-info">
                <div>{brand ? brand : 'Default_Laptop_Model'}</div>
                <div>{pcName ? pcName : 'Laptop_Name'}</div>
            </div>
        </div>
    )
}