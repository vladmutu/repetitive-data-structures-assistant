import React, { useState } from 'react';
import { quizQuestions } from '../data/questions';

export default function Quiz({ userProgress, setUserProgress }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);

  const startQuiz = (category) => {
    let questions = [];
    if (category === 'all') {
      questions = [
        ...quizQuestions.for,
        ...quizQuestions.while,
        ...quizQuestions.dowhile
      ].sort(() => Math.random() - 0.5).slice(0, 12);
    } else {
      questions = [...quizQuestions[category]];
    }
    
    setCurrentQuestions(questions);
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setQuizComplete(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const selectAnswer = (index) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const checkAnswer = () => {
    if (selectedAnswer === null) {
      alert('Selectează un răspuns!');
      return;
    }

    const isCorrect = selectedAnswer === currentQuestions[currentQuestionIndex].correct;
    setShowExplanation(true);
    
    if (isCorrect) {
      setScore(score + 10);
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
      setUserProgress({
        ...userProgress,
        quizScore: Math.max(userProgress.quizScore, score + (selectedAnswer === currentQuestions[currentQuestionIndex].correct ? 10 : 0))
      });
    }
  };

  const resetQuiz = () => {
    setSelectedCategory(null);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = (correctAnswers / currentQuestions.length) * 100;
    let emoji = '📚';
    let message = 'Continuă să exersezi!';
    
    if (percentage >= 90) {
      emoji = '🏆';
      message = 'Excelent! Stăpânești perfect structurile repetitive!';
    } else if (percentage >= 70) {
      emoji = '🌟';
      message = 'Foarte bine! Ai o înțelegere solidă!';
    } else if (percentage >= 50) {
      emoji = '👍';
      message = 'Bine! Mai exersează puțin!';
    }

    return (
      <div className="quiz-container">
        <div className="results-container">
          <h1>Rezultate Quiz</h1>
          <div className="results-emoji">{emoji}</div>
          <div className="results-score">{score} puncte</div>
          <div className="results-message">{message}</div>
          
          <div className="results-details">
            <h3>📊 Statistici Detaliate</h3>
            <p><strong>Total întrebări:</strong> {currentQuestions.length}</p>
            <p><strong>Răspunsuri corecte:</strong> {correctAnswers}</p>
            <p><strong>Răspunsuri greșite:</strong> {currentQuestions.length - correctAnswers}</p>
            <p><strong>Procent reușită:</strong> {percentage.toFixed(1)}%</p>
            <p><strong>Scor maxim posibil:</strong> {currentQuestions.length * 10} puncte</p>
          </div>

          <div className="quiz-actions">
            <button className="btn btn-primary" onClick={resetQuiz}>
              🔄 Încearcă Din Nou
            </button>
            <button className="btn btn-secondary" onClick={() => setSelectedCategory(null)}>
              📚 Alege Altă Categorie
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>🎯 Quiz Interactiv</h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem' }}>
            Testează-ți cunoștințele despre structuri repetitive!
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card" onClick={() => startQuiz('for')}>
            <div className="feature-icon">🔄</div>
            <h3>Bucla FOR</h3>
            <p>8 întrebări despre sintaxa și utilizarea buclei FOR</p>
            <button className="feature-btn">Începe Quiz</button>
          </div>

          <div className="feature-card" onClick={() => startQuiz('while')}>
            <div className="feature-icon">🔁</div>
            <h3>Bucla WHILE</h3>
            <p>8 întrebări despre bucla WHILE și aplicațiile ei</p>
            <button className="feature-btn">Începe Quiz</button>
          </div>

          <div className="feature-card" onClick={() => startQuiz('dowhile')}>
            <div className="feature-icon">♻️</div>
            <h3>Bucla DO-WHILE</h3>
            <p>8 întrebări despre specificul buclei DO-WHILE</p>
            <button className="feature-btn">Începe Quiz</button>
          </div>

          <div className="feature-card" onClick={() => startQuiz('all')}>
            <div className="feature-icon">🌟</div>
            <h3>Quiz Complet</h3>
            <p>12 întrebări mixte din toate categoriile</p>
            <button className="feature-btn">Începe Quiz</button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>🎯 Quiz: {selectedCategory === 'all' ? 'Toate Categoriile' : selectedCategory.toUpperCase()}</h1>
      </div>

      <div className="quiz-stats">
        <div className="stat-item">
          <div className="stat-label">Scor</div>
          <div className="stat-value">{score}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Corecte</div>
          <div className="stat-value">{correctAnswers}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Progres</div>
          <div className="stat-value">{currentQuestionIndex + 1}/{currentQuestions.length}</div>
        </div>
      </div>

      <div className="question-progress">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-card">
        <div className="question-header">
          <div className="question-number">
            Întrebarea {currentQuestionIndex + 1} din {currentQuestions.length}
          </div>
          <h2 className="question-text">{currentQuestion.question}</h2>
        </div>

        {currentQuestion.code && (
          <div className="code-example" data-lang="C/C++">
            <pre>{currentQuestion.code}</pre>
          </div>
        )}

        <div className="options-grid">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                selectedAnswer === index ? 'selected' : ''
              } ${
                showExplanation && index === currentQuestion.correct ? 'correct' : ''
              } ${
                showExplanation && selectedAnswer === index && index !== currentQuestion.correct ? 'incorrect' : ''
              }`}
              onClick={() => selectAnswer(index)}
              disabled={showExplanation}
            >
              {option}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="explanation-box">
            <strong>💡 Explicație:</strong>
            <p style={{ marginTop: '0.5rem' }}>{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="quiz-actions">
          {!showExplanation ? (
            <button className="btn btn-primary" onClick={checkAnswer}>
              ✓ Verifică Răspunsul
            </button>
          ) : (
            <button className="btn btn-primary" onClick={nextQuestion}>
              {currentQuestionIndex < currentQuestions.length - 1 ? '→ Următoarea Întrebare' : '🏁 Vezi Rezultatele'}
            </button>
          )}
          <button className="btn btn-secondary" onClick={resetQuiz}>
            ← Înapoi
          </button>
        </div>
      </div>
    </div>
  );
}
