import "../index.css";
import logo_hisave from "../assets/logo_hisave.png";
import searchIcon from "../assets/search-normal.svg";
import sortIcon from "../assets/sort.svg";
import globe from "../assets/globe.svg";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import rupay from "../assets/rupay.svg";
import amex from "../assets/amex.svg";
import discover from "../assets/discover.svg";
import trending from "../assets/trending.svg";
import {Link} from "react-router-dom"

function SearchPage() {
    let trendingItems = ["Coffee Offers", "Cafe Coffee Day"]

    return (
        <>
            <div className="main-container">
                <div className="hisave-logo">
                    <img className="logo" src={logo_hisave}/>
                    <div className="savings">Savings Simplified</div>
                </div>
                <div className="search-section">
                    <Link style={{display: "flex"}} to={"/qr"}><img className="logo icon" src={searchIcon}/></Link>
                    <input type="text" className="search-text" placeholder="Search Products in IIT Campus"></input>
                    <img className="sort icon" src={sortIcon}/>
                </div>
                <div className="discover">
                    Discover offers from 100+ loyalty engines
                </div>

                <div className="card-section">
                    <div className="globe-backdrop">
                        <img src={globe}/>

                    </div>
                    <div className="cards">
                        <img src={mastercard}/>
                        <img src={visa}/>
                        <img src={rupay}/>
                    </div>
                </div>
                <p className="tr-title">Trending Searches</p>

                <section className="trending-sec">
                    {trendingItems.map((value) => {
                        return (
                            <>
                                <div className="trending-item">
                                    <img className="icon" src={trending}/>
                                    <div>{value}</div>
                                </div>
                            </>
                        )
                    })}

                </section>

                <div className="footer-container">
                    <section className="footer">
                        <Link className="search-btn" to="/home">
                        <div>
                            <p>Search</p>
                        </div>
                        </Link>
                        <p className="gr-tee">Guaranteed Safe & Secure Payment brought to you by</p>

                        <div className="cards">
                            <img src={mastercard}/>
                            <img src={visa}/>
                            <img src={amex}/>
                            <img src={discover}/>
                            <img src={rupay}/>
                        </div>
                    </section>
                </div>
            </div>

        </>
    );

}

export default SearchPage;