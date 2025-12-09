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
    question: "qs1",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info1",
  },
  {
    question: "qs2",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info2",
  },
  {
    question: "qs3",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info3",
  },
  {
    question: "qs4",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info4",
  },
  {
    question: "qs5",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info5",
  },
  {
    question: "qs6",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info6",
  },
  {
    question: "qs7",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info7",
  },
  {
    question: "qs8",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info8",
  },
  {
    question: "qs9",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info9",
  },
  {
    question: "qs10",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info10",
  },
  {
    question: "qs11",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info11",
  },
  {
    question: "qs12",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info12",
  },
  {
    question: "qs13",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info13",
  },
  {
    question: "qs14",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info14",
  },
  {
    question: "qs15",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info15",
  },
  {
    question: "qs16",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info16",
  },
  {
    question: "qs17",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info17",
  },
  {
    question: "qs18",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info18",
  },
  {
    question: "qs19",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info19",
  },
  {
    question: "qs20",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info20",
  },
  {
    question: "qs21",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info21",
  },
  {
    question: "qs22",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info22",
  },
  {
    question: "qs23",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info23",
  },
  {
    question: "qs24",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info24",
  },
  {
    question: "qs25",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info25",
  },
  {
    question: "qs26",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info26",
  },
  {
    question: "qs27",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info27",
  },
  {
    question: "qs28",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info28",
  },
  {
    question: "qs29",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info29",
  },
  {
    question: "qs30",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info30",
  },
  {
    question: "qs31",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info31",
  },
  {
    question: "qs32",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info32",
  },
  {
    question: "qs33",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info33",
  },
  {
    question: "qs34",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info34",
  },
  {
    question: "qs35",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info35",
  },
  {
    question: "qs36",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info36",
  },
  {
    question: "qs37",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info37",
  },
  {
    question: "qs38",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info38",
  },
  {
    question: "qs39",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "info39",
  },
  {
    question: "qs40",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "info40",
  },
  {
    question: "qs41",
    options: ["1", "2", "3", "4"],
    answer: "1",
    explanation: "info41",
  },
  {
    question: "qs42",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "info42",
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
