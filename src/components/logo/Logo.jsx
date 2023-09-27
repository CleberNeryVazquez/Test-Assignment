import logo from '../../assets/logo.jpg';
import mcafree from '../../assets/norton.svg';
import norton from '../../assets/mcafree.svg';
import './logo.css';

const Logo = () => {
    return(
        <div>
            <div className="logo-icons">
                <div className="logo">
                    <img src={logo} alt="logo clarifion" className="logo-img" />
                </div>
                <div className="icons">
                    <div className="item"><img src={mcafree} alt="logo mc afree" /></div>
                    <div className="item"><img src={norton} alt=" logo norton" /></div>
                </div>
            </div>
        </div>
    )
}
export default Logo;