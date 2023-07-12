import './App.css';
import Homepage from './Components/Body/Homepage/Homepage';
import PlanTrip from './Components/Body/PlanTrip/PlanTrip';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerConfigObj = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/home', element: <Homepage /> },
  { path: '/plan', element: <PlanTrip /> },
]);

function App() {
  return <RouterProvider router={routerConfigObj} />;
}

export default App;
