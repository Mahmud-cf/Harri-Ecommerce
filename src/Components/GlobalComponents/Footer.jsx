import React from 'react'
import logo from '../../image/logo.jpg'
import { HiHome } from 'react-icons/hi';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className='container-fluid footer-wrapper ' >
        <div className="pd-4">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-7 footer-1">
                    <div className='footer-1st' >
                        <div >
                            <h3 className='footer-item-header-1st' >Our Mission</h3>
                        </div>
                        <div>
                            <p>So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved us lan Gathering thing us land years living.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6 col-5 offset-1 footer-2">
                    <div className='footer-2nd' >
                        <div>
                            <h2 className='footer-item-header'>Quick Links</h2>
                        </div>
                        <div className='footer-link' >
                            <div><a href="/">Home</a></div>
                            <div><a href="/contact">Contact</a></div>
                            <div><a href="/about">About</a></div>
                            <div><a href="/cloth-product">Cloth</a></div>
                            <div><a href="/fashion-product">Featured</a></div>
                            <div><a href="/tech-product">Technology</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 col-sm-6 col-5 footer-3">
                    <div className='footer-2nd' >
                        <div>
                            <h2 className='footer-item-header'>Resources</h2>
                        </div>
                        <div className='footer-link' >
                            <div><a href="/cloth-product">Cloth</a></div>
                            <div><a href="/fashion-product">Featured</a></div>
                            <div><a href="/tech-product">Technology</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-7 footer-4">
                    <div className='footer-4th' >
                        <div>
                            <div>
                                <h2 className='footer-item-header'>Contact</h2>
                            </div>
                            <div className='d-flex' >
                                <div className='footer-icon' >
                                    <div><HiHome/></div>
                                </div>
                                <div className='footer-contact' >
                                    <h6>Head Office</h6>
                                    <p>123, Main Street, Your City</p>
                                </div>
                            </div>
                            <div className='d-flex' >
                                <div className='footer-icon' >
                                    <div><IoIosCall/></div>
                                </div>
                                <div className='footer-contact'>
                                    <h6> Phone Number</h6>
                                    <p>01647-083551</p>
                                </div>
                            </div>
                            <div className='d-flex' >
                                <div className='footer-icon' >
                                <div><MdEmail/></div>
                                </div>
                                <div className='footer-contact'>
                                    <h6>Email</h6>
                                    <p>mahmudahmedcf@</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer