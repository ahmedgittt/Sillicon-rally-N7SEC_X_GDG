import type {
  Challenge,
  PhishingEmail,
  DecoderPuzzle,
  ScamQuizQuestion,
  SocialEngineeringScenario,
  PrivacyPuzzleIssue,
  OsintChallenge,
  CaptchaChallengeData,
} from "./types";

export const CHALLENGE_DATA: Challenge[] = [
  {
    id: "spot-the-scam",
    title: "Spot the Scam Quiz",
    description: "Real-world scenarios to test your scam awareness.",
    instructions:
      "Answer 15 multiple-choice questions about various real-world security scenarios. Your answers will determine your security personality.",
  },
 
];

export const OSINT_CHALLENGES: OsintChallenge[] = [
  {
    id: "osint",
    imageUrl: "https://picsum.photos/seed/eiffel/600/400",
    coords: { lat: 48.8584, lng: 2.2945 },
    clues: [
      "Iconic lattice tower",
      "Located in Paris, France",
      "Champ de Mars",
    ],
    hint: "Eiffel Tower",
  },
  {
    id: "statue-of-liberty",
    imageUrl: "https://picsum.photos/seed/liberty/600/400",
    coords: { lat: 40.6892, lng: -74.0445 },
    clues: [
      "Copper statue on Liberty Island",
      "Gift from France",
      "Located in New York Harbor",
    ],
    hint: "Statue of Liberty",
  },
  {
    id: "sydney-opera-house",
    imageUrl: "https://picsum.photos/seed/sydney/600/400",
    coords: { lat: -33.8568, lng: 151.2153 },
    clues: [
      "Multi-venue performing arts centre",
      "Located in Sydney, Australia",
      "Famous for its shell-like roof design",
    ],
    hint: "Sydney Opera",
  },
];

export const CAPTCHA_CHALLENGES: CaptchaChallengeData[] = [
  {
    id: "simple-text",
    type: "text",
    prompt: "Enter the text as you see it:",
    image: "https://picsum.photos/seed/captcha1/200/70",
    solution: "smwm",
  },
  {
    id: "distorted",
    type: "text",
    prompt: "Enter the distorted text:",
    image: "https://picsum.photos/seed/captcha2/200/70",
    solution: "24WNB",
  },
  {
    id: "image-grid",
    type: "grid",
    prompt: "Select all squares with traffic lights",
    image: "https://picsum.photos/seed/captcha3/300/300",
    gridSize: 3,
    solutions: [1, 4, 7], // 0-indexed grid positions
    solution: [1, 4, 7], // Also add for type compatibility
  },
  {
    id: "slider",
    type: "slider",
    prompt: "Slide the puzzle piece to fit",
    image: "https://picsum.photos/seed/captcha4/300/200",
    piece: "https://picsum.photos/seed/captcha5/64/64",
    solution: 170, // a pixel value
  },
];

