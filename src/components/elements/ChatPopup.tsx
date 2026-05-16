"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2'

const ChatPopup: React.FC = () => {
    const [openChat, setOpenChat] = useState<boolean>(false);

    const closeChatProp: (value: boolean) => void = (value): void => {
        setOpenChat(value);
    }
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
        <>
            <div className="chat-icon"><button type="button" className="chat-toggler" onClick={() => closeChatProp(true)}><i className="fa fa-comment"></i></button></div>

            <div id="chat-popup" className={`chat-popup ${openChat ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="close-chat" onClick={() => closeChatProp(false)}><i className="fa fa-times"></i></div>
                    <div className="chat-form">
                        <p>Please fill out the form below and we will get back to you as soon as possible.</p>

                        <form className="contact-form-validated" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="fullName" placeholder="Your Name" required={true} />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Your Email" required={true} />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Text" required={true}></textarea>
                            </div>
                            <div className="form-group message-btn">
                                <button type="submit" className="thm-btn">
                                    Submit Now
                                    <span className="icon-arrow-right"></span>
                                </button>
                            </div>
                            <div className="result"></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPopup;