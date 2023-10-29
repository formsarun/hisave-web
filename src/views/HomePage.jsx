import '../App.css';
import "../index.css";
import logo_hisave from "../assets/logo_hisave.png";
import profile_circle from "../assets/profile.svg";
import searchIcon from "../assets/search-normal.svg";
import offersIcon from "../assets/best_offer.svg";
import cafe92 from "../assets/cafe92.png";
import sortIcon from "../assets/sort.svg";
import {Link} from "react-router-dom";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import rupay from "../assets/rupay.svg";
import rupay_icon from "../assets/rupay_icon.svg";

function HomePage() {
    let bestOffers = [
        {
            id: 12,
            title: "Cafe coffee day",
            offerContent: "10% off on mastercards",
            offerDetails: [
                "Take advantage of this deal for instant savings",
                "Shop smart and receive a credit card discount on this offer",
                "Score this deal and save on your purchase"
            ],
            cardType: "master",
            image:"coffeeday.png"
        }, {
            id: 92,
            title: "Cafe 92",
            offerContent: "10% off on mastercards",
            offerDetails: [
                "Take advantage of this deal for instant savings",
                "Shop smart and receive a credit card discount on this offer",
                "Score this deal and save on your purchase"
            ],
            cardType: "visa",
            image:"cafe92.png"
        }, {
            id: 87,
            title: "Barista",
            offerContent: "10% off on mastercards",
            offerDetails: [
                "Take advantage of this deal for instant savings",
                "Shop smart and receive a credit card discount on this offer",
                "Score this deal and save on your purchase"
            ],
            cardType: "rupay",
            image:"barista"
        },
    ]


    return <>
    <div className="main-container">

        <div className="hm-logo-container">
        <Link to="/"><img className="hisave-logo-mini" src={logo_hisave} /></Link>
        <div className="profile-frame">
            <div className="Profile" >Profile</div>
            <img className="profile-img"  src={profile_circle} />

        </div>
        </div>
        <div className="search-section">
            <Link to={"/qr"}><img className="logo icon" src={searchIcon}/></Link>
            <input type="text" className="search-text" placeholder="Search Products in IIT Campus"></input>
            <img className="sort icon" src={sortIcon}/>
        </div>
        <div className="Best Offers!">
            <div className="best-offers-heading">
                <img className="best-offers-img" src={offersIcon} />
                <p>Best Offers</p>
            </div>
            <div className="best-offer-list">
                {
                    Array.from(
                    {length: 30},
                    (_, i) => (
                        <div className="off" key={i}>

                            <div className="ofr-card-type">
                                <img src={visa} />
                            </div>
                            <div className="offer-item">
                                    <div className="offer-image">
                                        <img className="ofr-img" src={cafe92}  />
                                    </div>
                                <div className="offer-content" style={{marginTop: 10}}>
                                    <div style={{color: '#263238', fontSize: 16, fontWeight: "bolder", fontFamily: "sans-serif" }}>Cafe coffee day</div>
                                    <div style={{fontSize:14, fontFamily: "sans-serif", fontWeight: 500}}>10% off on mastercards</div>
                                    <div className="more-offer" style={{fontSize: 12, fontFamily: "sans-serif", fontWeight: 300, display: "flex", flexDirection:"column", justifyContent:"start"}}>
                                        <div>• Take advantage of this deal for instant savings</div>
                                        <div>• Shop smart and receive a credit card discount on this offer</div>
                                    </div>
                                    <div className="additional-off">
                                        <img src={rupay_icon} />
                                        <div style={{fontSize:16, fontFamily: "sans-serif", fontWeight: 500}}>+2 more offers</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
                }




            </div>

        </div>

    </div>
    </>
}

export default HomePage