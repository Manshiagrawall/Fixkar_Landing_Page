// import React from "react";
// import BannerPng from "../../assets/services.png"; // Ensure this image has a background if needed
// import { GrUserExpert } from "react-icons/gr";
// import { MdOutlineAccessTime } from "react-icons/md";
// import { FaBookReader } from "react-icons/fa"; // Consider changing this icon for relevance
// import { FadeUp } from "../Hero/Hero";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <section>
//       <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
//         {/* Banner Image */}
//         <div className="flex justify-center items-center">
//           <div className="relative w-full h-[500px]"> {/* Container for height */}
//             <motion.img
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               src={BannerPng}
//               alt="Services Banner"
//               className="absolute inset-0 w-[600px] md:w-[500px] h-full object-contain" // Adjusted width here
//               style={{ opacity: 0.7 }} // Set opacity to 0.7 (adjust as needed)
//             />
//           </div>
//         </div>
//         {/* Banner Text */}
//         <div className="flex flex-col justify-center">
//           <div className="text-center md:text-left space-y-12">
//             <motion.h1
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="text-3xl md:text-4xl font-bold !leading-snug"
//             >
//               Your One-Stop Marketplace for Reliable Services
//             </motion.h1>
//             <div className="flex flex-col gap-6">
//               <motion.div
//                 variants={FadeUp(0.2)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <FaBookReader className="text-2xl" />
//                 <p className="text-lg">User-Friendly Interface</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.4)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <GrUserExpert className="text-2xl" />
//                 <p className="text-lg">Multi-Language Support</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.6)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <MdOutlineAccessTime className="text-2xl" />
//                 <p className="text-lg">Voice and Text Search</p>
//               </motion.div>
//               <motion.div
//                 variants={FadeUp(0.8)}
//                 initial="initial"
//                 whileInView={"animate"}
//                 viewport={{ once: true }}
//                 className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
//               >
//                 <GrUserExpert className="text-2xl" />
//                 <p className="text-lg">Personalized Recommendations</p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

import React, { useState } from "react";
import BannerPng from "../../assets/services.png"; // Ensure this image has a background if needed
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa"; // Consider changing this icon for relevance
import { FadeUp } from "../Hero/Hero"; // Make sure the FadeUp function is defined
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Icons for accordion

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full h-[500px]">
            {/* Container for height */}
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              src={BannerPng}
              alt="Services Banner"
              className="absolute inset-0 w-[600px] md:w-[500px] h-full object-contain" // Adjusted width here
              style={{ opacity: 0.7 }} // Set opacity to 0.7 (adjust as needed)
            />
          </div>
        </div>

        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Your One-Stop Marketplace for Reliable Services
            </motion.h1>

            {/* Accordion Feature List */}
            <div className="flex flex-col gap-6">
              <AccordionItem
                index={0}
                title="User-Friendly Interface"
                content="Our platform provides an intuitive and simple interface, ensuring ease of use for everyone. Navigation is smooth, and features are accessible with minimal effort, making the process of finding and requesting services hassle-free."
                icon={<FaBookReader className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />

              <AccordionItem
                index={1}
                title="Multi-Language Support"
                content="We support multiple languages to make the platform accessible to a wider audience. Whether you prefer English, Spanish, or any other language, you can interact with the app in your preferred language."
                icon={<GrUserExpert className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />

              <AccordionItem
                index={2}
                title="Voice and Text Search"
                content="Our innovative search functionality allows you to find services using both voice and text. You can simply speak the service you are looking for or type it into the search bar, and our system will handle the rest."
                icon={<MdOutlineAccessTime className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />

              <AccordionItem
                index={3}
                title="Personalized Recommendations"
                content="Based on your previous interactions and preferences, we offer personalized service recommendations tailored specifically to your needs. Our algorithm ensures that you get the most relevant and trusted suggestions."
                icon={<GrUserExpert className="text-2xl" />}
                activeIndex={activeIndex}
                toggleAccordion={toggleAccordion}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ index, title, content, icon, activeIndex, toggleAccordion }) => {
  const isActive = index === activeIndex;

  return (
    <motion.div
      variants={FadeUp(0.2 * (index + 1))}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl cursor-pointer"
    >
      {/* Accordion header */}
      <div onClick={() => toggleAccordion(index)} className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {icon}
          <p className="text-lg">{title}</p>
        </div>
        {isActive ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
      </div>

      {/* Accordion content with smoother transitions */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }, // Custom easing for smooth effect
              opacity: { duration: 0.3, ease: "easeInOut" }
            }}
            className="overflow-hidden mt-4 text-gray-600"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }} // Smooth opacity transition
            >
              <p>{content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Banner;
