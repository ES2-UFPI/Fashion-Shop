import './styles.css';

import { Facebook, Instagram, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>Fashion-Shop</span>

        <div className="footer-icons">
          <Facebook fontSize='large' />
          <Instagram fontSize='large' />
          <Twitter fontSize='large' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
