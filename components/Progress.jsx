import React from 'react';

export default function Progress({ userProgress, onNavigate }) {
  const achievements = [
    {
      id: 'for-master',
      title: 'Maestru FOR',
      description: 'Completează lecția despre bucla FOR',
      icon: '🔄',
      unlocked: userProgress.forCompleted
    },
    {
      id: 'while-master',
      title: 'Maestru WHILE',
      description: 'Completează lecția despre bucla WHILE',
      icon: '🔁',
      unlocked: userProgress.whileCompleted
    },
    {
      id: 'dowhile-master',
      title: 'Maestru DO-WHILE',
      description: 'Completează lecția despre bucla DO-WHILE',
      icon: '♻️',
      unlocked: userProgress.doWhileCompleted
    },
    {
      id: 'quiz-bronze',
      title: 'Bronz Quiz',
      description: 'Obține minimum 50 puncte la quiz',
      icon: '🥉',
      unlocked: userProgress.quizScore >= 50
    },
    {
      id: 'quiz-silver',
      title: 'Argint Quiz',
      description: 'Obține minimum 70 puncte la quiz',
      icon: '🥈',
      unlocked: userProgress.quizScore >= 70
    },
    {
      id: 'quiz-gold',
      title: 'Aur Quiz',
      description: 'Obține minimum 90 puncte la quiz',
      icon: '🥇',
      unlocked: userProgress.quizScore >= 90
    }
  ];

  const totalAchievements = achievements.length;
  const unlockedAchievements = achievements.filter(a => a.unlocked).length;
  const completionRate = Math.round((unlockedAchievements / totalAchievements) * 100);

  return (
    <div className="progress-container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        📊 Progresul Tău
      </h1>

      <div className="progress-overview">
        <div className="progress-card">
          <h3>Completare Totală</h3>
          <div className="big-number">{completionRate}%</div>
          <p>{unlockedAchievements} din {totalAchievements} realizări</p>
        </div>

        <div className="progress-card" style={{ background: 'var(--gradient-2)' }}>
          <h3>Scor Quiz</h3>
          <div className="big-number">{userProgress.quizScore}</div>
          <p>Puncte acumulate în quiz</p>
        </div>
      </div>

      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>🏅 Realizări</h2>
      <div className="achievements-grid">
        {achievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : ''}`}
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>{achievement.title}</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--gray)' }}>{achievement.description}</p>
            {achievement.unlocked && (
              <div style={{ marginTop: '0.5rem', color: 'var(--success)', fontWeight: '600' }}>
                ✓ Deblocat
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>📚 Continuă Învățarea</h3>
        <div className="button-group" style={{ justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={() => onNavigate('theory')}>
            📖 Teorie
          </button>
          <button className="btn btn-primary" onClick={() => onNavigate('quiz')}>
            🎯 Quiz
          </button>
        </div>
      </div>

      {completionRate === 100 && (
        <div style={{ 
          marginTop: '3rem', 
          padding: '2rem', 
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2>Felicitări!</h2>
          <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
            Ai completat întregul modul despre structuri repetitive!
            Ești acum un maestru al buclelor în programare!
          </p>
        </div>
      )}
    </div>
  );
}
