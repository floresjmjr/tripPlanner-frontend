import './App.css';
import Homepage from './Components/Body/Homepage/Homepage'
import PlanTrip from './Components/Body/PlanTrip/PlanTrip'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}>
          <Route path='/home' element={<Homepage/>}/>
        </Route>
        <Route path='/plan' element={<PlanTrip/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
