import { motion } from "framer-motion";
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import testimonial3 from "../img/testimonial-3.jpg";



const testimonials = [
  {
    img: testimonial1,
    name: "Client Name",
    role: "Profession",
    text: "The service by Auto Wash is so fine and satisfactory. I would recommend it to anyone who needs a car wash."
  },
  {
    img: testimonial2,
    name: "Client Name",
    role: "Profession",
    text: "The service is very good and the price very reasonable. Thank you for you heart-warming welcome and service."
  },
  {
    img: testimonial3,
    name: "Client Name",
    role: "Profession",
    text: "The service is very good and the price is very reasonable. Thank you for your heart-warming welcome and service."
  },
  {
    img: testimonial1,
    name: "Client Name",
    role: "Profession",
    text: "The service by Auto Wash is so fine and satisfactory. I would recommend to anyone who needs a car wash."
  },
];

const Testimonial = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        
        {/* Header */}
        <p className="text-xl text-red-500 font-semibold tracking-wide">Testimonial</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Our Clients Say
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white shadow-xl rounded-2xl p-6 flex items-start space-x-5 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <motion.img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* Text */}
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                <p className="text-gray-500 italic text-sm">{item.role}</p>
                <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                  <span className="text-red-500 text-xl font-bold mr-1">“</span>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
