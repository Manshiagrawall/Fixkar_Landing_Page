// // import React from "react";
// // import Hero from "./components/Hero/Hero";
// // import Services from "./components/Services/Services";
// // import Banner from "./components/Banner/Banner";
// // import Subscribe from "./components/Subscribe/Subscribe";
// // // import Banner2 from "./components/Banner/Banner2";
// // import Banner3 from "./components/Banner/Banner3";
// // import Footer from "./components/Footer/Footer";

// // const App = () => {
// //   return (
// //     <main className="overflow-x-hidden bg-white text-dark">
// //       <Hero />
// //       <Services />
// //       <Banner />
// //       <Banner3 />
// //       <Subscribe />
// //       {/* <Banner2 /> */}
// //       <Footer />
// //     </main>
// //   );
// // };

// // export default App;


// import React, { useState } from "react";
// import Hero from "./components/Hero/Hero";
// import Services from "./components/Services/Services";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Banner3 from "./components/Banner/Banner3";
// import Footer from "./components/Footer/Footer";

// const App = () => {
//   const [activeSection, setActiveSection] = useState("hero"); // Track the active section

//   const sections = [
//     { id: "hero", component: <Hero /> },
//     { id: "services", component: <Services /> },
//     { id: "banner", component: <Banner /> },
//     { id: "banner3", component: <Banner3 /> },
//     { id: "subscribe", component: <Subscribe /> },
//   ];

//   return (
//     <div>
//       <style>
//         {`
//           html {
//             scroll-behavior: smooth;
//           }
//           .highlight {
//             animation: highlight 0.5s ease-in-out;
//             border: 2px solid #FFD700; /* Gold border for the highlight effect */
//           }
//           @keyframes highlight {
//             0% { background-color: rgba(255, 215, 0, 0.2); } /* Light yellow */
//             100% { background-color: transparent; }
//           }
//         `}
//       </style>

//       <main className="overflow-x-hidden bg-white text-dark">
//         {sections.map((section) => (
//           <section
//             id={section.id}
//             className={`pt-2 ${activeSection === section.id ? 'highlight' : ''}`} // Apply highlight class
//             key={section.id}
//           >
//             {section.component}
//           </section>
//         ))}
//         <Footer />
//       </main>
//     </div>
//   );
// };

// export default App;


import React, { useEffect, useState } from "react"; // Import useEffect
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner3 from "./components/Banner/Banner3";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero"); // Track the active section

  const sections = [
    { id: "hero", component: <Hero /> },
    { id: "services", component: <Services /> },
    { id: "banner", component: <Banner /> },
    { id: "banner3", component: <Banner3 /> },
    { id: "subscribe", component: <Subscribe /> },
  ];

  // Scroll to top on refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          .highlight {
            animation: highlight 0.5s ease-in-out;
            border: 2px solid #FFD700; /* Gold border for the highlight effect */
          }
          @keyframes highlight {
            0% { background-color: rgba(255, 215, 0, 0.2); } /* Light yellow */
            100% { background-color: transparent; }
          }
        `}
      </style>

      <main className="overflow-x-hidden bg-white text-dark">
        {sections.map((section) => (
          <section
            id={section.id}
            className={`pt-2 ${activeSection === section.id ? 'highlight' : ''}`} // Apply highlight class
            key={section.id}
          >
            {section.component}
          </section>
        ))}
        <Footer />
      </main>
    </div>
  );
};

export default App;
