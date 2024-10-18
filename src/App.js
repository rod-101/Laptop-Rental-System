import './App.css';
import Welcome from './Welcome.js';
import Profile from './Profile'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Devices from './Devices.js';
import LenderProfile from './LenderProfile.js';
import RenterProfile from './RenterProfile.js';
import ProfileComponent from './ProfileComponent.js';
import Requests from './Requests.js'
import AddDeviceComponent from './AddDevicePage.js';
import GlobalStyle from './GlobalStyle';
import Feed from './Feed.js'
import Pending from './Pending.js'

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome/>} />

                    <Route path='/home' element={<Welcome/>} />
                    <Route path='/devices' element={<Devices />}/>
                    <Route path='add-a-device' element={<AddDeviceComponent/>}/>                       
                    <Route path='requests' element={<Requests/>}/>
                    <Route path='/profile' element={<Profile/>} >
                        <Route path="lender" element={<LenderProfile/>}>
                            <Route path='me' element={<ProfileComponent/>} />
                        </Route>
                        <Route path="renter" element={<RenterProfile/>}>
                            <Route path='me' element={<ProfileComponent/>}/>
                        </Route>
                    </Route>     
                    <Route path='/feed' element={<Feed/>}/>       
                    <Route path='/pending' element={<Pending/>}/>       
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;