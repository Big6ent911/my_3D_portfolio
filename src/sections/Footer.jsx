import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {/* GitHub */}
        <div className="social-icon">
          <a href="https://github.com/bigsaint911" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github" className="w-8 h-8 object-cover" />
          </a>
        </div>

        {/* Twitter (X) */}
        <div className="social-icon">
          <a href="https://x.com/simplysaintjs" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.svg" alt="twitter" className="w-8 h-8 object-cover" />
          </a>
        </div>

        {/* Instagram */}
        <div className="social-icon">
          <a href="https://instagram.com/codebysaint.js" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.svg" alt="instagram" className="w-8 h-8 object-cover" />
          </a>
        </div>
        </div>

      <p className="text-white-500">© 2024 Daniel Saint. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
