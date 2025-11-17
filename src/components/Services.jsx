import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Droplets,
  Wind,
  SprayCan,
  Sparkles,
  Brush,
  Cog,
  Wrench,
} from "lucide-react";

const services = [
  { title: "Exterior Washing", icon: Car },
  { title: "Interior Washing", icon: Droplets },
  { title: "Vacuum Cleaning", icon: Wind },
  { title: "Seats Washing", icon: SprayCan },
  { title: "Window Wiping", icon: Sparkles },
  { title: "Wet Cleaning", icon: Brush },
  { title: "Oil Changing", icon: Cog },
  { title: "Brake Repairing", icon: Wrench },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xl text-red-600 font-semibold tracking-wide">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Washing Services
          </h2>
        </motion.div>

        {/* Services Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-5">
                  <Icon className="w-12 h-12 text-red-600 group-hover:text-red-700 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm">
                  High-quality auto care with professional-grade detailing and advanced washing technology.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
