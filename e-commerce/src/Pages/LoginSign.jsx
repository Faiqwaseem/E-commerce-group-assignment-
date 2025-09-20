import React, { useEffect } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useQuery } from '@tanstack/react-query';
import userFetch from '../Services/userFetch';
import { useState } from 'react';
const LoginSign = () => {
    const [activeForm, setActiveForm] = useState('login');

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const queryResult = useQuery({
        queryKey: ["user"],
        queryFn: userFetch,
    })

    console.log('useQuery result:', queryResult);


    return (
        <div>
            <div className="containerlogin">
                <div className="brand-section">
                    <div className="brand-logo">
                        <ShoppingBagIcon className='LOGOICON' />
                    </div>
                    <h2>ShopEase</h2>
                    <p>Your one-stop destination for all shopping needs. Discover amazing products and exclusive deals.</p>
                </div>

                <div className="form-section">
                    <div className="form-toggle">
                        <button className={`toggle-btn ${activeForm === 'login' ? 'active' : ''}`} onClick={() => setActiveForm('login')}>Login</button>
                        <button className={`toggle-btn ${activeForm === 'signup' ? 'active' : ''}`} onClick={() => setActiveForm('signup')}>Sign Up</button>
                    </div>

                    <form className={`form ${activeForm === 'login' ? 'active' : ''}`} id="login-form">
                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>

                        <div className="remember-forgot">
                            <label className="remember">
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#" className="forgot">Forgot Password?</a>
                        </div>

                        <button type="submit" className="submit-btn">Login</button>

                        <div className="social-login">
                            <p>Or login with</p>
                            <div className="social-icons">
                                <div className="social-icon facebook">
                                    <FacebookIcon />
                                </div>
                                <div className="social-icon google">
                                    <GoogleIcon />
                                </div>
                                <div className="social-icon twitter">
                                    <TwitterIcon />
                                </div>
                            </div>
                        </div>
                    </form>

                    <form className={`form ${activeForm === 'signup' ? 'active' : ""}`} id="signup-form">
                        <div className="input-group">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Full Name" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email Address" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Confirm Password" required />
                        </div>

                        <button type="submit" className="submit-btn">Create Account</button>

                        <div className="social-login">
                            <p>Or sign up with</p>
                            <div className="social-icons">
                                <div className="social-icon facebook">
                                    <FacebookIcon />
                                </div>
                                <div className="social-icon google">
                                    <GoogleIcon />
                                </div>
                                <div className="social-icon twitter">
                                    <TwitterIcon />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginSign