import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 MyWebsite</p>
        <div className="social-icons">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
