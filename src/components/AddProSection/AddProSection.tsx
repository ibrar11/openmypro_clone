import "./AddProSection.css"

export default function AddProSection() {
  return (
    <section className="add-pro-section">
      <div className="add-pro-container">
        <div className="add-pro-container-backgrounds">
          <div className="add-pro-background-1"></div>
          <div className="add-pro-background-2"></div>
          <div className="add-pro-background-3"></div>
        </div>

        <div className="add-pro-content-container">
          <div className="add-pro-content-wrapper">
            <div className="add-pro-left">
              <div className="add-pro-left-header">
                <div className="add-pro-left-header-badge">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    style={{width: '16px', height: '16px', marginRight: '8px'}}
                  >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                  </svg>
                  Expand Our Network
                </div>
                <h2 className="add-pro-left-header-title">
                  Can't find your
                  <span className="add-pro-left-header-title-highlight"> Pro or Wellness Center</span>
                  in our directory?
                </h2>
                <p className="add-pro-left-header-subtitle">Help us grow our network by adding your trusted professional. We'll verify their credentials and make them available to our community.</p>
              </div>
              <div className="add-pro-left-list">
                <div className="add-pro-left-list-item">
                  <div className="add-pro-left-list-item-dot"></div>
                  <span className="add-pro-left-list-item-text">Quick verification process</span>
                </div>
                <div className="add-pro-left-list-item">
                  <div className="add-pro-left-list-item-dot"></div>
                  <span className="add-pro-left-list-item-text">Credential verification included</span>
                </div>
                <div className="add-pro-left-list-item">
                  <div className="add-pro-left-list-item-dot"></div>
                  <span className="add-pro-left-list-item-text">Available to community within 48 hours</span>
                </div>
              </div>
              <div className="add-pro-left-button-container">
                <a href="/add-my-doctor" type="button" className="add-pro-left-button-wrapper">
                  <button className="add-pro-left-button">
                    <span className="add-pro-left-button-content">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          marginRight: "0.5rem",  
                          transition: "transform 300ms ease",
                        }}
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                      </svg>
                      Add my Pro or Wellness Center
                    </span>
                    <div className="add-pro-left-button-gradient"></div>
                  </button>
                </a>
              </div>
              <div className="add-pro-left-reviewbar">
                <div className="add-pro-left-reviewbar-item">
                  <div className="add-pro-left-reviewbar-title">500+</div>
                  <div className="add-pro-left-button-reviewbar-subtitle">Pros Added</div>
                </div>
                <div className="add-pro-left-reviewbar-item">
                  <div className="add-pro-left-reviewbar-title">24h</div>
                  <div className="add-pro-left-button-reviewbar-subtitle">Avg. Approval</div>
                </div>
                <div className="add-pro-left-reviewbar-item">
                  <div className="add-pro-left-reviewbar-title">99%</div>
                  <div className="add-pro-left-button-reviewbar-subtitle">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="add-pro-right">
              <div className="add-pro-right-container">
                <div className="add-pro-right-searchbar-container">
                  <div className="add-pro-right-searchbar">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      style={{width:'16px', height:'16px'}}
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <span style={{fontSize: '14px',fontWeight: '500'}}>
                      Searching...
                    </span>
                  </div>
                </div>
                <div className="add-pro-right-addbutton-container">
                  <a type="button" href="/add-my-doctor" className="add-pro-right-addbutton">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      style={{width: '24px', height: '24px', color: '#fff'}}
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </a>
                </div>
                <div className="add-pro-right-wellness-container">
                  <div className="add-pro-right-wellness-gradient"></div>
                  <div className="add-pro-right-wellness-wrapper">
                    <div className="add-pro-right-wellness-background">
                      <div className="add-pro-right-wellness-background-content"></div>
                    </div>
                    <div className="add-pro-right-wellness-content-wrapper">
                      <div className="add-pro-right-wellness-wrapper-bg-container">
                        <div className="add-pro-right-wellness-wrapper-bg"></div>
                        <div className="add-pro-right-wellness-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            style={{width: '48px', height: '48px', color: '#99a1af'}}
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                        </div>
                        <a href="/add-my-doctor" type="button" className="add-pro-right-wellness-icon-button">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            style={{width: '20px', height: '20px', color: '#fff'}} 
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                        </a>
                      </div>
                      <div className="add-pro-right-wellness-wrapper-content">
                        <h3 className="add-pro-right-wellness-wrapper-content-title">
                          Pro or Wellness Center Not Found?
                        </h3>
                        <p className="add-pro-right-wellness-wrapper-content-subtitle">
                          Can't find your professional? Help us grow our network by adding your trusted health, wellness, or lifestyle professional.
                        </p>
                      </div>
                      <a type="button" href="/add-my-doctor" className="add-pro-right-wellness-wrapper-content-button">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="24" 
                          height="24" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor"
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          style={{width: '16px', height: '16px'}}
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <line x1="19" x2="19" y1="8" y2="14"></line>
                          <line x1="22" x2="16" y1="11" y2="11"></line>
                        </svg>
                        Click to add Pro or Wellness Center
                      </a>
                    </div>
                    <div className="bounce-container">
                      <div className="inner-dot"></div>
                    </div>
                    <div className="circle-bounce circle-bounce-blue" style={{ animationDelay: "0.5s" }}>
                      <div className="circle-dot circle-dot-blue"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
