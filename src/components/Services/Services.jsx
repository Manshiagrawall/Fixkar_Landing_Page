// import React from "react";
// import { GiPlunger, GiMechanicGarage, GiHammerNails, GiPlantWatering } from "react-icons/gi";
// import { MdElectricalServices } from "react-icons/md";
// import { FaBroom } from "react-icons/fa";
// import { motion } from "framer-motion";

// const ServicesData = [
//   {
//     id: 1,
//     title: "Plumber",
//     link: "#",
//     icon: <GiPlunger />,
//     delay: 0.2,
//   },
//   {
//     id: 2,
//     title: "Electrician",
//     link: "#",
//     icon: <MdElectricalServices />,
//     delay: 0.3,
//   },
//   {
//     id: 3,
//     title: "Mechanic",
//     link: "#",
//     icon: <GiMechanicGarage />,
//     delay: 0.4,
//   },
//   {
//     id: 4,
//     title: "Carpenter",
//     link: "#",
//     icon: <GiHammerNails />,
//     delay: 0.5,
//   },
//   {
//     id: 5,
//     title: "Gardener",
//     link: "#",
//     icon: <GiPlantWatering />,
//     delay: 0.6,
//   },
//   {
//     id: 6,
//     title: "Cleaner",
//     link: "#",
//     icon: <FaBroom />,
//     delay: 0.7,
//   },
// ];

// const SlideLeft = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       x: 50,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// const Services = () => {
//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16">
//         <h1 className="text-4xl font-bold text-left pb-10">
//           Services we provide
//         </h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
//           {ServicesData.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={SlideLeft(service.delay)}
//               initial="initial"
//               whileInView={"animate"}
//               viewport={{ once: true }}
//               className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
//             >
//               {/* Increase icon size here */}
//               <div className="text-6xl mb-4"> {service.icon}</div>
//               <h1 className="text-lg font-semibold text-center px-3">
//                 {service.title}
//               </h1>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React from "react";
// import { GiPlunger, GiMechanicGarage, GiHammerNails, GiPlantWatering } from "react-icons/gi";
// import { MdElectricalServices } from "react-icons/md";
// import { FaBroom } from "react-icons/fa";
// import { motion } from "framer-motion";

// // Updated ServicesData array with new service names and icons
// const ServicesData = [
//   {
//     id: 1,
//     title: "Home Cleaning",
//     link: "#",
//     icon: <FaBroom />, // Icon for Home Cleaning
//     delay: 0.2,
//   },
//   {
//     id: 2,
//     title: "Gardening & Landscaping",
//     link: "#",
//     icon: <GiPlantWatering />, // Icon for Gardening & Landscaping
//     delay: 0.3,
//   },
//   {
//     id: 3,
//     title: "Plumbing",
//     link: "#",
//     icon: <GiPlunger />, // Icon for Plumbing
//     delay: 0.4,
//   },
//   {
//     id: 4,
//     title: "Electrical",
//     link: "#",
//     icon: <MdElectricalServices />, // Icon for Electrical
//     delay: 0.5,
//   },
//   {
//     id: 5,
//     title: "Home Repairs",
//     link: "#",
//     icon: <GiHammerNails />, // Icon for Home Repairs
//     delay: 0.6,
//   },
//   {
//     id: 6,
//     title: "Painting",
//     link: "#",
//     icon: <GiHammerNails />, // You can replace this with a relevant icon
//     delay: 0.7,
//   },
//   {
//     id: 7,
//     title: "Pest Control",
//     link: "#",
//     icon: <GiHammerNails />, // You can replace this with a relevant icon
//     delay: 0.8,
//   },
//   {
//     id: 8,
//     title: "Moving & Storage",
//     link: "#",
//     icon: <GiHammerNails />, // You can replace this with a relevant icon
//     delay: 0.9,
//   },
//   {
//     id: 9,
//     title: "Handyman Services",
//     link: "#",
//     icon: <GiHammerNails />, // You can replace this with a relevant icon
//     delay: 1.0,
//   },
// ];

// const SlideLeft = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       x: 50,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// const Services = () => {
//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16">
//         <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
//           {ServicesData.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={SlideLeft(service.delay)}
//               initial="initial"
//               whileInView={"animate"}
//               viewport={{ once: true }}
//               className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
//             >
//               {/* Increase icon size here */}
//               <div className="text-6xl mb-4">{service.icon}</div>
//               <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React, { useEffect, useRef, useState } from "react";
// import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
// import { MdElectricalServices } from "react-icons/md";
// import { FaBroom, FaPaintRoller } from "react-icons/fa";
// import { AiOutlineSafety } from "react-icons/ai"; // For Pest Control
// import { MdMoveToInbox } from "react-icons/md"; // For Moving & Storage
// import { FaTools } from "react-icons/fa"; // For Handyman Services
// import { motion } from "framer-motion";

