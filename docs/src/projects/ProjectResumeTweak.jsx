import React from 'react';

export default function ProjectResumeTweak(){
  return (
    <div className="content">
      <h1 className="text-coral-700">Resume Tweak</h1>
      <p>Small utility: Python + Streamlit tool for tailoring resumes.</p>

      <h2>How to run</h2>
      <pre>
cd resume-tweak
pip install -r requirements.txt
streamlit run main.py
      </pre>

      <h2>Repository</h2>
      <p>The project lives in the <code>resume-tweak/</code> folder at the repository root.</p>
    </div>
  )
}
