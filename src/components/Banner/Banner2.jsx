// import React from "react";
// import BannerPng from "../../assets/join.png";
// import { motion } from "framer-motion";

// const Banner2 = () => {
//   return (
//     <section>
//       <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
//         {/* Banner Text */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           className="flex flex-col justify-center"
//         >
//           <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
//             <h1 className="text-4xl font-bold !leading-snug">
//               Unlock a New Level of Convenience with Us
//             </h1>
//             <p className="text-dark2">
//               Join our app for a customized experience! Benefit from multi-language support, personalized recommendations, and real-time communication with service providers. Our secure platform connects you to trusted professionals quickly and easily, so you can find the services you need anytime, anywhere!
//             </p>
//             <a
//               href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
//               className="primary-btn !mt-8"
//             >
//               Join Now
//             </a>
//           </div>
//         </motion.div>
//         {/* Banner Image */}
//         <div className="flex justify-center items-center">
//           <motion.img
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             src={BannerPng}
//             alt="Join Us"
//             className="w-[500px] md:max-w-[600px] object-cover" // Increased width here and removed drop-shadow
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner2;


import React from "react";
import BannerPng from "../../assets/join.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container mx-auto py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 max-w-md mx-auto md:max-w-none">
            <h1 className="text-4xl font-bold !leading-snug">
              Unlock a New Level of Convenience with Us
            </h1>
            <p className="text-dark2">
              Join our app for a customized experience! Benefit from multi-language support, personalized recommendations, and real-time communication with service providers. Our secure platform connects you to trusted professionals quickly and easily, so you can find the services you need anytime, anywhere!
            </p>
            <a
              href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt="Join Us"
            className="max-w-full h-auto" // Ensures the image is responsive
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
