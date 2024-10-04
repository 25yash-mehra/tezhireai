import React from 'react';
import { FaRegLightbulb, FaUserGraduate, FaBriefcase } from 'react-icons/fa'; // React Icons se icons import karna
import heroImage from '../Images/favicon-removebg-preview.png'; // Apne image ka path sahi karein

function Home() {
  return (
    <div className="bg-gray-100 w-full flex flex-col items-center justify-center">
      {/* hero section */}
      <section className="flex flex-col lg:flex-row bg-gradient-to-r from-indigo-600 to-blue-500 text-white  shadow-lg p-10 items-center w-full"> {/* Gradient Background */}
        {/* text section */}
        <div className="flex flex-col justify-center lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to TezHireAI</h1>
          <p className="text-lg mb-4 flex items-center">
            <FaRegLightbulb className="inline-block mr-2" /> Your Path to the Best Jobs
          </p>
          <p className="mb-6">
            Discover opportunities that align with your skills and passions. Join us to unlock your potential!
          </p>
          <div className="flex space-x-4 mb-4">
            <div className="flex items-center">
              <FaUserGraduate className="text-2xl" />
              <span className="ml-2">Students</span>
            </div>
            <div className="flex items-center">
              <FaBriefcase className="text-2xl" />
              <span className="ml-2">Professionals</span>
            </div>
          </div>
          <a

            href="#"
            className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105 text-decoration-none" // Hover effect
          >
            Get Started
          </a>
        </div>
        {/* image section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Job Opportunities"
            // className="w-full h-auto shadow-md transform hover:scale-105 transition" // Hover effect
           className= "w-3/5 h-auto rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
