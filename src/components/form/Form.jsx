import './form.css'
import Amex from '../../assets/badges/amex.svg'
import visa from '../../assets/badges/visa.svg'
import shop from '../../assets/badges/shop.svg'
import paypal from '../../assets/badges/paypal.svg'
import mastercard from '../../assets/badges/mastercard.svg'
import gpay from '../../assets/badges/gpay.svg'
import Apple from '../../assets/badges/apple.svg'
import photo from '../../assets/photo.jpg'
import lock from '../../assets/lock.svg'
import banner from '../../assets/banner.jpg'
import verify from '../../assets/verify.svg'
import product from '../../assets/product.png'
import p100 from '../../assets/p100.svg'
import point from '../../assets/point.svg'
import satisfaction from '../../assets/satisfaction.jpg'
import { TiTick } from 'react-icons/ti'
import { useState } from 'react'

const Form = () => {
    const [currentStep,setcurrentStep] =useState(3)
    const [complete,setcomplete] =useState(false)
    const steps = [
        {
            span: "Step 1",
            p: "Cart Review"
        },
        {
            span: "Step 2",
            p: "Checkout"
        },
        {
            span: "Step 3",
            p: "Special Offer"
        },
        {
            span: "Step 4",
            p: "Confirmation"
        }
    ]
    return(
        <section className="container-form">
            <div className="title-form">
                <h1>Wait ! your order in progress.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="stepper">
                {steps?.map((step, i) => (
                    <div key={i} className={`step-item ${currentStep === i+1 && 'active'} ${(i+1 <currentStep || complete) && 'complete'} `}>
                        <div className='step-number'>
                            { i + 1 < currentStep || complete ?  < TiTick size={24} /> : i + 1  }
                        </div>
                        <p className='step'><span>{step.span}</span> {step.p}</p>
                    </div>
                ))}
                
            </div>
          <div className="container-status">
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className="row">
                    <div className="row-img">
                        <div className="row-banner">
                            
                            <img src={banner} alt="" />
                        </div>
                        <div className="user">
                            <div className="user-img">
                                <img src={photo} alt="" />
                                <div className="stat-text">

                                <div className="stars"></div>
                                <div className="user-text"> <p>Ken T. <img src={verify} alt="" /><span>Verified Customer</span></p></div>
                                </div>
                            </div>
                            <div className="text-conten">
                                <p>As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row-description">
                        <div className="section1">
                            <h2> <strong>ONE TIME ONLY</strong> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</h2>
                        </div>
                        <div className="section2">
                            <div className="section2-img">
                                <img src={product} alt="" />
                            </div>
                            <div className="section2-text">
                                <div className="price">
                                    <p>Clarifion Air Ionizer</p>
                                    <p><span>$180</span>$80</p>
                                </div>
                                <div className="stars"></div>
                                <div className='point'><img src={point} alt="" /> 12 left in Stock</div>
                                <div className='info__section2'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</div>
                            </div>
                        </div>
                        <div className="section3" >
                            <div className="section3-item"><TiTick size={32} color='#2C7EF8' />Negative Ion Technology may <span>help with allergens</span></div>
                            <div className="section3-item"><TiTick size={32} color='#2C7EF8' />Designed for <span>air rejuvenation</span></div>
                            <div className="section3-item"><TiTick size={32} color='#2C7EF8' /> <span>Perfect for every room</span>in all types of places.</div>
                        </div>
                        <div className="section4">
                                <img src={p100} alt="" />
                               <p> Save<span>53%</span>  and get <span>6 extra Clarifision</span> for only<span>$14 Each.</span>  </p>
                        </div>
                        <div className='section-button' >
                        <button 
                        className='button'
                        onClick={() => {
                            currentStep === steps.length
                            ? setcomplete(true)
                            : setcurrentStep((prev) => prev +1)
                        }} >Yes - Claim my discount </button>
                        </div>
                        <div className="section5">
                            <p>Free shipping |</p> 
                            <img src={lock} alt="" className="section5-icon"/> 
                            <p>Secure 256-bit SSL encryption. |  </p>
                            <ul className='section5-list'>
                               
                                <li><img src={visa} alt="" /></li>
                                <li><img src={shop} alt="" /></li>
                                <li><img src={paypal} alt="" /></li>
                                <li><img src={mastercard} alt="" /></li>
                                <li><img src={gpay} alt="" /></li>
                                <li><img src={Apple} alt="" /></li>
                                <li><img src={Amex} alt="" /></li>
                            </ul>
                        </div>
                        <div className="section6">
                            <p className="button-no">
                            No thanks, I don’t want this. 
                            </p>
                        </div>
                        <div className="section7">
                            <div className="section7-img">
                                <img src={satisfaction} alt="" />
                            </div>
                            <div className="section7-text">
                                <p>If you are not completely thrilled with your Clarifion - We have a <strong> 30 day satisfaction guarantee. </strong> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </section>
        
    )
}
export default Form;

