import Welcome from './Welcome.js';
import Profile from './Profile'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ProfileComponent from './ProfileComponent.js';
import LenderProfile from './LenderProfile.js';
import RenterProfile from './RenterProfile.js';
import Requests from './Requests.js'
import Devices from './Devices.js'

export default function MyRoutes() {
    <BrowserRouter>
        <Routes>
            <Route index element={<Welcome/>} />
            <Route path='/home' element={<Welcome/>} />

            <Route path='/profile' element={<Profile/>} >
                <Route path="lender" element={<LenderProfile/>}>
                    <Route path='me' element={<ProfileComponent/>} />
                    <Route path='requests' element={<Requests />}/>
                    <Route path='devices'element={<Devices />}/>
                </Route>
                <Route path="renter" element={<RenterProfile/>}>
                    {/* RenterProfile components here */}
                </Route>
            </Route>
            
        </Routes>
    </BrowserRouter>
}
