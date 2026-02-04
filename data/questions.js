export const quizQuestions = {
  for: [
    {
      question: "Ce va afișa următorul cod?",
      code: `for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}`,
      options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3 4 5", "1 2 3 4"],
      correct: 0,
      explanation: "Bucla FOR începe cu i=0 și continuă atâta timp cât i < 5, incrementând i la fiecare iterație. Deci va afișa: 0 1 2 3 4"
    },
    {
      question: "Câte iterații va face această buclă FOR?",
      code: `for (int i = 10; i > 5; i--) {
    // cod
}`,
      options: ["4", "5", "6", "10"],
      correct: 1,
      explanation: "Bucla începe cu i=10 și scade până când i devine 5 (nu mai este > 5). Iterațiile sunt: 10, 9, 8, 7, 6 = 5 iterații"
    },
    {
      question: "Care este sintaxa corectă pentru o buclă FOR în C?",
      options: [
        "for (i = 0; i < 10; i++)",
        "for i = 0 to 10",
        "for (int i = 0; i < 10; i++)",
        "for i in range(10)"
      ],
      correct: 2,
      explanation: "În C/C++, sintaxa corectă necesită declararea variabilei, condiția și incrementarea între paranteze, separate de punct și virgulă."
    },
    {
      question: "Ce afișează acest cod cu buclă FOR imbricată?",
      code: `for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 2; j++) {
        printf("*");
    }
}`,
      options: ["* * *", "******", "* *\n* *\n* *", "***\n***"],
      correct: 1,
      explanation: "Bucla exterioară rulează de 3 ori, iar pentru fiecare iterație, bucla interioară afișează 2 stele. Total: 3 × 2 = 6 stele consecutive."
    },
    {
      question: "Ce valoare va avea suma după execuția acestui cod?",
      code: `int suma = 0;
for (int i = 1; i <= 4; i++) {
    suma += i;
}`,
      options: ["4", "10", "6", "8"],
      correct: 1,
      explanation: "Suma calculează 1 + 2 + 3 + 4 = 10"
    },
    {
      question: "Care dintre următoarele creează o buclă FOR infinită?",
      options: [
        "for (int i = 0; i < 10; i++)",
        "for (int i = 0; ; i++)",
        "for (;;)",
        "for (int i = 10; i > 0; i--)"
      ],
      correct: 2,
      explanation: "Sintaxa for(;;) creează o buclă infinită deoarece nu are condiție de oprire."
    },
    {
      question: "Ce va afișa acest cod cu pas de 2?",
      code: `for (int i = 0; i < 10; i += 2) {
    printf("%d ", i);
}`,
      options: ["0 2 4 6 8", "2 4 6 8 10", "0 2 4 6 8 10", "1 3 5 7 9"],
      correct: 0,
      explanation: "Bucla incrementează i cu 2 la fiecare pas, pornind de la 0 până când devine >= 10: 0, 2, 4, 6, 8"
    },
    {
      question: "Care este principalul avantaj al buclei FOR față de WHILE?",
      options: [
        "FOR este mai rapidă decât WHILE",
        "FOR este folosită când știm numărul de iterații",
        "WHILE nu poate fi infinită",
        "FOR nu poate avea condiții complexe"
      ],
      correct: 1,
      explanation: "Bucla FOR este preferată când cunoaștem de la început numărul de iterații, deoarece inițializarea, condiția și incrementarea sunt toate specificate în antet."
    }
  ],
  while: [
    {
      question: "Ce va afișa următorul cod cu buclă WHILE?",
      code: `int i = 1;
while (i <= 5) {
    printf("%d ", i);
    i++;
}`,
      options: ["1 2 3 4 5", "0 1 2 3 4", "2 3 4 5 6", "1 2 3 4"],
      correct: 0,
      explanation: "Bucla WHILE începe cu i=1 și afișează valoarea, apoi incrementează până când i devine 6 (nu mai este <= 5)."
    },
    {
      question: "Ce se întâmplă dacă uităm să incrementăm variabila în WHILE?",
      code: `int i = 0;
while (i < 5) {
    printf("%d ", i);
}`,
      options: [
        "Afișează 0 1 2 3 4",
        "Nu afișează nimic",
        "Eroare de compilare",
        "Buclă infinită"
      ],
      correct: 3,
      explanation: "Fără incrementare (i++), variabila i rămâne 0, condiția este mereu adevărată și se creează o buclă infinită."
    },
    {
      question: "Ce valoare va avea n după execuția acestui cod?",
      code: `int n = 1;
while (n < 32) {
    n *= 2;
}`,
      options: ["16", "32", "64", "31"],
      correct: 1,
      explanation: "Bucla dublează n la fiecare iterație: 1→2→4→8→16→32. Când n devine 32, condiția n < 32 devine falsă (32 nu este < 32) și bucla se oprește cu n = 32."
    },
    {
      question: "Când se evaluează condiția într-o buclă WHILE?",
      options: [
        "La sfârșitul fiecărei iterații",
        "La începutul fiecărei iterații",
        "Doar o singură dată",
        "De două ori pe iterație"
      ],
      correct: 1,
      explanation: "În bucla WHILE, condiția se evaluează la ÎNCEPUTUL fiecărei iterații, înainte de a executa corpul buclei."
    },
    {
      question: "Ce afișează acest cod cu break?",
      code: `int i = 10;
while (i > 0) {
    if (i == 5) break;
    printf("%d ", i);
    i--;
}`,
      options: ["10 9 8 7 6", "10 9 8 7 6 5", "10 9 8 7 6 5 4 3 2 1", "5 4 3 2 1"],
      correct: 0,
      explanation: "Bucla afișează numerele de la 10 în jos, dar se oprește (break) când i devine 5, deci afișează: 10 9 8 7 6"
    },
    {
      question: "Care situație este ideală pentru WHILE?",
      options: [
        "Parcurgerea unui array",
        "Validare input până la valoare corectă",
        "Afișarea primelor 10 numere",
        "Calculul factorialului"
      ],
      correct: 1,
      explanation: "WHILE este perfect pentru validare input deoarece nu știm câte încercări vor fi necesare până la o valoare corectă."
    },
    {
      question: "Câte iterații face această buclă WHILE?",
      code: `int i = 0;
while (i < 5) {
    i += 2;
}`,
      options: ["2", "3", "5", "6"],
      correct: 1,
      explanation: "Bucla face 3 iterații: i=0→2, i=2→4, i=4→6. Când i devine 6, condiția i < 5 este falsă."
    },
    {
      question: "Care buclă WHILE este infinită?",
      options: [
        "while (true) { }",
        "while (i < 10) { i++; }",
        "while (x > 0) { x--; }",
        "while (false) { }"
      ],
      correct: 0,
      explanation: "while(true) creează o buclă infinită deoarece condiția este întotdeauna adevărată și nu există instrucțiune break."
    }
  ],
  dowhile: [
    {
      question: "Care este diferența principală între WHILE și DO-WHILE?",
      options: [
        "DO-WHILE este mai rapidă",
        "DO-WHILE se execută cel puțin o dată",
        "WHILE nu poate fi infinită",
        "DO-WHILE nu are condiție"
      ],
      correct: 1,
      explanation: "DO-WHILE evaluează condiția la SFÂRȘIT, deci corpul buclei se execută cel puțin o dată, chiar dacă condiția este falsă de la început."
    },
    {
      question: "Ce va afișa acest cod DO-WHILE?",
      code: `int i = 1;
do {
    printf("%d ", i);
    i++;
} while (i <= 3);`,
      options: ["1 2 3", "1 2", "2 3", "1 2 3 4"],
      correct: 0,
      explanation: "DO-WHILE execută corpul apoi verifică condiția. Afișează 1, apoi 2, apoi 3, apoi verifică dacă 4 <= 3 (fals) și se oprește."
    },
    {
      question: "Ce se întâmplă în acest caz cu condiție falsă?",
      code: `int x = 10;
do {
    printf("Execuție");
} while (x < 5);`,
      options: [
        "Nu se afișează nimic",
        "Se afișează 'Execuție' o dată",
        "Se afișează 'Execuție' de 5 ori",
        "Buclă infinită"
      ],
      correct: 1,
      explanation: "Chiar dacă condiția x < 5 este falsă de la început (10 nu este < 5), DO-WHILE execută corpul cel puțin o dată."
    },
    {
      question: "Care este sintaxa corectă pentru DO-WHILE?",
      options: [
        "do { } while (condiție)",
        "do { } while (condiție);",
        "do while (condiție) { }",
        "while (condiție) do { }"
      ],
      correct: 1,
      explanation: "Sintaxa corectă pentru DO-WHILE necesită punct și virgulă după while(condiție);."
    },
    {
      question: "Când folosim DO-WHILE în locul WHILE?",
      options: [
        "Pentru bucle infinite",
        "Când vrem să executăm codul cel puțin o dată",
        "Când avem mulți pași",
        "Pentru performanță mai bună"
      ],
      correct: 1,
      explanation: "DO-WHILE este ideal pentru meniuri, validări de input și orice situație în care vrem să garantăm execuția cel puțin o dată."
    },
    {
      question: "Ce va afișa acest cod?",
      code: `int i = 5;
do {
    printf("%d ", i);
    i--;
} while (i > 0);`,
      options: ["5 4 3 2 1", "5 4 3 2 1 0", "4 3 2 1", "5 4 3 2"],
      correct: 0,
      explanation: "Bucla afișează și decrementează i de la 5 până când devine 0 (nu mai este > 0): 5 4 3 2 1"
    },
    {
      question: "Pentru ce este perfect DO-WHILE?",
      code: `int optiune;
do {
    printf("1. Start\\n2. Exit\\nAlegere: ");
    scanf("%d", &optiune);
} while (optiune != 2);`,
      options: [
        "Calcul matematic",
        "Sortare",
        "Meniu interactiv",
        "Căutare binară"
      ],
      correct: 2,
      explanation: "DO-WHILE este perfect pentru meniuri interactive deoarece afișează meniul cel puțin o dată și continuă până când utilizatorul alege să iasă."
    },
    {
      question: "Câte iterații face această buclă?",
      code: `int n = 0;
do {
    n += 5;
} while (n < 10);`,
      options: ["1", "2", "3", "0"],
      correct: 1,
      explanation: "Prima iterație: n=0→5. A doua iterație: n=5→10. Apoi 10 < 10 este fals, deci 2 iterații."
    }
  ]
};
