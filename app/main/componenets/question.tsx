'use client'
// src/App.tsx
import React, { useState } from 'react';
import '../globals.css';

// Mock Data
const mockData = [
  { id: 1, title: 'Item 1', content: 'Lorem ipsum dolor sit amet.' },
  { id: 2, title: 'Item 2', content: 'Consectetur adipiscing elit.' },
  { id: 3, title: 'Item 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

// Content Component
interface ContentProps {
  data: { id: number; title: string; content: string }[];
  currentIndex: number;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const Content: React.FC<ContentProps> = ({ data, currentIndex, onNextClick, onPrevClick }) => {
  const item = data[currentIndex];

  return (
    <div className="content">
      <h2>Content</h2>
      <div className="fade-in-out">
        <strong>{item.title}</strong>: {item.content}
      </div>
      <div>
        <button onClick={onPrevClick}>Previous</button>
        <button onClick={onNextClick}>Next</button>
      </div>
    </div>
  );
};

// App Component
const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % mockData.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + mockData.length) % mockData.length);
  };

  return (
    <div className="App">
      <h1>React Content App</h1>
      <Content
        data={mockData}
        currentIndex={currentIndex}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      />
    </div>
  );
}

export default App;
