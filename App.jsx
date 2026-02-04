import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Theory from './components/Theory';
import Quiz from './components/Quiz';
import Progress from './components/Progress';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userProgress, setUserProgress] = useState({
    forCompleted: false,
    whileCompleted: false,
    doWhileCompleted: false,
    quizScore: 0
  });

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'theory':
        return <Theory onNavigate={setCurrentPage} userProgress={userProgress} setUserProgress={setUserProgress} />;
      case 'quiz':
        return <Quiz userProgress={userProgress} setUserProgress={setUserProgress} />;
      case 'progress':
        return <Progress userProgress={userProgress} onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} userProgress={userProgress} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
