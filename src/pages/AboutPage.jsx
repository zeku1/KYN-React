import React from "react";

import LayoutFull from "../components/layout/LayoutFull";

const AboutPage = () => {
  return (
    <LayoutFull>
      <section className="min-h-[20vh] w-full bg-cover bg-center relative flex justify-center px-6 after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-[#0000004d] after:to-[#00000033]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1688464912780-2248b65d2585?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-inter font-bold text-5xl text-slate-100 drop-shadow-lg text-center">
              About Us
              
            </h2>
            
          </div>
          
        </div>
      </section>
  
      <section className="flex justify-center items-center text-center -mb-10 px-5 py-10">
        
        <div className="container mx-auto">
         
            
            <div className="order-1 md:order-2 text-gray-600">
              <h3 className="text-3xl  text-orange-500 text-color1 mb-4">
                Our Mission
              </h3>
              <p className="mb-4 text-white-1000">
                Welcome to "Know Your Neighborhood"! We are a team of locals who are dedicated to helping people connect with and appreciate their neighborhoods. Every neighborhood has its own distinct character, which is why we have created a platform that embraces the uniqueness of the places we call home. From local businesses and events to community resources and updates, our aim is to be the ultimate destination for all things local.
              </p>
              <p className="mb-4">
                However, we go beyond being just an information hub. We strongly believe in the power of community interaction, which is why we offer features like discussion boards and user-generated content. Our goal is to make "Know Your Neighborhood" a space where neighbors can engage and forge connections. Whether you're new to the area or a long-time resident, we invite you to join us in celebrating the aspects that make our community extraordinary. Thank you for choosing "Know Your Neighborhood" as your trusted source for all things related to your locality.
              </p>
            </div>
          </div>
  
      </section>

          <section className="flex justify-center items-center text-center -mb-10 px-5 py-10">
                  
          <div className="container mx-auto">
          
              
              <div className="order-1 md:order-2 text-gray-600">
              <h3 className="text-3xl font text-orange-500 mb-4">
                Our Values
              </h3>
              <p className="mb-4">
              
                  The Know Your Neighborhood program embodies a commitment to fostering community awareness and connection. Rooted in our web application, this initiative aims to empower individuals with a deeper understanding of their localities. Through our platform, users gain access to comprehensive insights into the dynamics that shape their neighborhoods. Our program values transparency, enabling users to explore key metrics such as demographic composition, crime rates, educational resources, and local amenities.
              </p>
              <p className="mb-4">
              By promoting knowledge about their surroundings, we believe in equipping residents with the information needed to make informed decisions, engage in meaningful discussions, and collaborate on initiatives that enhance the quality of life in their communities. Know Your Neighborhood stands as a testament to the belief that informed citizens lay the foundation for vibrant and thriving neighborhoods.
              </p>
              </div>
            </div>

          </section>


    </LayoutFull>
  );
  
};

export default AboutPage;
