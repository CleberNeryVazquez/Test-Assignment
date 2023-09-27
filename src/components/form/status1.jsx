import photo from '../../assets/photo.jpg'
import banner from '../../assets/banner.jpg'
import icon1 from '../../assets/icon1.svg'

const Status03 = () => {
    return (
        <div className="container-status">
            <form action="">
                <div className="row">
                    <div className="row-img">
                        <div className="row-banner">
                            
                            <img src='' alt="" className='img-banner' />
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
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Status03;