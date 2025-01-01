import React from "react";
import "./PricingCardStyle.css"
import { Link } from "react-router-dom";

const PricingCard = () => {
    return (
        <>
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">5000 INR</p>
                    <p>- 3 Days -</p>
                    <p>- 8 Pages -</p>

                    <p>-Featured-</p>
                    <p>-Responsive Design-</p>
                    <Link to="/contact" className="btn">
                    PURCHASE NOW
                    </Link>
                </div>

                <div className="card">
                    <h3>- Premium -</h3>
                    <span className="bar"></span>
                    <p className="btc">10000 INR</p>
                    <p>- 2 Days -</p>
                    <p>- 10 Days -</p>

                    <p>-Featured-</p>
                    <p>-Responsive Design-</p>
                    <Link to="/contact" className="btn">
                    PURCHASE NOW
                    </Link>
                </div>

                <div className="card">
                    <h3>- Buisness -</h3>
                    <span className="bar"></span>
                    <p className="btc">15000 INR</p>
                    <p>- 1 Days -</p>
                    <p>- 12 Days -</p>

                    <p>-Featured-</p>
                    <p>-Responsive Design-</p>
                    <Link to="/contact" className="btn">
                    PURCHASE NOW
                    </Link>
                </div>

            </div>
        </div>
        </>
    )

}
export default PricingCard