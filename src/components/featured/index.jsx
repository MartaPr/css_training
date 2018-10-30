import React from 'react';
import Slides from './Slides'
import Button from '../utils/Button'


const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Slides />

            <div className="what_about">

                <div className="wrapper">
                    <h1> *some txt goes here* </h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div className="button">
                        <Button
                            text="Offers"
                            link="link"
                            bck="rgba(255, 255, 255, 0.2)"
                            color="#fff"
                        />
                    </div>
                </div>

            </div>





        </div>
    );
};

export default Featured;