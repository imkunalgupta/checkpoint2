import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import './FooterStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>Nalanda, Bihar </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              +91-8426876929
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              mailto.guptakunal@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a B.TECH (EE) graduate skilled in Html, Css, Javascript,
            ReactJS, NodeJS, Express.js, MongoDB, Git and Github. I'm a strong
            team player who is able to quickly learn and apply new technologies.
          </p>
          <div className="social">
            <Link to="https://www.linkedin.com/in/kunal-gupta-57264b265">
              <FaLinkedin
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </Link>
            <Link to="https://github.com/imkunalgupta">
              <FaGithub
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </Link>
            <Link to="https://www.facebook.com/kunalraj1992">
              <FaFacebook
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </Link>
            <Link to="https://twitter.com/kunalank05">
              <FaTwitter
                size={30}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
