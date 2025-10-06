import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Logo + About */}
        <div className="logo-section">
          <a href="https://www.blossend.com">
            <img
              alt="logo"
              loading="lazy"
              width="200"
              height="200"
              decoding="async"
              className="logo"
              src="https://www.openmypro.com/_next/image?url=%2Fassets%2Fimages%2FnewBlossendLogo.png&w=640&q=100"
            />
          </a>
          <div className="about">
            <p className="about-text">
              <a
                className="about-link"
                href="https://www.blossend.com/about"
              >
                About
              </a>
              : OpenMyPro app by Blossend is a teleservices platform offering streamlined, optimized, & automated Pro-to-Consumer real-time, 24/7 online scheduling ⎯ redefining how professionals & consumers connect to make their services more accessible & efficient. Our solution ensures a seamless, accurate, & personalized discovery & booking experience ⎯ enabling anyone to effortlessly find & book the right appointment in under 3 clicks & 33 seconds, worldwide. Powered by AI/ML precision, we address the urgent need for instant, intelligent teleservices access. We empower solo skilled pros & businesses with exposure, client acquisition, & streamlined operations ⎯ reducing customer leakage, no-shows, administrative overhead, & automating workflows, while solving everyday Pro-to-Consumer challenges & boosting their solo or large business centers. Consumers gain the fastest, simplest, most transparent, flexible, & customizable experience to connect with professionals ⎯ anytime, anywhere, & much more!
            </p>
          </div>
          <ul className="socials">
            <li>
              <a href="https://www.linkedin.com/company/blossend/">
                <svg 
                  style={{width:'40px', height: '40px', color: '#4a5565'}}
                  focusable="false" 
                  aria-hidden="true" 
                  viewBox="0 0 24 24" 
                  data-testid="WhatsAppIcon"
                >
                  <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/blossend/">
                <svg 
                  style={{width:'40px', height: '40px', color: '#4a5565'}}
                  focusable="false" 
                  aria-hidden="true" 
                  viewBox="0 0 24 24" 
                  data-testid="LinkedInIcon"
                >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/blossend.apps/">
                <svg 
                  style={{width:'40px', height: '40px', color: '#4a5565'}}
                  focusable="false" 
                  aria-hidden="true" 
                  viewBox="0 0 24 24" 
                  data-testid="InstagramIcon"
                >
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        {/* Download */}
        <div className="links">
          <h4 className="title">Download</h4>
          <ul className="downloads">
            <li>
              <a href="https://apps.apple.com/us/app/open-my-doctor-doctor-finder/id6737090324">
                <img
                  alt="appleStore"
                  loading="lazy"
                  width="200"
                  height="50"
                  decoding="async"
                  className="store-img"
                  src="https://www.openmypro.com/_next/image?url=%2Fassets%2Fimages%2Fappstore.png&w=640&q=100"
                />
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.blossend.omd">
                <img
                  alt="googlePlay"
                  loading="lazy"
                  width="200"
                  height="50"
                  decoding="async"
                  className="store-img"
                  src="https://www.openmypro.com/_next/image?url=%2Fassets%2Fimages%2Fgoogleplay.png&w=640&q=100"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="links">
          <h4 className="title">Useful Links</h4>
          <ul className="link-list">
            <li>
              <a className="link" href="https://www.blossend.com/contact">
                Help & Support
              </a>
            </li>
            <li>
              <a className="link" href="https://www.blossend.com/contact">
                Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="links">
          <h4 className="title">Contact</h4>
          <ul className="contact">
            <li>
              <div className="link">Blossend</div>
              <div className="link">Austin, TX</div>
            </li>
          </ul>
        </div>
      </div>

      <hr className="divider" />

      <div className="copyright">
        <p>
          Copyright © 2024{" "}
          <span className="inline-link">
            <a href="https://www.blossend.com">Blossend.</a>
          </span>{" "}
          All rights reserved.
        </p>
      </div>

      <div className="footer-section-links">
        <ul>
          <li>
            <a className="link" href="/Terms&Conditions">
              Terms of Service
            </a>
          </li>
          <div className="footer-section-separator"></div>
          <li>
            <a className="link" href="/privacy">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
    // <footer className="footer">
    //   <div className="footer-container">
    //     {/* About */}
    //     <div className="footer-col about">
    //       <div className="footer-logo">
    //         <img src="/logo.png" alt="Blossend" />
    //         <span>BLOSSEND</span>
    //       </div>
    //       <p className="footer-about">
    //         <strong>About:</strong> OpenMyPro app by Blossend is a teleservices platform
    //         offering streamlined, optimized, & automated Pro-to-Consumer scheduling — redefining
    //         how professionals & consumers connect. Our solution ensures a seamless, accurate,
    //         & personalized booking experience. Powered by AI/ML precision, we provide instant,
    //         intelligent teleservices access for solo professionals and enterprises.
    //       </p>
    //       <div className="footer-social">
    //         <a href="#"><img src="/icons/whatsapp.svg" alt="WhatsApp" /></a>
    //         <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
    //         <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
    //       </div>
    //     </div>

    //     {/* Download */}
    //     <div className="footer-col">
    //       <h4>Download</h4>
    //       <a href="#"><img src="/appstore.png" alt="App Store" className="store-badge" /></a>
    //       <a href="#"><img src="/googleplay.png" alt="Google Play" className="store-badge" /></a>
    //     </div>

    //     {/* Links */}
    //     <div className="footer-col">
    //       <h4>Useful Links</h4>
    //       <ul>
    //         <li><a href="#">Help & Support</a></li>
    //         <li><a href="#">Settings</a></li>
    //       </ul>
    //     </div>

    //     {/* Contact */}
    //     <div className="footer-col">
    //       <h4>Contact</h4>
    //       <p>Blossend</p>
    //       <p>Austin, TX</p>
    //     </div>
    //   </div>

    //   {/* Bottom Bar */}
    //   <div className="footer-bottom">
    //     <p>Copyright © 2024 <a href="#">Blossend</a>. All rights reserved.</p>
    //     <div className="footer-links">
    //       <a href="#">Terms of Service</a>
    //       <span>|</span>
    //       <a href="#">Privacy Policy</a>
    //     </div>
    //   </div>
    // </footer>
  );
}