export const PHISHING_EMAILS: PhishingEmail[] = [
  {
    id: 1,
    sender: "support@yourbank-alerts.com",
    subject: "URGENT: Suspicious Activity on Your Account!",
    snippet:
      "We have detected unusual login attempts on your account. Please verify your identity immediately...",
    body: '<p>Dear Customer,</p><p>We have detected suspicious activity on your account. To protect your funds, we have temporarily suspended your account. Please click the link below to verify your identity and restore access.</p><p><a href="#" class="text-blue-600 underline">https://yourbank-alerts.com/verify-identity</a></p><p>Thank you,<br/>Your Bank Security Team</p>',
    type: "scam",
    explanation:
      "This is a phishing attempt. The urgent tone, generic greeting, and suspicious link are all red flags.",
    redFlags: ["Urgency", "Suspicious Link", "Generic Greeting"],
  },
  {
    id: 2,
    sender: "no-reply@university.edu",
    subject: "Weekly Campus Newsletter",
    snippet:
      "Find out what's happening on campus this week! Events, news, and more...",
    body: "<p>Hello Student,</p><p>Here is your weekly update on campus events, news, and important deadlines. Check out the new art exhibit at the gallery or sign up for the charity run.</p><p>For more details, visit the official campus portal.</p><p>Best,<br/>The Student Affairs Office</p>",
    type: "safe",
    explanation:
      "This is a legitimate email. It provides general information and directs you to an official, known website without asking for personal info.",
    redFlags: [],
  },
  {
    id: 3,
    sender: "winner@global-lottery.net",
    subject: "Congratulations! You have won $1,000,000!",
    snippet:
      "You have been selected as the grand prize winner in our international lottery. Claim your prize now!",
    body: "<p>DEAR LUCKY WINNER,</p><p>YOU HAVE BEEN RANDOMLY SELECTED TO RECEIVE A GRAND PRIZE OF $1,000,000! To claim your winnings, you must first pay a small processing fee of $250. Please send the fee via wire transfer to the account details below.</p><p>This is a once-in-a-lifetime opportunity!</p>",
    type: "scam",
    explanation:
      'This is a classic "too good to be true" scam. Legitimate lotteries do not ask for a fee to claim a prize.',
    redFlags: ["Too good to be true", "Request for money", "Urgency"],
  },
  // Add more emails to reach 10
  {
    id: 4,
    sender: "hr@corporate-co.com",
    subject: "Action Required: Update Your Payroll Information",
    snippet:
      "Your payroll information is out of date. Click here to update it to ensure you receive your next paycheck.",
    body: '<p>Dear Employee,</p><p>Our records indicate that your payroll information needs to be updated. Please click the link below and log in to our secure portal to make the necessary changes. Failure to do so may result in a delay in your next payment.</p><p><a href="#" class="text-blue-600 underline">http://payroll-update.corporate-co.biz</a></p><p>Thank you,<br/>HR Department</p>',
    type: "scam",
    explanation:
      "The suspicious domain (.biz instead of .com) and the urgent request to enter login credentials are major red flags for a phishing attempt.",
    redFlags: ["Suspicious Link", "Urgency", "Request for credentials"],
  },
  {
    id: 5,
    sender: "delivery-notice@fedex.com",
    subject: "Your package delivery from Amazon has been updated",
    snippet:
      "Your package with tracking number #1Z9999W99999999999 is scheduled for delivery tomorrow.",
    body: "<p>Hi,</p><p>Your package from Amazon is on its way. You can track its progress or manage your delivery options on our official website.</p><p>Tracking Number: 1Z9999W99999999999</p><p>Regards,<br/>FedEx</p>",
    type: "safe",
    explanation:
      "This is a standard, legitimate delivery notification. It comes from an official domain and does not ask for sensitive information.",
    redFlags: [],
  },
];

export const DECODER_PUZZLES: DecoderPuzzle[] = [
  {
    id: "caesar",
    name: "Caesar Cipher (Shift 3)",
    encrypted: "KHOOR ZRUOG",
    solution: "HELLO WORLD",
    hint: "Each letter is shifted forward by 3 places in the alphabet (A becomes D, B becomes E, etc.).",
  },
  {
    id: "reverse",
    name: "Reverse Text",
    encrypted: "drowssap terces",
    solution: "secret password",
    hint: "Read the message backwards.",
  },
  {
    id: "a1z26",
    name: "A1Z26 Cipher",
    encrypted: "8-5-12-12-15",
    solution: "hello",
    hint: "Each number corresponds to a letter's position in the alphabet (A=1, B=2, ...).",
  },
  {
    id: "morse",
    name: "Morse Code",
    encrypted: "... --- ...",
    solution: "sos",
    hint: "This is a famous distress signal. Use a Morse code chart to translate the dots and dashes.",
  },
  {
    id: "substitution",
    name: "Simple Substitution",
    encrypted: "GEXG UYI GEXG",
    solution: "TEST IS TEST",
    hint: "This is a substitution cipher where each letter is consistently replaced by another. Notice the repeated word pattern.",
  },
];

