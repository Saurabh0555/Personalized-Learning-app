import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FiArrowLeft, 
  FiMapPin, 
  FiClock, 
  FiBriefcase, 
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiMail
} from "react-icons/fi";

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  // Job details database
  const jobDetails = {
    "frontend-developer": {
      role: "Frontend Developer",
      icon: "💻",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹8L - ₹15L",
      description: "We are looking for an experienced Frontend Developer to join our team and help build the next generation of educational technology platforms.",
      responsibilities: [
        "Build responsive and intuitive user interfaces using React.js",
        "Collaborate with UI/UX designers to implement pixel-perfect designs",
        "Optimize applications for maximum speed and scalability",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and team meetings",
        "Work with backend developers to integrate APIs",
        "Implement state management solutions (Redux/Context API)",
        "Ensure cross-browser compatibility and responsive design"
      ],
      requirements: [
        "2-4 years of experience in frontend development",
        "Strong proficiency in React.js, JavaScript (ES6+), and HTML/CSS",
        "Experience with state management libraries (Redux, Zustand, etc.)",
        "Familiarity with RESTful APIs and GraphQL",
        "Knowledge of modern CSS frameworks (Tailwind CSS, styled-components)",
        "Experience with version control systems (Git)",
        "Understanding of responsive design principles",
        "Strong problem-solving and debugging skills"
      ],
      niceToHave: [
        "Experience with Next.js or other React frameworks",
        "Knowledge of TypeScript",
        "Experience with testing frameworks (Jest, React Testing Library)",
        "Understanding of Webpack, Vite, or other build tools",
        "Portfolio showcasing previous projects"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible working hours and remote work options",
        "Health insurance and wellness programs",
        "Learning and development budget",
        "Annual team retreats and events",
        "Latest hardware and software tools"
      ]
    },
    "backend-developer": {
      role: "Backend Developer",
      icon: "⚙️",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹10L - ₹18L",
      description: "Join our backend team to build scalable, secure, and high-performance APIs and services that power our educational platform.",
      responsibilities: [
        "Design and develop RESTful APIs and microservices",
        "Implement authentication and authorization systems",
        "Design and optimize database schemas",
        "Write efficient database queries and optimize performance",
        "Implement caching strategies and improve system scalability",
        "Ensure code quality through testing and code reviews",
        "Collaborate with frontend developers and DevOps team",
        "Monitor and maintain production systems"
      ],
      requirements: [
        "2-5 years of experience in backend development",
        "Strong proficiency in Node.js, Python, or Java",
        "Experience with databases (MongoDB, PostgreSQL, MySQL)",
        "Knowledge of RESTful API design principles",
        "Understanding of authentication mechanisms (JWT, OAuth)",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Familiarity with Docker and containerization",
        "Strong understanding of data structures and algorithms"
      ],
      niceToHave: [
        "Experience with GraphQL",
        "Knowledge of microservices architecture",
        "Experience with message queues (RabbitMQ, Kafka)",
        "Understanding of CI/CD pipelines",
        "Experience with serverless architectures"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible working hours and remote work options",
        "Health insurance and wellness programs",
        "Learning and development budget",
        "Annual team retreats and events",
        "Latest hardware and software tools"
      ]
    },
    "ai-ml-engineer": {
      role: "AI / ML Engineer",
      icon: "🤖",
      location: "Remote",
      type: "Full-time",
      experience: "3-6 years",
      salary: "₹15L - ₹25L",
      description: "Help us revolutionize education through AI-powered learning systems, question generation, and personalized learning experiences.",
      responsibilities: [
        "Develop AI/ML models for question generation and content recommendation",
        "Implement natural language processing solutions",
        "Build and train machine learning models for personalized learning",
        "Optimize model performance and reduce inference time",
        "Collaborate with product and engineering teams",
        "Research and implement state-of-the-art ML techniques",
        "Deploy ML models to production environments",
        "Monitor and improve model accuracy and performance"
      ],
      requirements: [
        "3-6 years of experience in AI/ML engineering",
        "Strong background in machine learning and deep learning",
        "Proficiency in Python and ML frameworks (TensorFlow, PyTorch)",
        "Experience with NLP libraries (NLTK, spaCy, transformers)",
        "Knowledge of MLOps and model deployment",
        "Understanding of data preprocessing and feature engineering",
        "Experience with cloud ML platforms",
        "Strong mathematical and statistical background"
      ],
      niceToHave: [
        "PhD or Master's degree in AI/ML or related field",
        "Experience with educational technology",
        "Knowledge of reinforcement learning",
        "Publications in ML/AI conferences",
        "Experience with large language models"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible working hours and remote work options",
        "Health insurance and wellness programs",
        "Learning and development budget",
        "Annual team retreats and events",
        "Latest hardware and software tools",
        "Access to premium ML/AI resources and courses"
      ]
    },
    "content-instructor": {
      role: "Content Instructor",
      icon: "📚",
      location: "Remote",
      type: "Full-time / Part-time",
      experience: "1-3 years",
      salary: "₹5L - ₹12L",
      description: "Create engaging, structured, and high-quality educational content that helps students learn effectively and achieve their goals.",
      responsibilities: [
        "Develop comprehensive course curricula and learning materials",
        "Create video lectures, assignments, and assessments",
        "Design interactive learning experiences",
        "Review and update existing course content",
        "Collaborate with subject matter experts",
        "Ensure content aligns with learning objectives",
        "Provide feedback and support to students",
        "Stay updated with latest educational trends and technologies"
      ],
      requirements: [
        "1-3 years of experience in content creation or teaching",
        "Strong subject matter expertise in relevant domains",
        "Excellent written and verbal communication skills",
        "Ability to break down complex concepts into simple explanations",
        "Experience with video production and editing tools",
        "Understanding of instructional design principles",
        "Passion for education and student success",
        "Strong organizational and time management skills"
      ],
      niceToHave: [
        "Teaching certification or degree in education",
        "Experience with online learning platforms",
        "Knowledge of multimedia production",
        "Experience with learning management systems",
        "Background in curriculum development"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible working hours and remote work options",
        "Health insurance and wellness programs",
        "Learning and development budget",
        "Annual team retreats and events",
        "Creative freedom in content development"
      ]
    },
    "ui-ux-designer": {
      role: "UI/UX Designer",
      icon: "🎨",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹7L - ₹14L",
      description: "Design beautiful, intuitive, and user-friendly learning experiences that make education accessible and enjoyable for everyone.",
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with product managers and developers",
        "Develop and maintain design systems and style guides",
        "Create user flows and information architectures",
        "Ensure designs are accessible and inclusive",
        "Iterate on designs based on user feedback"
      ],
      requirements: [
        "2-4 years of experience in UI/UX design",
        "Strong portfolio showcasing design skills",
        "Proficiency in design tools (Figma, Adobe XD, Sketch)",
        "Understanding of user-centered design principles",
        "Knowledge of design systems and component libraries",
        "Experience with prototyping tools",
        "Strong visual design and typography skills",
        "Understanding of responsive design principles"
      ],
      niceToHave: [
        "Experience with educational technology",
        "Knowledge of frontend development (HTML/CSS/JS)",
        "Experience with animation and micro-interactions",
        "Understanding of accessibility standards (WCAG)",
        "Experience with user research methodologies"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Flexible working hours and remote work options",
        "Health insurance and wellness programs",
        "Learning and development budget",
        "Annual team retreats and events",
        "Latest design tools and software",
        "Creative freedom and ownership"
      ]
    },
    "product-intern": {
      role: "Product Intern",
      icon: "🚀",
      location: "Remote",
      type: "Internship",
      experience: "0-1 years",
      salary: "₹20K - ₹40K/month",
      description: "Gain hands-on experience in product development, research, and strategy while working on real projects that impact thousands of students.",
      responsibilities: [
        "Assist in product research and user interviews",
        "Help with feature ideation and validation",
        "Create user stories and product documentation",
        "Support product managers in day-to-day tasks",
        "Analyze user data and generate insights",
        "Participate in product planning and sprint meetings",
        "Help with competitive analysis and market research",
        "Assist in testing new features and products"
      ],
      requirements: [
        "Currently pursuing or recently completed a degree",
        "Strong analytical and problem-solving skills",
        "Excellent communication and collaboration skills",
        "Curiosity and passion for product development",
        "Basic understanding of product management concepts",
        "Proficiency in Google Workspace or Microsoft Office",
        "Ability to work independently and in teams",
        "Eagerness to learn and grow"
      ],
      niceToHave: [
        "Previous internship experience",
        "Knowledge of product management tools (Jira, Notion, etc.)",
        "Understanding of agile methodologies",
        "Experience with data analysis tools",
        "Portfolio or projects showcasing product thinking"
      ],
      benefits: [
        "Stipend and potential full-time conversion",
        "Mentorship from experienced product managers",
        "Hands-on experience with real products",
        "Flexible working hours",
        "Learning and development opportunities",
        "Networking opportunities",
        "Certificate of completion"
      ]
    }
  };

  const job = jobDetails[jobId];

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-emerald-400 mb-4">Job Not Found</h1>
          <p className="text-gray-400 mb-6">The job position you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/careers")}
            className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate("/careers")}
          className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Careers</span>
        </button>

        {/* Header Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-8 hover:border-emerald-500/50 transition-all">
          <div className="flex items-start gap-6">
            <div className="text-6xl">{job.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-emerald-400 mb-4">{job.role}</h1>
              <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <FiMapPin className="text-emerald-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiBriefcase className="text-emerald-400" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-emerald-400" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDollarSign className="text-emerald-400" />
                  <span>{job.salary}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{job.description}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Responsibilities */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <h2 className="text-2xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                <FiCheckCircle />
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
              <h2 className="text-2xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                <FiUsers />
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to Have */}
            {job.niceToHave && job.niceToHave.length > 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all">
                <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
                  Nice to Have
                </h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all">
              <h2 className="text-xl font-semibold text-emerald-400 mb-4">
                Benefits & Perks
              </h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Button */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                Ready to Apply?
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Join our team and help shape the future of education!
              </p>
              <button className="w-full px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg 
                hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105
                flex items-center justify-center gap-2">
                <FiMail />
                Apply Now
              </button>
              <p className="text-gray-400 text-xs mt-4 text-center">
                Send your resume to: careers@studynotion.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

