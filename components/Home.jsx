import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>Învață Structuri Repetitive</h1>
        <p>
          Platformă interactivă pentru înțelegerea buclelor în programare.
          Explorează teoria, testează-ți cunoștințele și exersează cu exemple practice!
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card" onClick={() => onNavigate('theory')}>
          <div className="feature-icon">📚</div>
          <h3>Material Teoretic</h3>
          <p>
            Lecții complete despre toate tipurile de bucle: FOR, WHILE și DO-WHILE.
            Învață sintaxa, conceptele și aplicațiile practice.
          </p>
          <button className="feature-btn">Începe Lecția</button>
        </div>

        <div className="feature-card" onClick={() => onNavigate('quiz')}>
          <div className="feature-icon">🎯</div>
          <h3>Quiz Interactiv</h3>
          <p>
            Testează-ți cunoștințele cu întrebări variate.
            Primește feedback instant și explicații detaliate.
          </p>
          <button className="feature-btn">Ia Testul</button>
        </div>

        <div className="feature-card" onClick={() => onNavigate('progress')}>
          <div className="feature-icon">📊</div>
          <h3>Urmărește Progresul</h3>
          <p>
            Vezi statistici detaliate despre parcursul tău.
            Deblochează realizări și badge-uri.
          </p>
          <button className="feature-btn">Vezi Progres</button>
        </div>
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>De ce să înveți structuri repetitive?</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            ✨ <strong>Eficiență</strong>: Execută aceeași operație de multe ori fără cod duplicat
          </p>
          <p style={{ marginBottom: '1rem' }}>
            🎯 <strong>Flexibilitate</strong>: Alege tipul potrivit de buclă pentru fiecare situație
          </p>
          <p style={{ marginBottom: '1rem' }}>
            🚀 <strong>Putere</strong>: Rezolvă probleme complexe cu cod simplu și elegant
          </p>
        </div>
      </div>
    </div>
  );
}
