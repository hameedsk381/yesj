import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Description from "../components/Description";
import Highlights from "../components/Highlights";
import DonationBanner from "../components/DonationBanner";
import Footer from "../components/Footer";
import HeroBullets from "../components/HeroSection";
import AnimatedText from "../components/AnimatedText";
import Carouselslider from "../components/Carouselslider";
import About from "../components/About";
import NewsLetter from "../components/NewsLetter";
import Contact from "../components/Contact";
import {
  BackgroundImage,
  SimpleGrid,
  Text,
  ThemeIcon,
  rem,
} from "@mantine/core";
import {
  IconCircleDotted,
  IconFileCode,
  IconFlame,
  IconReceiptOff,
} from "@tabler/icons-react";
import HeroSection from "../components/HeroSection";
import ImpactMetrics from "../components/InputMetrics";
import ServicesOverview from "../components/ServicesOverview";
import DynamicProgrammes from "../components/DynamicProgrammes";
import DonorRecognition from "../components/DonorRecognition";
import TestimonialCarousel from "../components/TestimonialCarousel";
import GetInvolved from "../components/GetInvolved";
import SuccessStories from "../components/SuccessStories";
import ContactSection from "../components/ContactSection";
import Chatbot from "../components/Chatbot";
import VerticalScrollingAnnouncement from "../components/VerticalScrollingAnnouncement";
import { CardSpotlight } from "../components/card-spotlight";
import SplineBackground from "../components/SplineBackground";
// import CardsCarousel from '../components/Carousel'

const Homepage = () => {
  return (
    <div>
      {/* <HeroSection/> */}
      <div className="  h-screen  flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 h-2/6 md:h-full">
          <Carouselslider />
        </div>
        <div className="w-full md:w-1/4 h-4/6 md:h-full">
          <VerticalScrollingAnnouncement />
        </div>
      </div>
      {/* <About/> */}
      <div
        className="relative overflow-hidden min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute z-10 inset-0 w-full h-full">
          <SplineBackground className="spline-background" />
        </div>

        <div className="relative space-y-10">
          <ImpactMetrics />
          <ServicesOverview />
        </div>
      </div>
      {/* <marquee width="60%" direction="up" height="100px">
This is a sample scrolling text that has scrolls in the upper direction.
</marquee> */}

      {/* 
     <CardSpotlight>
     <ImpactMetrics/>
     <ServicesOverview/>
     </CardSpotlight> */}
      <DynamicProgrammes />
      <div
        style={{
          backgroundImage:
            "url('https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg')",
          backgroundSize: "cover",
        }}
      >
        <DonationBanner />

        <DonorRecognition />
      </div>

      {/* <Testimonials /> */}
      <TestimonialCarousel />
      <NewsLetter />
      <SuccessStories />

      {/* <Chatbot/> */}
      {/* <Carouselslider/> */}
    </div>
  );
};

Homepage.propTypes = {};

export default Homepage;
