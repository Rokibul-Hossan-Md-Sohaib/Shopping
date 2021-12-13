
import React from 'react'
import w1 from '../../Image/w4.jfif'
import WalletData from './WalletData'
const walletItems=[
    {
        title:'B-Wallet',
        image: w1
    },
    {
        title:'B-Wallet',
        image: w1
    },
    {
        title:'B-Wallet',
        image: w1
    },
    {
        title:'B-Wallet',
        image: w1
    },
    {
        title:'B-Wallet',
        image: w1
    },
    {
        title:'B-Wallet',
        image: w1
    }
]

const Wallet = () => {
    return (
        <section className="blogs my-5 ">
        <div className="container ">
            <div className="section-header text-center">
                 <h5 style={{color:"#12D0D9"}} className="text-uppercase">B-Wallets</h5>
                 <h1 className="font-weight-bold">From Our Wallet Collections</h1>
            </div>
            <div className=" row mt-5">
                 {
                     walletItems.map(wallet => <WalletData wallet={wallet} key={wallet.title}/>)
                 }
            </div>
        </div>
    </section>
    )
}

export default Wallet
