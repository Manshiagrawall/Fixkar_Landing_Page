import React, { useRef, useState, useEffect } from "react";
import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { FaBroom, FaPaintRoller } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { MdMoveToInbox } from "react-icons/md";
import { FaTools, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollPosition(); // Check on mount
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", checkScrollPosition);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <section style={{ backgroundColor: "white" }}>
      <div className="container pb-14 pt-16 relative">
        <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
        <div className="flex items-center">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400 ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowLeft /> {/* Left Arrow Icon */}
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-4"
            style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
          >
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400 ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaArrowRight /> {/* Right Arrow Icon */}
          </button>
        </div>

        {/* User and Provider images displayed side by side */}
        <div className="flex justify-center items-center gap-8 pt-10">
          <img
            src={UserImage}
            alt="User Flow"
            style={{
              width: "100%",
              maxWidth: "600px", // Further increased width
              height: "auto", // Maintain aspect ratio
              objectFit: "cover",
              display: "block",
            }}
          />
          <img
            src={ProviderImage}
            alt="Provider Flow"
            style={{
              width: "100%",
              maxWidth: "600px", // Further increased width
              height: "auto", // Maintain aspect ratio
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
