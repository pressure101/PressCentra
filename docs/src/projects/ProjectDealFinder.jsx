import React from 'react';

export default function ProjectDealFinder(){
  return (
    <div className="content">
      <h1 className="text-brand-700">Deal Finder</h1>
      <p>Main product: frontend, API, admin, and ETL pipeline for deal discovery.</p>

      <h2>How to run</h2>
      <pre>
npm install
npm run dev:web
npm run dev:api
      </pre>

      <h2>Repository</h2>
      <p>The project lives in the <code>deal-finder/</code> folder at the repository root.</p>
      <p>Open it in your editor or run the commands above from the repo root.</p>
    </div>
  )
}
