import React, { useEffect, useState } from "react";
import RightArrow from '../icons/RightArrow/RightArrow'
import "./HeroSection.css"

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNextSlide = () => {
    setCurrent((prev) => (prev === 0 ? 1 : 0));
  };

  useEffect(()=>{
    setInterval(handleNextSlide,5000)
  },[])

  return (
    <section className="hero-container">
      <div className='hero-background-container'>
        <div className='hero-background'></div>
      </div>
      <div className='hero-slider'>
        <div className='hero-slider-card' 
          style={{transform: `translateX(-${current * 100}%)`}}
        >
          <div className='hero-slide'>
            <div className='hero-content'>
              <div className='hero-content-gradients'>
                <div className='hero-content-gradients-1'></div>
                <div className='hero-content-gradients-2'></div>
                <div className='hero-content-gradients-3'></div>
              </div>
              <div className='hero-content-material-container'>
                <div className='hero-content-material'>
                  <div className="hero-text">
                    <div className='hero-text-section-1'>
                      <div className='hero-text-section-1-badge'>
                        <div className='hero-text-section-1-badge-icon'></div>
                        <span className='hero-text-section-1-badge-text'>Wellness Pros Available Now</span>
                      </div>
                      <div className='hero-text-section-1-heading'>
                        <h1>
                          Your Wellness Journey <br /> <span className="highlight">Starts Here</span>
                        </h1>
                        <div className='hero-text-section-1-heading-gradient'></div>
                      </div>
                      <p>
                        Connect with top professionals, book appointments instantly, and take charge of your personal care journey.
                      </p>
                    </div>
                    <a href="/signup" className='hero-text-section-2'>
                      <button className="hero-text-section-2-button">
                        Get Started Now
                        <RightArrow/>
                        <div className='hero-text-section-2-button-styles'></div>
                      </button>
                    </a>
                    <div className='hero-text-section-3'>
                      <div className='hero-text-section-3-feature'>
                        <span className='hero-text-section-3-feature-icon'>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          </svg>
                        </span>
                        <span className='hero-text-section-3-feature-text'>Verified Pros</span>
                      </div>
                      <div className='hero-text-section-3-feature'>
                        <span className='hero-text-section-3-feature-icon'>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          >
                              <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </span>
                        <span className='hero-text-section-3-feature-text'>24/7 Support</span>
                      </div>
                      <div className='hero-text-section-3-feature'>
                        <span className='hero-text-section-3-feature-icon'>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          >
                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                            <circle cx="12" cy="8" r="6"></circle>
                          </svg>
                        </span>
                        <span className='hero-text-section-3-feature-text'>Top Rated</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-img">
                    <div className='hero-img-layout'></div>
                    <div className='hero-img-container'>
                      <div className='hero-img-sub-container'>
                        <img src="https://www.openmypro.com/_next/image?url=%2Fassets%2Fimages%2FpatientHero.avif&w=640&q=75" alt="Doctor typing" />
                      </div>
                    </div>
                    <div className='hero-img-gradient-top'></div>
                    <div className='hero-img-gradient-bottom'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hero-slide'>
            <div className='hero-content'>
              <div className='hero-content-gradients'>
                <div className='hero-content-gradients-1'></div>
                <div className='hero-content-gradients-2'></div>
                <div className='hero-content-gradients-3'></div>
              </div>
              <div className='hero-content-material-container'>
                <div className='hero-content-material'>
                  <div className="hero-text">
                    <div className='hero-text-section-1'>
                      <div className='hero-text-section-1-badge'>
                        <div className='hero-text-section-1-badge-icon'></div>
                        <span className='hero-text-section-1-badge-text'>Join Our Network</span>
                      </div>
                      <div className='hero-text-section-1-heading'>
                        <h1>
                          Grow Your Business <br /> <span className="highlight">With Us</span>
                        </h1>
                        <div className='hero-text-section-1-heading-gradient'></div>
                      </div>
                      <p>
                        Join our platform to grow your business effortlessly. Reach more clients, streamline bookings and payments, and unlock exclusive member benefits — so you can focus on delivering exceptional service.
                      </p>
                    </div>
                    <a href="/signup" className='hero-text-section-2'>
                      <button className="hero-text-section-2-button" style={{marginTop: '0'}}>
                        Join as a Wellness Pro
                        <RightArrow/>
                        <div className='hero-text-section-2-button-styles'></div>
                      </button>
                    </a>
                    <div className='hero-text-section-2_5'>
                      <p>Already a member?</p>
                      <a href="/signin">
                        <button className='hero-text-section-2_5-button'>
                          Signin
                        </button>
                      </a>
                    </div>
                    <div className='hero-text-section-3'>
                      <div className='hero-text-section-3-feature'>
                        <span className='hero-text-section-3-feature-icon'>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </span>
                        <span className='hero-text-section-3-feature-text'>Wider Reach</span>
                      </div>
                      <div className='hero-text-section-3-feature'>
                        <span className='hero-text-section-3-feature-icon'>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          >
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                          </svg>
                        </span>
                        <span className='hero-text-section-3-feature-text'>Practice Growth</span>
                      </div>
                      <div className='hero-text-section-3-feature'>
                        <span className='hero-text-section-3-feature-icon'>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                          >
                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                          </svg>
                        </span>
                        <span className='hero-text-section-3-feature-text'>Higher Revenue</span>
                      </div>
                    </div>
                  </div>
                  <div className="hero-img">
                    <div className='hero-img-layout'></div>
                    <div className='hero-img-container'>
                      <div className='hero-img-sub-container'>
                        <img src="https://www.openmypro.com/_next/image?url=%2Fassets%2Fimages%2FdoctorHero.avif&w=640&q=75" alt="Surgens" />
                      </div>
                    </div>
                    <div className='hero-img-gradient-top'></div>
                    <div className='hero-img-gradient-bottom'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slider-footer">
          <button
            onClick={handleNextSlide} 
            className={`hero-slider-footer-navigation ${current === 1 ? '' : "current-hero-slider-footer-navigation"}`}
          >
          </button>
          <button
            onClick={handleNextSlide} 
            className={`hero-slider-footer-navigation ${current === 1 ? "current-hero-slider-footer-navigation" : ''}`}
          >
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
