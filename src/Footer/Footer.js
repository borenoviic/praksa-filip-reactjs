import logo from '../photos/logo.png'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer1">
                <div className="info-glavni">
                    <div className="infoo">
                        <p className="fa-map-pin">Klauprechtstraße 25 <br /> 76137 Karlsruhe, Germany</p>
                        <p className="fa-phone">+49 721 358060</p>
                        <p className="fa-envelope">info@partyservice-brath.de</p>
                    </div>
                </div>

                <div className="logo">
                    <img src={logo} className="logo-img" alt="img" />
                </div>
                <div className="social-media">
                    <p>Besuchen Sie uns auf:</p>
                    <div className="icons">
                        <div className="tw">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="fb">
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div className="ig">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div className="yt">
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="last-container">
                <div className="last1">
                    <div className="lastt">
                        <div className="frst">
                            <p className="first">© 2020 by Metzgerei Heiko Brath GmbH, Deutschland</p>
                        </div>
                        <div className="scnd">
                            <p className="second">Code and design by
                                <a className="sec" href="https://www.studiopresent.rs/">StudioPresent</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;