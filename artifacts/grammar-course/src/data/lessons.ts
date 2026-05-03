export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Example = {
  english: string;
  urdu: string;
};

export type Lesson = {
  id: string;
  level: "beginner" | "intermediate" | "advanced";
  order: number;
  title: string;
  summary: string;
  rule: string;
  examples: Example[];
  quiz: QuizQuestion[];
};

export type Level = {
  id: "beginner" | "intermediate" | "advanced";
  title: string;
  description: string;
  color: string;
  totalLessons: number;
};

export const levels: Level[] = [
  {
    id: "beginner",
    title: "Beginner",
    description: "Start from the very basics. Learn parts of speech, sentence types, articles, and essential tenses.",
    color: "blue",
    totalLessons: 6,
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Build on the basics. Master continuous tenses, modal verbs, active/passive voice, and question forms.",
    color: "gold",
    totalLessons: 6,
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "Achieve fluency. Study perfect tenses, conditionals, reported speech, clauses, and complex grammar.",
    color: "green",
    totalLessons: 6,
  },
];

export const lessons: Lesson[] = [
  // ─── BEGINNER ────────────────────────────────────────────────────────────────
  {
    id: "beginner-1",
    level: "beginner",
    order: 1,
    title: "Parts of Speech",
    summary: "The eight building blocks of every English sentence.",
    rule: `Every word in English belongs to one of eight categories called "Parts of Speech." Understanding them helps you build correct sentences.

1. **Noun** — Names a person, place, thing, or idea. (Ali, Karachi, book, happiness)
2. **Pronoun** — Replaces a noun. (he, she, it, they, we)
3. **Verb** — Shows action or state of being. (run, eat, is, seem)
4. **Adjective** — Describes a noun. (tall, beautiful, cold)
5. **Adverb** — Describes a verb, adjective, or another adverb. (quickly, very, always)
6. **Preposition** — Shows relationship between words. (in, on, at, by, with)
7. **Conjunction** — Joins words or clauses. (and, but, because, or)
8. **Interjection** — Expresses sudden emotion. (Oh! Wow! Alas!)`,
    examples: [
      { english: "Ali runs quickly to the store.", urdu: "علی تیزی سے دکان کی طرف دوڑتا ہے۔" },
      { english: "She is a beautiful and intelligent girl.", urdu: "وہ ایک خوبصورت اور ذہین لڑکی ہے۔" },
      { english: "The book is on the table.", urdu: "کتاب میز پر ہے۔" },
      { english: "Wow! That is an amazing result.", urdu: "واہ! یہ ایک شاندار نتیجہ ہے۔" },
      { english: "He speaks English but she speaks Urdu.", urdu: "وہ انگریزی بولتا ہے لیکن وہ اردو بولتی ہے۔" },
    ],
    quiz: [
      {
        question: "Which word is a NOUN in: 'The cat sleeps.'?",
        options: ["The", "cat", "sleeps", "quickly"],
        correctIndex: 1,
        explanation: "'Cat' is a noun — it names an animal (a thing).",
      },
      {
        question: "Which part of speech is the word 'beautiful'?",
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correctIndex: 2,
        explanation: "'Beautiful' describes a noun, so it is an adjective.",
      },
      {
        question: "Identify the CONJUNCTION: 'I was tired but I finished the work.'",
        options: ["tired", "but", "finished", "work"],
        correctIndex: 1,
        explanation: "'But' joins two clauses — it is a conjunction.",
      },
    ],
  },
  {
    id: "beginner-2",
    level: "beginner",
    order: 2,
    title: "Types of Sentences",
    summary: "Four sentence types every English learner must know.",
    rule: `English sentences are grouped into four types based on their purpose:

1. **Declarative** — Makes a statement. Ends with a period (.)
   → "The sky is blue."

2. **Interrogative** — Asks a question. Ends with a question mark (?)
   → "Is the sky blue?"

3. **Imperative** — Gives a command or request. Often starts with a verb.
   → "Open the window."

4. **Exclamatory** — Expresses strong emotion. Ends with an exclamation mark (!)
   → "What a beautiful view!"`,
    examples: [
      { english: "I study English every day. (Declarative)", urdu: "میں ہر روز انگریزی پڑھتا ہوں۔ (بیانیہ)" },
      { english: "Do you speak English? (Interrogative)", urdu: "کیا آپ انگریزی بولتے ہیں؟ (سوالیہ)" },
      { english: "Please close the door. (Imperative)", urdu: "براہ کرم دروازہ بند کریں۔ (حکمیہ)" },
      { english: "How wonderful this place is! (Exclamatory)", urdu: "یہ جگہ کتنی خوبصورت ہے! (جذباتی)" },
      { english: "She passed her exam. (Declarative)", urdu: "وہ اپنا امتحان پاس کر گئی۔ (بیانیہ)" },
    ],
    quiz: [
      {
        question: "What type of sentence is: 'Bring me a glass of water.'?",
        options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        correctIndex: 2,
        explanation: "It gives a command — so it is an Imperative sentence.",
      },
      {
        question: "Which sentence is INTERROGATIVE?",
        options: ["She is happy.", "What a surprise!", "Are you coming?", "Sit down."],
        correctIndex: 2,
        explanation: "'Are you coming?' asks a question — it is interrogative.",
      },
      {
        question: "Exclamatory sentences end with:",
        options: ["A period (.)", "A question mark (?)", "A comma (,)", "An exclamation mark (!)"],
        correctIndex: 3,
        explanation: "Exclamatory sentences express strong feelings and always end with an exclamation mark (!).",
      },
    ],
  },
  {
    id: "beginner-3",
    level: "beginner",
    order: 3,
    title: "Simple Present Tense",
    summary: "Used for habits, facts, and general truths.",
    rule: `The Simple Present tense describes habits, routines, facts, and general truths.

**Structure:**
- I / You / We / They + base verb → "I eat."
- He / She / It + verb + **s/es** → "She eats."

**When to use:**
- Daily habits: "He goes to school every day."
- General facts: "Water boils at 100°C."
- Permanent states: "She lives in Lahore."

**Negative:** Subject + do/does + not + base verb
→ "I do not eat meat." / "She does not like coffee."

**Question:** Do/Does + subject + base verb?
→ "Do you study?" / "Does she play cricket?"`,
    examples: [
      { english: "I drink tea every morning.", urdu: "میں ہر صبح چائے پیتا ہوں۔" },
      { english: "She teaches English at school.", urdu: "وہ اسکول میں انگریزی پڑھاتی ہے۔" },
      { english: "They do not play cricket on Sundays.", urdu: "وہ اتوار کو کرکٹ نہیں کھیلتے۔" },
      { english: "Does he speak Urdu?", urdu: "کیا وہ اردو بولتا ہے؟" },
      { english: "The sun rises in the east.", urdu: "سورج مشرق میں طلوع ہوتا ہے۔" },
    ],
    quiz: [
      {
        question: "Which sentence is correct Simple Present?",
        options: ["She go to school.", "She goes to school.", "She going to school.", "She went to school."],
        correctIndex: 1,
        explanation: "With he/she/it, we add -s or -es to the verb. 'Go' becomes 'goes'.",
      },
      {
        question: "Choose the correct negative: 'They ___ like cold weather.'",
        options: ["does not", "do not", "did not", "are not"],
        correctIndex: 1,
        explanation: "With 'they' (plural), we use 'do not' (not 'does not').",
      },
      {
        question: "Which situation uses Simple Present?",
        options: ["Something happening right now", "A general fact or habit", "Something finished in the past", "A future plan"],
        correctIndex: 1,
        explanation: "Simple Present is used for habits, routines, and general facts.",
      },
    ],
  },
  {
    id: "beginner-4",
    level: "beginner",
    order: 4,
    title: "Simple Past Tense",
    summary: "Used for completed actions at a specific time in the past.",
    rule: `The Simple Past tense describes actions that happened and finished in the past.

**Structure (Regular verbs):** Subject + verb + **-ed**
→ "I walked." / "She talked."

**Structure (Irregular verbs):** Subject + irregular past form
→ "I went." / "He ate." / "They saw."

**Negative:** Subject + did + not + base verb
→ "I did not go." / "She did not eat."

**Question:** Did + subject + base verb?
→ "Did you call him?" / "Did she sleep well?"

**Common irregular verbs:**
go → went | eat → ate | see → saw | come → came | take → took | give → gave | write → wrote`,
    examples: [
      { english: "I visited Lahore last year.", urdu: "میں نے پچھلے سال لاہور کا دورہ کیا۔" },
      { english: "She wrote a letter to her friend.", urdu: "اس نے اپنی دوست کو خط لکھا۔" },
      { english: "They did not come to the party.", urdu: "وہ پارٹی میں نہیں آئے۔" },
      { english: "Did he finish the homework?", urdu: "کیا اس نے ہوم ورک مکمل کیا؟" },
      { english: "We ate biryani at the restaurant.", urdu: "ہم نے ریستوران میں بریانی کھائی۔" },
    ],
    quiz: [
      {
        question: "What is the past tense of 'go'?",
        options: ["goed", "gone", "went", "goes"],
        correctIndex: 2,
        explanation: "'Go' is irregular. Its simple past form is 'went'.",
      },
      {
        question: "Choose the correct sentence:",
        options: ["She not did sleep.", "She did not slept.", "She did not sleep.", "She does not slept."],
        correctIndex: 2,
        explanation: "Negative in Simple Past: did + not + base verb. 'Sleep' stays as 'sleep' (not 'slept').",
      },
      {
        question: "Simple Past is used for:",
        options: ["Ongoing habits", "General facts", "Completed past actions", "Future plans"],
        correctIndex: 2,
        explanation: "Simple Past describes actions that were completed at a specific point in the past.",
      },
    ],
  },
  {
    id: "beginner-5",
    level: "beginner",
    order: 5,
    title: "Articles: a, an, the",
    summary: "Three small words that make a big difference in English.",
    rule: `Articles tell us whether a noun is specific or general.

**Indefinite Articles: a / an**
- Used before singular, non-specific nouns.
- **"a"** → before consonant sounds: a book, a dog, a university (u sounds like 'yoo')
- **"an"** → before vowel sounds: an apple, an hour (h is silent), an egg

**Definite Article: the**
- Used before specific nouns (both singular and plural).
- Used when both speaker and listener know what is meant.
- "Please close the door." (a specific door)
- "The sun is bright today."

**No Article:**
- Before general plural nouns: "Dogs are loyal."
- Before names: "Ali lives in Karachi."`,
    examples: [
      { english: "I saw a dog in the park.", urdu: "میں نے پارک میں ایک کتا دیکھا۔" },
      { english: "She is an honest person.", urdu: "وہ ایک ایماندار انسان ہے۔" },
      { english: "Please turn off the fan.", urdu: "براہ کرم پنکھا بند کریں۔" },
      { english: "The earth revolves around the sun.", urdu: "زمین سورج کے گرد گھومتی ہے۔" },
      { english: "He wants to be a doctor.", urdu: "وہ ڈاکٹر بننا چاہتا ہے۔" },
    ],
    quiz: [
      {
        question: "Choose the correct article: 'She ate ___ apple.'",
        options: ["a", "an", "the", "no article"],
        correctIndex: 1,
        explanation: "'Apple' starts with a vowel sound, so we use 'an'.",
      },
      {
        question: "Which sentence uses 'the' correctly?",
        options: ["She is the honest.", "Open the door, please.", "He is a the student.", "A sun is bright."],
        correctIndex: 1,
        explanation: "'The door' is specific — both speaker and listener know which door is meant.",
      },
      {
        question: "When do we NOT use an article?",
        options: ["Before a specific noun", "Before a vowel sound", "Before general plural nouns", "Before singular nouns"],
        correctIndex: 2,
        explanation: "We use no article before general plural nouns: 'Dogs are loyal.' (dogs in general)",
      },
    ],
  },
  {
    id: "beginner-6",
    level: "beginner",
    order: 6,
    title: "Singular and Plural Nouns",
    summary: "How to change nouns from one to many.",
    rule: `Nouns can be singular (one) or plural (more than one).

**Regular Plurals — add -s:**
book → books | cat → cats | table → tables

**Words ending in -s, -sh, -ch, -x, -z — add -es:**
bus → buses | brush → brushes | match → matches | box → boxes

**Words ending in consonant + y — change y to i, add -es:**
city → cities | baby → babies | story → stories

**Words ending in -f or -fe — change to -ves:**
leaf → leaves | knife → knives | wife → wives

**Irregular Plurals (must memorize):**
man → men | woman → women | child → children | foot → feet | tooth → teeth | mouse → mice

**Unchanged plurals:**
sheep → sheep | deer → deer | fish → fish`,
    examples: [
      { english: "I have two books on my desk.", urdu: "میرے میز پر دو کتابیں ہیں۔" },
      { english: "The children are playing in the garden.", urdu: "بچے باغ میں کھیل رہے ہیں۔" },
      { english: "There are three buses at the stop.", urdu: "اسٹاپ پر تین بسیں ہیں۔" },
      { english: "The leaves fall in autumn.", urdu: "پتے خزاں میں گرتے ہیں۔" },
      { english: "The women are discussing the matter.", urdu: "عورتیں معاملے پر بات کر رہی ہیں۔" },
    ],
    quiz: [
      {
        question: "What is the plural of 'city'?",
        options: ["citys", "cityes", "cities", "cityes"],
        correctIndex: 2,
        explanation: "Words ending in consonant + y: change y to i and add -es. City → cities.",
      },
      {
        question: "Which is an IRREGULAR plural?",
        options: ["cats", "boxes", "children", "books"],
        correctIndex: 2,
        explanation: "'Children' is the irregular plural of 'child'. You cannot predict it from a rule.",
      },
      {
        question: "What is the plural of 'leaf'?",
        options: ["leafs", "leafs", "leaves", "leafes"],
        correctIndex: 2,
        explanation: "Words ending in -f or -fe: change to -ves. Leaf → leaves.",
      },
    ],
  },

  // ─── INTERMEDIATE ─────────────────────────────────────────────────────────────
  {
    id: "intermediate-1",
    level: "intermediate",
    order: 1,
    title: "Present Continuous Tense",
    summary: "Describes actions happening right now or around this time.",
    rule: `The Present Continuous tense describes:
- Actions happening at this very moment
- Temporary situations
- Future arrangements (with a time expression)

**Structure:** Subject + am/is/are + verb + **-ing**

- I am eating.
- She is studying.
- They are playing.

**Spelling rules for -ing:**
- Most verbs: add -ing (walk → walking)
- Verbs ending in -e: drop e, add -ing (make → making)
- Short verbs ending in consonant-vowel-consonant: double the last consonant (run → running, sit → sitting)

**Negative:** Subject + am/is/are + not + verb-ing
**Question:** Am/Is/Are + subject + verb-ing?`,
    examples: [
      { english: "I am reading a grammar book right now.", urdu: "میں ابھی ایک گرامر کی کتاب پڑھ رہا ہوں۔" },
      { english: "She is not sleeping; she is studying.", urdu: "وہ سو نہیں رہی، وہ پڑھ رہی ہے۔" },
      { english: "Are they coming to the wedding?", urdu: "کیا وہ شادی میں آ رہے ہیں؟" },
      { english: "The children are running in the park.", urdu: "بچے پارک میں دوڑ رہے ہیں۔" },
      { english: "We are planning a trip to Islamabad.", urdu: "ہم اسلام آباد کا سفر پلان کر رہے ہیں۔" },
    ],
    quiz: [
      {
        question: "Which sentence is correct Present Continuous?",
        options: ["She run every day.", "She is running right now.", "She runs now.", "She runned fast."],
        correctIndex: 1,
        explanation: "Present Continuous: is/am/are + verb-ing. 'She is running' — correct.",
      },
      {
        question: "What is the -ing form of 'sit'?",
        options: ["siting", "sitting", "sitteing", "sits"],
        correctIndex: 1,
        explanation: "Short verb ending in consonant-vowel-consonant: double the last consonant. sit → sitting.",
      },
      {
        question: "Choose the negative form: 'He ___ watching TV.'",
        options: ["is not", "does not", "did not", "are not"],
        correctIndex: 0,
        explanation: "With 'he', use 'is'. Negative: he is not watching TV.",
      },
    ],
  },
  {
    id: "intermediate-2",
    level: "intermediate",
    order: 2,
    title: "Past Continuous Tense",
    summary: "Describes an action that was ongoing at a specific past moment.",
    rule: `The Past Continuous tense describes:
- An action that was in progress at a specific time in the past
- A longer background action interrupted by a shorter one

**Structure:** Subject + was/were + verb + **-ing**

- I was sleeping at 10 pm.
- She was cooking when he arrived.
- They were watching a match.

**was** → I, he, she, it
**were** → you, we, they

**Common pattern:**
"I was reading when the phone rang."
(Past Continuous = background action | Simple Past = interrupting action)

**Negative:** was/were + not + verb-ing
**Question:** Was/Were + subject + verb-ing?`,
    examples: [
      { english: "I was studying when she called me.", urdu: "جب اس نے مجھے فون کیا تو میں پڑھ رہا تھا۔" },
      { english: "They were playing cricket at 5 o'clock.", urdu: "وہ پانچ بجے کرکٹ کھیل رہے تھے۔" },
      { english: "She was not listening during the lecture.", urdu: "وہ لیکچر کے دوران سن نہیں رہی تھی۔" },
      { english: "What were you doing last night at 9 pm?", urdu: "تم کل رات 9 بجے کیا کر رہے تھے؟" },
      { english: "It was raining when we left the house.", urdu: "جب ہم گھر سے نکلے تو بارش ہو رہی تھی۔" },
    ],
    quiz: [
      {
        question: "Choose the correct Past Continuous: 'She ___ a book when I arrived.'",
        options: ["read", "was reading", "is reading", "reads"],
        correctIndex: 1,
        explanation: "'Was reading' = Past Continuous — an ongoing background action (reading) interrupted by arrival.",
      },
      {
        question: "Which pronoun uses 'were' in Past Continuous?",
        options: ["He", "She", "It", "They"],
        correctIndex: 3,
        explanation: "'They' is plural — we use 'were'. They were playing.",
      },
      {
        question: "What does Past Continuous often combine with?",
        options: ["Present Simple", "Simple Past", "Future Tense", "Perfect Tense"],
        correctIndex: 1,
        explanation: "Past Continuous (background) + Simple Past (interruption): 'I was sleeping when she arrived.'",
      },
    ],
  },
  {
    id: "intermediate-3",
    level: "intermediate",
    order: 3,
    title: "Future Tense: will and going to",
    summary: "Two ways to talk about the future — and when to use each.",
    rule: `English has two main ways to express the future:

**1. will + base verb**
Used for:
- Spontaneous decisions: "I'll help you." (decided just now)
- Predictions without evidence: "It will rain tomorrow."
- Promises/offers: "I will call you."

Structure: Subject + will + base verb
Negative: Subject + will + not (won't) + base verb

**2. going to + base verb**
Used for:
- Plans already decided: "I am going to visit Lahore next week."
- Predictions with evidence: "Look at those clouds — it's going to rain."

Structure: Subject + am/is/are + going to + base verb

**Key difference:**
- "I'll have tea." (spontaneous decision)
- "I'm going to have tea." (you already decided before)`,
    examples: [
      { english: "I will help you with your homework.", urdu: "میں تمہاری ہوم ورک میں مدد کروں گا۔" },
      { english: "She is going to visit her grandmother this weekend.", urdu: "وہ اس ہفتے کے آخر میں اپنی نانی سے ملنے جائے گی۔" },
      { english: "They will not come to the meeting.", urdu: "وہ میٹنگ میں نہیں آئیں گے۔" },
      { english: "Look at those clouds — it is going to rain.", urdu: "ان بادلوں کو دیکھو — بارش ہونے والی ہے۔" },
      { english: "Will you be at the office tomorrow?", urdu: "کیا تم کل دفتر میں ہو گے؟" },
    ],
    quiz: [
      {
        question: "Which sentence shows a SPONTANEOUS decision?",
        options: ["I am going to study medicine.", "I'll get the door — you sit.", "She will travel next month.", "They are going to leave."],
        correctIndex: 1,
        explanation: "'I'll get the door' is decided at the moment of speaking — that's 'will' for spontaneous decisions.",
      },
      {
        question: "Complete with 'going to': 'We ___ visit Murree next month.' (already planned)",
        options: ["will", "are going to", "shall", "would"],
        correctIndex: 1,
        explanation: "Already-made plans use 'going to': We are going to visit Murree.",
      },
      {
        question: "What is the negative form of 'will'?",
        options: ["will not / won't", "is not", "would not", "shall not"],
        correctIndex: 0,
        explanation: "The negative of 'will' is 'will not' or contracted 'won't'.",
      },
    ],
  },
  {
    id: "intermediate-4",
    level: "intermediate",
    order: 4,
    title: "Modal Verbs",
    summary: "Special verbs that express ability, possibility, necessity, and permission.",
    rule: `Modal verbs are helping verbs that add meaning to the main verb. They never change form and are always followed by a bare infinitive (base verb).

**can** — ability or permission: "She can speak French." / "Can I leave?"
**could** — past ability or polite request: "He could swim at age 5." / "Could you help me?"
**should** — advice or recommendation: "You should eat healthy food."
**must** — strong obligation or certainty: "You must wear a seatbelt." / "He must be tired."
**may** — formal permission or possibility: "May I come in?" / "It may rain today."
**might** — less certain possibility: "She might call later."
**would** — polite requests or hypotheticals: "Would you like tea?" / "I would go if I could."
**shall** — suggestions (we): "Shall we begin?"

**Rules:**
- Never add -s, -ed, or -ing to modals.
- Always followed by bare infinitive (no 'to').`,
    examples: [
      { english: "You should drink more water.", urdu: "تمہیں زیادہ پانی پینا چاہیے۔" },
      { english: "Can you help me with this problem?", urdu: "کیا تم اس مسئلے میں میری مدد کر سکتے ہو؟" },
      { english: "She might not attend the class today.", urdu: "وہ آج کلاس میں شاید نہ آئے۔" },
      { english: "You must submit your assignment on time.", urdu: "تمہیں اپنا اسائنمنٹ وقت پر جمع کرنا ہوگا۔" },
      { english: "Would you like to have some tea?", urdu: "کیا آپ چائے لیں گے؟" },
    ],
    quiz: [
      {
        question: "Which modal expresses ADVICE?",
        options: ["can", "must", "should", "might"],
        correctIndex: 2,
        explanation: "'Should' expresses advice or recommendation: 'You should study harder.'",
      },
      {
        question: "Which sentence uses a modal CORRECTLY?",
        options: ["She cans swim.", "He musts go.", "They should leave.", "We mights come."],
        correctIndex: 2,
        explanation: "Modals never take -s, -ed, or -ing. 'They should leave' is correct.",
      },
      {
        question: "'It ___ rain this evening.' (possibility, not certain)",
        options: ["must", "will", "might", "shall"],
        correctIndex: 2,
        explanation: "'Might' expresses uncertain possibility — it might rain (but we're not sure).",
      },
    ],
  },
  {
    id: "intermediate-5",
    level: "intermediate",
    order: 5,
    title: "Active and Passive Voice",
    summary: "How to shift focus from the doer to the action or the receiver.",
    rule: `**Active Voice:** The subject performs the action.
→ "The teacher explains the lesson."

**Passive Voice:** The subject receives the action. The doer may or may not be mentioned.
→ "The lesson is explained by the teacher."

**How to form Passive (Present Simple):**
Active: Subject + verb + object
Passive: Object + am/is/are + past participle (+ by + agent)

**Common passive structures:**
- Present Simple: "Rice is grown in Pakistan."
- Past Simple: "The book was written in 1990."
- Future: "The project will be completed next week."

**When to use passive:**
- The doer is unknown: "The window was broken."
- The doer is unimportant: "The road is being repaired."
- To emphasize the result, not the doer.`,
    examples: [
      { english: "Active: She writes a letter. → Passive: A letter is written by her.", urdu: "فاعل: وہ خط لکھتی ہے۔ → مفعول: اس کے ذریعے خط لکھا جاتا ہے۔" },
      { english: "Active: They built this mosque in 1900. → Passive: This mosque was built in 1900.", urdu: "فاعل: انہوں نے یہ مسجد 1900 میں بنائی۔ → مفعول: یہ مسجد 1900 میں بنائی گئی۔" },
      { english: "The exam will be held next Friday.", urdu: "امتحان اگلے جمعہ کو منعقد کیا جائے گا۔" },
      { english: "Urdu is spoken by millions of people.", urdu: "اردو لاکھوں لوگوں کے ذریعے بولی جاتی ہے۔" },
      { english: "The report was not submitted on time.", urdu: "رپورٹ وقت پر جمع نہیں کی گئی۔" },
    ],
    quiz: [
      {
        question: "Convert to passive: 'Ali wrote the report.'",
        options: ["The report wrote Ali.", "The report was written by Ali.", "The report is written by Ali.", "Ali was written the report."],
        correctIndex: 1,
        explanation: "Past passive: Object + was/were + past participle + by + agent. 'The report was written by Ali.'",
      },
      {
        question: "When is passive voice preferred?",
        options: ["When the doer is important", "When the doer is unknown or unimportant", "In everyday casual speech", "When using present continuous"],
        correctIndex: 1,
        explanation: "Passive is used when we don't know who did the action, or when the doer is not important.",
      },
      {
        question: "Which sentence is in PASSIVE voice?",
        options: ["She cooked the food.", "The food was cooked.", "She is cooking the food.", "She has cooked the food."],
        correctIndex: 1,
        explanation: "'The food was cooked' — subject (food) receives the action. This is passive voice.",
      },
    ],
  },
  {
    id: "intermediate-6",
    level: "intermediate",
    order: 6,
    title: "Questions: Yes/No and WH-Questions",
    summary: "How to form both types of questions correctly in English.",
    rule: `**1. Yes/No Questions**
These questions can be answered with "yes" or "no".

Structure: Auxiliary/modal + subject + main verb?
- "Do you like cricket?" → "Yes, I do." / "No, I don't."
- "Is she a teacher?" → "Yes, she is."
- "Can he drive?" → "No, he can't."

**2. WH-Questions**
These begin with a question word and require detailed answers.

**WH words:** What, Where, When, Who, Why, How, Which, Whose, Whom

Structure: WH-word + auxiliary + subject + main verb?
- "Where do you live?"
- "What is she doing?"
- "Why did he leave?"
- "Who wrote this book?" (Who = subject — no auxiliary needed)`,
    examples: [
      { english: "Do you speak English? — Yes, I do.", urdu: "کیا آپ انگریزی بولتے ہیں؟ — ہاں، میں بولتا ہوں۔" },
      { english: "Where does she work?", urdu: "وہ کہاں کام کرتی ہے؟" },
      { english: "Why are they laughing?", urdu: "وہ کیوں ہنس رہے ہیں؟" },
      { english: "Who called you last night?", urdu: "کل رات تمہیں کس نے فون کیا؟" },
      { english: "How many languages can you speak?", urdu: "تم کتنی زبانیں بول سکتے ہو؟" },
    ],
    quiz: [
      {
        question: "Which is a WH-question?",
        options: ["Do you like tea?", "Is she happy?", "Where do you live?", "Can he come?"],
        correctIndex: 2,
        explanation: "'Where do you live?' starts with a WH-word (Where) and requires a specific answer.",
      },
      {
        question: "Form a Yes/No question: 'She is studying.' →",
        options: ["She studying?", "Is she studying?", "Does she studying?", "Was she study?"],
        correctIndex: 1,
        explanation: "Move the auxiliary 'is' before the subject: 'Is she studying?'",
      },
      {
        question: "'Who wrote this novel?' — Why is there no auxiliary after 'who'?",
        options: ["It's an error", "Who is the object", "Who is the subject — no auxiliary needed", "It's informal English"],
        correctIndex: 2,
        explanation: "When 'who' or 'what' is the SUBJECT of the question, no auxiliary verb is used: 'Who wrote this?' (who = subject)",
      },
    ],
  },

  // ─── ADVANCED ─────────────────────────────────────────────────────────────────
  {
    id: "advanced-1",
    level: "advanced",
    order: 1,
    title: "Perfect Tenses",
    summary: "Connect actions across time — past to present, past to past, and future to future.",
    rule: `**1. Present Perfect** (have/has + past participle)
Connects past action to the present. The exact time is not mentioned.
→ "I have visited London." / "She has just finished the report."
Used for: life experiences, recent events, unfinished time periods.

**2. Past Perfect** (had + past participle)
An action completed BEFORE another past action.
→ "By the time he arrived, I had already eaten."
Think of it as: "past of the past."

**3. Future Perfect** (will have + past participle)
An action that will be completed BEFORE a specific future time.
→ "By next year, she will have finished her degree."

**Key time expressions:**
- Present Perfect: already, yet, just, ever, never, since, for, recently
- Past Perfect: by the time, before, after, already
- Future Perfect: by (date/time), before, by the time`,
    examples: [
      { english: "I have never eaten sushi before.", urdu: "میں نے کبھی سوشی نہیں کھائی۔" },
      { english: "She had left the office before I called.", urdu: "جب میں نے فون کیا تو وہ دفتر چھوڑ چکی تھی۔" },
      { english: "Have you ever visited Lahore Fort?", urdu: "کیا آپ نے کبھی لاہور قلعہ دیکھا ہے؟" },
      { english: "By 2030, scientists will have found new treatments.", urdu: "2030 تک سائنسدان نئے علاج دریافت کر چکے ہوں گے۔" },
      { english: "He has worked here for ten years.", urdu: "وہ دس سال سے یہاں کام کر رہا ہے۔" },
    ],
    quiz: [
      {
        question: "Which sentence uses Present Perfect correctly?",
        options: ["She have finish the work.", "She has finished the work.", "She is finished the work.", "She was finished the work."],
        correctIndex: 1,
        explanation: "Present Perfect: have/has + past participle. 'She has finished' is correct.",
      },
      {
        question: "'By the time we arrived, the film ___.' (Past Perfect)",
        options: ["started", "had started", "has started", "will start"],
        correctIndex: 1,
        explanation: "Past Perfect = had + past participle. 'Had started' describes the earlier of two past events.",
      },
      {
        question: "Which time expression is typical for Present Perfect?",
        options: ["yesterday", "last year", "at 5 pm", "already"],
        correctIndex: 3,
        explanation: "'Already' is a classic Present Perfect signal. 'Yesterday/last year' require Simple Past.",
      },
    ],
  },
  {
    id: "advanced-2",
    level: "advanced",
    order: 2,
    title: "Conditional Sentences",
    summary: "If clauses — express real, unreal, and impossible conditions.",
    rule: `**Type 1 — Real/Likely Condition** (present → future)
If + Simple Present, ... will + base verb
→ "If it rains, I will stay home."
(This could realistically happen.)

**Type 2 — Unreal Present Condition** (past form → would)
If + Simple Past, ... would + base verb
→ "If I had a car, I would drive to work."
(I don't have a car — this is hypothetical.)

**Type 3 — Impossible Past Condition** (past perfect → would have)
If + Past Perfect, ... would have + past participle
→ "If she had studied, she would have passed."
(She didn't study — this is a regret about the past.)

**Mixed:** "If I had worked harder, I would be rich now."
(Past condition, present result)`,
    examples: [
      { english: "If you study hard, you will pass the exam. (Type 1)", urdu: "اگر تم محنت سے پڑھو گے تو امتحان پاس کرو گے۔ (قسم 1)" },
      { english: "If I were a bird, I would fly to the mountains. (Type 2)", urdu: "اگر میں پرندہ ہوتا تو پہاڑوں کی طرف اڑ جاتا۔ (قسم 2)" },
      { english: "If he had called me, I would have come. (Type 3)", urdu: "اگر اس نے مجھے فون کیا ہوتا تو میں آتا۔ (قسم 3)" },
      { english: "If she takes the medicine, she will recover quickly. (Type 1)", urdu: "اگر وہ دوائی لے گی تو جلدی ٹھیک ہو جائے گی۔" },
      { english: "If I had more time, I would learn another language. (Type 2)", urdu: "اگر میرے پاس زیادہ وقت ہوتا تو میں ایک اور زبان سیکھتا۔" },
    ],
    quiz: [
      {
        question: "What type is: 'If I won the lottery, I would travel the world.'?",
        options: ["Type 1", "Type 2", "Type 3", "Mixed"],
        correctIndex: 1,
        explanation: "Type 2 uses Simple Past in the if-clause and 'would' in the main clause — for unreal present situations.",
      },
      {
        question: "Complete: 'If she had been careful, she ___ the accident.'",
        options: ["would avoid", "avoided", "would have avoided", "will avoid"],
        correctIndex: 2,
        explanation: "Type 3: If + Past Perfect, would have + past participle. 'Would have avoided' is correct.",
      },
      {
        question: "Which is a Type 1 conditional?",
        options: ["If I were you, I would stop.", "If he had come, we would have eaten.", "If you call her, she will answer.", "If I had known, I would have told you."],
        correctIndex: 2,
        explanation: "Type 1: If + Simple Present, will + base verb. 'If you call, she will answer.' — real possibility.",
      },
    ],
  },
  {
    id: "advanced-3",
    level: "advanced",
    order: 3,
    title: "Reported Speech",
    summary: "How to report what someone said without quoting them directly.",
    rule: `Reported speech (indirect speech) is used to convey what someone said without using their exact words.

**Direct → Indirect shifts:**
- "I am tired." → He said (that) he was tired.
- "I will come." → She said she would come.
- "I have finished." → He said he had finished.
- "I was sleeping." → She said she had been sleeping.

**Tense backshift:**
Present → Past | Past → Past Perfect | will → would | can → could | may → might

**Pronoun changes:**
"I am happy." → He said he was happy. (I → he)

**Question reporting:**
- Yes/No: She asked if/whether I was ready.
- WH: He asked where I lived. (no question word order)

**Command reporting:**
"Come here." → She told him to come there.
"Don't leave." → He asked her not to leave.`,
    examples: [
      { english: "Direct: 'I live in Karachi.' → Reported: She said she lived in Karachi.", urdu: "براہ راست: 'میں کراچی میں رہتا ہوں۔' → بالواسطہ: اس نے کہا کہ وہ کراچی میں رہتی ہے۔" },
      { english: "Direct: 'I will help you.' → Reported: He said he would help me.", urdu: "براہ راست: 'میں تمہاری مدد کروں گا۔' → بالواسطہ: اس نے کہا کہ وہ میری مدد کرے گا۔" },
      { english: "Direct: 'Have you eaten?' → Reported: She asked if I had eaten.", urdu: "براہ راست: 'کیا تم نے کھانا کھایا؟' → بالواسطہ: اس نے پوچھا کہ کیا میں نے کھانا کھایا تھا۔" },
      { english: "Direct: 'Where do you work?' → Reported: He asked where I worked.", urdu: "براہ راست: 'تم کہاں کام کرتے ہو؟' → بالواسطہ: اس نے پوچھا کہ میں کہاں کام کرتا ہوں۔" },
      { english: "Direct: 'Close the window.' → Reported: She told him to close the window.", urdu: "براہ راست: 'کھڑکی بند کرو۔' → بالواسطہ: اس نے اسے کھڑکی بند کرنے کو کہا۔" },
    ],
    quiz: [
      {
        question: "Report: 'I am working on a project.' → He said...",
        options: ["he is working on a project", "he was working on a project", "he works on a project", "he will work on a project"],
        correctIndex: 1,
        explanation: "Present tense backshifts to past in reported speech: 'am working' → 'was working'.",
      },
      {
        question: "Report the question: 'Are you tired?' → She asked...",
        options: ["if I am tired", "whether I was tired", "was I tired", "am I tired"],
        correctIndex: 1,
        explanation: "Yes/No question in reported speech: asked if/whether + statement word order. Tense shifts back.",
      },
      {
        question: "Report the command: 'Don't make noise.' → He told us...",
        options: ["don't make noise", "not to make noise", "to not made noise", "we don't make noise"],
        correctIndex: 1,
        explanation: "Commands become 'told + object + (not) to + base verb'. 'He told us not to make noise.'",
      },
    ],
  },
  {
    id: "advanced-4",
    level: "advanced",
    order: 4,
    title: "Types of Clauses",
    summary: "Noun, adjective, and adverb clauses — the keys to complex sentences.",
    rule: `A **clause** is a group of words with a subject and a verb. There are three main types of dependent clauses:

**1. Noun Clause**
Functions as a noun (subject, object, or complement).
Introduced by: that, what, who, where, whether, how
→ "What she said surprised everyone." (subject)
→ "I believe that he is honest." (object)

**2. Adjective Clause (Relative Clause)**
Describes a noun. Introduced by: who, whom, whose, which, that
→ "The man who called you is my uncle."
→ "The book that I read was excellent."

**3. Adverb Clause**
Describes a verb/adjective/adverb. Shows time, cause, condition, etc.
Introduced by: when, because, although, if, since, until, as soon as
→ "She left before the rain started." (time)
→ "He failed because he didn't study." (cause)`,
    examples: [
      { english: "I know that she will succeed. (Noun clause)", urdu: "مجھے معلوم ہے کہ وہ کامیاب ہو گی۔ (اسمی فقرہ)" },
      { english: "The student who answered first won a prize. (Adjective clause)", urdu: "جس طالب علم نے پہلے جواب دیا اسے انعام ملا۔ (صفتی فقرہ)" },
      { english: "She will call you when she arrives. (Adverb clause — time)", urdu: "جب وہ پہنچے گی تو تمہیں فون کرے گی۔ (ظرفی فقرہ — وقت)" },
      { english: "He is tired because he worked all night. (Adverb clause — reason)", urdu: "وہ تھکا ہوا ہے کیونکہ وہ رات بھر کام کرتا رہا۔ (ظرفی فقرہ — وجہ)" },
      { english: "The city where I was born is very beautiful. (Adjective clause)", urdu: "جس شہر میں میں پیدا ہوا وہ بہت خوبصورت ہے۔ (صفتی فقرہ)" },
    ],
    quiz: [
      {
        question: "Identify the type of clause: 'The teacher who teaches us English is very kind.'",
        options: ["Noun clause", "Adjective clause", "Adverb clause", "Main clause"],
        correctIndex: 1,
        explanation: "'Who teaches us English' modifies the noun 'teacher' — it is an adjective (relative) clause.",
      },
      {
        question: "Which clause is a NOUN clause?",
        options: ["when he arrives", "what she told me", "although it rained", "the book that I read"],
        correctIndex: 1,
        explanation: "'What she told me' can act as a subject or object — it is a noun clause.",
      },
      {
        question: "What type is: 'Although he was tired, he continued working.'?",
        options: ["Noun clause", "Adjective clause", "Adverb clause (concession)", "Relative clause"],
        correctIndex: 2,
        explanation: "'Although he was tired' shows contrast/concession — it is an adverb clause.",
      },
    ],
  },
  {
    id: "advanced-5",
    level: "advanced",
    order: 5,
    title: "Conjunctions and Connectors",
    summary: "Link ideas and sentences with precision using coordinating, subordinating, and correlative conjunctions.",
    rule: `**1. Coordinating Conjunctions (FANBOYS)**
Join two independent clauses of equal rank.
For, And, Nor, But, Or, Yet, So
→ "She is tired, but she is working."
→ "He didn't eat, nor did he drink."

**2. Subordinating Conjunctions**
Join a dependent clause to an independent clause.
Time: when, before, after, while, until, as soon as
Cause: because, since, as
Condition: if, unless
Contrast: although, even though, while, whereas
→ "I will wait until you return."
→ "She passed although she didn't study much."

**3. Correlative Conjunctions**
Used in pairs:
both...and | either...or | neither...nor | not only...but also | whether...or
→ "Both Ali and Sara were invited."
→ "Not only is she smart, but she is also hardworking."`,
    examples: [
      { english: "He studied hard, yet he failed. (coordinating)", urdu: "اس نے خوب پڑھا پھر بھی وہ فیل ہو گیا۔ (ربطی)" },
      { english: "She stayed home because it was raining. (subordinating)", urdu: "وہ گھر رہی کیونکہ بارش ہو رہی تھی۔ (تابعی)" },
      { english: "Neither the teacher nor the students understood the rule. (correlative)", urdu: "نہ استاد نے نہ طلباء نے قاعدہ سمجھا۔ (جوڑی)" },
      { english: "Not only did she cook, but she also washed the dishes.", urdu: "نہ صرف اس نے کھانا بنایا بلکہ برتن بھی دھوئے۔" },
      { english: "I will go unless it rains heavily.", urdu: "میں جاؤں گا جب تک کہ بہت زیادہ بارش نہ ہو۔" },
    ],
    quiz: [
      {
        question: "Which conjunction is from FANBOYS?",
        options: ["although", "because", "but", "unless"],
        correctIndex: 2,
        explanation: "FANBOYS = For, And, Nor, But, Or, Yet, So. 'But' is a coordinating conjunction.",
      },
      {
        question: "Complete the correlative: 'Neither she ___ I was informed.'",
        options: ["and", "or", "nor", "but"],
        correctIndex: 2,
        explanation: "'Neither...nor' is a correlative pair. 'Neither she nor I was informed.'",
      },
      {
        question: "What type is 'although' in: 'Although he tried, he failed.'?",
        options: ["Coordinating conjunction", "Correlative conjunction", "Subordinating conjunction", "Interjection"],
        correctIndex: 2,
        explanation: "'Although' introduces a dependent clause — it is a subordinating conjunction showing contrast.",
      },
    ],
  },
  {
    id: "advanced-6",
    level: "advanced",
    order: 6,
    title: "Prepositions in Depth",
    summary: "Master the most common prepositions and their precise uses.",
    rule: `Prepositions show relationships between nouns/pronouns and other words.

**Time:**
- **at** — specific times: at 5 pm, at midnight, at noon
- **on** — days and dates: on Monday, on 14 August
- **in** — months, years, seasons, longer periods: in July, in 2023, in winter

**Place:**
- **at** — specific point: at the bus stop, at the door
- **on** — surface: on the table, on the wall
- **in** — enclosed space: in the room, in the box, in Lahore

**Movement:**
- **to** — destination: go to school
- **into** — entering: walk into the room
- **through** — from one side to another: drive through the tunnel
- **across** — from one side: swim across the river

**Other key prepositions:**
- **by** — deadline or agent: submit by Friday / written by Iqbal
- **for** — duration or purpose: for three hours / for your benefit
- **about** — topic: talk about grammar
- **with** — accompaniment or instrument: with a pen / with her`,
    examples: [
      { english: "The meeting is at 9 am on Monday.", urdu: "میٹنگ پیر کو صبح 9 بجے ہے۔" },
      { english: "She was born in April in 1998.", urdu: "وہ 1998 میں اپریل میں پیدا ہوئی۔" },
      { english: "Please submit your assignment by Friday.", urdu: "براہ کرم اپنا اسائنمنٹ جمعہ تک جمع کریں۔" },
      { english: "He wrote a book about Pakistani history.", urdu: "اس نے پاکستانی تاریخ کے بارے میں ایک کتاب لکھی۔" },
      { english: "The children walked through the park.", urdu: "بچے پارک سے گزرے۔" },
    ],
    quiz: [
      {
        question: "Choose the correct preposition: 'She was born ___ 1995.'",
        options: ["at", "on", "in", "by"],
        correctIndex: 2,
        explanation: "We use 'in' for years, months, and longer periods. 'Born in 1995.'",
      },
      {
        question: "'The report must be submitted ___ Friday.' Which preposition?",
        options: ["in", "at", "on", "by"],
        correctIndex: 3,
        explanation: "'By' expresses a deadline — submit by Friday means no later than Friday.",
      },
      {
        question: "'The book is ___ the table.' (on top of it)",
        options: ["in", "at", "on", "by"],
        correctIndex: 2,
        explanation: "'On' is used for surfaces — the book is sitting on the surface of the table.",
      },
    ],
  },
];

