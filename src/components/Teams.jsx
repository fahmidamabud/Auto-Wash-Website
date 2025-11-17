import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import team1 from "../img/team-1.jpg" 
import team2 from "../img/team-2.jpg"
import team3 from "../img/team-3.jpg"
import team4 from "../img/team-4.jpg"

const teamData = [
  {
    name: "Donald John",
    role: "Engineer",
    img: team1,
  },
  {
    name: "Adam Phillips",
    role: "Engineer",
    img: team3,
  },
  {
    name: "Thomas Olsen",
    role: "Worker",
    img: team2,
  },
  {
    name: "James Alien",
    role: "Worker",
    img: team4,
  },
];

const Team = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Section Header */}
        <p className="text-xl text-red-600 font-semibold tracking-wide">Meet Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Engineers & Workers
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="group rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Team Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 -mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaTwitter />
                </a>
                <a className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaFacebookF />
                </a>
                <a className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaLinkedinIn />
                </a>
                <a className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-primary transition">
                  <FaInstagram />
                </a>
              </div>

              {/* Text */}
              <div
                className="text-center p-6 rounded-b-xl bg-primary 
                group-hover:bg-red-600 transition-all duration-500"
              >
                <h2 className="text-white text-lg font-semibold tracking-wide">
                  {member.name}
                </h2>
                <p className="text-white">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
