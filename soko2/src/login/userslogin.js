import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "../signup/signup.css"
import { useNavigate } from "react-router-dom";

export default function SellerLogin() {
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);;
    const [successMessage, setSuccessMessage] = useState("");

    const [displayModal, setDisplayModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const showModal = () => setDisplayModal(true);
    const hideModal = () => setDisplayModal(false);

    const handleOutsideClick = (event) => {
        if (event.target.classList.contains('modal')) {
            hideModal();
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('users-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (data.token) {
            localStorage.setItem('jwt', data.token);
            navigate("/marketplace")
        } else {
            alert("Invalid Login Details")
        }


        setSuccessMessage("Seller Login successful!");
        setEmail("");
        setPassword("");
        setEmailValid(false);
        setPasswordValid(false);
        setIsChecked(false);

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }


    return (
        <>
            <button onClick={showModal} style={{ width: '80%' }}>
                Seller Login
            </button>

            {displayModal && (
                <div className="modal" onClick={handleOutsideClick}>
                    <i className="close" onClick={hideModal} title="Close Modal">
                        &times;
                    </i>

                    <form className="modal-content" onSubmit={handleSubmit} action="/action_page.php">
                        {successMessage && (
                            <div style={{ color: "green", marginBottom: "10px" }}>
                                {successMessage}
                            </div>
                        )}
                        <div className="container">
                            <h1>Login As Seller</h1>

                            <p>Enter your seller login details</p>

                            <hr />
                            {emailValid ? <FaCheck className={email !== '' && !emailValid ? '' : 'valid'} /> : <FaTimes className={email !== '' && !emailValid ? 'invalid' : ''} />}

                            <label htmlFor="email">
                                <b>Email</b>
                            </label>
                            <input
                                type="text"
                                value={email}
                                placeholder="Enter Email"
                                name="email"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailValid(validateEmail(e.target.value));
                                }}
                            />

                            {passwordValid ?
                                <FaCheck className={password !== '' && !passwordValid ? '' : 'valid'} /> : <FaTimes className={password !== '' && !passwordValid ? 'invalid' : ''} />}
                            <label htmlFor="psw">
                                <b>Password</b>
                            </label>
                            <input
                                type="password"
                                value={password}
                                placeholder="Enter Password"
                                name="psw"
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordValid(validatePassword(e.target.value));
                                }}
                            />

                            <p>
                                By creating an account you agree to our{' '}
                                <a href="#" style={{ color: 'dodgerblue' }}>
                                    Terms & Privacy
                                </a>
                                .
                            </p>

                            <div className="clearfix">
                                <button type="button" onClick={hideModal} className="cancelbtn">
                                    Cancel
                                </button>
                                <button type="submit" className="signupbtn">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
