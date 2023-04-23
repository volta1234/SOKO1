import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import "./signup.css"
import { useNavigate } from "react-router-dom";

export default function BuyerSignup() {
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [repeatPasswordValid, setRepeatPasswordValid] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const [displayModal, setDisplayModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const validateRepeatPassword = (repeatPassword) => {
        return repeatPassword === password;
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
    const response = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/login"); // Redirect to the dashboard page
    } else {
      alert("email already taken")
    }

        if (password !== repeatPassword) {
            alert('Passwords do not match!');
            return
        }
        console.log('Form submitted');

        setSuccessMessage("Form submitted successfully!");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setEmailValid(false);
        setPasswordValid(false);
        setRepeatPasswordValid(false);
        setIsChecked(false);

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }


    return (
        <>
            <button onClick={showModal} style={{ width: '80%' }}>
                Seller Signup
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
                            <h1>Sign Up As Seller</h1>

                            <p>Please fill in this form to create a buyer account.</p>

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

                            {repeatPasswordValid ? <FaCheck className={repeatPassword !== '' && !repeatPasswordValid ? '' : 'valid'} /> : <FaTimes className={repeatPassword !== '' && !repeatPasswordValid ? 'invalid' : ''} />}
                            <label htmlFor="psw-repeat">
                                <b>Repeat Password</b>
                            </label>
                            <input
                                type="password"
                                value={repeatPassword}
                                placeholder="Repeat Password"
                                name="psw-repeat"
                                required
                                onChange={(e) => {
                                    setRepeatPassword(e.target.value);
                                    setRepeatPasswordValid(validateRepeatPassword(e.target.value));
                                }}
                            />

                            <label>
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                    name="remember"
                                    style={{ marginBottom: '15px' }}
                                />
                                Remember me
                            </label>

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
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
