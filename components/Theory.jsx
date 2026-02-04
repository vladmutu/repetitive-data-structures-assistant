import React, { useState } from 'react';

export default function Theory({ onNavigate, userProgress, setUserProgress }) {
  const [activeTab, setActiveTab] = useState('for');
  const [interactiveInput, setInteractiveInput] = useState('5');
  const [interactiveOutput, setInteractiveOutput] = useState('');

  const runForExample = () => {
    const n = parseInt(interactiveInput) || 0;
    let output = '';
    for (let i = 1; i <= n; i++) {
      output += `Iterația ${i}: i = ${i}\n`;
    }
    setInteractiveOutput(output || 'Introduceți un număr pozitiv');
  };

  const runWhileExample = () => {
    const n = parseInt(interactiveInput) || 0;
    let output = '';
    let i = 1;
    while (i <= n) {
      output += `i = ${i}\n`;
      i++;
    }
    setInteractiveOutput(output || 'Introduceți un număr pozitiv');
  };

  const runDoWhileExample = () => {
    const n = parseInt(interactiveInput) || 0;
    let output = '';
    let i = 1;
    do {
      output += `Execuție ${i}\n`;
      i++;
    } while (i <= n);
    setInteractiveOutput(output);
  };

  const markComplete = (type) => {
    setUserProgress({
      ...userProgress,
      [`${type}Completed`]: true
    });
  };

  return (
    <div className="theory-container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
        📚 Material Teoretic: Structuri Repetitive
      </h1>

      <div className="theory-nav">
        <button 
          className={`theory-tab ${activeTab === 'for' ? 'active' : ''}`}
          onClick={() => setActiveTab('for')}
        >
          🔄 Bucla FOR
        </button>
        <button 
          className={`theory-tab ${activeTab === 'while' ? 'active' : ''}`}
          onClick={() => setActiveTab('while')}
        >
          🔁 Bucla WHILE
        </button>
        <button 
          className={`theory-tab ${activeTab === 'dowhile' ? 'active' : ''}`}
          onClick={() => setActiveTab('dowhile')}
        >
          ♻️ Bucla DO-WHILE
        </button>
        <button 
          className={`theory-tab ${activeTab === 'comparison' ? 'active' : ''}`}
          onClick={() => setActiveTab('comparison')}
        >
          ⚖️ Comparație
        </button>
      </div>

      <div className="theory-content">
        {activeTab === 'for' && (
          <div>
            <div className="theory-section">
              <h2>🔄 Bucla FOR</h2>
              <p>
                Bucla <strong>FOR</strong> este folosită atunci când știm <strong>exact câte iterații</strong> trebuie să facem.
                Este ideală pentru parcurgerea șirurilor, listelor sau executarea unei operații de un număr fix de ori.
              </p>

              <h3>Sintaxa</h3>
              <div className="code-example" data-lang="C/C++">
                <pre>{`for (int i = 0; i < n; i++) {
    // Codul care se repetă
    printf("%d ", i);
}`}</pre>
              </div>

              <div className="info-box">
                <strong>🎯 Componentele buclei FOR:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li><strong>Inițializare</strong>: <code>int i = 0</code> - setează valoarea inițială</li>
                  <li><strong>Condiție</strong>: <code>i &lt; n</code> - bucla continuă cât timp este adevărată</li>
                  <li><strong>Incrementare</strong>: <code>i++</code> - modifică variabila după fiecare iterație</li>
                </ul>
              </div>

              <h3>Exemple Practice</h3>
              
              <div className="code-example" data-lang="C++">
                <pre>{`// Exemplu 1: Afișare numere de la 1 la 10
for (int i = 1; i <= 10; i++) {
    printf("%d ", i);
}
// Output: 1 2 3 4 5 6 7 8 9 10

// Exemplu 2: Suma primelor n numere
int suma = 0;
for (int i = 1; i <= n; i++) {
    suma += i;
}

// Exemplu 3: Parcurgere array
int arr[] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
}`}</pre>
              </div>

              <h3>Bucle FOR Imbricate</h3>
              <div className="code-example" data-lang="C++">
                <pre>{`// Afișare matrice 3x3
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("* ");
    }
    printf("\\n");
}
// Output:
// * * *
// * * *
// * * *`}</pre>
              </div>

              <div className="success-box">
                <strong>✅ Când folosim FOR:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li>Știm exact numărul de iterații</li>
                  <li>Parcurgem array-uri sau liste</li>
                  <li>Generăm secvențe matematice</li>
                  <li>Iterăm cu un pas constant (i++, i+=2, etc.)</li>
                </ul>
              </div>

              <h3>🎮 Exemplu Interactiv</h3>
              <div className="interactive-example">
                <p><strong>Introdu un număr și vezi cum funcționează bucla FOR:</strong></p>
                <div className="example-controls">
                  <input 
                    type="number" 
                    className="example-input" 
                    value={interactiveInput}
                    onChange={(e) => setInteractiveInput(e.target.value)}
                    placeholder="Introdu număr..."
                  />
                  <button className="example-btn" onClick={runForExample}>
                    ▶️ Rulează FOR
                  </button>
                </div>
                <div className="example-output">
                  {interactiveOutput || '// Apasă butonul pentru a vedea output-ul'}
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => markComplete('for')}
                >
                  ✓ Marchează ca Completat
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'while' && (
          <div>
            <div className="theory-section">
              <h2>🔁 Bucla WHILE</h2>
              <p>
                Bucla <strong>WHILE</strong> este folosită când <strong>nu știm exact</strong> câte iterații vom face,
                dar știm <strong>condiția de oprire</strong>. Bucla verifică condiția <strong>înainte</strong> de fiecare iterație.
              </p>

              <h3>Sintaxa</h3>
              <div className="code-example" data-lang="C/C++">
                <pre>{`while (conditie) {
    // Codul care se repetă
    // IMPORTANT: trebuie să modificăm condiția
}`}</pre>
              </div>

              <div className="warning-box">
                <strong>⚠️ ATENȚIE:</strong> Trebuie să te asiguri că condiția devine falsă la un moment dat,
                altfel vei crea o <strong>buclă infinită</strong>!
              </div>

              <h3>Exemple Practice</h3>
              <div className="code-example" data-lang="C++">
                <pre>{`// Exemplu 1: Numărătoare până la n
int i = 1;
while (i <= n) {
    printf("%d ", i);
    i++; // CRUCIAL: incrementăm i
}

// Exemplu 2: Citire până la valoare specifică
int nr;
scanf("%d", &nr);
while (nr != 0) {
    printf("Ați introdus: %d\\n", nr);
    scanf("%d", &nr);
}

// Exemplu 3: Găsire putere a lui 2
int n = 1;
while (n < 1000) {
    printf("%d ", n);
    n *= 2;
}
// Output: 1 2 4 8 16 32 64 128 256 512`}</pre>
              </div>

              <h3>Validare Input cu WHILE</h3>
              <div className="code-example" data-lang="C++">
                <pre>{`// Pattern comun: validare input
int varsta;
printf("Introduceți vârsta (1-120): ");
scanf("%d", &varsta);

while (varsta < 1 || varsta > 120) {
    printf("Invalid! Reîncercați: ");
    scanf("%d", &varsta);
}

printf("Vârsta validă: %d\\n", varsta);`}</pre>
              </div>

              <div className="success-box">
                <strong>✅ Când folosim WHILE:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li>Nu știm numărul exact de iterații</li>
                  <li>Depinde de o condiție externă (input utilizator)</li>
                  <li>Căutare sau validare</li>
                  <li>Procesare până la marker (ex: 0, EOF)</li>
                </ul>
              </div>

              <h3>🎮 Exemplu Interactiv</h3>
              <div className="interactive-example">
                <p><strong>Introdu un număr și vezi cum funcționează bucla WHILE:</strong></p>
                <div className="example-controls">
                  <input 
                    type="number" 
                    className="example-input" 
                    value={interactiveInput}
                    onChange={(e) => setInteractiveInput(e.target.value)}
                    placeholder="Introdu număr..."
                  />
                  <button className="example-btn" onClick={runWhileExample}>
                    ▶️ Rulează WHILE
                  </button>
                </div>
                <div className="example-output">
                  {interactiveOutput || '// Apasă butonul pentru a vedea output-ul'}
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => markComplete('while')}
                >
                  ✓ Marchează ca Completat
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dowhile' && (
          <div>
            <div className="theory-section">
              <h2>♻️ Bucla DO-WHILE</h2>
              <p>
                Bucla <strong>DO-WHILE</strong> este similară cu WHILE, dar verifică condiția <strong>la sfârșit</strong>.
                Aceasta înseamnă că codul din buclă se execută <strong>cel puțin o dată</strong>, indiferent de condiție.
              </p>

              <h3>Sintaxa</h3>
              <div className="code-example" data-lang="C/C++">
                <pre>{`do {
    // Codul care se repetă
    // Se execută ÎNTOTDEAUNA cel puțin o dată
} while (conditie);`}</pre>
              </div>

              <div className="info-box">
                <strong>🔑 Diferența cheie:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li><strong>WHILE</strong>: verifică condiția ÎNAINTE → poate să nu se execute deloc</li>
                  <li><strong>DO-WHILE</strong>: verifică condiția DUPĂ → se execută ÎNTOTDEAUNA cel puțin o dată</li>
                </ul>
              </div>

              <h3>Exemple Practice</h3>
              <div className="code-example" data-lang="C++">
                <pre>{`// Exemplu 1: Meniu interactiv
int optiune;
do {
    printf("\\n=== MENIU ===\\n");
    printf("1. Adaugă\\n");
    printf("2. Șterge\\n");
    printf("3. Afișează\\n");
    printf("0. Ieșire\\n");
    printf("Opțiune: ");
    scanf("%d", &optiune);
    
    // Procesare opțiune...
} while (optiune != 0);

// Exemplu 2: Validare cu garantarea execuției
int numar;
do {
    printf("Introduceți un număr pozitiv: ");
    scanf("%d", &numar);
} while (numar <= 0);

// Exemplu 3: Repetare operație
char raspuns;
do {
    printf("Executăm operația...\\n");
    // cod operație
    
    printf("Mai continuați? (d/n): ");
    scanf(" %c", &raspuns);
} while (raspuns == 'd' || raspuns == 'D');`}</pre>
              </div>

              <h3>Comparație WHILE vs DO-WHILE</h3>
              <div className="code-example" data-lang="C++">
                <pre>{`// WHILE - poate să nu se execute
int x = 10;
while (x < 5) {
    printf("Nu se va afișa");
}
// Output: (nimic)

// DO-WHILE - se execută cel puțin o dată
int y = 10;
do {
    printf("Se va afișa o dată");
} while (y < 5);
// Output: "Se va afișa o dată"`}</pre>
              </div>

              <div className="success-box">
                <strong>✅ Când folosim DO-WHILE:</strong>
                <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li>Meniuri interactive (afișăm meniul cel puțin o dată)</li>
                  <li>Validare input (citim cel puțin o dată)</li>
                  <li>Orice situație în care operația trebuie executată cel puțin o dată</li>
                  <li>Când întrebăm "Mai continuăm?" la final</li>
                </ul>
              </div>

              <h3>🎮 Exemplu Interactiv</h3>
              <div className="interactive-example">
                <p><strong>Introdu un număr și vezi cum funcționează bucla DO-WHILE:</strong></p>
                <div className="example-controls">
                  <input 
                    type="number" 
                    className="example-input" 
                    value={interactiveInput}
                    onChange={(e) => setInteractiveInput(e.target.value)}
                    placeholder="Introdu număr..."
                  />
                  <button className="example-btn" onClick={runDoWhileExample}>
                    ▶️ Rulează DO-WHILE
                  </button>
                </div>
                <div className="example-output">
                  {interactiveOutput || '// Apasă butonul pentru a vedea output-ul'}
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  className="btn btn-primary"
                  onClick={() => markComplete('doWhile')}
                >
                  ✓ Marchează ca Completat
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div>
            <div className="theory-section">
              <h2>⚖️ Comparație între Structurile Repetitive</h2>
              
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Caracteristică</th>
                    <th>FOR</th>
                    <th>WHILE</th>
                    <th>DO-WHILE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Când verifică condiția</strong></td>
                    <td>La început</td>
                    <td>La început</td>
                    <td>La sfârșit</td>
                  </tr>
                  <tr>
                    <td><strong>Execuții minime</strong></td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td><strong>Număr iterații</strong></td>
                    <td>Cunoscut în avans</td>
                    <td>Necunoscut</td>
                    <td>Necunoscut</td>
                  </tr>
                  <tr>
                    <td><strong>Inițializare variabilă</strong></td>
                    <td>În antet</td>
                    <td>Înainte de buclă</td>
                    <td>Înainte de buclă</td>
                  </tr>
                  <tr>
                    <td><strong>Incrementare</strong></td>
                    <td>În antet</td>
                    <td>În corp</td>
                    <td>În corp</td>
                  </tr>
                  <tr>
                    <td><strong>Utilizare tipică</strong></td>
                    <td>Parcurgere array-uri</td>
                    <td>Validare, căutare</td>
                    <td>Meniuri, input</td>
                  </tr>
                </tbody>
              </table>

              <h3>Exemple Echivalente</h3>
              <p>Următoarele trei bucle fac exact același lucru:</p>

              <div className="code-example" data-lang="FOR">
                <pre>{`// Versiunea FOR
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}`}</pre>
              </div>

              <div className="code-example" data-lang="WHILE">
                <pre>{`// Versiunea WHILE
int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}`}</pre>
              </div>

              <div className="code-example" data-lang="DO-WHILE">
                <pre>{`// Versiunea DO-WHILE
int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);`}</pre>
              </div>

              <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '1rem' }}>
                <strong>Toate afișează:</strong> 1 2 3 4 5
              </p>

              <h3>🎯 Cum Alegi Bucla Potrivită?</h3>
              
              <div className="info-box">
                <h4>Folosește FOR când:</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Știi exact câte iterații vrei</li>
                  <li>Parcurgi o structură de date (array, listă)</li>
                  <li>Ai nevoie de un contor explicit</li>
                </ul>
              </div>

              <div className="warning-box">
                <h4>Folosește WHILE când:</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Nu știi câte iterații vei face</li>
                  <li>Condiția de oprire depinde de factori externi</li>
                  <li>Poți să nu execuți bucla deloc</li>
                </ul>
              </div>

              <div className="success-box">
                <h4>Folosește DO-WHILE când:</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Trebuie să execuți codul cel puțin o dată</li>
                  <li>Creezi meniuri interactive</li>
                  <li>Validezi input cu reîncercare</li>
                  <li>Întrebi "Mai continuăm?" după execuție</li>
                </ul>
              </div>

              <h3>⚡ Optimizări și Best Practices</h3>
              <div className="code-example" data-lang="Tips">
                <pre>{`// ❌ Rău: calculează lungimea la fiecare iterație
for (int i = 0; i < strlen(text); i++) {
    // ...
}

// ✅ Bine: calculează lungimea o singură dată
int len = strlen(text);
for (int i = 0; i < len; i++) {
    // ...
}

// ❌ Rău: buclă infinită accidentală
int i = 0;
while (i < 10) {
    printf("%d", i);
    // Lipsește i++!
}

// ✅ Bine: nu uita incrementarea!
int i = 0;
while (i < 10) {
    printf("%d", i);
    i++; // Important!
}`}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
