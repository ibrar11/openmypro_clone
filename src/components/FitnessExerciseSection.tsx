export default function FitnessExerciseSection() {
  const services = [
    {
      badge: "Featured Partner",
      icon: "🏋️",
      color: "purple",
      title: "Peak Performance Gym",
      desc: "State-of-the-art fitness center with expert trainers",
    },
    {
      badge: "Nutritionist",
      icon: "🍏",
      color: "green",
      title: "Vitality Nutrition",
      desc: "Personalized nutrition plans for optimal health",
    },
    {
      badge: "Sports Medicine",
      icon: "💜",
      color: "pink",
      title: "Champion Sports Medicine",
      desc: "Comprehensive sports injury care and rehab",
    },
    {
      badge: "Wellness Studio",
      icon: "🔥",
      color: "orange",
      title: "Flex Wellness Studio",
      desc: "Holistic wellness and fitness programs",
    },
  ];

  return (
    <section className="section">
      <div className="section-container">
        <div className="section-wrapper">
          <div className="section-subwrapper">
            <div className="header">
              <div className="icon">
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
                  style={{color: '#2563eb', width: '64px', height:'64px'}}
                >
                  <path d="M14.4 14.4 9.6 9.6"></path>
                  <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path>
                  <path d="m21.5 21.5-1.4-1.4"></path>
                  <path d="M3.9 3.9 2.5 2.5"></path>
                  <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path>
                </svg>
              </div>
              <h2 className="title">Fitness & Exercise: Nutrition Coaches, Personal Trainers, Gyms, Class & Exercise Instructors (Yoga, Pilates,..), Jujitsu, MMA, Boxing & Recreation:</h2>
              <p className="subtitle">
                Unlock your full potential with Blossend's exclusive network of fitness, sports medicine, and wellness experts. <br />
                <span className="highlight" style={{color: '#2563eb'}}>Book premium fitness services alongside your wellness appointments.</span>
              </p>
            </div>


            {/* Stats Row */}
            <div className="stats">
              <div className="feature-stats-wrapper">
                <div className="stat-item">
                  <div className="stat-number blue">30+</div>
                  <div className="stat-label">Featured Pros</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number green">100+</div>
                  <div className="stat-label">Wellness Experts</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number purple">15K+</div>
                  <div className="stat-label">Clients Served</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number orange">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Featured Card */}
            {/* <div className="feature-cards">
              <div className="card-container">
                <div className="card-background"></div>
                <div className="card">
                  <div className="card-content-container">
                    <div className="card-icon">
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
                        className="card-icon-styles"
                      >
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                        <path d="M10 6h4"></path><path d="M10 10h4"></path>
                        <path d="M10 14h4"></path><path d="M10 18h4"></path>
                      </svg>
                    </div>
                    <div className="card-badge">
                      <span className="card-badge-text">
                        Featured
                      </span>
                    </div>
                    <h3 className="card-title">Wellness Drips</h3>
                    <p className="card-text">Wellness Drips is Mexico’s premier IV therapy and longevity center, specializing in IV vitamin drips, anti-aging treatments, hydration therapy, detox solutions, and performance optimization. Our medical team blends advanced science with luxury wellness, creating customized IV therapies that boost energy, strengthen immunity, enhance recovery, and promote long-term vitality.Serving wellness travelers, executives, athletes, and local residents, we provide a premium health experience designed for those who value optimal performance, cellular rejuvenation, and holistic wellness. Whether you are seeking rapid recovery, enhanced focus, or cutting-edge longevity protocols, Wellness Drips delivers trusted, science-backed solutions in a modern, luxury environment.</p>
                  </div>
                  <div className="card-status-container">
                    <div className="card-status-wrapper">
                      <div className="card-status-pulse"></div>
                      <span className="card-status-title">Active Partner</span>
                    </div>
                    <div className="card-rightarrow-container">
                      <svg 
                        style={{width: '16px', height: '16px'}}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="card-status">
                    <span className="dot" /> Active Partner
                  </p>
                </div>
                <div className="card-background2"></div>
              </div>
              <div className="card-container">
                <div className="card-background"></div>
                <div className="card">
                  <div className="card-content-container">
                    <div className="card-icon">
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
                        className="card-icon-styles"
                      >
                        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                        <path d="M10 6h4"></path><path d="M10 10h4"></path>
                        <path d="M10 14h4"></path><path d="M10 18h4"></path>
                      </svg>
                    </div>
                    <div className="card-badge">
                      <span className="card-badge-text">
                        Featured
                      </span>
                    </div>
                    <h3 className="card-title">Wellness Drips</h3>
                    <p className="card-text">Wellness Drips is Mexico’s premier IV therapy and longevity center, specializing in IV vitamin drips, anti-aging treatments, hydration therapy, detox solutions, and performance optimization. Our medical team blends advanced science with luxury wellness, creating customized IV therapies that boost energy, strengthen immunity, enhance recovery, and promote long-term vitality.Serving wellness travelers, executives, athletes, and local residents, we provide a premium health experience designed for those who value optimal performance, cellular rejuvenation, and holistic wellness. Whether you are seeking rapid recovery, enhanced focus, or cutting-edge longevity protocols, Wellness Drips delivers trusted, science-backed solutions in a modern, luxury environment.</p>
                  </div>
                  <div className="card-status-container">
                    <div className="card-status-wrapper">
                      <div className="card-status-pulse"></div>
                      <span className="card-status-title">Active Partner</span>
                    </div>
                    <div className="card-rightarrow-container">
                      <svg 
                        style={{width: '16px', height: '16px'}}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="card-status">
                    <span className="dot" /> Active Partner
                  </p>
                </div>
                <div className="card-background2"></div>
              </div>
            </div> */}

            <div className="not-available-text">
              No TeamCare centers to display.
            </div>
            
            {/* CTA Button */}
            <div className="cta-wrap">
              <button className="cta-button variant-2">
                See All Fitness & Sports Medicine Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
