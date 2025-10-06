import "./WellnessCategories.css"

export default function WellnessCategories() {
  const categories = [
    {
      icon: "🦴",
      title: "Spine/Bone",
      desc: "Orthopedic specialists for bone, joint, and spine care",
      count: "150+ Specialists",
      color: "red",
    },
    {
      icon: "🦷",
      title: "Oral",
      desc: "Dental and oral health professionals",
      count: "200+ Specialists",
      color: "blue",
    },
    {
      icon: "🩷",
      title: "Skin",
      desc: "Dermatology and skin care experts",
      count: "120+ Specialists",
      color: "pink",
    },
    {
      icon: "🌿",
      title: "Natural",
      desc: "Holistic and naturopathic medicine",
      count: "80+ Specialists",
      color: "green",
    },
    {
      icon: "🩺",
      title: "Internal",
      desc: "Internal medicine and primary care",
      count: "300+ Specialists",
      color: "purple",
    },
    {
      icon: "🧠",
      title: "Mental Health",
      desc: "Psychology and psychiatric care",
      count: "110+ Specialists",
      color: "yellow",
    },
    {
      icon: "👩",
      title: "Women’s Health",
      desc: "Specialized care for women's health needs",
      count: "85+ Specialists",
      color: "rose",
    },
    {
      icon: "❤️",
      title: "Cardiovascular",
      desc: "Heart and vascular system specialists",
      count: "95+ Specialists",
      color: "orange-shade",
    },
  ];

  return (
    <section className="wellness-category-section">
      <div className="wellness-category-section-bg-container">
        <div className="wellness-category-section-bg-1"></div>
        <div className="wellness-category-section-bg-2"></div>
        <div className="wellness-category-section-bg-3"></div>
      </div>
      <div className="wellness-category-section-content-container">
        <div className="wellness-category-section-content-header-text-center">
          <div className="wellness-category-section-content-header-badge">
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
              className="wellness-category-section-content-header-icon"
            >
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
            </svg>
            Wellness Categories
          </div>

          <h2 className="wellness-category-section-content-header-heading">
            Find a <span className="wellness-category-section-content-header-gradient-text">Wellness Pro</span> by specialty
          </h2>

          <p className="wellness-category-section-content-header-description">
            Connect with world-class specialists across health, wellness, and lifestyle services. Our curated network ensures you receive exceptional care from highly qualified professionals.
          </p>
        </div>
        <div className="wellness-category-section-content-subcontainer">
          <div className="wellness-category-section-content-grid">
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card wellness-category-section-content-card-span-2"
              style={{ animationDelay: "0s" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card"
              style={{ animationDelay: "0s" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card"
              style={{ animationDelay: "0s" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card"
              style={{ animationDelay: "0s", gridRow: "span 2 / span 2" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card"
              style={{ animationDelay: "0s" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card wellness-category-section-content-card-span-2"
              style={{ animationDelay: "0s" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card"
              style={{ animationDelay: "0s" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>            
            <a
              href="/search?specialization=chiropractic,hand%20surgery,orthopedic%20surgery,osteopathic%20manipulative%20medicine,physical%20medicine%20and%20rehabilitation,physical%20therapy,podiatry,sports%20medicine"
              className="wellness-category-section-content-card wellness-category-section-content-card-span-2"
              style={{ animationDelay: "0s" }}
            >
              <div className="wellness-category-section-content-card-hover-bg orange-shade"></div>
              <div className="wellness-category-section-content-card-body">
                <div className="wellness-category-section-content-card-icon orange-shade">
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
                    className="wellness-category-section-content-card-svg"
                  >
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                </div>
                <h3 className="wellness-category-section-content-card-title">Spine/Bone</h3>
                <p className="wellness-category-section-content-card-text">
                  Orthopedic specialists for bone, joint, and spine care
                </p>
                <div className="wellness-category-section-content-card-footer">
                  <div className="wellness-category-section-content-card-footer-left">
                    <div></div>
                    <span>150+ Specialists</span>
                  </div>
                  <div className="wellness-category-section-content-card-footer-right">
                    <span>View</span>
                    <svg className="wellness-category-section-content-card-footer-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="wellness-category-section-content-card-hover-overlay orange-shade"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
