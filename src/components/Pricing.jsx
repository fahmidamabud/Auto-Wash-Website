import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic Cleaning",
    price: "25.99",
    features: [
      { text: "Seats Washing", available: true },
      { text: "Vacuum Cleaning", available: true },
      { text: "Exterior Cleaning", available: true },
      { text: "Interior Wet Cleaning", available: false },
      { text: "Window Wiping", available: false },
    ],
    highlight: false,
  },
  {
    name: "Premium Cleaning",
    price: "35.99",
    features: [
      { text: "Seats Washing", available: true },
      { text: "Vacuum Cleaning", available: true },
      { text: "Exterior Cleaning", available: true },
      { text: "Interior Wet Cleaning", available: true },
      { text: "Window Wiping", available: false },
    ],
    highlight: true,
  },
  {
    name: "Complex Cleaning",
    price: "49.99",
    features: [
      { text: "Seats Washing", available: true },
      { text: "Vacuum Cleaning", available: true },
      { text: "Exterior Cleaning", available: true },
      { text: "Interior Wet Cleaning", available: true },
      { text: "Window Wiping", available: true },
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Header */}
        <p className="text-xl text-red-600 font-semibold tracking-wide">
          Washing Plan
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mt-1">
          Choose Your Plan
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-lg shadow-lg border 
              ${
                plan.highlight
                  ? "bg-white/80 border-red-600 shadow-red-300"
                  : "bg-white/70 border-gray-200"
              } 
              transition-all duration-300 hover:scale-[1.03]`}
            >
              {/* Name */}
              <h3
                className={`text-xl font-bold tracking-wide ${
                  plan.highlight ? "text-red-600" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <h2 className="text-5xl font-extrabold text-gray-900 mt-4">
                <span className="text-2xl">$</span>
                {plan.price}
              </h2>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    {f.available ? (
                      <FaCheckCircle className="text-green-500" />
                    ) : (
                      <FaTimesCircle className="text-gray-400" />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold transition-all 
                ${
                  plan.highlight
                    ? "bg-red-600 text-white hover:bg-red-600 hover:shadow-xl"
                    : "bg-primary text-white hover:bg-red-600 hover:shadow-xl"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
