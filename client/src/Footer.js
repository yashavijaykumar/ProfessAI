import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-icons">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} />
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} />
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faInstagram} />
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <div className="copywrite">
                &copy; Profess AI Incorporated. All rights reserved.
      </div>
        </footer>
    );
};

export default Footer;