export function getLessonsByLevel(level: "beginner" | "intermediate" | "advanced") {
  return lessons.filter((l) => l.level === level).sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id);
}

export function getAdjacentLessons(lesson: Lesson) {
  const levelLessons = getLessonsByLevel(lesson.level);
  const idx = levelLessons.findIndex((l) => l.id === lesson.id);
  return {
    prev: idx > 0 ? levelLessons[idx - 1] : null,
    next: idx < levelLessons.length - 1 ? levelLessons[idx + 1] : null,
  };
}

export const levelQuizzes: Record<string, QuizQuestion[]> = {
  beginner: [
    { question: "What are the 8 parts of speech?", options: ["Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Interjection", "Noun, Verb, Adjective, Adverb, Pronoun, Article, Conjunction, Tense", "Subject, Predicate, Object, Clause, Phrase, Word, Sentence, Grammar", "Noun, Verb, Adjective, Adverb, Article, Conjunction, Pronoun, Modal"], correctIndex: 0, explanation: "The 8 parts of speech are: Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Interjection." },
    { question: "Which sentence type asks a question?", options: ["Declarative", "Imperative", "Interrogative", "Exclamatory"], correctIndex: 2, explanation: "Interrogative sentences ask questions and end with a question mark (?)." },
    { question: "Simple Present with 'She': 'She ___ to school every day.'", options: ["go", "went", "goes", "going"], correctIndex: 2, explanation: "With he/she/it in Simple Present, add -s or -es. 'She goes to school.'" },
    { question: "What is the Simple Past of 'eat'?", options: ["eated", "eaten", "ate", "eats"], correctIndex: 2, explanation: "'Eat' is irregular. Its Simple Past form is 'ate'." },
    { question: "Choose the correct article: '___ honest man'", options: ["a", "an", "the", "no article"], correctIndex: 1, explanation: "'Honest' starts with a vowel sound (the H is silent), so we use 'an'." },
    { question: "What is the plural of 'woman'?", options: ["womans", "women", "womanses", "womens"], correctIndex: 1, explanation: "'Woman' has an irregular plural: women." },
    { question: "Which sentence is DECLARATIVE?", options: ["Close the door!", "Are you tired?", "She is a good student.", "What a great idea!"], correctIndex: 2, explanation: "Declarative sentences make statements and end with a period (.)." },
    { question: "Which word is an ADVERB in: 'He runs quickly.'?", options: ["He", "runs", "quickly", "the"], correctIndex: 2, explanation: "'Quickly' describes how he runs — it is an adverb." },
    { question: "When do we use 'the'?", options: ["Before any noun", "Before specific nouns both parties know", "Before plural nouns only", "Before vowel sounds"], correctIndex: 1, explanation: "'The' is used when the noun is specific and known to both speaker and listener." },
    { question: "What type of noun is 'happiness'?", options: ["Proper noun", "Concrete noun", "Collective noun", "Abstract noun"], correctIndex: 3, explanation: "'Happiness' cannot be touched or seen — it is an abstract noun." },
  ],
  intermediate: [
    { question: "Structure of Present Continuous:", options: ["subject + did + verb", "subject + am/is/are + verb-ing", "subject + have + past participle", "subject + verb + -ed"], correctIndex: 1, explanation: "Present Continuous = subject + am/is/are + verb-ing. 'She is running.'" },
    { question: "'She ___ when he called.' (Past Continuous)", options: ["was sleeping", "slept", "sleep", "is sleeping"], correctIndex: 0, explanation: "Past Continuous: was/were + verb-ing. 'She was sleeping when he called.'" },
    { question: "Which expresses a SPONTANEOUS future decision?", options: ["I am going to call her later.", "I will answer the door — stay seated.", "She plans to visit next week.", "They are going to travel."], correctIndex: 1, explanation: "'Will' is used for spontaneous decisions — decided at the moment of speaking." },
    { question: "Which modal expresses STRONG OBLIGATION?", options: ["might", "can", "must", "would"], correctIndex: 2, explanation: "'Must' expresses strong obligation or necessity: 'You must wear a seatbelt.'" },
    { question: "Convert: 'The police caught the thief.' (passive)", options: ["The thief caught the police.", "The thief was caught by the police.", "The thief is caught by the police.", "The police was caught."], correctIndex: 1, explanation: "Passive (Past): Object + was/were + past participle + by + agent." },
    { question: "Which is a WH-question?", options: ["Is she home?", "Can he drive?", "What did she say?", "Did you sleep?"], correctIndex: 2, explanation: "'What did she say?' starts with 'what' — a WH-word — and requires a detailed answer." },
    { question: "Correct Past Continuous question form:", options: ["Did she sleep?", "Was she sleeping?", "Is she sleeping?", "She was sleeping?"], correctIndex: 1, explanation: "Past Continuous question: was/were + subject + verb-ing? 'Was she sleeping?'" },
    { question: "Modal + base verb rule:", options: ["She cans swim.", "She can swims.", "She can swim.", "She can swam."], correctIndex: 2, explanation: "Modals are always followed by the base verb (no -s, -ed, -ing). 'She can swim.'" },
    { question: "'I ___ Islamabad next week.' (planned in advance)", options: ["will visit", "am going to visit", "visited", "have visited"], correctIndex: 1, explanation: "'Going to' is used for already-made plans. 'I am going to visit Islamabad.'" },
    { question: "Passive voice emphasizes:", options: ["The doer of the action", "The action or the receiver", "The time of the action", "The speaker's opinion"], correctIndex: 1, explanation: "Passive voice shifts focus from the doer to the action or the receiver of the action." },
  ],
  advanced: [
    { question: "Present Perfect structure:", options: ["had + past participle", "have/has + past participle", "am/is/are + verb-ing", "will + base verb"], correctIndex: 1, explanation: "Present Perfect = have/has + past participle. 'She has finished.' / 'I have seen.'" },
    { question: "Which is a Type 2 conditional?", options: ["If it rains, I will stay.", "If I were rich, I would travel.", "If she had studied, she would have passed.", "I will go if you come."], correctIndex: 1, explanation: "Type 2 = If + Simple Past + would + base verb — for unreal present situations." },
    { question: "Report: 'I can speak Arabic.' → He said...", options: ["he can speak Arabic", "he could speak Arabic", "he will speak Arabic", "he speaks Arabic"], correctIndex: 1, explanation: "'Can' backshifts to 'could' in reported speech." },
    { question: "Identify the clause type: 'The man who fixed our car is a mechanic.'", options: ["Noun clause", "Adverb clause", "Adjective clause", "Independent clause"], correctIndex: 2, explanation: "'Who fixed our car' modifies the noun 'man' — it is an adjective (relative) clause." },
    { question: "Which pair is CORRELATIVE conjunctions?", options: ["and, but", "because, although", "not only...but also", "when, while"], correctIndex: 2, explanation: "Correlative conjunctions come in pairs: not only...but also, both...and, neither...nor, etc." },
    { question: "Preposition for a specific time: 'The train leaves ___ 3 pm.'", options: ["in", "on", "at", "by"], correctIndex: 2, explanation: "'At' is used for specific times of day: at 3 pm, at noon, at midnight." },
    { question: "Past Perfect structure:", options: ["has + past participle", "had + past participle", "was + verb-ing", "will have + past participle"], correctIndex: 1, explanation: "Past Perfect = had + past participle. 'She had left before I arrived.'" },
    { question: "Which introduces an ADVERB CLAUSE of contrast?", options: ["who", "that", "although", "what"], correctIndex: 2, explanation: "'Although' introduces an adverb clause showing contrast: 'Although it rained, we went out.'" },
    { question: "Complete the conditional: 'If she had asked me, I ___ helped her.'", options: ["would help", "will have helped", "would have helped", "had helped"], correctIndex: 2, explanation: "Type 3: If + Past Perfect, would have + past participle. 'Would have helped' — a past regret." },
    { question: "'She said that she ___ in Karachi.' (Reported, original: 'I live in Karachi.')", options: ["lives", "lived", "was living", "will live"], correctIndex: 1, explanation: "Present Simple backshifts to Past Simple in reported speech: 'lives' → 'lived'." },
  ],
};
