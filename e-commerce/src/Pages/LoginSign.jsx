import React, { useEffect, useState } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router";
import { FaShoppingBag, FaEnvelope, FaLock, FaUser, FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';


const LoginSign = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    const [activeForm, setActiveForm] = useState('login');
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userSignName, setUserSignName] = useState("");
    const [userSignEmail, setUserSignEmail] = useState("");
    const [userSignPass, setUserSignPass] = useState("");
    const [userSignCpass, setUserSignCpass] = useState("");

    const handleLogin = async () => {
        if (!userEmail || !userPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invlaid Value!",
            });
            return;
        }
        const getData = localStorage.getItem('newUser')
        if (!getData) {
            Swal.fire({
                icon: "error",
                title: "Sign Up Please",
                text: "No User Save",
            });
            return;
        }

        const parsedData = getData ? JSON.parse(getData) : null
        console.log(parsedData)

        if (parsedData.email === userEmail && parsedData.password === userPassword) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfull",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invlaid Value!",
            });
        }


        // try {
        //     const res = await fetch('https://dummyjson.com/auth/login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({
        //             username: userEmail,
        //             password: userPassword
        //         })
        //     });

        //     const data = await res.json();
        //     console.log('login response:', data); // yahan token aur user info milega
        //     if (data.accessToken) {
        //         localStorage.setItem('token', data.accessToken)
        //         alert("Log in successfully")
        //         navigate("/")
        //     }
        //     else {
        //         alert("Invalid credentials");
        //     }
        //     // e.g. localStorage.setItem('token', data.token);
        // } catch (err) {
        //     console.error('login error:', err);

        // };
        setUserEmail("")
        setUserPassword("")

    }

    const handleSign = async () => {

        if (!userSignName || !userSignEmail || !userSignPass || !userSignCpass) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invlaid Value!",
            });
            return;
        }
        if (userSignPass !== userSignCpass) {
            alert("Passwords do not match");
            Swal.fire({
                icon: "error",
                title: "Passwords do not match!",
            });
            setUserSignCpass("")
            return;
        }
        const userObj = {
            firstName: userSignName,
            email: userSignEmail,
            password: userSignPass
        }

        try {
            const res = await fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userObj)
            });
            const data = await res.json();
            console.log('sign up datq===>', data)
            localStorage.setItem('newUser', JSON.stringify(data))
            if (data.id) {
                alert("Account created!");
                navigate("/"); // ya "/login"
            }
        }
        catch (err) {
            console.error('login error:', err);
        }


        setUserSignName("");
        setUserSignEmail("");
        setUserSignPass("");
        setUserSignCpass("");
    }


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
                            <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Email Address" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} placeholder="Password" required />
                        </div>

                        <div className="remember-forgot">
                            <label className="remember">
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#" className="forgot">Forgot Password?</a>
                        </div>

                        <button type="button" className="submit-btn" onClick={handleLogin}>Login</button>

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
                            <input type="text" value={userSignName} onChange={(e) => setUserSignName(e.target.value)} placeholder="Full Name" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type="email" value={userSignEmail} onChange={(e) => setUserSignEmail(e.target.value)} placeholder="Email Address" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" value={userSignPass} onChange={(e) => setUserSignPass(e.target.value)} placeholder="Password" required />
                        </div>

                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" value={userSignCpass} onChange={(e) => setUserSignCpass(e.target.value)} placeholder="Confirm Password" required />
                        </div>

                        <button type="button" className="submit-btn" onClick={handleSign}>Create Account</button>

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