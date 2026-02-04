import React from 'react';

export default function Navigation({ currentPage, onNavigate, userProgress }) {
  const totalProgress = () => {
    const completed = [
      userProgress.forCompleted,
      userProgress.whileCompleted,
      userProgress.doWhileCompleted
    ].filter(Boolean).length;
    return Math.round((completed / 3) * 100);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          🔄 Structuri Repetitive
        </div>
        <ul className="nav-links">
          <li 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            🏠 Acasă
          </li>
          <li 
            className={`nav-link ${currentPage === 'theory' ? 'active' : ''}`}
            onClick={() => onNavigate('theory')}
          >
            📚 Teorie
          </li>
          <li 
            className={`nav-link ${currentPage === 'quiz' ? 'active' : ''}`}
            onClick={() => onNavigate('quiz')}
          >
            🎯 Quiz
          </li>
          <li 
            className={`nav-link ${currentPage === 'progress' ? 'active' : ''}`}
            onClick={() => onNavigate('progress')}
          >
            📊 Progres
          </li>
        </ul>
        <div className="nav-progress">
          <div 
            className="progress-circle"
            style={{
              background: `conic-gradient(var(--primary) ${totalProgress() * 3.6}deg, var(--light-gray) 0deg)`
            }}
          >
            {totalProgress()}%
          </div>
        </div>
      </div>
    </nav>
  );
}