// const ServicesData = [
//   {
//     id: 1,
//     title: "Home Cleaning",
//     link: "#",
//     icon: <FaBroom />, // Icon for Home Cleaning
//     delay: 0.2,
//   },
//   {
//     id: 2,
//     title: "Gardening & Landscaping",
//     link: "#",
//     icon: <GiPlantWatering />, // Icon for Gardening & Landscaping
//     delay: 0.3,
//   },
//   {
//     id: 3,
//     title: "Plumbing",
//     link: "#",
//     icon: <GiPlunger />, // Icon for Plumbing
//     delay: 0.4,
//   },
//   {
//     id: 4,
//     title: "Electrical",
//     link: "#",
//     icon: <MdElectricalServices />, // Icon for Electrical
//     delay: 0.5,
//   },
//   {
//     id: 5,
//     title: "Home Repairs",
//     link: "#",
//     icon: <GiHammerNails />, // Icon for Home Repairs
//     delay: 0.6,
//   },
//   {
//     id: 6,
//     title: "Painting",
//     link: "#",
//     icon: <FaPaintRoller />, // Icon for Painting
//     delay: 0.7,
//   },
//   {
//     id: 7,
//     title: "Pest Control",
//     link: "#",
//     icon: <AiOutlineSafety />, // Icon for Pest Control
//     delay: 0.8,
//   },
//   {
//     id: 8,
//     title: "Moving & Storage",
//     link: "#",
//     icon: <MdMoveToInbox />, // Icon for Moving & Storage
//     delay: 0.9,
//   },
//   {
//     id: 9,
//     title: "Handyman Services",
//     link: "#",
//     icon: <FaTools />, // Icon for Handyman Services
//     delay: 1.0,
//   },
// ];

// const SlideLeft = (delay) => {
//   return {
//     initial: {
//       opacity: 0,
//       x: 50,
//     },
//     animate: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         delay: delay,
//         ease: "easeInOut",
//       },
//     },
//   };
// };

// const Services = () => {
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const itemsToShow = 3; // Number of items to show at a time
//   const totalItems = ServicesData.length;

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
//       setScrollPosition((prev) => Math.max(prev - 1, 0));
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
//       setScrollPosition((prev) => Math.min(prev + 1, totalItems - itemsToShow));
//     }
//   };

//   // Automatic scrolling every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(scrollRight, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-white">
//       <div className="container pb-14 pt-16 relative">
//         <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
//         <div className="flex items-center">
//           <button
//             onClick={scrollLeft}
//             className={`absolute left-0 z-10 p-2 text-xl bg-gray-300 rounded-full hover:bg-gray-400 ${scrollPosition === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={scrollPosition === 0}
//           >
//             &lt;
//           </button>
//           <div
//             ref={scrollRef}
//             className="flex overflow-hidden gap-4"
//             style={{ scrollBehavior: "smooth" }}
//           >
//             {ServicesData.map((service) => (
//               <motion.div
//                 key={service.id}
//                 variants={SlideLeft(service.delay)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
//               >
//                 <div className="text-6xl mb-4">{service.icon}</div>
//                 <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
//               </motion.div>
//             ))}
//           </div>
//           <button
//             onClick={scrollRight}
//             className={`absolute right-0 z-10 p-2 text-xl bg-gray-300 rounded-full hover:bg-gray-400 ${scrollPosition >= totalItems - itemsToShow ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={scrollPosition >= totalItems - itemsToShow}
//           >
//             &gt;
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useEffect, useRef } from "react";
import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { FaBroom, FaPaintRoller } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai"; // For Pest Control
import { MdMoveToInbox } from "react-icons/md"; // For Moving & Storage
import { FaTools } from "react-icons/fa"; // For Handyman Services
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Home Cleaning",
    link: "#",
    icon: <FaBroom />, // Icon for Home Cleaning
  },
  {
    id: 2,
    title: "Landscaping",
    link: "#",
    icon: <GiPlantWatering />, // Icon for Gardening & Landscaping
  },
  {
    id: 3,
    title: "Plumbing",
    link: "#",
    icon: <GiPlunger />, // Icon for Plumbing
  },
  {
    id: 4,
    title: "Electrical",
    link: "#",
    icon: <MdElectricalServices />, // Icon for Electrical
  },
  {
    id: 5,
    title: "Home Repairs",
    link: "#",
    icon: <GiHammerNails />, // Icon for Home Repairs
  },
  {
    id: 6,
    title: "Painting",
    link: "#",
    icon: <FaPaintRoller />, // Icon for Painting
  },
  {
    id: 7,
    title: "Pest Control",
    link: "#",
    icon: <AiOutlineSafety />, // Icon for Pest Control
  },
  {
    id: 8,
    title: "Moving & Storage",
    link: "#",
    icon: <MdMoveToInbox />, // Icon for Moving & Storage
  },
  {
    id: 9,
    title: "Handyman Services",
    link: "#",
    icon: <FaTools />, // Icon for Handyman Services
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Automatic scrolling every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 2000); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, []);

  // Clone the first few items to enable circular scrolling
  const clonedData = [...ServicesData, ...ServicesData.slice(0, 3)];

  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16 relative">
        <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
        <div className="flex items-center">
          <button
            onClick={() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
              }
            }}
            className="absolute left-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400"
          >
            &lt;
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-4"
            style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
          >
            {clonedData.map((service, index) => (
              <motion.div
                key={index}
                variants={SlideLeft(0.1 * index)} // Use index for different delays
                initial="initial"
                whileInView={"animate"}
                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
              >
                <div className="text-6xl mb-4">{service.icon}</div>
                <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
              </motion.div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