export const SCAM_QUIZ_QUESTIONS: ScamQuizQuestion[] = [
  {
    question: "Les bascules (flip-flops) stockent :",
    options: ["1 octet", "1 bit", "1 kilo-octet", "8 bits"],
    answer: "1 bit",
    explanation: "Une bascule stocke exactement un seul bit d'information.",
  },
  {
    question: "Quelle porte logique donne 1 uniquement lorsque ses deux entrées sont à 1 ?",
    options: ["OR", "AND", "XOR", "NAND"],
    answer: "AND",
    explanation: "Une porte AND ne sort un 1 que lorsque les deux entrées valent 1.",
  },
  {
    question: "Un capteur analogique fournit :",
    options: ["ON/OFF uniquement", "Une valeur continue", "Uniquement la température", "Des valeurs aléatoires"],
    answer: "Une valeur continue",
    explanation: "Les capteurs analogiques produisent une valeur continue (tension variable).",
  },
  {
    question: "La conversion AC → DC utilise :",
    options: ["Un redresseur", "Un condensateur", "Un transistor", "Le groupe ACDC"],
    answer: "Un redresseur",
    explanation: "Un redresseur transforme le courant alternatif en courant continu.",
  },
  {
    question: "Le rôle d'un pont en H (H-Bridge) est :",
    options: ["Charger des batteries", "Piloter un moteur DC dans les deux sens", "Générer du PWM", "Réduire la tension"],
    answer: "Piloter un moteur DC dans les deux sens",
    explanation: "Un pont en H permet d'inverser la polarité pour changer le sens du moteur.",
  },
  {
    question: "La fréquence d'horloge détermine :",
    options: ["La tension", "Le bruit électrique", "La vitesse des opérations numériques", "La température"],
    answer: "La vitesse des opérations numériques",
    explanation: "Plus la fréquence est élevée, plus les instructions sont exécutées rapidement.",
  },
  {
    question: "Une résolution ADC de 10 bits équivaut à :",
    options: ["512 niveaux", "1024 niveaux", "2048 niveaux", "100 niveaux"],
    answer: "1024 niveaux",
    explanation: "10 bits ⇒ 2¹⁰ = 1024 niveaux distincts.",
  },
  {
    question: "Une mémoire non-volatile :",
    options: ["S'efface lorsque l'alimentation coupe", "Garde les données sans alimentation", "Est très lente", "Est utilisée seulement dans les GPU"],
    answer: "Garde les données sans alimentation",
    explanation: "Les mémoires non-volatiles conservent les données même hors tension.",
  },
  {
    question: "KiCad ou Altium sert principalement à :",
    options: ["Dessiner des schémas", "Faire de la 3D", "Concevoir des PCB", "Monter des vidéos"],
    answer: "Concevoir des PCB",
    explanation: "Ce sont des logiciels professionnels de conception de circuits imprimés.",
  },
  {
    question: "Quel capteur mesure l'accélération ?",
    options: ["DHT11", "MPU6050", "HC-SR04", "MQ-2"],
    answer: "MPU6050",
    explanation: "Le MPU6050 contient un accéléromètre et un gyroscope.",
  },
  {
    question: "Quel protocole est le plus rapide ?",
    options: ["SPI", "I²C", "UART", "MODBUS"],
    answer: "SPI",
    explanation: "SPI est le protocole série le plus rapide parmi ceux listés.",
  },
  {
    question: "Le PWM sert à :",
    options: ["Convertir AC en DC", "Encoder des données", "Contrôler vitesse/luminosité", "Stocker des variables"],
    answer: "Contrôler vitesse/luminosité",
    explanation: "Le PWM module la puissance délivrée aux moteurs ou LEDs.",
  },
  {
    question: "Pourquoi utiliser plusieurs broches pour les feux tricolores ?",
    options: ["Chaque LED doit être contrôlée indépendamment", "Les broches analogiques sont inutilisables", "Pour réduire la consommation", "Pour connecter le servo"],
    answer: "Chaque LED doit être contrôlée indépendamment",
    explanation: "Chaque couleur doit être allumée/éteinte séparément.",
  },
  {
    question: "La fonction delay() fait :",
    options: ["Changer les couleurs", "Mettre le programme en pause", "Mesurer une tension", "Faire tourner le servo"],
    answer: "Mettre le programme en pause",
    explanation: "delay() stoppe l'exécution pendant un temps donné.",
  },
  {
    question: "Les broches utilisées pour les LEDs sont :",
    options: ["Analogiques", "Numériques (Digital)", "RX/TX", "Power"],
    answer: "Numériques (Digital)",
    explanation: "Les LED sont pilotées en HIGH/LOW via des pins digitales.",
  },
  {
    question: "Un servo reçoit :",
    options: ["Un signal PWM", "Une tension analogique", "Un signal HIGH", "Une commande série"],
    answer: "Un signal PWM",
    explanation: "Le servo utilise la largeur d'impulsion (PWM) pour définir l'angle.",
  },
  {
    question: "Une impulsion de 1,5 ms correspond à :",
    options: ["0°", "90°", "180°", "45°"],
    answer: "90°",
    explanation: "1.5 ms = position centrale d'un servo (environ 90°).",
  },
  {
    question: "La borne GND + 5V du servo sert à :",
    options: ["Communiquer", "Fournir alimentation + référence", "Générer le PWM", "N'est pas nécessaire"],
    answer: "Fournir alimentation + référence",
    explanation: "Le servo fonctionne avec 5V et une masse commune.",
  },
  {
    question: "void setup() s'exécute :",
    options: ["Lorsqu'on appuie sur un bouton", "Une seule fois au démarrage", "En boucle", "Toutes les 100 ms"],
    answer: "Une seule fois au démarrage",
    explanation: "setup() initialise le programme et ne tourne qu'une fois.",
  },
  {
    question: "Quelle carte utilise l'ATmega328P ?",
    options: ["ESP32", "Arduino Mega", "Arduino UNO", "Raspberry Pi Pico"],
    answer: "Arduino UNO",
    explanation: "L'Arduino UNO est basé sur le microcontrôleur ATmega328P.",
  },
  {
    question: "Qu'est-ce qui N'EST PAS un microcontrôleur ?",
    options: ["NXP LPC", "ARM Cortex-M3", "ESP32", "Arduino UNO"],
    answer: "ARM Cortex-M3",
    explanation: "Cortex-M3 est un cœur processeur, pas un microcontrôleur complet.",
  },
  {
    question: "En Python, l'indentation utilise :",
    options: ["Tabulations/espaces", "Points-virgules", "Accolades", "Parenthèses"],
    answer: "Tabulations/espaces",
    explanation: "L'indentation définit les blocs de code en Python.",
  },
  {
    question: "En C/C++, == signifie :",
    options: ["Affectation", "Comparaison", "Suppression", "Conversion"],
    answer: "Comparaison",
    explanation: "== compare deux valeurs.",
  },
  {
    question: "Un type entier en C est :",
    options: ["float", "char", "double", "int"],
    answer: "int",
    explanation: "int représente un nombre entier.",
  },
  {
    question: "Bibliothèque Python pour les GPIO du Raspberry Pi :",
    options: ["Numpy", "Pandas", "RPi.GPIO", "Flask"],
    answer: "RPi.GPIO",
    explanation: "RPi.GPIO permet de contrôler les broches GPIO du Raspberry Pi.",
  },
  {
    question: "Un compilateur :",
    options: ["Convertit le code en langage machine", "Mesure une tension", "Stocke des fichiers", "Alimente un microcontrôleur"],
    answer: "Convertit le code en langage machine",
    explanation: "Le compilateur transforme le code source en programme exécutable.",
  },
  {
    question: "Mémoire non volatile :",
    options: ["S'efface sans alimentation", "Garde les données sans alimentation", "Très lente", "Utilisée uniquement dans les GPU"],
    answer: "Garde les données sans alimentation",
    explanation: "Elle conserve les données même hors tension.",
  },
  {
    question: "Le but de l'IoT est :",
    options: ["Connecter des objets à Internet", "Augmenter la fréquence CPU", "Remplacer les ordinateurs", "Améliorer les écrans"],
    answer: "Connecter des objets à Internet",
    explanation: "L'IoT relie les objets physiques au réseau pour échanger des données.",
  },
  {
    question: "Protocole IoT léger le plus utilisé :",
    options: ["HTTP", "FTP", "MQTT", "SMTP"],
    answer: "MQTT",
    explanation: "MQTT est ultra-léger et très adapté aux objets connectés.",
  },
  {
    question: "Le Machine Learning repose sur :",
    options: ["Des règles manuelles", "Des motifs dans les données", "Des sorties aléatoires", "La vitesse du réseau"],
    answer: "Des motifs dans les données",
    explanation: "Le ML apprend automatiquement à partir de données.",
  },
  {
    question: "Un système embarqué est :",
    options: ["Un PC gamer", "Une machine avec plusieurs GPU", "Un système dédié à une tâche", "Une application mobile"],
    answer: "Un système dédié à une tâche",
    explanation: "Un système embarqué réalise une tâche spécifique.",
  },
  {
    question: "Une puce TPM sert à :",
    options: ["Stocker des clés cryptographiques", "Refroidir le processeur", "Accélérer la RAM", "Stocker de la musique"],
    answer: "Stocker des clés cryptographiques",
    explanation: "TPM sécurise les clés et opérations cryptographiques.",
  },
  {
    question: "L'IA pour les images utilise :",
    options: ["CNN", "PID", "LDO", "UART"],
    answer: "CNN",
    explanation: "Les réseaux convolutifs (CNN) sont conçus pour le traitement d'images.",
  },
  {
    question: "Un actionneur robotique est :",
    options: ["Un capteur", "Un élément qui génère un mouvement", "Un contrôleur", "Une interface de communication"],
    answer: "Un élément qui génère un mouvement",
    explanation: "Un actionneur crée un mouvement physique.",
  },
  {
    question: "Un robot quadrupède possède :",
    options: ["2 pattes", "4 pattes", "6 pattes", "Des roues"],
    answer: "4 pattes",
    explanation: "« Quad » signifie quatre : un quadrupède a 4 pattes.",
  },
  {
    question: "Capteur utilisé pour un robot suiveur de ligne :",
    options: ["Capteur de flamme", "IR réfléchi", "GPS", "Ultrason"],
    answer: "IR réfléchi",
    explanation: "Les capteurs IR détectent la différence de contraste au sol.",
  },
  {
    question: "Une IMU mesure :",
    options: ["Le Wi-Fi", "L'orientation et l'accélération", "La tension", "La température"],
    answer: "L'orientation et l'accélération",
    explanation: "L'IMU combine gyroscope + accéléromètre.",
  },
  {
    question: "Les degrés de liberté d'un robot désignent :",
    options: ["L'alimentation", "Les mouvements indépendants possibles", "La vitesse CPU", "Le nombre de capteurs"],
    answer: "Les mouvements indépendants possibles",
    explanation: "DOF = nombre de mouvements indépendants.",
  },
  {
    question: "Un servomoteur contient :",
    options: ["Un moteur seul", "Un moteur + engrenages + contrôle", "Un moteur + LED", "Un moteur + capteur température"],
    answer: "Un moteur + engrenages + contrôle",
    explanation: "Le servo inclut un contrôleur interne et une réduction mécanique.",
  },
  {
    question: "Un contrôleur PID sert à :",
    options: ["Contrôle précis", "Charger des batteries", "Détecter des couleurs", "Générer des mouvements aléatoires"],
    answer: "Contrôle précis",
    explanation: "PID permet un contrôle stable de position/vitesse/température.",
  },
  {
    question: "La cinématique d'un manipulateur traite :",
    options: ["La consommation d'énergie", "La géométrie du mouvement", "Les décisions IA", "La gestion batterie"],
    answer: "La géométrie du mouvement",
    explanation: "La cinématique décrit le mouvement sans étudier les forces.",
  },
  {
    question: "Qu'est-ce qui n'est PAS un logiciel de CAO ?",
    options: ["SOLIDWORKS", "CATIA", "AUTOMGEN", "AUTOCAD"],
    answer: "AUTOMGEN",
    explanation: "AUTOMGEN est un logiciel de simulation d'automatisme, pas de CAO.",
  },
];

