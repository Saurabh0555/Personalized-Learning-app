import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiMapPin, FiClock, FiBriefcase } from "react-icons/fi";

const Career = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const jobs = [
    {
      id: "frontend-developer",
      role: "Frontend Developer",
      desc: "Build intuitive and responsive user interfaces using React.",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      icon: "💻",
    },
    {
      id: "backend-developer",
      role: "Backend Developer",
      desc: "Develop scalable APIs, authentication, and databases.",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-5 years",
      icon: "⚙️",
    },
    {
      id: "ai-ml-engineer",
      role: "AI / ML Engineer",
      desc: "Work on AI-based question generation and learning systems.",
      location: "Remote",
      type: "Full-time",
      experience: "3-6 years",
      icon: "🤖",
    },
    {
      id: "content-instructor",
      role: "Content Instructor",
      desc: "Create engaging and structured educational content.",
      location: "Remote",
      type: "Full-time / Part-time",
      experience: "1-3 years",
      icon: "📚",
    },
    {
      id: "ui-ux-designer",
      role: "UI/UX Designer",
      desc: "Design modern and user-friendly learning experiences.",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      icon: "🎨",
    },
    {
      id: "product-intern",
      role: "Product Intern",
      desc: "Assist in product development and research.",
      location: "Remote",
      type: "Internship",
      experience: "0-1 years",
      icon: "🚀",
    },
  ];

  const handleJobClick = (jobId) => {
    navigate(`/careers/${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header with Animation */}
        <div className="text-center mb-14 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-400 mb-4 animate-slide-down">
            Careers at Study Notion
          </h1>
          <p className="mt-4 text-gray-400 text-lg animate-slide-up">
            Shape the future of AI-powered learning
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1 w-12 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="h-1 w-8 bg-emerald-400 rounded-full animate-pulse delay-75"></div>
            <div className="h-1 w-4 bg-emerald-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-2xl font-semibold text-emerald-300">
              Why Work With Us?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-emerald-400 font-semibold">
                Study Notion
              </span>{" "}
              is an EdTech platform that combines structured courses with
              Artificial Intelligence to improve how students learn and
              practice.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are building a team of passionate developers, educators, and
              innovators who want to make a real impact in education.
            </p>
          </div>

          {/* Culture Card with Hover Effect */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in">
            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
              Our Culture
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <span className="text-2xl">🚀</span>
                <span>Innovation-driven mindset</span>
              </li>
              <li className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <span className="text-2xl">🤝</span>
                <span>Collaborative teamwork</span>
              </li>
              <li className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <span className="text-2xl">🌱</span>
                <span>Continuous learning</span>
              </li>
              <li className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <span className="text-2xl">⚖️</span>
                <span>Healthy work-life balance</span>
              </li>
              <li className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                <span className="text-2xl">🎯</span>
                <span>Impact-focused goals</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Open Roles */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-emerald-400 mb-4">
            Open Positions
          </h2>
          <p className="text-center text-gray-400 mb-10">
            Click on any position to learn more and apply
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                onClick={() => handleJobClick(job.id)}
                onMouseEnter={() => setHoveredCard(job.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 cursor-pointer 
                  hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 
                  transition-all duration-300 transform hover:scale-105 hover:-translate-y-2
                  group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {job.icon}
                  </div>
                  <FiArrowRight 
                    className={`text-emerald-400 transition-all duration-300 ${
                      hoveredCard === job.id ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} 
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-emerald-400 mb-3 group-hover:text-emerald-300 transition-colors">
                  {job.role}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {job.desc}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <FiMapPin className="text-emerald-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <FiBriefcase className="text-emerald-400" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <FiClock className="text-emerald-400" />
                    <span>{job.experience}</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 text-sm rounded-lg bg-emerald-500 text-black font-semibold 
                  hover:bg-emerald-400 transition-all duration-300 transform group-hover:scale-105
                  flex items-center justify-center gap-2">
                  View Details
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process with Animation */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 mb-16 text-center hover:border-emerald-500/50 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
            Hiring Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["Apply", "Screening", "Interview", "Onboarding"].map(
              (step, index) => (
                <div 
                  key={index} 
                  className="text-gray-300 hover:text-emerald-400 transition-colors cursor-default
                    transform hover:scale-110 duration-300"
                >
                  <div className="text-4xl font-bold text-emerald-400 mb-2 
                    w-16 h-16 mx-auto rounded-full bg-slate-800 flex items-center justify-center
                    hover:bg-emerald-500/20 transition-colors">
                    {index + 1}
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Study Notion. All rights reserved.
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .delay-75 {
          animation-delay: 0.075s;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  );
};

export default Career;
