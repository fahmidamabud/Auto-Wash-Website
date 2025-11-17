import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Image with premium animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.img
            src={aboutImg}
            alt="About"
            className="w-full h-[80vh] object-cover rounded-2xl shadow-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Headings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-red-600 font-semibold uppercase tracking-widest mb-1">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent">
              Premium Car Washing & Detailing
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            Welcome to our premium car washing and detailing services! We offer an exceptional experience for our customers,
             providing top-notch car care that exceeds their expectations. Our team of skilled professionals is dedicated to 
             ensuring that your vehicle is not only clean but also well-maintained and looking its best. With a wide range of 
             services to choose from, including interior and exterior cleaning, vacuum cleaning, window wiping, and more.
          </motion.p>

          {/* Features List with staggered animation */}
          <motion.ul
            className="mt-6 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              "Seats washing",
              "Vacuum cleaning",
              "Interior wet cleaning",
              "Window wiping",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-gray-700"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
              >
                <FaCheckCircle className="text-red-600 text-xl" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* Premium Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="
              mt-8 px-10 py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-red-700 to-red-500
              shadow-lg hover:shadow-2xl
              transition-all duration-300
            "
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
