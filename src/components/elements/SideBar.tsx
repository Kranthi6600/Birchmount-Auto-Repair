"use client";

import React from 'react';
import Swal from 'sweetalert2'
const logo = "/assets/images/logo1.PNG"
import useBirchmountAutoRepairContext from '../context/useBirchmountAutoRepairContext';
import Link from 'next/link';
import Image from 'next/image';
const SideBar: React.FC = () => {
    const { isSidebar, setIsSidebar } = useBirchmountAutoRepairContext();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.currentTarget;
            const email = form.email.value;
            const name = form.fullName.value;
            const message = form.message.value;
            if (email && name && message) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message has been send",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
            }
        }
    return (
        <div className={`xs-sidebar-group info-group info-sidebar ${isSidebar ? 'isActive' : ''}`}>
            <div className="xs-overlay xs-bg-black" onClick={() => setIsSidebar(false)}></div>
            <div className="xs-sidebar-widget">
                <div className="sidebar-widget-container">
                    <div className="widget-heading" onClick={() => setIsSidebar(false)}>
                        <Link href="#" className="close-side-widget">X</Link>
                    </div>
                    <div className="sidebar-textwidget">
                        <div className="sidebar-info-contents">
                           




                            <div className="content-inner">
                                <div className="logo">
                                    <Link href="/"><Image src={logo} width={138} height={40} alt="" /></Link>
                                </div>
                                <div className="content-box">
                                    <h4>About Us</h4>
                                    <div className="inner-text">
                                        <p>Birchmount Auto Repair is Scarborough's trusted local mechanic, providing honest, reliable auto repair services for all vehicle makes and models. From oil changes to engine diagnostics, we've got you covered.
                                        </p>
                                    </div>
                                </div>

                                <div className="form-inner">
                                    <h4>Get a free quote</h4>
                                    <form onSubmit={handleSubmit} className="contact-form-validated">
                                        <div className="form-group">
                                            <input type="text" name="fullName" placeholder="Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea name="message" placeholder="Message..." required></textarea>
                                        </div>
                                        <div className="form-group message-btn">
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                Submit Now <span className="icon-arrow-right"></span>
                                            </button>
                                        </div>
                                        <div className="result"></div>
                                    </form>
                                </div>

                                <div className="sidebar-contact-info">
                                    <h4>Contact Info</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <span className="icon-location"></span> 1064 Birchmount Rd, Scarborough, ON M1K 1S4
                                        </li>
                                        <li>
                                            <span className="icon-call"></span>
                                            <a href="tel:4167578368">(416) 757-8368</a>
                                        </li>
                                        <li>
                                            <span className="icon-envelope"></span>
                                            <a href="mailto:birchmountautorepair@gmail.com">birchmountautorepair@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="thm-social-link1">
                                    <ul className="social-box list-unstyled">
                                        <li>
                                            <a href="#"><i className="icon-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-xpa" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-link-in" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="icon-instagram" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;