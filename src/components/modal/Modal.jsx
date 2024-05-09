import React from 'react'
import "./Modal.scss"

const Modal = ({data,close}) => {
  return (
    <>
    <div onClick={()=>close(null)} className='modal__overBackround'></div>
    <div className='modal__boes'>
        <div className='modal__card'>
            <div className='modal__card-img'>
                <img src={data.images[0]} alt="single img" />
            </div>
            <div className='modal__card-info'>
                <button onClick={()=>close(null)} className='modal__card-info__close'>
                    X
                </button>
                <h3 className='modal__card__title'>{data.title}</h3>
                <p className='modal__card__desc'>Brand: {data.brand}</p>
                <p className='modal__card__desc'>{data.description}</p>
                <p className='modal__card__desc'>Category: {data.category}</p>
                <p className='modal__card__desc'>{data.discountPercentage}</p>
                <p className='modal__card__desc'>Reating: {data.rating}</p>
                <p className='modal__card__desc'>Stock: {data.stock}</p>
                <div className='modal__card-info__part'>
                    <p className='modal__card-info__old-price'>{data.price + 100 + "$"}</p>
                    <p className='modal__card-info__new-price'>{data.price + "$"}</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal