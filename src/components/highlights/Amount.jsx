import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Amount extends Component {

    state= {
        countStarts: 0,
        countEnds: 100
    }

    counter = () => {
        (this.state.countStarts < this.state.countEnds) && this.setState({
            countStarts: this.state.countStarts + 1
        });
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.counter()
        }, 10)
    }

    render() {
        return (
            <div className="amount_wrapper">
                <div className="counter_wrapper">
                
                <Fade 
                onReveal={()=>this.counter()}
                >
                <div className="counter">
                <span>{this.state.countStarts}%</span>
                <span>Happy hoomans</span>
                </div>
                </Fade>

                <Slide right>
                    <div className="counter_description">
                    <h2>How it works?</h2>
                    <p>Put butt in owner's face making sure that fluff gets into the owner's eyes. Jump off balcony, onto stranger's head wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again meow loudly just to annoy owners. I just saw other cats inside the house and nobody ask me before using my litter box decide to want nothing to do with my owner today i am the best yet chase mice bathe private parts with tongue then lick owner's face, fall asleep on the washing machine. Play riveting piece on synthesizer keyboard eats owners hair then claws head, put toy mouse in food bowl run out of litter box at full speed lick butt, but crash against wall but walk away like nothing happened. </p>
                    
                    </div>
                </Slide>
                
                </div>
                
            </div>
        );
    }
}

export default Amount;