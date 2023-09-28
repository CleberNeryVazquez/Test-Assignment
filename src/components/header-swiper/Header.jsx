import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Header.css'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
register();

const Header = () => {
    const objects = [
        {
            icon: icon1,
            text: '30-DAY SATISFACTION GUARANTEE'
        },
        {
            icon: icon2,
            text: 'Free delivery on orders over $40.00'
        },
        {
            icon: icon3,
            text: '50.000+ HAPPY CUSTOMERS'
        },
        {
            icon: icon4,
            text: '100% Money Back Guarantee'
        }
    ]
  return (
    <div className='container' >
        
        <Swiper 
         navigation ={ true }
        
        breakpoints={{
            576: {
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
               
              },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
                {objects.map(obj => (
                    <SwiperSlide key={obj.text}>
                        <div className='novo'>
                            <div className='img'><img src={obj.icon} alt="" /></div>
                            <div className='text'> {obj.text}</div>  
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
  );
};

export default Header;
