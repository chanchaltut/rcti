import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StudentsCompanies from './components/StudentsCompanies.jsx';
import CourseOverview from './components/CourseOverview.jsx';
import FeaturedIn from './components/FeaturedIn.jsx';
import ToolsTechnologies from './components/ToolsTechnologies.jsx';
import FutureProspects from './components/FutureProspects.jsx';
import LearningMethodology from './components/LearningMethodology.jsx';
import PlacementSupport from './components/PlacementSupport.jsx';
import AlumniSection from './components/AlumniSection.jsx';
import StudentsTestimonials from './components/StudentsTestimonials.jsx';
import AwardsSection from './components/AwardsSection.jsx';
import DownloadBrochureSection from './components/DownloadBrochureSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <StudentsCompanies />
      <CourseOverview />
      <FeaturedIn />
      <ToolsTechnologies />
      <FutureProspects />
      <LearningMethodology />
      <PlacementSupport />
      <AlumniSection />
      <StudentsTestimonials />
      <AwardsSection />
      <DownloadBrochureSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
