import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DSAIndex.css';

const DSAIndex = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (topic) => {
    setExpanded((prev) => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const topics = [
    'Array',
    'String',
    'LinkedList',
    'Stack',
    'Queue',
    'Tree',
    'Graph'
  ];

  return (
    <div className="container">
      <h1>Data Structures & Algorithms</h1>
      {topics.map((topic) => (
        <div key={topic}>
          <h2 onClick={() => toggleExpand(topic)} className="expandable">
            {topic} {expanded[topic] ? '▼' : '▶'}
          </h2>
          {expanded[topic] && (
            <ul>
              <li><Link to={`/dsa/${topic.toLowerCase()}/basic`}>Basic</Link></li>
              <li><Link to={`/dsa/${topic.toLowerCase()}/medium`}>Medium</Link></li>
              <li><Link to={`/dsa/${topic.toLowerCase()}/hard`}>Hard</Link></li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DSAIndex;