export const SOCIAL_ENGINEERING_SCENARIOS: SocialEngineeringScenario[] = [
  {
    scenario:
      "Someone follows you into a secure university building, saying, 'I forgot my ID badge, can you let me in?'",
    type: "Tailgating",
    options: [
      {
        text: "Hold the door open for them.",
        isCorrect: false,
        explanation:
          "This is tailgating. You could be letting an unauthorized person into a secure area.",
      },
      {
        text: "Apologize and say you can't, directing them to the main entrance/reception.",
        isCorrect: true,
        explanation:
          "Correct. Always follow security policy and never let someone piggyback on your access.",
      },
    ],
  },
  {
    scenario:
      "You receive an email with a PDF attachment named 'Updated_Company_Holiday_Schedule.pdf' from an unknown sender.",
    type: "Baiting",
    options: [
      {
        text: "Open the PDF to see the new schedule.",
        isCorrect: false,
        explanation:
          "The attachment could contain malware. Never open unexpected attachments from unknown senders.",
      },
      {
        text: "Delete the email without opening the attachment.",
        isCorrect: true,
        explanation:
          "This is the safest action. If you were expecting a schedule, verify with the source through official channels.",
      },
    ],
  },
  {
    scenario:
      "A person in a convincing uniform asks for your password to 'fix a network issue on your computer'.",
    type: "Pretexting",
    options: [
      {
        text: "Give them the password; they look official.",
        isCorrect: false,
        explanation:
          "Never share your password. Legitimate IT staff have other ways to access systems and will not ask for your password.",
      },
      {
        text: "Refuse and offer to call the official IT helpdesk to verify their request.",
        isCorrect: true,
        explanation:
          "Correct. Always verify such requests through official channels. The uniform could be fake.",
      },
    ],
  },
  // Add more to reach 10
  {
    scenario:
      "An online 'friend' you've never met asks for $50, promising to pay you back double next week.",
    type: "Quid Pro Quo",
    options: [
      {
        text: "Send them the money; it's a small amount to help a friend.",
        isCorrect: false,
        explanation:
          "This is likely a scam. Be wary of anyone asking for money online, especially with promises of a larger return.",
      },
      {
        text: "Politely decline the request.",
        isCorrect: true,
        explanation:
          "Correct. It's important to protect your finances and be skeptical of requests for money from online acquaintances.",
      },
    ],
  },
];

