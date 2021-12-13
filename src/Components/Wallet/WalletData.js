import React from 'react'
import { Button } from 'react-bootstrap'

const WalletData = ({wallet}) => {
    return (
        <div className="col-md-4 mt-5 ">
           
        <div className=""> 
            <h6>{wallet.title}</h6>
        <img className='images' src={wallet.image} alt=""/>
        <Button className="mt-4">Shop Now</Button>
        </div>
    </div>
    )
}

export default WalletData
