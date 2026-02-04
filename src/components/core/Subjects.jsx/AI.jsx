import React, { useState } from "react";
import { IoOpenOutline } from "react-icons/io5";

const AISubject = () => {
  const [selectedCategory, setSelectedCategory] = useState("beginner");
  const [expandedVideo, setExpandedVideo] = useState(null);

  const aiCourses = {
    beginner: [
      {
        id: 1,
        title: "Introduction to Artificial Intelligence",
        description: "Learn the fundamentals of AI, machine learning concepts, and their real-world applications",
        level: "Beginner",
        duration: "4 weeks",
        lessons: 12,
      },
      {
        id: 2,
        title: "Python for AI & ML",
        description: "Master Python programming with focus on libraries like NumPy, Pandas, and Scikit-learn",
        level: "Beginner",
        duration: "5 weeks",
        lessons: 15,
      },
      {
        id: 3,
        title: "Data Science Basics",
        description: "Understand data collection, cleaning, exploration, and visualization techniques",
        level: "Beginner",
        duration: "4 weeks",
        lessons: 10,
      },
    ],
    intermediate: [
      {
        id: 4,
        title: "Machine Learning Algorithms",
        description: "Deep dive into supervised and unsupervised learning algorithms with hands-on projects",
        level: "Intermediate",
        duration: "6 weeks",
        lessons: 18,
      },
      {
        id: 5,
        title: "Deep Learning Fundamentals",
        description: "Explore neural networks, CNNs, RNNs, and their applications in computer vision",
        level: "Intermediate",
        duration: "7 weeks",
        lessons: 20,
      },
      {
        id: 6,
        title: "Natural Language Processing",
        description: "Learn text processing, sentiment analysis, and language models using NLP techniques",
        level: "Intermediate",
        duration: "6 weeks",
        lessons: 16,
      },
    ],
    advanced: [
      {
        id: 7,
        title: "Advanced Neural Networks",
        description: "Master transformers, attention mechanisms, and state-of-the-art architectures",
        level: "Advanced",
        duration: "8 weeks",
        lessons: 22,
      },
      {
        id: 8,
        title: "Large Language Models (LLMs)",
        description: "Build and fine-tune large language models, understand embeddings and prompt engineering",
        level: "Advanced",
        duration: "8 weeks",
        lessons: 20,
      },
      {
        id: 9,
        title: "AI in Production",
        description: "Learn model deployment, MLOps, monitoring, and scaling AI applications in production",
        level: "Advanced",
        duration: "7 weeks",
        lessons: 18,
      },
    ],
  };

  const youtubeResources = [
    {
      id: 1,
      title: "AI Fundamentals Playlist",
      channel: "3Blue1Brown",
      duration: "2-3 minutes per video",
      description: "Visual introduction to AI and neural networks",
      videoUrl: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
      thumbnail: "https://img.youtube.com/vi/aircAruvnKk/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Machine Learning Crash Course",
      channel: "Google Developers",
      duration: "15 hours total",
      description: "Comprehensive ML course with practical exercises",
      videoUrl: "https://www.youtube.com/playlist?list=PLOU2XLYxmsIIuiBfYad6rFiJ2f7fb-qXc",
      thumbnail: "https://img.youtube.com/vi/7kWapKDxWW8/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Deep Learning Specialization",
      channel: "Deeplearning.AI",
      duration: "3 hours per course",
      description: "Complete deep learning course series",
      videoUrl: "https://www.youtube.com/c/Deeplearningdotai",
      thumbnail: "https://img.youtube.com/vi/CS4cs2xVGqc/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "Natural Language Processing with Transformers",
      channel: "Hugging Face",
      duration: "Varies",
      description: "Learn NLP with state-of-the-art transformer models",
      videoUrl: "https://www.youtube.com/c/HuggingFace",
      thumbnail: "https://img.youtube.com/vi/00GKzGyWFEs/maxresdefault.jpg",
    },
    {
      id: 5,
      title: "Python for AI Development",
      channel: "Sentdex",
      duration: "1 hour+ per video",
      description: "Practical Python AI implementation tutorials",
      videoUrl: "https://www.youtube.com/user/sentdex",
      thumbnail: "https://img.youtube.com/vi/gW7qKDp0fxI/maxresdefault.jpg",
    },
    {
      id: 6,
      title: "LLMs and Prompt Engineering",
      channel: "DeepLearning.AI",
      duration: "30-45 minutes per video",
      description: "Master working with large language models",
      videoUrl: "https://www.youtube.com/c/Deeplearningdotai/playlists",
      thumbnail: "https://img.youtube.com/vi/x8AYRR0d0Oo/maxresdefault.jpg",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Iris Flower Classification",
      description: "Build a classification model using the famous Iris dataset",
      skills: ["Python", "Scikit-learn", "Data Analysis"],
      difficulty: "Beginner",
    },
    {
      id: 2,
      title: "House Price Prediction",
      description: "Predict house prices using regression algorithms",
      skills: ["Python", "Pandas", "Scikit-learn"],
      difficulty: "Beginner",
    },
    {
      id: 3,
      title: "Sentiment Analysis Model",
      description: "Build a sentiment classifier using NLP techniques",
      skills: ["NLP", "Python", "Text Processing"],
      difficulty: "Intermediate",
    },
    {
      id: 4,
      title: "Image Recognition with CNN",
      description: "Create a convolutional neural network for image classification",
      skills: ["Deep Learning", "TensorFlow", "Computer Vision"],
      difficulty: "Intermediate",
    },
    {
      id: 5,
      title: "Chatbot Development",
      description: "Build an intelligent chatbot using NLP and transformers",
      skills: ["NLP", "Transformers", "Python"],
      difficulty: "Advanced",
    },
    {
      id: 6,
      title: "Time Series Forecasting",
      description: "Predict future trends using LSTM networks",
      skills: ["Deep Learning", "RNNs", "LSTMs"],
      difficulty: "Advanced",
    },
  ];

  return (
    <div className="w-full bg-richblack-900 text-richblack-5 py-12">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Master Artificial Intelligence & Machine Learning
          </h1>
          <p className="text-xl text-richblack-300 max-w-2xl">
            Explore comprehensive courses, resources, and projects to become an AI expert. From fundamentals to advanced architectures.
          </p>
        </div>

        {/* Courses Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our AI Courses</h2>

          {/* Category Tabs */}
          <div className="flex gap-4 mb-10 flex-wrap">
            {["beginner", "intermediate", "advanced"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-richblack-800 text-richblack-300 hover:bg-richblack-700"
                }`}
              >
                {category} Level
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCourses[selectedCategory].map((course) => (
              <div
                key={course.id}
                className="bg-richblack-800 rounded-xl p-6 border border-richblack-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-400">{course.title}</h3>
                <p className="text-richblack-300 text-sm mb-4">{course.description}</p>
                <div className="space-y-2 mb-4 text-sm text-richblack-400">
                  <p>Level: <span className="text-richblack-200 font-semibold">{course.level}</span></p>
                  <p>Duration: <span className="text-richblack-200 font-semibold">{course.duration}</span></p>
                  <p>Lessons: <span className="text-richblack-200 font-semibold">{course.lessons}</span></p>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Learning Resources Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Learn from YouTube</h2>
          <p className="text-richblack-300 mb-8">
            Free resources from industry leaders to supplement your AI learning journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {youtubeResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-richblack-800 rounded-xl overflow-hidden border border-richblack-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
              >
                {/* Thumbnail */}
                <div className="relative h-48 bg-richblack-900 overflow-hidden group">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x225?text=YouTube+Video";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <a
                      href={resource.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{resource.title}</h3>
                  <p className="text-sm text-richblack-400 mb-2">Channel: {resource.channel}</p>
                  <p className="text-richblack-300 text-sm mb-3">{resource.description}</p>
                  <p className="text-sm text-richblack-400 mb-4">Duration: {resource.duration}</p>

                  <a
                    href={resource.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
                  >
                    Watch on YouTube
                    <IoOpenOutline className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Capstone Projects</h2>
          <p className="text-richblack-300 mb-8">
            Build real-world AI projects to strengthen your portfolio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-richblack-800 rounded-xl p-6 border border-richblack-700 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-green-400 flex-1">{project.title}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    project.difficulty === "Beginner"
                      ? "bg-green-900 text-green-200"
                      : project.difficulty === "Intermediate"
                      ? "bg-yellow-900 text-yellow-200"
                      : "bg-red-900 text-red-200"
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                <p className="text-richblack-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-richblack-700 text-richblack-200 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master AI?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your AI journey today with our comprehensive courses, YouTube tutorials, and hands-on projects
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg">
            Start Learning Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AISubject;
