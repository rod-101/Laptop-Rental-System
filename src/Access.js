export default function Access(props) {
    console.log('this is a text logged from the access component, the userType is ' + props.userType);
    return (
        <form id="formHeader">
            <h1>Create a {props.userType} Account</h1>

            <div id="formBody">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                
                <p>or <span>Login</span></p>
                <input type="submit" value="Register/Login" />
            </div>
        </form>
        
    );
}