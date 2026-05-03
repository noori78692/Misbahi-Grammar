export type ConfusableWord = {
  word: string;
  meaning: string;
  meaningUrdu: string;
  usage: string;
  usageUrdu: string;
  example: string;
  exampleUrdu: string;
};

export type ConfusablePair = {
  id: string;
  category: "pronunciation" | "meaning" | "spelling";
  words: ConfusableWord[];
  keyDifference: string;
  keyDifferenceUrdu: string;
};

export const confusables: ConfusablePair[] = [
  // ─── HOMOPHONES (Similar Pronunciation) ──────────────────────────────────────
  {
    id: "there-their-theyre",
    category: "pronunciation",
    words: [
      { word: "there", meaning: "at that place", meaningUrdu: "اس جگہ پر", usage: "Used to indicate a place or to introduce a sentence.", usageUrdu: "کسی جگہ کی نشاندہی یا جملہ شروع کرنے کے لیے۔", example: "Put the book over there.", exampleUrdu: "کتاب وہاں رکھ دو۔" },
      { word: "their", meaning: "belonging to them", meaningUrdu: "ان کا / ان کی", usage: "Possessive pronoun — shows ownership by a group.", usageUrdu: "ضمیر ملکیت — کسی گروہ کی ملکیت ظاہر کرتا ہے۔", example: "They forgot their books.", exampleUrdy: "وہ اپنی کتابیں بھول گئے۔", exampleUrdu: "وہ اپنی کتابیں بھول گئے۔" },
      { word: "they're", meaning: "they are", meaningUrdu: "وہ ہیں", usage: "Contraction of 'they are'.", usageUrdu: "'They are' کا مختصر روپ۔", example: "They're coming to the party.", exampleUrdu: "وہ پارٹی میں آ رہے ہیں۔" },
    ],
    keyDifference: "'there' = place, 'their' = ownership, 'they're' = they are. All sound identical but have different meanings and spellings.",
    keyDifferenceUrdu: "'there' = جگہ، 'their' = ملکیت، 'they're' = وہ ہیں۔ تینوں ایک جیسے بولے جاتے ہیں لیکن معنی مختلف ہیں۔",
  },
  {
    id: "your-youre",
    category: "pronunciation",
    words: [
      { word: "your", meaning: "belonging to you", meaningUrdu: "تمہارا / آپ کا", usage: "Possessive pronoun.", usageUrdu: "ضمیر ملکیت۔", example: "Is this your phone?", exampleUrdu: "کیا یہ تمہارا فون ہے؟" },
      { word: "you're", meaning: "you are", meaningUrdu: "تم ہو / آپ ہیں", usage: "Contraction of 'you are'.", usageUrdu: "'You are' کا مختصر روپ۔", example: "You're doing a great job.", exampleUrdu: "آپ بہت اچھا کام کر رہے ہیں۔" },
    ],
    keyDifference: "If you can replace it with 'you are' and the sentence still makes sense, use 'you're'. Otherwise use 'your'.",
    keyDifferenceUrdu: "اگر آپ اسے 'you are' سے بدل سکتے ہیں اور جملہ درست ہو، تو 'you're' استعمال کریں، ورنہ 'your'۔",
  },
  {
    id: "hear-here",
    category: "pronunciation",
    words: [
      { word: "hear", meaning: "to perceive sound with the ears", meaningUrdu: "سننا", usage: "A verb — the action of listening.", usageUrdu: "فعل — سننے کا عمل۔", example: "Can you hear the music?", exampleUrdu: "کیا آپ موسیقی سن سکتے ہیں؟" },
      { word: "here", meaning: "in this place", meaningUrdu: "یہاں", usage: "An adverb of place.", usageUrdu: "جگہ کا ظرف۔", example: "Come and sit here.", exampleUrdu: "آئیں اور یہاں بیٹھیں۔" },
    ],
    keyDifference: "'hear' is what your EAR does (hear has 'ear' in it!). 'here' is a place.",
    keyDifferenceUrdu: "'hear' وہ ہے جو کان کرتا ہے — یاد کریں: hear میں ear موجود ہے۔ 'here' ایک جگہ ہے۔",
  },
  {
    id: "its-its",
    category: "pronunciation",
    words: [
      { word: "its", meaning: "belonging to it", meaningUrdu: "اس کا / اس کی", usage: "Possessive form of 'it' — no apostrophe.", usageUrdu: "'it' کی ملکیتی شکل — کوئی apostrophe نہیں۔", example: "The dog wagged its tail.", exampleUrdu: "کتے نے اپنی دُم ہلائی۔" },
      { word: "it's", meaning: "it is / it has", meaningUrdu: "یہ ہے / اس کے پاس ہے", usage: "Contraction of 'it is' or 'it has'.", usageUrdu: "'it is' یا 'it has' کا مختصر روپ۔", example: "It's a beautiful day.", exampleUrdu: "یہ ایک خوبصورت دن ہے۔" },
    ],
    keyDifference: "Test: replace with 'it is'. If it works → it's. If not → its.",
    keyDifferenceUrdu: "جانچ: 'it is' سے بدلیں۔ اگر جملہ درست ہو → it's۔ نہیں → its۔",
  },
  {
    id: "to-too-two",
    category: "pronunciation",
    words: [
      { word: "to", meaning: "a preposition showing direction or purpose", meaningUrdu: "کی طرف / کے لیے", usage: "Before a noun or verb infinitive.", usageUrdu: "اسم یا مصدر سے پہلے۔", example: "I am going to school.", exampleUrdu: "میں اسکول جا رہا ہوں۔" },
      { word: "too", meaning: "also / excessively", meaningUrdu: "بھی / بہت زیادہ", usage: "Means 'also' or 'more than enough'.", usageUrdu: "مطلب 'بھی' یا 'ضرورت سے زیادہ'۔", example: "She is coming too. / It is too hot.", exampleUrdu: "وہ بھی آ رہی ہے۔ / یہ بہت گرم ہے۔" },
      { word: "two", meaning: "the number 2", meaningUrdu: "دو (عدد)", usage: "Only the number.", usageUrdu: "صرف عدد کے لیے۔", example: "I have two sisters.", exampleUrdu: "میری دو بہنیں ہیں۔" },
    ],
    keyDifference: "'two' = the number. 'too' = also/excessive (has an extra 'o'). 'to' = everything else.",
    keyDifferenceUrdu: "'two' = عدد 2۔ 'too' = بھی / زیادہ (اضافی 'o' ہے)۔ 'to' = باقی سب۔",
  },
  {
    id: "affect-effect",
    category: "spelling",
    words: [
      { word: "affect", meaning: "to influence or have an impact on (verb)", meaningUrdu: "اثر ڈالنا (فعل)", usage: "Almost always a verb.", usageUrdu: "تقریباً ہمیشہ فعل کے طور پر۔", example: "The rain affected the match.", exampleUrdu: "بارش نے میچ پر اثر ڈالا۔" },
      { word: "effect", meaning: "a result or consequence (noun)", meaningUrdu: "نتیجہ / اثر (اسم)", usage: "Almost always a noun.", usageUrdu: "تقریباً ہمیشہ اسم کے طور پر۔", example: "The effect of rain was visible.", exampleUrdu: "بارش کا اثر نظر آ رہا تھا۔" },
    ],
    keyDifference: "AFFECT = Action (verb). EFFECT = End result (noun). Remember: RAVEN — Remember Affect Verb Effect Noun.",
    keyDifferenceUrdu: "AFFECT = عمل (فعل)۔ EFFECT = نتیجہ (اسم)۔ یاد رکھیں: affect = فعل، effect = اسم۔",
  },
  {
    id: "accept-except",
    category: "spelling",
    words: [
      { word: "accept", meaning: "to receive or agree to something", meaningUrdu: "قبول کرنا", usage: "A verb — to receive willingly.", usageUrdu: "فعل — خوشی سے قبول کرنا۔", example: "She accepted the job offer.", exampleUrdu: "اس نے نوکری کی پیشکش قبول کی۔" },
      { word: "except", meaning: "excluding / not including", meaningUrdu: "سوائے / علاوہ", usage: "A preposition meaning 'but not'.", usageUrdu: "حرف جر — مطلب 'لیکن نہیں'۔", example: "Everyone came except Ali.", exampleUrdu: "علی کے علاوہ سب آئے۔" },
    ],
    keyDifference: "'accept' = to receive (starts with 'acc-' like 'acknowledge'). 'except' = exclude (starts with 'exc-' like 'exclude').",
    keyDifferenceUrdu: "'accept' = قبول کرنا۔ 'except' = باہر رکھنا۔ یاد رکھیں: accept = قبول، except = خارج۔",
  },
  {
    id: "than-then",
    category: "spelling",
    words: [
      { word: "than", meaning: "used in comparisons", meaningUrdu: "سے (موازنے میں)", usage: "For comparing two things.", usageUrdu: "دو چیزوں کا موازنہ کرنے کے لیے۔", example: "She is taller than her sister.", exampleUrdu: "وہ اپنی بہن سے لمبی ہے۔" },
      { word: "then", meaning: "at that time / next in sequence", meaningUrdu: "پھر / اس وقت", usage: "Refers to time or sequence.", usageUrdu: "وقت یا ترتیب کے لیے۔", example: "We ate, then we went home.", exampleUrdu: "ہم نے کھانا کھایا، پھر گھر چلے گئے۔" },
    ],
    keyDifference: "'than' is for comparison — it has 'a' like 'compare'. 'then' is about time — it has 'e' like 'time'.",
    keyDifferenceUrdu: "'than' = موازنہ (comparison)۔ 'then' = وقت / ترتیب (time/sequence)۔",
  },
  // ─── SIMILAR MEANING ──────────────────────────────────────────────────────────
  {
    id: "happy-glad-joyful",
    category: "meaning",
    words: [
      { word: "happy", meaning: "feeling pleasure and contentment", meaningUrdu: "خوش / مسرور", usage: "General, everyday feeling of joy.", usageUrdu: "عام، روزمرہ خوشی کا احساس۔", example: "I am happy to meet you.", exampleUrdu: "میں آپ سے مل کر خوش ہوں۔" },
      { word: "glad", meaning: "pleased or relieved about something specific", meaningUrdu: "خوش / مطمئن", usage: "More specific — pleased about a particular event.", usageUrdu: "زیادہ مخصوص — کسی خاص واقعے سے خوش۔", example: "I am glad the exam is over.", exampleUrdu: "مجھے خوشی ہے کہ امتحان ختم ہو گیا۔" },
      { word: "joyful", meaning: "feeling great happiness and delight", meaningUrdu: "انتہائی خوش / شادمان", usage: "Stronger than happy — expresses deep, visible joy.", usageUrdu: "خوش سے زیادہ — گہری، ظاہر خوشی کا اظہار۔", example: "The children were joyful at the fair.", exampleUrdu: "بچے میلے میں بہت خوش تھے۔" },
    ],
    keyDifference: "happy = general contentment. glad = pleased about something specific. joyful = intense, expressive happiness.",
    keyDifferenceUrdu: "happy = عام خوشی۔ glad = کسی خاص بات سے خوش۔ joyful = شدید اور ظاہری خوشی۔",
  },
  {
    id: "big-large-great",
    category: "meaning",
    words: [
      { word: "big", meaning: "large in size (informal)", meaningUrdu: "بڑا (غیر رسمی)", usage: "Informal, used for size and importance.", usageUrdu: "غیر رسمی، سائز اور اہمیت کے لیے۔", example: "That is a big house.", exampleUrdu: "یہ ایک بڑا گھر ہے۔" },
      { word: "large", meaning: "considerable in size or quantity (neutral/formal)", meaningUrdu: "بڑا (رسمی/غیرجانبدار)", usage: "More neutral/formal than 'big'. Used for size and quantities.", usageUrdu: "'big' سے زیادہ رسمی۔ سائز اور مقدار کے لیے۔", example: "Pakistan has a large population.", exampleUrdu: "پاکستان کی آبادی بہت زیادہ ہے۔" },
      { word: "great", meaning: "of exceptional quality or importance", meaningUrdu: "عظیم / بہت اچھا", usage: "Implies quality, importance, or intensity — not just physical size.", usageUrdu: "معیار، اہمیت یا شدت ظاہر کرتا ہے — صرف جسمانی سائز نہیں۔", example: "He is a great leader.", exampleUrdu: "وہ ایک عظیم رہنما ہے۔" },
    ],
    keyDifference: "big = informal size. large = neutral/formal size or quantity. great = exceptional quality or importance (not just size).",
    keyDifferenceUrdu: "big = غیر رسمی سائز۔ large = رسمی سائز یا مقدار۔ great = غیر معمولی معیار یا اہمیت (صرف سائز نہیں)۔",
  },
  {
    id: "start-begin-commence",
    category: "meaning",
    words: [
      { word: "start", meaning: "to begin an activity (informal)", meaningUrdu: "شروع کرنا (غیر رسمی)", usage: "Casual, everyday use.", usageUrdu: "غیر رسمی، روزمرہ استعمال۔", example: "Start the engine.", exampleUrdu: "انجن چالو کرو۔" },
      { word: "begin", meaning: "to start something (neutral)", meaningUrdu: "آغاز کرنا (غیرجانبدار)", usage: "Neutral, can be formal or informal.", usageUrdu: "غیرجانبدار، رسمی یا غیر رسمی دونوں۔", example: "Let us begin the lesson.", exampleUrdu: "آئیں سبق شروع کریں۔" },
      { word: "commence", meaning: "to begin formally", meaningUrdu: "باضابطہ شروع ہونا", usage: "Formal and official — used in ceremonies, legal contexts.", usageUrdu: "رسمی اور سرکاری — تقریبات، قانونی سیاق میں۔", example: "The ceremony will commence at 9 am.", exampleUrdu: "تقریب صبح 9 بجے شروع ہو گی۔" },
    ],
    keyDifference: "start = informal everyday use. begin = neutral. commence = formal/official situations.",
    keyDifferenceUrdu: "start = غیر رسمی روزمرہ۔ begin = غیرجانبدار۔ commence = باضابطہ/رسمی مواقع۔",
  },
  {
    id: "smart-intelligent-clever",
    category: "meaning",
    words: [
      { word: "smart", meaning: "quick-thinking, sharp (also means well-dressed)", meaningUrdu: "ذہین / چالاک / اسمارٹ", usage: "Can mean mentally sharp or well-groomed in appearance.", usageUrdu: "ذہانت یا اچھے لباس کے لیے بھی۔", example: "She gave a smart answer.", exampleUrdu: "اس نے ذہین جواب دیا۔" },
      { word: "intelligent", meaning: "having a high mental capacity to learn and understand", meaningUrdu: "ذہین / عقلمند", usage: "Neutral, often used formally for cognitive ability.", usageUrdu: "غیرجانبدار، اکثر علمی صلاحیت کے لیے رسمی طور پر۔", example: "He is a highly intelligent student.", exampleUrdu: "وہ ایک انتہائی ذہین طالب علم ہے۔" },
      { word: "clever", meaning: "quick to learn, sometimes cunning", meaningUrdu: "چالاک / ہوشیار", usage: "Can have a slightly cunning or crafty connotation.", usageUrdu: "کبھی کبھی چالاکی کی معنویت بھی ہوتی ہے۔", example: "That was a clever trick.", exampleUrdu: "یہ ایک چالاک چال تھی۔" },
    ],
    keyDifference: "intelligent = high cognitive ability (neutral). smart = quick-thinking or well-dressed. clever = quick-thinking, sometimes cunning.",
    keyDifferenceUrdu: "intelligent = اعلیٰ ذہانت (غیرجانبدار)۔ smart = تیز ذہن یا اچھا لباس۔ clever = تیز ذہن، کبھی چالاک بھی۔",
  },
  {
    id: "see-look-watch",
    category: "meaning",
    words: [
      { word: "see", meaning: "to perceive with eyes (without intention)", meaningUrdu: "دیکھنا (بغیر ارادے کے)", usage: "Involuntary — happens naturally without focusing.", usageUrdu: "غیر ارادی — بغیر توجہ دیے قدرتی طور پر ہوتا ہے۔", example: "I can see the mountains from here.", exampleUrdu: "میں یہاں سے پہاڑ دیکھ سکتا ہوں۔" },
      { word: "look", meaning: "to direct eyes toward something intentionally", meaningUrdu: "دیکھنا (ارادے سے)", usage: "Deliberate but brief — directing your gaze.", usageUrdu: "ارادی لیکن مختصر — نظر لگانا۔", example: "Look at that bird!", exampleUrdu: "اس پرندے کو دیکھو!" },
      { word: "watch", meaning: "to look at something carefully over time", meaningUrdu: "غور سے دیکھنا / دیکھتے رہنا", usage: "Active and sustained attention — for moving things or events.", usageUrdu: "فعال اور مستقل توجہ — حرکت یا واقعات کے لیے۔", example: "We watched the cricket match.", exampleUrdu: "ہم نے کرکٹ میچ دیکھا۔" },
    ],
    keyDifference: "see = unintentional (just happens). look = intentional but brief. watch = intentional and sustained (events, movement).",
    keyDifferenceUrdu: "see = غیر ارادی (خود بخود)۔ look = ارادی لیکن مختصر۔ watch = ارادی اور مستقل (واقعات، حرکت)۔",
  },
];
