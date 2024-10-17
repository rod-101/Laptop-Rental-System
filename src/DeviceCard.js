
export default function DeviceCard(props) {
    const model = props.model
    const device_name = props.device_name
    const device_id = props.key

    return (
        <>
            <div className="card-device-container">
                <div className="card-device-photo-container">
                    {/* <image src={'photo.jpg'} alt={'images/photo.jpg'}/> */}
                </div>
                <div className="card-device-info">
                    <div>{model ? model : 'Default_Laptop_Model'}</div>
                    <div>{device_name ? device_name : 'Laptop_Name'} ({device_id})</div>
                </div>
            </div>
        </>
    )
}