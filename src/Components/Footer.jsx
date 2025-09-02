import '../style/Footer.css';
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";

const Footer = ()=>{
    return(
    <div className='footer'>
      <h2>Contact Us</h2>
      <div className='contact'>
        <div className='contact-options'>
        <IoCall />
        <p>+251999999</p>
        </div>
        <div className='contact-options'>
        <MdOutlineEmail />
        <a href='#'>harmeacademy@gmail.com</a>
        
        </div>
        <div className='contact-options'>
        <FaLinkedinIn />
        <a href='www.linkedin.com'>Linked In</a>
        </div>
        <div className='contact-options'>
        <ImTelegram />
        <a href='https://t.me/@danitubew'>@harmeAcademy</a>
        </div>
      </div>
    </div>
    );
}
export default Footer;