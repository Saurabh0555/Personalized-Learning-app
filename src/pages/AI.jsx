import React from "react";
import { Helmet } from "react-helmet";
import AISubject from "../components/core/Subjects.jsx/AI";

const AIPage = () => {
  return (
    <>
      <Helmet>
        <title>AI & Machine Learning Courses - StudyNotion</title>
        <meta
          name="description"
          content="Learn Artificial Intelligence and Machine Learning with our comprehensive courses, YouTube tutorials, and hands-on projects."
        />
      </Helmet>
      <div className="min-h-screen bg-richblack-900">
        <AISubject />
      </div>
    </>
  );
};

export default AIPage;
