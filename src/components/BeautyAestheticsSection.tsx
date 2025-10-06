import SparklesIcon from "./icons/SparklesIcon";
import RatingSection from "./Rating/RatingSection";

export default function BeautyAestheticsSection() {
  const services = [
    {
      badge: "Featured Partner",
      icon: "👑",
      color: "purple",
      title: "Escape Nail Bar",
      desc: "Premium beauty experience with expert stylists",
    },
    {
      badge: "Beauty Studio",
      icon: "🌿",
      color: "green",
      title: "Luxe Beauty Studio",
      desc: "Full-service beauty and wellness destination",
    },
    {
      badge: "Wellness Spa",
      icon: "💮",
      color: "pink",
      title: "Radiant Wellness Spa",
      desc: "Holistic beauty and relaxation treatments",
    },
    {
      badge: "Hair Salon",
      icon: "💇",
      color: "orange",
      title: "Elite Hair Collective",
      desc: "Cutting-edge hair styling and color services",
    },
  ];

  const stats = [
    {
      id:1,
      
    }
  ]

  const headerIcon = (
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
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
      <path d="M5 21h14"></path>
    </svg>
    )

  return (
    <RatingSection
      headerIcon = {headerIcon}
      title = {'Beauty & Aesthetics (Personal Care & Grooming): Nail Salons, Dental, Hair & Skin Care (Facials), Cosmetics:'}
      subTitle = {'Discover premium nail salons, cosmetics, hair care, and facial services through OpenMyPro\'s trusted beauty network.'}
      subTitleHighlight = {'Book beauty appointments instantly alongside your wellness services.'}
      isNewPartnership = {true}
      announcementHeading = {'NEW PARTNERSHIP ANNOUNCEMENT'}
      announcementTitle = {'Welcome Escape Nail Bar to Blossend!'}
      announcementSubTitle = {'We\'re thrilled to announce our partnership with Escape Nail Bar, bringing you premium beauty services integrated with your health and wellness journey.'}
      statsArray = {[]}
      cardsArray = {[]}
      buttonText = {'See All Beauty & Aesthetics Services'}
    />
    // <section className="section">
    //   <div className="section-container">
    //     <div className="section-wrapper">
    //       <div className="section-subwrapper">
    //         <div className="header">
    //           <div className="icon">
    //             <svg 
    //               xmlns="http://www.w3.org/2000/svg" 
    //               width="24" 
    //               height="24" 
    //               viewBox="0 0 24 24" 
    //               fill="none" 
    //               stroke="currentColor" 
    //               strokeWidth="2"
    //               strokeLinecap="round" 
    //               strokeLinejoin="round"
    //               style={{color: '#059669', width: '64px', height:'64px'}}
    //             >
    //               <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
    //               <path d="M5 21h14"></path>
    //             </svg>
    //           </div>
    //           <h2 className="title">Beauty & Aesthetics (Personal Care & Grooming): Nail Salons, Dental, Hair & Skin Care (Facials), Cosmetics:</h2>
    //           <p className="subtitle">
    //             Discover premium nail salons, cosmetics, hair care, and facial services through OpenMyPro's trusted beauty network. <br />
    //             <span className="highlight" style={{color: '#059669'}}>Book beauty appointments instantly alongside your wellness services.</span>
    //           </p>
    //         </div>

    //         {/* New Partnership */}

    //         <div className="new-partnership">
    //           <div className="new-partnership-container">
    //             <div className="new-partnership-wrapper">
    //               <div className="new-partnership-badge">
    //                 <SparklesIcon
    //                   size="24"
    //                   color="#fff"
    //                 />
    //                 <span className="new-partnership-badge-title">NEW PARTNERSHIP ANNOUNCEMENT</span>
    //                 <SparklesIcon
    //                   size="24"
    //                   color="#fff"
    //                 />
    //               </div>
    //               <h3 className="new-partnership-title">Welcome Escape Nail Bar to Blossend!</h3>
    //               <p className="new-partnership-badge-subtitle">We're thrilled to announce our partnership with Escape Nail Bar, bringing you premium beauty services integrated with your health and wellness journey.</p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Stats Row */}
    //         <div className="stats">
    //           <div className="feature-stats-wrapper">
    //             <div className="stat-item">
    //               <div className="stat-number blue">30+</div>
    //               <div className="stat-label">Featured Pros</div>
    //             </div>
    //             <div className="stat-item">
    //               <div className="stat-number green">100+</div>
    //               <div className="stat-label">Wellness Experts</div>
    //             </div>
    //             <div className="stat-item">
    //               <div className="stat-number purple">15K+</div>
    //               <div className="stat-label">Clients Served</div>
    //             </div>
    //             <div className="stat-item">
    //               <div className="stat-number orange">98%</div>
    //               <div className="stat-label">Satisfaction Rate</div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Featured Card */}
    //         <div className="feature-cards">
    //           {/* <div className="card-container">
    //             <div className="card-background"></div>
    //             <div className="card">
    //               <div className="card-content-container">
    //                 <div className="card-icon">
    //                   <svg 
    //                     xmlns="http://www.w3.org/2000/svg" 
    //                     width="24" 
    //                     height="24" 
    //                     viewBox="0 0 24 24" 
    //                     fill="none" 
    //                     stroke="currentColor" 
    //                     strokeWidth="2" 
    //                     strokeLinecap="round" 
    //                     strokeLinejoin="round" 
    //                     className="card-icon-styles"
    //                   >
    //                     <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
    //                     <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
    //                     <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
    //                     <path d="M10 6h4"></path><path d="M10 10h4"></path>
    //                     <path d="M10 14h4"></path><path d="M10 18h4"></path>
    //                   </svg>
    //                 </div>
    //                 <div className="card-badge">
    //                   <span className="card-badge-text">
    //                     Featured
    //                   </span>
    //                 </div>
    //                 <h3 className="card-title">Wellness Drips</h3>
    //                 <p className="card-text">Wellness Drips is Mexico’s premier IV therapy and longevity center, specializing in IV vitamin drips, anti-aging treatments, hydration therapy, detox solutions, and performance optimization. Our medical team blends advanced science with luxury wellness, creating customized IV therapies that boost energy, strengthen immunity, enhance recovery, and promote long-term vitality.Serving wellness travelers, executives, athletes, and local residents, we provide a premium health experience designed for those who value optimal performance, cellular rejuvenation, and holistic wellness. Whether you are seeking rapid recovery, enhanced focus, or cutting-edge longevity protocols, Wellness Drips delivers trusted, science-backed solutions in a modern, luxury environment.</p>
    //               </div>
    //               <div className="card-status-container">
    //                 <div className="card-status-wrapper">
    //                   <div className="card-status-pulse"></div>
    //                   <span className="card-status-title">Active Partner</span>
    //                 </div>
    //                 <div className="card-rightarrow-container">
    //                   <svg 
    //                     style={{width: '16px', height: '16px'}}
    //                     fill="none" 
    //                     stroke="currentColor" 
    //                     viewBox="0 0 24 24"
    //                   >
    //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    //                   </svg>
    //                 </div>
    //               </div>
    //               <p className="card-status">
    //                 <span className="dot" /> Active Partner
    //               </p>
    //             </div>
    //             <div className="card-background2"></div>
    //           </div> */}
    //           <div className="card-container">
    //             <div className="card-background"></div>
    //             <div className="card">
    //               <div className="card-content-container">
    //                 <div className="card-icon">
    //                   <svg 
    //                     xmlns="http://www.w3.org/2000/svg" 
    //                     width="24" 
    //                     height="24" 
    //                     viewBox="0 0 24 24" 
    //                     fill="none" 
    //                     stroke="currentColor" 
    //                     strokeWidth="2" 
    //                     strokeLinecap="round" 
    //                     strokeLinejoin="round" 
    //                     className="card-icon-styles"
    //                   >
    //                     <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
    //                     <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
    //                     <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
    //                     <path d="M10 6h4"></path><path d="M10 10h4"></path>
    //                     <path d="M10 14h4"></path><path d="M10 18h4"></path>
    //                   </svg>
    //                 </div>
    //                 <div className="card-badge">
    //                   <span className="card-badge-text">
    //                     Featured
    //                   </span>
    //                 </div>
    //                 <h3 className="card-title">Wellness Drips</h3>
    //                 <p className="card-text">Wellness Drips is Mexico’s premier IV therapy and longevity center, specializing in IV vitamin drips, anti-aging treatments, hydration therapy, detox solutions, and performance optimization. Our medical team blends advanced science with luxury wellness, creating customized IV therapies that boost energy, strengthen immunity, enhance recovery, and promote long-term vitality.Serving wellness travelers, executives, athletes, and local residents, we provide a premium health experience designed for those who value optimal performance, cellular rejuvenation, and holistic wellness. Whether you are seeking rapid recovery, enhanced focus, or cutting-edge longevity protocols, Wellness Drips delivers trusted, science-backed solutions in a modern, luxury environment.</p>
    //               </div>
    //               <div className="card-status-container">
    //                 <div className="card-status-wrapper">
    //                   <div className="card-status-pulse"></div>
    //                   <span className="card-status-title">Active Partner</span>
    //                 </div>
    //                 <div className="card-rightarrow-container">
    //                   <svg 
    //                     style={{width: '16px', height: '16px'}}
    //                     fill="none" 
    //                     stroke="currentColor" 
    //                     viewBox="0 0 24 24"
    //                   >
    //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    //                   </svg>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="card-background2"></div>
    //           </div>
    //         </div>

    //         {/* <div className="not-available-text">
    //           No TeamCare centers to display.
    //         </div> */}
            
    //         {/* CTA Button */}
    //         <div className="cta-wrap">
    //           <button className="cta-button variant-2">
    //             See All Beauty & Aesthetics Services
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
