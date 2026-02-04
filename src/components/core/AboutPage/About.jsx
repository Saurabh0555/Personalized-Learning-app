import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-richblack-700 text-richblack-5 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-25">
            About Study Notion
          </h1>
          <p className="mt-4 text-richblack-300 text-lg">
            Learn smarter with AI-powered education
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-richblack-5">
              What is Study Notion?
            </h2>

            <p className="text-richblack-200 leading-relaxed">
              <span className="text-yellow-25 font-semibold">
                Study Notion
              </span>{" "}
              is an intelligent learning platform designed to help students
              understand concepts deeply through structured courses and
              AI-powered assistance.
            </p>

            <p className="text-richblack-200 leading-relaxed">
              Instead of passive learning, Study Notion promotes an interactive
              approach where learners can practice, ask questions, and evaluate
              their understanding in real time using our AI chatbot.
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-richblack-800 border border-richblack-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-yellow-25 mb-4">
              Key Features
            </h3>

            <ul className="space-y-4 text-richblack-200">
              <li>✅ Structured and easy-to-follow courses</li>
              <li>🤖 AI chatbot for instant doubt solving</li>
              <li>📝 AI-generated practice questions</li>
              <li>📈 Learn → Practice → Improve workflow</li>
              <li>⏱️ Time-efficient and personalized learning</li>
            </ul>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-richblack-800 border border-richblack-700 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-yellow-25 mb-4">
            Our Vision
          </h2>

          <p className="text-richblack-200 max-w-3xl mx-auto leading-relaxed">
            Our vision is to combine education with technology in a way that
            empowers students. Study Notion aims to make learning interactive,
            accessible, and effective by using Artificial Intelligence as a
            study companion — not a replacement for human effort.
          </p>
        </div>

        {/* Footer Line */}
        <div className="mt-16 text-center text-richblack-400 text-sm">
          © {new Date().getFullYear()} Study Notion. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default About;
