import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  {
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
  {
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
  {
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
  {
    title: "Car Washing Point",
    address: "123 Street, New York, USA",
    phone: "+012 345 6789",
  },
];

const Location = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left Locations */}
          <div>
            <div className="mb-8">
              <p className="text-xl text-red-600 font-semibold tracking-wide">
                Washing Points
              </p>
              <h2 className="text-3xl font-bold text-primary">
                Car Washing & Care Points
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="flex p-4 rounded-xl bg-white shadow-sm hover:shadow-md
                  transition-all duration-300"
                >
                  <FaMapMarkerAlt className="text-red-500 text-2xl mt-1" />
                  <div className="ml-4">
                    <h3 className="text-md font-bold text-gray-800">
                      {loc.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{loc.address}</p>
                    <p className="text-gray-700 text-sm">
                      <strong>Call:</strong> {loc.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-[65vh] ml-10"> 
            <div className="bg-red-600 rounded-xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-white mb-8">
                Request for a Car Wash
              </h3>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 px-4 rounded-md bg-white/10 
        text-white placeholder-white border border-white/60
        focus:border-white focus:ring-2 focus:ring-white outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full h-12 px-4 rounded-md bg-white/10 
        text-white placeholder-white border border-white/60
        focus:border-white focus:ring-2 focus:ring-white outline-none"
                />

                <textarea
                  placeholder="Description"
                  className="w-full h-36 px-4 py-3 rounded-md bg-white/10 
        text-white placeholder-white border border-white/60
        focus:border-white focus:ring-2 focus:ring-white outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full h-12 rounded-md font-semibold bg-white text-red-600 
        hover:bg-red-700 hover:text-white transition-all duration-300"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Location;
