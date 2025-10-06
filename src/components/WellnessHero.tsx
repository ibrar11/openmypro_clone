import SparklesIcon from "./icons/SparklesIcon";

export default function WellnessAndHolistic() {
  const services = [
    {
      badge: "Meditation",
      icon: "✦",
      color: "purple",
      title: "Lotus Healing Center",
      desc: "Mindfulness, meditation, and holistic therapies for body and soul",
    },
    {
      badge: "Yoga",
      icon: "🌿",
      color: "green",
      title: "Soul Balance Studio",
      desc: "Yoga, breathwork, and energy balancing for holistic wellness",
    },
    {
      badge: "Spiritual",
      icon: "✨",
      color: "pink",
      title: "Radiant Spirit Wellness",
      desc: "Spiritual guidance, reiki, and alternative therapies",
    },
    {
      badge: "Mind-Body",
      icon: "❤️",
      color: "orange",
      title: "Harmony Mind & Body",
      desc: "Integrative mind-body practices for total wellbeing",
    },
    {
      badge: "Holistic",
      icon: "💙",
      color: "blue",
      title: "Holistic Horizons",
      desc: "Best practices for holistic wellness",
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
                    style={{color: '#059669', width: '64px', height:'64px'}}
                  >
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </svg>
                </div>
                <h2 className="title">Mind & Body Wellness: IVs, Therapists & Mental Health Specialists, Holistic, Alternative & Spiritual Experts</h2>
                <p className="subtitle">
                  Experience transformative healing and balance with Blossend's curated network of holistic and spiritual wellness experts. <br />
                  <span className="highlight">Book holistic therapies, meditation, and spiritual guidance for mind and body wellness.</span>
                </p>
              </div>
  
  
              {/* Stats Row */}
              <div className="stats">
                <div className="feature-stats-wrapper">
                  <div className="stat-item">
                    <div className="stat-number blue">4+</div>
                    <div className="stat-label">Holistic Partners</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number green">30+</div>
                    <div className="stat-label">Practitioners</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number purple">800+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number orange">98%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                </div>
              </div>
  
              {/* Featured Card */}
              <div className="feature-cards">
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
              </div>
              
              {/* CTA Button */}
              <div className="cta-wrap">
                <button className="cta-button variant-1">
                  See All Holistic & Spiritual Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
