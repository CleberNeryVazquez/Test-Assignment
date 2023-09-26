import './footer.css'
import encrip from '../../assets/encryption.svg'


function Footer() {
    return(
        <footer>
            <div className="footer">
                <div className="copy">
                    <p>Copyright © 2023 | Clarifionsupport@clarifion.com</p>
                </div>
                <div>
                <p> <img src={encrip} alt="icon encription" /> Secure 256-bit SSL encryption.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;