import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import BannerPng from "../../assets/faq.png"; // Image for the right side
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Sign Up' button on the homepage and follow the instructions. You can register using your phone number and an OTP for verification.",
  },
  {
    question: "How can I request a service?",
    answer:
      "After logging in, browse through the services offered, and click on a service to view more details. You can then request the service by clicking 'Request Service'.",
  },
  {
    question: "What happens after I request a service?",
    answer:
      "Once you request a service, the service provider will either accept or decline your request. You will be notified of their decision through the app, and the status will be updated in real-time.",
  },
  {
    question: "Can I cancel my service request?",
    answer:
      "Yes, you can cancel your service request before it is accepted by the provider. Once accepted, cancellations are not allowed, but you can contact the provider directly for further actions.",
  },
];

const Subscribe = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if clicking on the same question
    } else {
      setOpenIndex(index); // Open the clicked question
    }
  };

  return (
    // <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container py-24 md:py-48 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Column: FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-4 lg:max-w-[500px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              Frequently Asked Questions
            </h1>
            <p>
              Have questions about our services or how to get started? Check out
              our FAQs for quick answers and helpful information to enhance your
              experience with us.
            </p>

            {/* Accordion for FAQs */}
            <div className="mt-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-4 cursor-pointer"
                >
                  <div
                    className="flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-600" />
                    ) : (
                      <FaChevronDown className="text-gray-600" />
                    )}
                  </div>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex justify-center items-center"
        >
          <img
            src={BannerPng}
            alt="FAQs Banner"
            className="w-[500px] md:max-w-[600px] object-cover"
          />
        </motion.div>
      </motion.div>
    // {/* </section> */}
  );
};

export default Subscribe;
