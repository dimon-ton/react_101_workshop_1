import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ShoppingCard from './components/ShoppingCard';
import { clothesDataList } from './data/clothes';


function App() {
  
  return (
    <div className="container-fluid py-5">
      <div className="container mb-4 bg-light text-dark text-center p-4 rounded-3">
        <div className="fs-1 fw-bold">
          Total: 0 THB
        </div>
      </div>
      {/* Card Holder */}
      <div className="container bg-light rounded-3">
        <div className="row">
          {
            clothesDataList.map((data) => {
              return  <div className="col-3" key={data.id}>
              <ShoppingCard 
                clothesData={data}
                onAdd={() => {}}
                onRemove={() => {}}
                quantity={2}
              />
            </div>
            })
          }

        </div>
      </div>
    </div>
  )
}

export default App
