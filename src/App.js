import './App.css';
import Welcome from './Welcome.js';
import Profile from './Profile'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Welcome/>} />
                    <Route path='/home' element={<Welcome/>} />
                    <Route path='/profile' element={<Profile/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;