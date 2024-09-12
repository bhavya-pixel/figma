import React, { useState } from 'react';
import { QuestionMarkCircleIcon, ChevronDownIcon } from '@heroicons/react/solid';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-slate-800 pt-4 pb-4 pr-4 pl-1 rounded-lg shadow-lg mb-4">
      {/* Top Section with Icon and Tabs */}
      <div className="flex justify-between items-center mb-4 ">
        {/* Question Mark Icon */}
        <QuestionMarkCircleIcon className="h-6 w-6 text-slate-600  " />

        {/* Tabs */}
        <div className="rounded-3xl flex justify-center space-x-1.5 bg-black h-10 px-2 py-1 shadow-2xl shadow-black">
          <button
            onClick={() => setActiveTab('about')}
            className={`text-white px-4 rounded-3xl focus:outline-none h-8 shadow-2xl shadow-black ${
              activeTab === 'about' ? 'bg-slate-600' : 'bg-slate-800'
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab('experiences')}
            className={`text-white px-4 rounded-3xl focus:outline-none h-8 shadow-2xl shadow-black ${
              activeTab === 'experiences' ? 'bg-slate-600' : 'bg-slate-800'
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveTab('recommended')}
            className={`text-white px-4 rounded-3xl focus:outline-none h-8 shadow-2xl shadow-black ${
              activeTab === 'recommended' ? 'bg-slate-600' : 'bg-slate-800'
            }`}
          >
            Recommended
          </button>
        </div>
      </div>

      {/* Bottom Section with Icon and Content */}
      <div className="flex justify-between items-center mb-4">
        {/* Squares 2x2 Icon */}
        <ChevronDownIcon className="h-6 w-6 text-slate-600 " />

        {/* Tab Content */}
        <div className="text-slate-400 bg-gray-800 p-4 rounded-lg w-96 h-52 shadow-2xl shadow-black">
          {activeTab === 'about' && (
            <div className="overflow-auto h-full text-wrap custom-scrollbar pr-3">
              <p>
                Passionate web developer with hands-on experience in building full-stack applications using the
                MERN stack (MongoDB, Express.js, React, Node.js). Proficient in developing RESTful APIs, managing
                databases, and creating dynamic, responsive user interfaces. Skilled in JavaScript, HTML, CSS, and
                React Hooks. Demonstrated ability to design, implement, and deploy scalable applications, with a
                focus on delivering seamless user experiences. Strong problem-solving skills and a quick learner, eager
                to apply knowledge in real-world projects.
              </p>
            </div>
          )}
          {activeTab === 'experiences' && (
            <div className="overflow-auto h-full text-wrap custom-scrollbar pr-3">
              <p>
                HEALTH MATE<br />
                1. Built a full-stack Doctor Appointment System using the MERN stack (MongoDB, Express.js, React,
                Node.js) for booking and managing appointments.
                <br />
                2. Implemented user authentication and role-based access (patients, doctors, admins) with JWT for
                secure access.
                <br />3. Designed RESTful APIs to handle real-time data, allowing doctors to manage schedules and
                patients to book appointments.
              </p>
              <p>
                QUICK EATS<br />
                1. Developed a dynamic food ordering UI using JavaScript, React, React Redux, and Tailwind CSS,
                integrated with the Swiggy API.
                <br />
                2. Fetched real-time restaurant and menu data from the Swiggy API, allowing users to browse and
                select items for orders.
                <br />
                3. Managed state efficiently with React Redux to ensure seamless user interactions and data updates
                across components.
              </p>
            </div>
          )}
          {activeTab === 'recommended' && (
            <div className="overflow-auto h-full text-wrap custom-scrollbar pr-3">
              <p>
                I highly recommend myself for the MERN stack developer internship at your company due to my solid
                foundation in full-stack development, particularly in the MERN (MongoDB, Express, React, and Node.js)
                stack. My technical proficiency, demonstrated through projects such as Quick Eats (a food ordering
                application), showcases my ability to build responsive and dynamic web applications from scratch. I am
                experienced in implementing RESTful APIs, managing databases, and creating interactive UIs, all while
                adhering to best practices in software development.
                <br />
                Furthermore, I am a quick learner, always eager to explore new technologies and refine my skills. I
                believe my passion for web development, coupled with my problem-solving abilities, make me a great fit
                for your team.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
