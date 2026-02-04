import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400">
            About Study Notion
          </h1>
          <p className="mt-4 text-gray-400 text-lg">
            A smarter way to learn with AI-powered education
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Learn. Practice. Improve.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-emerald-400 font-semibold">
                Study Notion
              </span>{" "}
              is an intelligent learning platform built to help students master
              concepts through structured courses and an AI-powered chatbot.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We focus on active learning where students don't just consume
              content — they interact, practice, and test their knowledge using
              AI-generated questions.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              What We Offer
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li>📘 Well-structured learning courses</li>
              <li>🤖 AI chatbot for instant doubt solving</li>
              <li>📝 Automatic question generation</li>
              <li>📊 Performance-based learning approach</li>
              <li>⚡ Fast, simple, and user-friendly UI</li>
            </ul>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 mb-16 text-center">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our vision is to bridge the gap between education and technology.
            Study Notion aims to empower students with AI tools that enhance
            understanding, boost confidence, and encourage self-learning.
          </p>
        </div>

        {/* Workflow Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Learn",
              desc: "Understand concepts with structured and easy-to-follow courses.",
            },
            {
              title: "Practice",
              desc: "Use AI-generated questions to test and strengthen knowledge.",
            },
            {
              title: "Improve",
              desc: "Track progress and focus on weak areas for better results.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-400 transition"
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Study Notion. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default About;

