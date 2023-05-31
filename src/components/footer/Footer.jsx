import React from 'react'
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

import './footer.css'
import { Link, Outlet } from 'react-router-dom';
function Footer() {
    // Script from W3 Schools  
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("to-top").style.display = "block";
        } else {
            document.getElementById("to-top").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (

        <>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="https://facebook.com/snawaza243" role="button"><i
                            className="fab fa-facebook-f"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/snawaza243" role="button"><i
                            className="fab fa-twitter"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://google.com/snawaza243" role="button"><i
                            className="fab fa-google"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://instagram.com/snawaza243" role="button"><i
                            className="fab fa-instagram"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://linkedin.com/in/.com/snawaza243" role="button"><i
                            className="fab fa-linkedin-in"></i></a>

                        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/snawaza243" role="button"><i
                            className="fab fa-github"></i></a>
                    </section>

                    <section className="suscripitonSection">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="subscriptionButton d-flex justify-content-center">
                                    <div className="col-md-5 col-12">
                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="form5Example21" placeholder='Email Address...' className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-outline-light mb-4">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>

                    {/* <section className="footerPages">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="subscriptionButton d-flex justify-content-center">
                                    <ul className="list-unstyled mb-0 d-inline-flex align-items-center">
                                        <li className='topListItem primary'><Link to="./home" >Home</Link></li>
                                        <li className='topListItem primary'><Link to="./disclaimer" >Disclaimer</Link></li>
                                        <li className='topListItem primary'><Link to="./privacy" >Privacy</Link></li>
                                        <li className='topListItem primary'><Link to="./terms" >Terms</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </section> */}
                </div>
                <div className="text-center p-3">
                    <a className="text-white text-decoration-none" href="https://snawaza243.github.io/story-share/">Daily Story Bank</a>
                    <p>© 2023 Copyright</p>

                </div>
            </footer>
            <Outlet />
        </>
    )
}

export default Footer;