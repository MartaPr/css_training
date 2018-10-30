import React from 'react';
import Slider from "react-slick";

import cat1 from '../../resources/pics/cat1.jpg';
import cat2 from '../../resources/pics/cat2.jpg';
import cat3 from '../../resources/pics/cat3.jpg';

const Slides = () => {

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
    }

    return (
        <div className="slide_wrapper"
        style={{
            background: '#c5f4c2',
            height: `${window.innerHeight}px`,
            overflow: 'hidden'
        }}
        >

         <Slider {...settings}>
         <div className="slide_info">
             <div
                className="bck_img" 
                style={{
                    background: `url(${cat1})`,
                    height: `${window.innerHeight}px`,
                    overflow: 'hidden'
                }}
             > 
             </div>
            
         </div>
             
         <div>
             <div
                className="bck_img"
                style={{
                    background: `url(${cat2})`,
                    height: `${window.innerHeight}px`,
                    overflow: 'hidden'
                }}
             >

             </div>
         </div>

          <div>
             <div
                className="bck_img"
                style={{
                    background: `url(${cat3})`,
                    height: `${window.innerHeight}px`,
                    overflow: 'hidden'
                }}
             >

             </div>
         </div>

        </Slider>   
        </div>
    );
};

export default Slides;