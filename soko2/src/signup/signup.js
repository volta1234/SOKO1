import React from "react";
import BuyerSignup from "./buyersignup";
import UserSignup from "./usersignup";
import "./signup.css"

export default function Signup() {
    return (
        <>
            <div class="form-body">
                <div class="row">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items">
                                <h3>Signup Today</h3>
                                <div class="requires-validation" novalidate>
                                    <UserSignup />
                                    <BuyerSignup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}