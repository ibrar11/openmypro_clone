'use client'
import AddProSection from "@/components/AddProSection/AddProSection";
import AlternativeProsSection from "@/components/AlternativeProsSection";
import AvailableNow from "@/components/AvailableSection/Available";
import BeautyAestheticsSection from "@/components/BeautyAestheticsSection";
import EliteSection from "@/components/EliteSection/EliteSection";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import FilterDrawer from "@/components/FilterDrawer/FilterDrawer";
import FitnessExerciseSection from "@/components/FitnessExerciseSection";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import MedicalClinicalSection from "@/components/MedicalClinicalSection";
import Navbar from "@/components/NavBar/Navbar";
import NewToBlossendSection from "@/components/NewToBlossendSection";
import PhysicalHealthSection from "@/components/PhysicalHealthSection";
import TopProsSection from "@/components/TopProsSection";
import WellnessCategories from "@/components/WellnessCategories/WellnessCategories";
import WellnessHero from "@/components/WellnessHero";
import { useState } from "react";

export default function Home() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <div className="wrapper">
      {/* Navbar */}
      <Navbar
        handleDrawer = {handleDrawer}
      />
      <FilterDrawer
        open = {openDrawer}
        onClose = {handleDrawer}
      />

      {/* Hero Section */}
      <HeroSection/>
      <div className="elite-section-wapper">
        <div className="doc-sections-container">
          <EliteSection/>
          <AvailableNow/>
          <FeaturedSection/>
          <WellnessHero/>
          <PhysicalHealthSection/>
          <FitnessExerciseSection/>
          <BeautyAestheticsSection/>
          <MedicalClinicalSection/>
          <NewToBlossendSection/>
          <TopProsSection/>
          <AlternativeProsSection/>
        </div>
      </div>
      <AddProSection/>
      <WellnessCategories/>
      <Footer/>
    </div>
  );
}
