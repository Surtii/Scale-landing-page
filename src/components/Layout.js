import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import ErrorBoundary from '../components/ErrorBoundary'

const Layout = (props) => {
    return (
        <div>
            <div className="main-page-wrapper">
                <div className="html-top-content">
                    <div className="theme-top-section">
                        <Navbar/>
                    </div>
                    <ErrorBoundary>
                        {props.children}
                    </ErrorBoundary>
                    <footer className="theme-footer">
                        <div className="container">
                            <div className="inner-wrapper">
                                <div className="bottom-footer clearfix">
                                    <p className="copyright">&copy; 2021 <Link to="#.">ScaleX Escrow</Link> All Right Reserved</p>
                                    <ul>
                                        <li><a href="https://www.facebook.com/SURTiiTech">{''}<i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="https://twitter.com/ScaleX_Africa">{''}<i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="https://www.instagram.com/p2pbyscale">{''}<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div> 
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Layout
