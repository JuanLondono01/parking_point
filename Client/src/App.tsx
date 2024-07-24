import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ParkingPoint } from './views/ParkingPoint';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ParkingPoint/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
