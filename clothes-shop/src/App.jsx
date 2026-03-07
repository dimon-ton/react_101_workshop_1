import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterProvider } from 'react-router';
import { router } from './pages/Routes';

function App() {

  return (
    <RouterProvider router={ router }/>
  )
}

export default App
