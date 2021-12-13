import React from 'react'
import S1 from '../../Image/s1.jfif'
import S2 from '../../Image/s2.jfif'
import S3 from '../../Image/s3.jfif'
import S4 from '../../Image/s4.jfif'
import S5 from '../../Image/s5.jfif'
import S6 from '../../Image/s6.jfif'
import ShoesData from './ShoesData'

const shoesItems=[
    {
        title:"B-Shoe",
        image: S1

    },
    {
        title:"B-Shoe",
        image: S3

    },
    {
        title:"B-Shoe",
        image: S2

    },
    {
        title:"B-Shoe",
        image: S4

    },
    {
        title:"B-Shoe",
        image: S5

    },
    {
        title:"B-Shoe",
        image: S6

    }
]
const Shoes = () => {


    return (
        <section className="blogs my-5 ">
        <div className="container ">
            <div className="section-header text-center">
                 <h5 style={{color:"#12D0D9"}} className="text-uppercase">B-Shoes</h5>
                 <h1 className="font-weight-bold">From Our Shoes Collections</h1>
            </div>
            <div className=" row mt-5">
                 {
                     shoesItems.map(shoes => <ShoesData shoes={shoes} key={shoes.title}/>)
                 }
            </div>
        </div>
    </section>
    )
}

export default Shoes
