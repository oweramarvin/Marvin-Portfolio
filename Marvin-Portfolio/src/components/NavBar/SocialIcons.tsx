import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "React-icons/fa";
import "./SocialIcons.css";

function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaLinkedinIn />
      </a>
      <a href="#">
        <FaTiktok />
      </a>
    </div>
  );
}

export default SocialIcons;
