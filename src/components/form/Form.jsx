import './form.css'
import photo from '../../assets/photo.jpg'
import banner from '../../assets/banner.jpg'
import icon1 from '../../assets/icon1.svg'
import { TiTick } from 'react-icons/ti'
import { useState } from 'react'

const Form = () => {
    const [currentStep,setcurrentStep] =useState(1)
    const [complete,setcomplete] =useState(false)
    const [test , settest] =useState()
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
          {/*   <Status03 /> */}
          <div className="container-status">
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <div className="row">
                    <div className="row-img">
                        <div className="row-banner">
                            
                            <img src={banner} alt="" className='img-banner' />
                        </div>
                        <div className="user">
                            <div className="star">
                            <img src={photo} alt="" className='photo' />
                            <div className="star-icon">
                                <p>Ken T. <img src={icon1} alt="" /><span>Verified {/* #5BB59A */}Customer</span></p>
                            </div>
                            <div className="text-conten">
                                <p>As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="text-desc">
                            <h2> <span>ONE TIME ONLY</span>special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</h2>
                        </div>
                        <button 
                        className='button'
                        onClick={() => {
                            currentStep === steps.length
                            ? setcomplete(true)
                            : setcurrentStep((prev) => prev +1)
                        }} >next</button>
                    </div>
                </div>
            </form>
        </div>
        </section>
        
    )
}
export default Form;

const Status2 = () => {
    return(
        <div className="container-status">
            <form action="">
                <div className="row">
                    <div className="row-img">
                        <div className="row-banner">
                            
                            <img src={banner} alt="" className='img-banner' />
                        </div>
                        <div className="user">
                            <div className="star">
                            <img src={photo} alt="" className='photo' />
                            <div className="star-icon">
                                <p>Ken T. <img src={icon1} alt="" /><span>Verified {/* #5BB59A */}Customer</span></p>
                            </div>
                            <div className="text-conten">
                                <p>As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="text-desc">
                            <h2> <span>two TIME ONLY</span>special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</h2>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}


const Status3 = () => {
    return(
        <div className="container-status">
            <form action="">
                <div className="row">
                    <div className="row-img">
                        <div className="row-banner">
                            
                            <img src={banner} alt="" className='img-banner' />
                        </div>
                        <div className="user">
                            <div className="star">
                            <img src={photo} alt="" className='photo' />
                            <div className="star-icon">
                                <p>Ken T. <img src={icon1} alt="" /><span>Verified {/* #5BB59A */}Customer</span></p>
                            </div>
                            <div className="text-conten">
                                <p>As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="text-desc">
                            <h2> <span>two TIME ONLY</span>special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)</h2>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}