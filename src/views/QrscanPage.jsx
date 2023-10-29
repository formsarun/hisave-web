import "../index.css";
import logo_hisave from "../assets/logo_hisave.png";
import mastercard from "../assets/mastercard.png";
import visa from "../assets/visa.png";
import rupay from "../assets/rupay.svg";
import amex from "../assets/amex.svg";
import discover from "../assets/discover.svg";
import {Link} from "react-router-dom"
import { useZxing } from "react-zxing";
import {useState} from "react";
// import { useMediaDevices } from "react-media-devices";

function QrscanPage() {
    const [result, setResult] = useState("");
    // const { devices } = useMediaDevices();
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });
    return (
        <>
            <div className="main-container">
                <div className="hisave-logo">
                    <img className="logo" src={logo_hisave}/>
                    <div className="savings">Savings Simplified</div>
                </div>
                <h1>Devices</h1>
                {/*<ul>*/}
                {/*    {devices?.map((device) => (*/}
                {/*        <li key={device.id}>{device.label}</li>*/}
                {/*    ))}*/}
                {/*</ul>*/}

                <div className="videoView">
                    <video style={{width:200, height:200}} ref={ref} />
                        <p>Last result:</p>
                        <div className="result">{result}</div>
                </div>

                <div className="footer-container">
                    <section className="footer">
                        <Link className="search-btn" to="/home">
                            <div  >
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

export default QrscanPage;