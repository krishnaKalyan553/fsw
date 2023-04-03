import React from 'react'
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import './Footer.css'

// function Footer() {
//   return (
//     <nav className="nav">
//       <h4 className="sm-header">Follow us on</h4>
//       <div className="line"></div>
//       <ul className="nav-list">
//         <li className="nav-item">
//           <a href="#" className="nav-link"><BsLinkedin /></a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link"><BsTwitter /></a>
//         </li>
//         <li className="nav-item">
//           <a href="#" className="nav-link"><BsInstagram /></a>
//         </li>
        
//       </ul>
//     </nav>
//   )
// }

// export default Footer


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Enter Text Here (Heading)
        </p>
        <p className='footer-subscription-text'>
          Enter Text Here (Regular)
        </p>
        
      </section>
      {/* <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div> */}
      <small class='website-rights'>VIVITSU © 2023</small>
      <section class='social-media'>
        
        <div class='social-media-wrap'>

          <h4 className="sm-header">Follow us on</h4>
          <div className="line"></div>
          
          <div class='social-icons'>
            <a href = "https://www.instagram.com/fsw_griet/" target="_blank" rel="noreferrer noopener">
              <BsInstagram className='social-icon-link-ig'/>
            </a>
            <a href = "https://www.linkedin.com" target="_blank" rel="noreferrer noopener">
              <BsLinkedin className='social-icon-link-lkdin'/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;