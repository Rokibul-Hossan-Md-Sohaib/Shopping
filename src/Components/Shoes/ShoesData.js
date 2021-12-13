import React from 'react'
import { Button } from 'react-bootstrap'
import './Shoes.css'

const ShoesData = ({shoes}) => {
    return (
        <div className="col-md-4 mt-5 ">
           
                <div className=""> 
                    <h6>{shoes.title}</h6>
                <img className='images' src={shoes.image} alt=""/>
                <Button className="mt-4 btn btn-danger">Shop Now</Button>
                </div>
            </div>
        
    )
}

export default ShoesData
