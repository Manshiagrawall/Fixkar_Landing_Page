// // import React, { useRef, useState, useEffect } from "react";
// // import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
// // import { MdElectricalServices } from "react-icons/md";
// // import { FaBroom, FaPaintRoller } from "react-icons/fa";
// // import { AiOutlineSafety } from "react-icons/ai";
// // import { MdMoveToInbox } from "react-icons/md";
// // import { FaTools } from "react-icons/fa";
// // import UserImage from "../../assets/user.png";
// // import ProviderImage from "../../assets/provider.png";

// // const ServicesData = [
// //   { id: 1, title: "Home Cleaning", link: "#", icon: <FaBroom /> },
// //   { id: 2, title: "Landscaping", link: "#", icon: <GiPlantWatering /> },
// //   { id: 3, title: "Plumbing", link: "#", icon: <GiPlunger /> },
// //   { id: 4, title: "Electrical", link: "#", icon: <MdElectricalServices /> },
// //   { id: 5, title: "Home Repairs", link: "#", icon: <GiHammerNails /> },
// //   { id: 6, title: "Painting", link: "#", icon: <FaPaintRoller /> },
// //   { id: 7, title: "Pest Control", link: "#", icon: <AiOutlineSafety /> },
// //   { id: 8, title: "Moving & Storage", link: "#", icon: <MdMoveToInbox /> },
// //   { id: 9, title: "Handyman Services", link: "#", icon: <FaTools /> },
// // ];

// // const Services = () => {
// //   const scrollRef = useRef(null);
// //   const [canScrollLeft, setCanScrollLeft] = useState(false);
// //   const [canScrollRight, setCanScrollRight] = useState(true);

// //   // State to handle the image change and animation
// //   const [currentImage, setCurrentImage] = useState("user"); // Initial image
// //   const [prevImage, setPrevImage] = useState("user"); // Previous image should be the same initially
// //   const [animateImageIn, setAnimateImageIn] = useState(true); // Start with animation in

// //   const checkScrollPosition = () => {
// //     if (scrollRef.current) {
// //       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
// //       setCanScrollLeft(scrollLeft > 0);
// //       setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
// //     }
// //   };

// //   const scrollRight = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
// //     }
// //   };

// //   const scrollLeft = () => {
// //     if (scrollRef.current) {
// //       scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
// //     }
// //   };

// //   useEffect(() => {
// //     checkScrollPosition(); // Check on mount
// //     if (scrollRef.current) {
// //       scrollRef.current.addEventListener("scroll", checkScrollPosition);
// //     }

// //     return () => {
// //       if (scrollRef.current) {
// //         scrollRef.current.removeEventListener("scroll", checkScrollPosition);
// //       }
// //     };
// //   }, []);

// //   // Image switch effect with sliding animation (Switches every 4 seconds)
// //   useEffect(() => {
// //     const imageInterval = setInterval(() => {
// //       setPrevImage(currentImage); // Set the previous image for fading out
// //       setAnimateImageIn(false); // Fade-out the current image
      
// //       setTimeout(() => {
// //         setCurrentImage((prev) => (prev === "user" ? "provider" : "user"));
// //         setAnimateImageIn(true); // Fade-in the new image
// //       }, 500); // Delay for smooth transition
// //     }, 4000); // Switch image every 4 seconds

// //     return () => clearInterval(imageInterval);
// //   }, [currentImage]);

// //   return (
// //     <section style={{ backgroundColor: "white" }}>
// //       <div className="container pb-14 pt-16 relative">
// //         <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
// //         <div className="flex items-center">
// //           <button
// //             onClick={scrollLeft}
// //             disabled={!canScrollLeft}
// //             className={`absolute left-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400 ${
// //               !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
// //             }`}
// //           >
// //             &lt;
// //           </button>
// //           <div
// //             ref={scrollRef}
// //             className="flex overflow-hidden gap-4"
// //             style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
// //           >
// //             {ServicesData.map((service) => (
// //               <div
// //                 key={service.id}
// //                 className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
// //               >
// //                 <div className="text-6xl mb-4">{service.icon}</div>
// //                 <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
// //               </div>
// //             ))}
// //           </div>
// //           <button
// //             onClick={scrollRight}
// //             disabled={!canScrollRight}
// //             className={`absolute right-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400 ${
// //               !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
// //             }`}
// //           >
// //             &gt;
// //           </button>
// //         </div>

// //         {/* User and Provider image switching section */}
// //         <div className="flex justify-center gap-8 pt-10 relative w-full">
// //           {/* Previous Image (fading out) */}
// //           <div
// //             className={`absolute transition-opacity duration-500 transform ${!animateImageIn ? "opacity-100" : "opacity-0"}`}
// //             style={{ width: "100%", height: "auto" }}
// //           >
// //             {prevImage === "user" ? (
// //               <img
// //                 src={UserImage}
// //                 alt="User Flow"
// //                 style={{
// //                   width: "100%",
// //                   height: "auto",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //             ) : (
// //               <img
// //                 src={ProviderImage}
// //                 alt="Provider Flow"
// //                 style={{
// //                   width: "100%",
// //                   height: "auto",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //             )}
// //           </div>

