import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./DoctorCardSlider.css";
import Link from 'next/link';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
};

type Props = {
  doctors: Doctor[];
};

const DoctorCardSlider = ({ doctors }: Props) => {
  return (
    <div className="doctor-slider-wrapper">
      <Swiper 
        navigation={true}
        slidesPerView={5}
        spaceBetween={16}
        modules={[Navigation]}
      >
        {doctors.map((doc) => {
          return (
            <SwiperSlide key={doc.id}>
              <div className="doctor-card-wrapper">
                <div
                  className="doctor-card-bg"
                  style={{ backgroundImage: `url(${doc.image})` }}
                >
                  <div className="doctor-card-overlay" />
                  <Link href={''} className="doctor-card-content">
                    <div className="doctor-name-wrapper">
                      <p className="doctor-name">
                        <span>Alyssa</span> <span>Cappelletti</span>
                      </p>
                      <p className="doctor-specialty">chiropractic</p>
                      <p className="doctor-location">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="doctor-location-icon"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>AUSTIN, TX</span>
                      </p>
                    </div>

                    <div className="doctor-footer">
                      <div className="doctor-price">
                        <span>$0.00</span>
                        <span className="doctor-visit">/visit*</span>
                      </div>
                      <div className="doctor-rating">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="doctor-star"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <span>5.0</span>
                        <span>2</span>
                      </div>
                    </div>

                    <div className="doctor-button-wrapper">
                      <button className="doctor-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <span>Book Now</span>
                      </button>
                    </div>
                  </Link>
                  <div className="doctor-hover-bar"></div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default DoctorCardSlider;
