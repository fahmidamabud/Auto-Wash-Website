import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#202C45] pt-8 mt-8 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* ---- CONTACT ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#E81C2E] text-xl font-bold tracking-widest mb-6">
            Get In Touch
          </h2>
          <p className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="text-lg" />
            123 Street, New York, USA
          </p>
          <p className="flex items-start gap-3 mb-3">
            <FaPhoneAlt className="text-lg" />
            +012 345 67890
          </p>
          <p className="flex items-start gap-3 mb-3">
            <FaEnvelope className="text-lg" />
            info@example.com
          </p>

          {/* Social Icons */}
          <div className="flex mt-4">
            {[FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn].map(
              (Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="w-10 h-10 flex items-center justify-center bg-white text-[#202C45] rounded-full mr-2 hover:bg-[#E81C2E] hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        {/* ---- POPULAR LINKS ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-[#E81C2E] text-xl font-bold tracking-widest mb-6">
            Popular Links
          </h2>

          {[
            "About Us",
            "Contact Us",
            "Our Service",
            "Service Points",
            "Pricing Plan",
          ].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ x: 5 }}
              className="block mb-1 transition-all text-white hover:text-[#E81C2E] tracking-wide"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* ---- USEFUL LINKS ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[#E81C2E] text-xl font-bold tracking-widest mb-6">
            Useful Links
          </h2>

          {["Terms of Use", "Privacy Policy", "Cookies", "Help", "FAQs"].map(
            (item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ x: 5 }}
                className="block mb-1 transition-all text-white hover:text-[#E81C2E] tracking-wide"
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>

        {/* ---- NEWSLETTER ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-[#E81C2E] text-xl font-bold tracking-widest mb-6">
            Newsletter
          </h2>

          <form className="mr-8 pr-12 flex flex-col gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Full Name"
              className="w-full h-12 bg-transparent border border-white rounded px-3 outline-none placeholder:text-gray-300"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email"
              className="w-full h-12 bg-transparent border border-white rounded px-3 outline-none placeholder:text-gray-300"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-white text-[#202C45] font-semibold py-3 rounded-full transition-all hover:bg-[#E81C2E] hover:text-white"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* ---- COPYRIGHT ---- */}
      <div className="container mx-auto text-center py-2 mt-10 border-t border-white/20">
        <p className="text-sm tracking-wide">
          © <a href="#" className="text-[#E81C2E] font-bold">She Codes</a>, All Right Reserved.  
          Designed By <a href="#" className="text-[#E81C2E] font-bold">She Codes</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