// //           {/* Current Image (fading in) */}
// //           <div
// //             className={`transition-opacity duration-500 transform ${animateImageIn ? "opacity-100" : "opacity-0"}`}
// //             style={{ width: "100%", height: "auto" }}
// //           >
// //             {currentImage === "user" ? (
// //               <img
// //                 src={UserImage}
// //                 alt="User Flow"
// //                 style={{
// //                   width: "100%",
// //                   height: "auto",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //             ) : (
// //               <img
// //                 src={ProviderImage}
// //                 alt="Provider Flow"
// //                 style={{
// //                   width: "100%",
// //                   height: "auto",
// //                   objectFit: "cover",
// //                 }}
// //               />
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;


// import React, { useRef, useState, useEffect } from "react";
// import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
// import { MdElectricalServices } from "react-icons/md";
// import { FaBroom, FaPaintRoller } from "react-icons/fa";
// import { AiOutlineSafety } from "react-icons/ai";
// import { MdMoveToInbox } from "react-icons/md";
// import { FaTools } from "react-icons/fa";
// import UserImage from "../../assets/user.png";
// import ProviderImage from "../../assets/provider.png";

// const ServicesData = [
//   { id: 1, title: "Home Cleaning", link: "#", icon: <FaBroom /> },
//   { id: 2, title: "Landscaping", link: "#", icon: <GiPlantWatering /> },
//   { id: 3, title: "Plumbing", link: "#", icon: <GiPlunger /> },
//   { id: 4, title: "Electrical", link: "#", icon: <MdElectricalServices /> },
//   { id: 5, title: "Home Repairs", link: "#", icon: <GiHammerNails /> },
//   { id: 6, title: "Painting", link: "#", icon: <FaPaintRoller /> },
//   { id: 7, title: "Pest Control", link: "#", icon: <AiOutlineSafety /> },
//   { id: 8, title: "Moving & Storage", link: "#", icon: <MdMoveToInbox /> },
//   { id: 9, title: "Handyman Services", link: "#", icon: <FaTools /> },
// ];

// const Services = () => {
//   const scrollRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   // State to handle the image change and animation
//   const [currentImage, setCurrentImage] = useState("user"); // Initial image
//   const [prevImage, setPrevImage] = useState("user"); // Previous image should be the same initially
//   const [animateImageIn, setAnimateImageIn] = useState(true); // Start with animation in
//   const [slideDirection, setSlideDirection] = useState("right"); // Direction for sliding

//   const checkScrollPosition = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     checkScrollPosition(); // Check on mount
//     if (scrollRef.current) {
//       scrollRef.current.addEventListener("scroll", checkScrollPosition);
//     }

//     return () => {
//       if (scrollRef.current) {
//         scrollRef.current.removeEventListener("scroll", checkScrollPosition);
//       }
//     };
//   }, []);

//   // Image switch effect with sliding animation (Switches every 4 seconds)
//   useEffect(() => {
//     const imageInterval = setInterval(() => {
//       setAnimateImageIn(false); // Fade-out the current image
//       setPrevImage(currentImage); // Set the previous image for fading out
      
//       setTimeout(() => {
//         // Switch the image
//         setCurrentImage((prev) => {
//           const newImage = prev === "user" ? "provider" : "user";
//           setSlideDirection(prev === "user" ? "left" : "right"); // Set sliding direction
//           return newImage;
//         });
//         setAnimateImageIn(true); // Fade-in the new image
//       }, 500); // Delay for smooth transition
//     }, 4000); // Switch image every 4 seconds

//     return () => clearInterval(imageInterval);
//   }, [currentImage]);

//   // Immediately show the current image when the component mounts
//   useEffect(() => {
//     setPrevImage(currentImage); // Set the previous image to current on mount
//   }, []);

//   return (
//     <section style={{ backgroundColor: "white" }}>
//       <div className="container pb-14 pt-16 relative">
//         <h1 className="text-4xl font-bold text-left pb-10">Services we provide</h1>
//         <div className="flex items-center">
//           <button
//             onClick={scrollLeft}
//             disabled={!canScrollLeft}
//             className={`absolute left-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400 ${
//               !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             &lt;
//           </button>
//           <div
//             ref={scrollRef}
//             className="flex overflow-hidden gap-4"
//             style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
//           >
//             {ServicesData.map((service) => (
//               <div
//                 key={service.id}
//                 className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
//               >
//                 <div className="text-6xl mb-4">{service.icon}</div>
//                 <h1 className="text-lg font-semibold text-center px-3">{service.title}</h1>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={scrollRight}
//             disabled={!canScrollRight}
//             className={`absolute right-0 z-10 p-2 text-xl rounded-full hover:bg-gray-400 ${
//               !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             &gt;
//           </button>
//         </div>