export const PRIVACY_PUZZLE_ISSUES: PrivacyPuzzleIssue[] = [
  {
    id: "location",
    uiText: "Location Sharing: Enabled for all posts",
    explanation:
      "Disabling automatic location tagging prevents others from tracking your movements.",
    area: "posts",
  },
  {
    id: "profile-public",
    uiText: "Profile Visibility: Public",
    explanation:
      "Setting your profile to private ensures only approved followers can see your content.",
    area: "profile",
  },
  {
    id: "email-visible",
    uiText: "Email Visibility: Everyone",
    explanation:
      "Hiding your email address reduces spam and phishing attempts.",
    area: "contact",
  },
  {
    id: "tag-approval",
    uiText: "Tag Review: Off",
    explanation:
      "Enabling tag review lets you approve photos you're tagged in before they appear on your profile.",
    area: "tags",
  },
  {
    id: "friend-list",
    uiText: "Friend List: Visible to Everyone",
    explanation:
      "Hiding your friend list can prevent scammers from targeting your connections.",
    area: "friends",
  },
  {
    id: "search-indexing",
    uiText: "Search Engine Indexing: On",
    explanation:
      "Turning this off prevents your profile from appearing in external search engine results.",
    area: "search",
  },
  {
    id: "data-sharing",
    uiText: "Third-Party App Access: All apps",
    explanation:
      "Regularly review and remove unnecessary third-party app permissions to limit data sharing.",
    area: "apps",
  },
  {
    id: "face-recognition",
    uiText: "Face Recognition: On",
    explanation:
      "Disabling face recognition can prevent the platform from automatically identifying you in photos.",
    area: "photos",
  },
  {
    id: "activity-status",
    uiText: "Activity Status: On",
    explanation:
      "Turning off your activity status prevents others from seeing when you are online.",
    area: "chat",
  },
  {
    id: "contact-sync",
    uiText: "Contact Syncing: Enabled",
    explanation:
      "Disabling contact syncing stops the app from continuously uploading your phone's address book.",
    area: "contacts",
  },
];
