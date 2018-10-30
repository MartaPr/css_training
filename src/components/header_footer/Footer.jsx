import React from 'react';

const Footer = () => {
    return (
        <footer className="footer container">
               
    
                <div className="item item_left">

                    <h1 className="info name">Contact us</h1>

                    <div className="info">
                        <h2 className="info info_contact">Phone number</h2>
                        <span>+111 44 222 333</span>
                    </div>

                    <div className="info">
                        <h2 className="info info_contact">Email</h2>
                        <span>info@hunters.com</span>
                    </div>
                    <div className="info">
                        <h2 className="info info_contact">Location</h2>
                        <span>Purr str. 123, Cat city</span>
                    </div>


                </div>

                
                <div className="item item_middle">
                    <h1 className="info name">FAQ</h1>

                    <div className="info info_faq">Bacon ipsum dolor?</div>
                    <div className="info info_faq">Amet cupim biltong?</div>
                    <div className="info info_faq">Frankfurter turducken sausage?</div>
                    <div className="info info_faq">Leberkas pork loin venison?</div>
                    <div className="info info_faq">Strip steak tri-tip meatball?</div>
                </div>


                <div className="item item_right">
                    <h1 className="info name">Links</h1>

                    <div className="info info_faq">Bacon ipsum dolor?</div>
                    <div className="info info_faq">Amet cupim biltong?</div>
                    <div className="info info_faq">Frankfurter turducken sausage?</div>
                    <div className="info info_faq">Leberkas pork loin venison?</div>
                    <div className="info info_faq">Strip steak tri-tip meatball?</div>
                </div>
            
        </footer>
    );
};

export default Footer;