//         {/* User and Provider image switching section */}
//         <div className="flex justify-center gap-8 pt-10 relative w-full">
//           {/* Previous Image (sliding out) */}
//           <div
//             className={`absolute transition-transform duration-500 ${
//               slideDirection === "right" ? "translate-x-full" : "-translate-x-full"
//             }`}
//             style={{ width: "100%", height: "auto", opacity: 0 }}
//           >
//             {prevImage === "user" ? (
//               <img
//                 src={UserImage}
//                 alt="User Flow"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "cover",
//                 }}
//               />
//             ) : (
//               <img
//                 src={ProviderImage}
//                 alt="Provider Flow"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "cover",
//                 }}
//               />
//             )}
//           </div>

//           {/* Current Image (sliding in) */}
//           <div
//             className={`transition-transform duration-500 ${
//               animateImageIn ? "translate-x-0" : (slideDirection === "right" ? "-translate-x-full" : "translate-x-full")
//             }`}
//             style={{ width: "100%", height: "auto", opacity: 1 }}
//           >
//             {currentImage === "user" ? (
//               <img
//                 src={UserImage}
//                 alt="User Flow"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "cover",
//                 }}
//               />
//             ) : (
//               <img
//                 src={ProviderImage}
//                 alt="Provider Flow"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   objectFit: "cover",
//                 }}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import React, { useRef, useState, useEffect } from "react";
import { GiPlunger, GiHammerNails, GiPlantWatering } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { FaBroom, FaPaintRoller } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { MdMoveToInbox } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import UserImage from "../../assets/user.png";
import ProviderImage from "../../assets/provider.png";

const ServicesData = [
  { id: 1, title: "Home Cleaning", link: "#", icon: <FaBroom /> },
  { id: 2, title: "Landscaping", link: "#", icon: <GiPlantWatering /> },
  { id: 3, title: "Plumbing", link: "#", icon: <GiPlunger /> },
  { id: 4, title: "Electrical", link: "#", icon: <MdElectricalServices /> },
  { id: 5, title: "Home Repairs", link: "#", icon: <GiHammerNails /> },
  { id: 6, title: "Painting", link: "#", icon: <FaPaintRoller /> },
  { id: 7, title: "Pest Control", link: "#", icon: <AiOutlineSafety /> },
  { id: 8, title: "Moving & Storage", link: "#", icon: <MdMoveToInbox /> },
  { id: 9, title: "Handyman Services", link: "#", icon: <FaTools /> },
];

const Services = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // State to handle the image change and animation
  const [currentImage, setCurrentImage] = useState("user"); // Initial image
  const [prevImage, setPrevImage] = useState("user"); // Previous image should be the same initially
  const [animateImageIn, setAnimateImageIn] = useState(true); // Start with animation in
  const [slideDirection, setSlideDirection] = useState("right"); // Direction for sliding

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

  // Image switch effect with sliding animation (Switches every 4 seconds)
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setAnimateImageIn(false); // Fade-out the current image
      setPrevImage(currentImage); // Set the previous image for fading out
      
      setTimeout(() => {
        // Switch the image
        setCurrentImage((prev) => {
          const newImage = prev === "user" ? "provider" : "user";
          setSlideDirection(prev === "user" ? "left" : "right"); // Set sliding direction
          return newImage;
        });
        setAnimateImageIn(true); // Fade-in the new image
      }, 500); // Delay for smooth transition
    }, 4000); // Switch image every 4 seconds

    return () => clearInterval(imageInterval);
  }, [currentImage]);

  // Immediately show the current image when the component mounts
  useEffect(() => {
    setPrevImage(currentImage); // Set the previous image to current on mount
  }, []);

  return (
    <section className="bg-gray-100">
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
            &lt;
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-hidden gap-4"
            style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
          >
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-[#f4f4f4] hover:scale-110 duration-300 hover:shadow-2xl min-w-[200px]"
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
            &gt;
          </button>
        </div>

        {/* User and Provider image switching section */}
        <div className="flex justify-center gap-8 pt-10 relative w-full bg-gray-100">
          {/* Previous Image (sliding out) */}
          <div
            className={`absolute transition-transform duration-500 ${
              slideDirection === "right" ? "translate-x-full" : "-translate-x-full"
            }`}
            style={{ width: "100%", height: "auto", opacity: 0 }}
          >
            {prevImage === "user" ? (
              <img
                src={UserImage}
                alt="User Flow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={ProviderImage}
                alt="Provider Flow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          {/* Current Image (sliding in) */}
          <div
            className={`transition-transform duration-500 ${
              animateImageIn ? "translate-x-0" : (slideDirection === "right" ? "-translate-x-full" : "translate-x-full")
            }`}
            style={{ width: "100%", height: "auto", opacity: 1 }}
          >
            {currentImage === "user" ? (
              <img
                src={UserImage}
                alt="User Flow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            ) : (
              <img
                src={ProviderImage}
                alt="Provider Flow"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
