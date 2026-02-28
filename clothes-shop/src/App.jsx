import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ShoppingCard from './components/ShoppingCard';
import { clothesDataList } from './data/clothes';
import { useEffect } from 'react';

import { useState  } from 'react';


function App() {

  const [total, setTotal] = useState(0)

  const [myCart, setMyCart] = useState([])

  useEffect(() => {
      console.log("one time");

      const newMycart = clothesDataList.map(() => {
        return 0
      })

      setMyCart(newMycart)

  }, [])

  useEffect(() => {
    console.log(myCart);

    let myTotal = 0

    // for (let index = 0; index < clothesDataList.length; index++) {
    //   const price = clothesDataList[index].price;
      
    //   const thisItemTotal = price * myCart[index]

    //   myTotal += thisItemTotal
    // }

    myCart.forEach((quan, index) => {
      myTotal += quan * clothesDataList[index].price;
    });

    setTotal(myTotal)


  }, [myCart])

  const onAdd = (index) => {
    console.log("Add Cloth", index);

    setMyCart((oldCart) => {
        const newCart = [...oldCart]
        newCart[index] += 1

        return newCart
    })
  }

  const onRemove = (index) => {
    console.log("Remove Cloth", index);

        setMyCart((oldCart) => {
        const newCart = [...oldCart]
        const newQuantity = newCart[index] - 1

        if (newQuantity > 0) {
          newCart[index] = newQuantity
        } else {
          newCart[index] = 0
        }

        return newCart
    })
  }
  
  return (
    <div className="container-fluid py-5">
      <div className="container mb-4 bg-light text-dark text-center p-4 rounded-3">
        <div className="fs-1 fw-bold">
          Total: {total} THB
        </div>
      </div>
      {/* Card Holder */}
      <div className="container bg-light rounded-3">
        <div className="row">
          {
            clothesDataList.map((data, index) => {
              return  <div className="col-3" key={data.id}>
              <ShoppingCard 
                clothesData={data}
                onAdd={() => onAdd(index)}
                onRemove={() => onRemove(index)}
                quantity={myCart[index]}
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
