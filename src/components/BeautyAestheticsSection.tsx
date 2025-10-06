import RatingSection from "./Rating/RatingSection";

export default function BeautyAestheticsSection() {

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
  );
}
