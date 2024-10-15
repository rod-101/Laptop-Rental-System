import './App.css';
import Welcome from './Welcome.js';
import Profile from './Profile'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddDevicePage from './AddDevicePage.js';
import LenderProfile from './LenderProfile.js';
import RenterProfile from './RenterProfile.js';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome/>} />
                    <Route path='/home' element={<Welcome/>} />

                    <Route path='/profile' element={<Profile/>} >
                        <Route path="lender" element={<LenderProfile/>}>
                            <Route path='add-device' element={<AddDevicePage/>} />
                            <Route path='requests'/>
                            <Route path='devices'/>
                        </Route>
                        <Route path="renter" element={<RenterProfile/>}>
                            {/* RenterProfile components here */}
                        </Route>
                    </Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;