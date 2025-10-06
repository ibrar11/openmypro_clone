import React from 'react'
import SparklesIcon from '../icons/SparklesIcon';

type Stat = {
  id: number,
  stateNumber: string,
  statLabel: string
}

type Card = {
  id: number
  icon: React.ReactElement
  badgeText: string
  headerTitle: string
  headerSubTitle: string
  statusText: string
}

type RatingSectionProps = {
  headerIcon: React.ReactElement
  title: string
  subTitle: string
  subTitleHighlight: string
  isNewPartnership: boolean
  announcementHeading: string
  announcementTitle: string
  announcementSubTitle: string
  statsArray: Stat[]
  cardsArray: Card[]
  buttonText: string
}

const RatingSection = (props: RatingSectionProps) => {

  const {
    headerIcon,
    title = '',
    subTitle = '',
    subTitleHighlight = '',
    isNewPartnership = false,
    announcementHeading = '',
    announcementTitle = '',
    announcementSubTitle = '',
    statsArray = [],
    cardsArray = [],
    buttonText = 'See All'
  } = props;

  return (
    <section className="section">
      <div className="section-container">
        <div className="section-wrapper">
          <div className="section-subwrapper">
            <div className="header">
              <div className="icon">
                {headerIcon}
              </div>
              <h2 className="title">{title}</h2>
              <p className="subtitle">
                {subTitle} <br />
                <span className="highlight" style={{color: '#059669'}}>{subTitleHighlight}</span>
              </p>
            </div>

            {/* New Partnership */}
            {isNewPartnership &&
              <div className="new-partnership">
                <div className="new-partnership-container">
                  <div className="new-partnership-wrapper">
                    <div className="new-partnership-badge">
                      <SparklesIcon
                        size="24"
                        color="#fff"
                      />
                      <span className="new-partnership-badge-title">{announcementHeading}</span>
                      <SparklesIcon
                        size="24"
                        color="#fff"
                      />
                    </div>
                    <h3 className="new-partnership-title">{announcementTitle}</h3>
                    <p className="new-partnership-badge-subtitle">{announcementSubTitle}</p>
                  </div>
                </div>
              </div>
            }

            {/* Stats Row */}
            {statsArray.length > 0 &&
              <div className="stats">
                <div className="feature-stats-wrapper">
                  {
                    statsArray.map(stat => {
                      return (
                        <div className="stat-item" key={stat.id}>
                          <div className="stat-number blue">{stat.stateNumber}</div>
                          <div className="stat-label">{stat.statLabel}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            }

            {/* Featured Card */}
            {cardsArray.length > 0 ?
              <div className="feature-cards">
                {cardsArray.map(card => {
                  return (
                    <div className="card-container" key={card.id}>
                      <div className="card-background"></div>
                      <div className="card">
                        <div className="card-content-container">
                          <div className="card-icon">
                            {card.icon}
                          </div>
                          <div className="card-badge">
                            <span className="card-badge-text">
                              {card.badgeText}
                            </span>
                          </div>
                          <h3 className="card-title">{card.headerTitle}</h3>
                          <p className="card-text">{card.headerSubTitle}</p>
                        </div>
                        <div className="card-status-container">
                          <div className="card-status-wrapper">
                            <div className="card-status-pulse"></div>
                            <span className="card-status-title">{card.statusText}</span>
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
                      </div>
                      <div className="card-background2"></div>
                    </div>
                  )
                })}
              </div>
              :
              <div className="not-available-text">
                No TeamCare centers to display.
              </div>
            }

            
            {/* CTA Button */}
            <div className="cta-wrap">
              <button className="cta-button variant-2">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingSection
