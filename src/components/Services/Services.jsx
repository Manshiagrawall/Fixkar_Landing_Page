import React, { useRef, useEffect, useState } from "react";
import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { FaBroom, FaPaintRoller } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { MdMoveToInbox } from "react-icons/md";
import { FaTools } from "react-icons/fa"; // Import arrow icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Arrow icons for navigation
import UserImage from "../../assets/user.png"; // Import user image
import ProviderImage from "../../assets/provider.png"; // Import provider image

const ServicesData = [
  {
    id: 1,
    title: "Home Cleaning",
    link: "#",
    icon: <FaBroom />,
  },
  {
    id: 2,
    title: "Landscaping",
    link: "#",
    icon: <GiPlantWatering />,
  },
  {
    id: 3,
    title: "Plumbing",
    link: "#",
    icon: <GiPlunger />,
  },
  {
    id: 4,
    title: "Electrical",
    link: "#",
    icon: <MdElectricalServices />,
  },
  {
    id: 5,
    title: "Home Repairs",
    link: "#",
    icon: <GiHammerNails />,
  },
  {
    id: 6,
    title: "Painting",
    link: "#",
    icon: <FaPaintRoller />,
  },
  {
    id: 7,
    title: "Pest Control",
    link: "#",
    icon: <AiOutlineSafety />,
  },
  {
    id: 8,
    title: "Moving & Storage",
    link: "#",
    icon: <MdMoveToInbox />,
  },
  {
    id: 9,
    title: "Handyman Services",
    link: "#",
    icon: <FaTools />,
  },
];

const Services = () => {
  const scrollRef = useRef(null);
  
  const scrollAmount = 2; // Increased amount to scroll each time for faster effect
  const scrollSpeed = 20; // Decreased speed of the scrolling effect for faster transition

  // State to manage current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [UserImage, ProviderImage]; // Array of images

  const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth) {
            scrollRef.current.scrollLeft = 0; // Reset to the start
          }
        }
      }, scrollSpeed); // Change slides every defined interval

      return () => clearInterval(scrollInterval); // Cleanup on unmount
    
  }, []);

  return (
    <section style={{ backgroundColor: "white" }}>
      <div className="container pb-14 pt-16 relative">
        <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
        <div className="flex items-center">
          {/* Service Cards */}
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-4"
            style={{ whiteSpace: "nowrap" }}
          >
            {/* Duplicate the services for continuous scrolling */}
            {[...ServicesData, ...ServicesData].map((service) => (
              <div
                key={service.id}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
              </div>
            ))}
          </div>
        </div>

        {/* User and Provider images displayed horizontally */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-10 relative">
          {/* Left Arrow Button */}
          <button
            onClick={prevImage}
            className="absolute left-0 z-10 p-2 text-xl rounded-full bg-transparent hover:bg-gray-300 transition duration-200"
          >
            <FaArrowLeft /> {/* Left Arrow Icon */}
          </button>

          {/* Display only one image at a time with animation */}
          <div className="relative w-full max-w-[800px] h-[800px] transition-transform duration-500 ease-in-out">
            <img
              src={images[currentImageIndex]}
              alt="User Flow"
              className="absolute inset-0 w-full h-full object-contain"
              style={{ animation: 'fadeInAnimation .5s' }} // Animation for smooth transition
            />
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextImage}
            className="absolute right-0 z-10 p-2 text-xl rounded-full bg-transparent hover:bg-gray-300 transition duration-200"
          >
            <FaArrowRight /> {/* Right Arrow Icon */}
          </button>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes fadeInAnimation {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes moveAnimation {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-10px);
          }
        }

        .animate-move:hover {
          animation-name: moveAnimation;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
        }
      `}</style>
      
    </section>
  );
};

export default Services;