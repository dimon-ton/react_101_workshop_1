import React from 'react'

function ShoppingCard({ clothesData, onAdd, onRemove, quantity }) {
  return (
    <div className='card'>
        <img src={clothesData.image} className="card-img-top img-fluid"/>
        <div className="card-body">
            <div className="card-title">{clothesData.name}</div>
            <div className="card-text">
                <div className="text-success">Price: {clothesData.price} THB</div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <button className='btn btn-primary fw-bold' onClick={onRemove}>
                        -
                    </button>
                    <div className='fs-5'>
                        {quantity}
                    </div>
                    <button className='btn btn-primary fw-bold' onclick={onAdd}>
                        +
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCard