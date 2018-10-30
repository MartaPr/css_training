import React, { Component } from 'react';
import tabby from '../../resources/pics/tabby.jpg';

import OfferButton from '../utils/Button'

import Zoom from 'react-reveal/Zoom';

class Facilities extends Component {

    state = {
        prices: [99, 139, 159],
        packet: ['small', 'medium', 'large'],
        desc: [
            'Chuck picanha ball tip, tail bacon capicola ribeye brisket pork pastrami.',
            'Spicy jalapeno ground round burgdoggen beef ham hock strip steak.',
            'Buffalo meatball short ribs tenderloin jowl picanha. Shank biltong brisket.',
            
        ],
        linkto: [
            'link1',
            'link2',
            'link3'
        ],
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.state.prices.map((box, i) => (
            <Zoom delay={this.state.delay[i]} key={i}>

                <div className="pricing_item">

                    <div className="inner_wrapper">

                        <div className="price_title">
                            <div className="price">€{this.state.prices[i]} </div>
                            <div className="packet"> {this.state.packet[i]} </div>
                        </div>
                        <div className="price_desc">
                            <span> {this.state.desc[i]} </span>
                        </div>

                        <OfferButton
                            text='Read More'
                            link={this.state.linkto[i]}
                            bck="rgba(255, 255, 255, 0.2)"
                            color="#fff"
                        />

                    </div>
                </div>

            </Zoom>

        ))
    )
    render() {
        return (



            <div
                className="bck_img"
                style={{
                    backgroundImage: `url(${tabby})`,
                    height: `${window.innerHeight}px`,
                    overflow: 'hidden'
                }}
            >
                <h2 className="offer_title">Our offers</h2>

                <div className="pricing">

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>


            </div>

        );
    }
}

export default Facilities;