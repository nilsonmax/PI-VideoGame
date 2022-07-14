import React from 'react';

import './Footer.css';

function Footer() {

    return (
        <>
            <footer>
                {/* Footer main */}
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">About</h2>
                        <ul>
                            <li><p>Services</p></li>
                            <li><p>Portfolio</p></li>
                            <li><p>Pricing</p></li>
                            <li><p>Customers</p></li>
                            <li><p>Careers</p></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Resources</h2>
                        <ul>
                            <li><p>Docs</p></li>
                            <li><p>Blog</p></li>
                            <li><p>eBooks</p></li>
                            <li><p>Webinars</p></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                        <ul>
                            <li><p>Help</p></li>
                            <li><p>Sales</p></li>
                            <li><p>Advertise</p></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Stay Updated</h2>
                        <p>Subscribe to our newsletter to get our latest news.</p>
                        <form>
                            <input type="email" name="email" placeholder="Enter email address" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </section>

                {/*  Footer social */}
                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li><p><i className="fab fa-facebook"></i></p></li>
                        <li><p><i className="fab fa-twitter"></i></p></li>
                        <li><p><i className="fab fa-instagram"></i></p></li>
                        <li><p><i className="fab fa-github"></i></p></li>
                        <li><p><i className="fab fa-linkedin"></i></p></li>
                        <li><p><i className="fab fa-youtube"></i></p></li>
                    </ul>
                </section>

                {/*  Footer legal */}
                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li><p>Terms &amp; Conditions</p></li>
                        <li><p>Privacy Policy</p></li>
                        <li>&copy; 2022 Copyright Programas juegos Max.</li>
                    </ul>
                </section>
            </footer>
        </>
    )

}

export default Footer;