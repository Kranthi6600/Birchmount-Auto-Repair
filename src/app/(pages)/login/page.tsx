"use client";
import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import Banner from '@/features/banner/Banner';
import FooterOne from '@/components/footers/FooterOne';
import Link from 'next/link';

const Page: React.FC = () => {
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        form.reset();
    };
    const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setRememberMe(e.target.checked);
    };
    return (
        <>
            <Banner title='Login' subTitle='Login' />
            <section className="login-one">
                <div className="container">
                    <div className="login-one__form">
                        <div className="inner-title text-center">
                            <h2>Login Here</h2>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="email"
                                                name="form_email"
                                                id="formEmail1"
                                                placeholder="Email..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <div className="input-box">
                                            <input
                                                type="password"
                                                name="form_password"
                                                id="formEmail2"
                                                placeholder="Password..."
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="form-group">
                                        <button
                                            className="thm-btn"
                                            type="submit"
                                            data-loading-text="Please wait..."
                                        >
                                            Login Here
                                            <span><i className="icon-arrow-right"></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="remember-forget">
                                    <div className="checked-box1">
                                        <input
                                            className="form-check-input mt-1"
                                            type="checkbox"
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onChange={handleRememberMeChange}
                                            aria-label="Remember me checkbox"
                                        />
                                        <label htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="forget">
                                        <a href="#">Forget password?</a>
                                    </div>
                                </div>

                                <div className="create-account text-center">
                                    <p>Not registered yet? <Link href={"/sign-up"}>Create an Account</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <FooterOne />
        </>
    );
};

export default Page;