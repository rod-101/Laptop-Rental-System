export default function Access() {
    return (
        <form id="formHeader">
            <h1>Create a userType Account</h1>

            <div id="formBody">
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                
                <p>or <a href="https://google.com">Login</a></p>
                <input type="submit" value="Register/Login" />
            </div>
        </form>
        
    );
}