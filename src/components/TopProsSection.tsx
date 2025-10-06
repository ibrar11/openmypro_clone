import DoctorCardSlider from "./AvailableSection/AvailableSectionComponents/DoctorCardSlider";

export default function TopProsSection() {
  const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    location: "New York, NY",
    price: "$200",
    rating: 4.9,
    reviews: 120,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 3,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 4,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 5,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 6,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 7,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 8,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 9,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
  {
    id: 10,
    name: "Dr. Michael Lee",
    specialty: "Dermatologist",
    location: "Los Angeles, CA",
    price: "$180",
    rating: 4.8,
    reviews: 90,
    image: "https://firebasestorage.googleapis.com/v0/b/omd-blossend.appspot.com/o/users%2F4bIimvu9igbfIcC7pfgWSSpzpOS2%2Fa9e98c5e-ec7c-43cb-bb0a-b503581e598f-profile-photo.png?alt=media&token=d05e31cf-601a-469a-b631-db1becb2065a",
  },
];

  return (
    <section className="carousel-section">
      <div className="carousel-header">

        <div className="carousel-header">
          <h3 className="carousel-title"> 
            <span className="carousel-title-subtext">Top 10 Pros Recommended by Blossend: Most Popular & Highly Rated:</span>
            {/* <span className="carousel-title-icon-container">
              <svg 
                className="carousel-title-icon1" 
                focusable="false" 
                aria-hidden="true" 
                viewBox="0 0 24 24" 
                data-testid="FiberManualRecordIcon"
              >
                <circle cx="12" cy="12" r="8"></circle>
              </svg>
              <svg 
                className="carousel-title-icon2" 
                focusable="false" 
                aria-hidden="true" 
                viewBox="0 0 24 24" 
                data-testid="FiberManualRecordIcon"
              >
                <circle cx="12" cy="12" r="8"></circle>
              </svg>
            </span> */}
          </h3>
          <button className="carousel-header-button-variant">
            See all
          </button>
        </div>
        <div className="carousel-headerdivider"></div>
        <p className="available-subtitle">
          Verified top-performing professionals selected by Blossend&#39;s quality standards
        </p>
      </div>
      <DoctorCardSlider
        doctors={doctors}
      />
    </section>
  );
}
