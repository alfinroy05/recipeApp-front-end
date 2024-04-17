import React, { useState } from 'react'
import Na from './Na'

const View = () => {
    const [data, changeData] = useState(
        [
            { "recipe": "Masala Chai", "img": "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/47-masala-chai-canva-phpsbxpRf" }
            ,{"recipe":"Aam Panna","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/49-aam-panna-phpe0hWsz"}
            ,{"recipe":" Matar Kulcha","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/11-matar-kulcha-canva-phpiqTrzB"}
            ,{"recipe":"samoosa","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/5-samosas-canva-phppf0Q4I"}
            ,{"recipe":"pani puri","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/7-pani-puri-canva-phpxM6qmK"}
            ,{"recipe":"Kachori","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/9-kachori-canva-phpUP6psD"}
            ,{"recipe":"Vada Pav","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/13-vada-pav-canva-phpFSOPxs"}
            ,{"recipe":" Kathi Rolls","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/15-kathi-rolls-canva-phpE9mepi"}
            ,{"recipe":"Chicken 65","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/19-chicken-65-canva-phpV0OB8z"}
            ,{"recipe":" Sambar","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/21-sambar-canva-php6n3V6O"}
            ,{"recipe":" Tandoori","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/23-tandoor-canva-phpRi8NmQ"}
            ,{"recipe":"Butter Chicken","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/25-butter-chicken-murgh-makhani-canva-phpcxhfCA"}
            ,{"recipe":"Chana Masala","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/33-chana-masala-canva-phphQcG8p"}
            ,{"recipe":"Thali","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/37-thali-canva-phpAAsz1i"}
            ,{"recipe":"Kulfi","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/39-kulfi-canva-phposOcGE"}
            ,{"recipe":"Gulab Jamun","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/41-gulab-jamun-canva-phpmGfh29"}
            ,{"recipe":"Lassi","img":"https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/45-lassi-canva-phpOntkP2"}
        ]
    )
    return (
        <div>
            <Na/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <br />
                            {data.map((value, index) => {
                                return <div className="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                    <div class="card" >
                                        <img src={value.img} class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.recipe}</h5>
                                                <p class="card-text"></p>
                                                <a href="#" class="btn btn-primary">View</a>
                                            </div>
                                    </div>
                                </div>
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View