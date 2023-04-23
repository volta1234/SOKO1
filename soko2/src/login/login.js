import React from "react";
import "../signup/signup.css"
import SellerLogin from "./userslogin";
import BuyerLogin from "./buyerslogin";

export default function Login() {
    return (
        <>
            <div class="form-body">
                <div class="row">
                    <div class="form-holder">
                        <div class="form-content">
                            <div class="form-items">
                                <h3>Login Here</h3>
                                <div class="requires-validation" novalidate>
                                    <SellerLogin/>
                                    <BuyerLogin/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}