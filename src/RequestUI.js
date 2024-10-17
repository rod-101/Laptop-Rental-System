
export default function RequestUI(props) {
    const requester_username = props.username
    const requester_email = props.email
    const for_device = props.device
    const requested_on = props.on_date

    return (
        <>
            <div className="request-component">
                <div className="image-requester"></div>
                <div className="request-ui">
                    {console.log("You are on the requestui component!")}
                    <div className="request-component-head">{requester_username ? requester_username : "Unknown"} | {requester_email ? requester_email : "None"}</div>
                    <br></br>
                    <div>Wants to rent: {for_device ? for_device : "None"}</div>
                    <div>Submitted on: {requested_on ? requested_on : "Not specified"}</div>
                </div>
                <button className="approve-button">Approve</button>
            </div>
        </>
    )
}