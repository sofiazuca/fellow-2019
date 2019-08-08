import React from 'react';
import Logos from './Logos';
import Wrapper from './Wrap'
import SocialMedia from './SocialMedia';

const Footer = () => {
    return ( 

        <div className="footer__background">
            <Wrapper>
                <footer className="footer">

                    <h2 className="footer__social">Keep in touch</h2>
                    <div className="footer__flex">
                        <Logos/>
                        <SocialMedia/>
                    </div>

                    <div className="footer__navbar">
                        <a href="/#" className="footer__item"> Contact us </a>
                        <a href="/#" className="footer__item borders"> Volunteer </a>
                        <a href="/#" className="footer__item"> Get involved </a>
                    </div>
                    <h3> Teensamart © 2019</h3>
                </footer>
            </Wrapper> 
        </div>
    )
}

export default Footer