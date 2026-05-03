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

  // ══════════════════════════════════════════════════════════════════
  //  HOMOPHONES — Same sound, different spelling and meaning
  // ══════════════════════════════════════════════════════════════════

  {
    id: "there-their-theyre",
    category: "pronunciation",
    words: [
      { word: "there", meaning: "at that place", meaningUrdu: "وہاں / اس جگہ", usage: "Indicates a place or introduces a sentence.", usageUrdu: "جگہ کی نشاندہی یا جملہ شروع کرنے کے لیے۔", example: "Put the book over there.", exampleUrdu: "کتاب وہاں رکھ دو۔" },
      { word: "their", meaning: "belonging to them", meaningUrdu: "ان کا / ان کی / ان کے", usage: "Possessive pronoun for a group.", usageUrdu: "کسی گروہ کی ملکیت ظاہر کرنے والا ضمیر۔", example: "They forgot their books.", exampleUrdu: "وہ اپنی کتابیں بھول گئے۔" },
      { word: "they're", meaning: "they are", meaningUrdu: "وہ ہیں", usage: "Contraction of 'they are'.", usageUrdu: "'They are' کا مختصر روپ۔", example: "They're coming to the party.", exampleUrdu: "وہ پارٹی میں آ رہے ہیں۔" },
    ],
    keyDifference: "'there' = place. 'their' = ownership. 'they're' = they are. All sound identical but mean different things.",
    keyDifferenceUrdu: "'there' = جگہ۔ 'their' = ملکیت۔ 'they're' = وہ ہیں۔ تینوں ایک جیسے بولے جاتے ہیں مگر معنی مختلف ہیں۔",
  },
  {
    id: "your-youre",
    category: "pronunciation",
    words: [
      { word: "your", meaning: "belonging to you", meaningUrdu: "تمہارا / آپ کا", usage: "Possessive pronoun.", usageUrdu: "ضمیر ملکیت۔", example: "Is this your phone?", exampleUrdu: "کیا یہ تمہارا فون ہے؟" },
      { word: "you're", meaning: "you are", meaningUrdu: "تم ہو / آپ ہیں", usage: "Contraction of 'you are'.", usageUrdu: "'You are' کا مختصر روپ۔", example: "You're doing a great job.", exampleUrdu: "آپ بہت اچھا کام کر رہے ہیں۔" },
    ],
    keyDifference: "If you can replace it with 'you are' and it still makes sense → use 'you're'. Otherwise → 'your'.",
    keyDifferenceUrdu: "جگہ 'you are' رکھیں: اگر جملہ درست ہو → you're۔ ورنہ → your۔",
  },
  {
    id: "its-its",
    category: "pronunciation",
    words: [
      { word: "its", meaning: "belonging to it", meaningUrdu: "اس کا / اس کی", usage: "Possessive form of 'it' — no apostrophe.", usageUrdu: "'it' کی ملکیتی شکل۔ apostrophe نہیں ہوتا۔", example: "The dog wagged its tail.", exampleUrdu: "کتے نے اپنی دُم ہلائی۔" },
      { word: "it's", meaning: "it is / it has", meaningUrdu: "یہ ہے / اس کے پاس ہے", usage: "Contraction of 'it is' or 'it has'.", usageUrdu: "'It is' یا 'it has' کا مختصر روپ۔", example: "It's a beautiful day.", exampleUrdu: "یہ ایک خوبصورت دن ہے۔" },
    ],
    keyDifference: "Test: replace with 'it is'. If it works → it's. If not → its (possessive).",
    keyDifferenceUrdu: "جانچ: 'it is' سے بدلیں۔ ٹھیک لگے → it's۔ نہیں لگتا → its (ملکیت)۔",
  },
  {
    id: "to-too-two",
    category: "pronunciation",
    words: [
      { word: "to", meaning: "preposition — direction or purpose", meaningUrdu: "کی طرف / کے لیے", usage: "Before a noun or verb infinitive.", usageUrdu: "اسم یا مصدر سے پہلے آتا ہے۔", example: "I am going to school.", exampleUrdu: "میں اسکول جا رہا ہوں۔" },
      { word: "too", meaning: "also / excessively", meaningUrdu: "بھی / بہت زیادہ", usage: "'Also' or 'more than enough'.", usageUrdu: "'بھی' یا 'ضرورت سے زیادہ'۔", example: "She is coming too. / It is too hot.", exampleUrdu: "وہ بھی آ رہی ہے۔ / یہ بہت گرم ہے۔" },
      { word: "two", meaning: "the number 2", meaningUrdu: "دو (عدد 2)", usage: "Only used for the number 2.", usageUrdu: "صرف عدد 2 کے لیے۔", example: "I have two sisters.", exampleUrdu: "میری دو بہنیں ہیں۔" },
    ],
    keyDifference: "'two' = number 2. 'too' = also/excessive (extra 'o'). 'to' = everything else.",
    keyDifferenceUrdu: "'two' = عدد 2۔ 'too' = بھی یا زیادہ (دو 'o' ہیں)۔ 'to' = باقی سب۔",
  },
  {
    id: "hear-here",
    category: "pronunciation",
    words: [
      { word: "hear", meaning: "to perceive sound with the ears", meaningUrdu: "سننا", usage: "A verb — the act of listening.", usageUrdu: "فعل — کانوں سے آواز محسوس کرنا۔", example: "Can you hear the music?", exampleUrdu: "کیا آپ موسیقی سن سکتے ہیں؟" },
      { word: "here", meaning: "in this place", meaningUrdu: "یہاں", usage: "Adverb of place.", usageUrdu: "جگہ کا ظرف۔", example: "Come and sit here.", exampleUrdu: "آئیں اور یہاں بیٹھیں۔" },
    ],
    keyDifference: "'hear' contains 'ear' — that's what you hear with! 'here' = a place.",
    keyDifferenceUrdu: "'hear' میں 'ear' (کان) چھپا ہے۔ 'here' = یہاں (جگہ)۔",
  },
  {
    id: "wear-where-ware",
    category: "pronunciation",
    words: [
      { word: "wear", meaning: "to have clothing on the body", meaningUrdu: "پہننا", usage: "Verb — to put on or have on clothes, jewelry, etc.", usageUrdu: "فعل — لباس یا زیور پہننا۔", example: "She wears a blue dress.", exampleUrdu: "وہ نیلا لباس پہنتی ہے۔" },
      { word: "where", meaning: "at what place / in which place", meaningUrdu: "کہاں", usage: "WH-question word for place.", usageUrdu: "جگہ کے لیے WH سوالیہ لفظ۔", example: "Where do you live?", exampleUrdu: "تم کہاں رہتے ہو؟" },
      { word: "ware", meaning: "manufactured goods / articles of a specific type", meaningUrdu: "سامان / مال", usage: "Noun — goods or products (often in compounds: software, hardware).", usageUrdu: "اسم — مال یا اشیاء (اکثر مرکب الفاظ میں: software, hardware)۔", example: "The market sells kitchen ware.", exampleUrdu: "بازار میں کچن کا سامان بکتا ہے۔" },
    ],
    keyDifference: "'wear' = clothes. 'where' = place (has a silent 'h'). 'ware' = goods/products.",
    keyDifferenceUrdu: "'wear' = پہننا۔ 'where' = کہاں (جگہ)۔ 'ware' = سامان/مال۔",
  },
  {
    id: "right-write-rite",
    category: "pronunciation",
    words: [
      { word: "right", meaning: "correct / the opposite of left / a moral entitlement", meaningUrdu: "درست / دائیں / حق", usage: "Adjective (correct), noun (entitlement), or direction (opposite of left).", usageUrdu: "صفت (درست)، اسم (حق)، یا سمت (بائیں کا مخالف)۔", example: "You are right. Turn right at the signal.", exampleUrdu: "تم درست ہو۔ سگنل پر دائیں مڑو۔" },
      { word: "write", meaning: "to form letters or words on a surface", meaningUrdu: "لکھنا", usage: "Verb — to compose text.", usageUrdu: "فعل — تحریر کرنا۔", example: "Please write your name here.", exampleUrdu: "براہ کرم یہاں اپنا نام لکھیں۔" },
      { word: "rite", meaning: "a religious or ceremonial act", meaningUrdu: "رسم / مذہبی طریقہ کار", usage: "Noun — a formal ceremony or ritual.", usageUrdu: "اسم — رسمی تقریب یا رواج۔", example: "Marriage is an important rite.", exampleUrdu: "شادی ایک اہم رسم ہے۔" },
    ],
    keyDifference: "'right' = correct or direction. 'write' = using a pen. 'rite' = a ceremony or ritual.",
    keyDifferenceUrdu: "'right' = درست یا سمت۔ 'write' = قلم سے لکھنا۔ 'rite' = رسم یا تقریب۔",
  },
  {
    id: "no-know",
    category: "pronunciation",
    words: [
      { word: "no", meaning: "a negative reply / not any", meaningUrdu: "نہیں / کوئی نہیں", usage: "Used to deny, refuse, or indicate absence.", usageUrdu: "انکار، انکار یا غیر موجودگی ظاہر کرنے کے لیے۔", example: "No, I do not agree.", exampleUrdu: "نہیں، میں متفق نہیں۔" },
      { word: "know", meaning: "to have knowledge or information about something", meaningUrdu: "جاننا / معلوم ہونا", usage: "Verb — to be aware of a fact.", usageUrdu: "فعل — کسی بات کا علم ہونا۔", example: "I know the answer.", exampleUrdu: "مجھے جواب معلوم ہے۔" },
    ],
    keyDifference: "'no' is a negation. 'know' is about knowledge (the 'k' is silent). Tip: you KNOW things.",
    keyDifferenceUrdu: "'no' = نہیں۔ 'know' = جاننا (k خاموش ہے)۔ یاد رکھیں: know = علم۔",
  },
  {
    id: "new-knew",
    category: "pronunciation",
    words: [
      { word: "new", meaning: "recently made, not existing before", meaningUrdu: "نیا / جدید", usage: "Adjective — recently made or discovered.", usageUrdu: "صفت — حال ہی میں بنا یا دریافت شدہ۔", example: "She bought a new phone.", exampleUrdu: "اس نے نیا فون خریدا۔" },
      { word: "knew", meaning: "past tense of 'know'", meaningUrdu: "جانتا/جانتی تھا/تھی", usage: "Past tense of the verb 'know'.", usageUrdu: "فعل 'know' کا ماضی۔", example: "I knew the answer yesterday.", exampleUrdu: "مجھے کل جواب معلوم تھا۔" },
    ],
    keyDifference: "'new' = fresh/recent (adjective). 'knew' = past tense of know (the 'k' is silent).",
    keyDifferenceUrdu: "'new' = نیا (صفت)۔ 'knew' = جانتا تھا (فعل know کا ماضی، k خاموش)۔",
  },
  {
    id: "bare-bear",
    category: "pronunciation",
    words: [
      { word: "bare", meaning: "uncovered / without clothing or decoration", meaningUrdu: "ننگا / بے ڈھکا / خالی", usage: "Adjective — uncovered, plain, or minimal.", usageUrdu: "صفت — ڈھکا نہ ہوا، سادہ یا کم از کم۔", example: "She walked on the bare floor.", exampleUrdu: "وہ ننگے فرش پر چلی۔" },
      { word: "bear", meaning: "a large wild animal / to carry or endure", meaningUrdu: "ریچھ / برداشت کرنا", usage: "Noun (the animal) or verb (to carry/endure).", usageUrdu: "اسم (جانور) یا فعل (اٹھانا / برداشت کرنا)۔", example: "I cannot bear this noise. / A bear lives in the forest.", exampleUrdu: "میں یہ شور برداشت نہیں کر سکتا۔ / ریچھ جنگل میں رہتا ہے۔" },
    ],
    keyDifference: "'bare' = uncovered/naked. 'bear' = the animal OR to endure something.",
    keyDifferenceUrdu: "'bare' = ننگا/بے ڈھکا۔ 'bear' = ریچھ یا برداشت کرنا۔",
  },
  {
    id: "pair-pear-pare",
    category: "pronunciation",
    words: [
      { word: "pair", meaning: "two matching things", meaningUrdu: "جوڑا", usage: "Noun — two things of the same type used together.", usageUrdu: "اسم — ایک جیسی دو چیزیں جو ساتھ استعمال ہوں۔", example: "I need a pair of shoes.", exampleUrdu: "مجھے جوتوں کا ایک جوڑا چاہیے۔" },
      { word: "pear", meaning: "a sweet fruit, wider at the bottom", meaningUrdu: "ناشپاتی", usage: "Noun — the fruit.", usageUrdu: "اسم — ناشپاتی کا پھل۔", example: "She ate a ripe pear.", exampleUrdu: "اس نے ایک پکی ہوئی ناشپاتی کھائی۔" },
      { word: "pare", meaning: "to peel or trim something", meaningUrdu: "چھیلنا / کاٹنا", usage: "Verb — to remove an outer layer (e.g., peel fruit).", usageUrdu: "فعل — باہری تہہ اتارنا (جیسے پھل چھیلنا)۔", example: "Pare the apple before eating.", exampleUrdu: "کھانے سے پہلے سیب چھیل لیں۔" },
    ],
    keyDifference: "'pair' = two of something. 'pear' = the fruit. 'pare' = to peel/trim.",
    keyDifferenceUrdu: "'pair' = جوڑا۔ 'pear' = ناشپاتی۔ 'pare' = چھیلنا۔",
  },
  {
    id: "mail-male",
    category: "pronunciation",
    words: [
      { word: "mail", meaning: "letters or packages sent by post / email", meaningUrdu: "ڈاک / خط / ای میل", usage: "Noun or verb — postal letters or to send electronically.", usageUrdu: "اسم یا فعل — ڈاک یا الیکٹرانک پیغام بھیجنا۔", example: "I received a mail from my friend.", exampleUrdu: "مجھے اپنے دوست کی طرف سے ای میل ملی۔" },
      { word: "male", meaning: "of the masculine gender", meaningUrdu: "مرد / نر", usage: "Adjective or noun — the masculine gender.", usageUrdu: "صفت یا اسم — مذکر جنس۔", example: "The male lion protects the group.", exampleUrdu: "نر شیر گروہ کی حفاظت کرتا ہے۔" },
    ],
    keyDifference: "'mail' = post/email. 'male' = masculine gender. Remember: mAIL has AI — it's about information delivery.",
    keyDifferenceUrdu: "'mail' = ڈاک یا ای میل۔ 'male' = مذکر جنس۔",
  },
  {
    id: "rain-reign-rein",
    category: "pronunciation",
    words: [
      { word: "rain", meaning: "water falling from the sky", meaningUrdu: "بارش", usage: "Noun or verb — precipitation.", usageUrdu: "اسم یا فعل — آسمان سے پانی گرنا۔", example: "It will rain tomorrow.", exampleUrdu: "کل بارش ہو گی۔" },
      { word: "reign", meaning: "the period of rule of a king or queen", meaningUrdu: "دورِ حکومت / حکمرانی", usage: "Noun or verb — a monarch's rule.", usageUrdu: "اسم یا فعل — بادشاہ یا ملکہ کا دورِ اقتدار۔", example: "The king's reign lasted 30 years.", exampleUrdu: "بادشاہ کی حکمرانی 30 سال تک رہی۔" },
      { word: "rein", meaning: "a strap to control a horse / to control something", meaningUrdu: "لگام / قابو کرنا", usage: "Noun (horse strap) or verb (to control or restrain).", usageUrdu: "اسم (گھوڑے کی لگام) یا فعل (کنٹرول کرنا)۔", example: "Hold the reins tightly.", exampleUrdu: "لگام مضبوطی سے پکڑو۔" },
    ],
    keyDifference: "'rain' = weather. 'reign' = a king's rule. 'rein' = horse's strap / to control.",
    keyDifferenceUrdu: "'rain' = بارش۔ 'reign' = دورِ حکومت۔ 'rein' = لگام یا قابو کرنا۔",
  },
  {
    id: "flour-flower",
    category: "pronunciation",
    words: [
      { word: "flour", meaning: "finely ground grain powder used in cooking", meaningUrdu: "آٹا / میدہ", usage: "Noun — used for baking bread, roti, etc.", usageUrdu: "اسم — روٹی، بسکٹ وغیرہ بنانے کا آٹا۔", example: "Mix flour with water to make dough.", exampleUrdu: "آٹے کو پانی سے ملا کر گوندھیں۔" },
      { word: "flower", meaning: "the colourful part of a plant", meaningUrdu: "پھول", usage: "Noun — the blooming part of a plant.", usageUrdu: "اسم — پودے کا کھلنے والا حصہ۔", example: "She gave me a beautiful flower.", exampleUrdu: "اس نے مجھے ایک خوبصورت پھول دیا۔" },
    ],
    keyDifference: "'flour' = used in baking (ends in -our). 'flower' = blooms on plants (contains 'flow').",
    keyDifferenceUrdu: "'flour' = آٹا (کھانا پکانے میں)۔ 'flower' = پھول (پودے پر کھلتا ہے)۔",
  },
  {
    id: "night-knight",
    category: "pronunciation",
    words: [
      { word: "night", meaning: "the dark time after sunset", meaningUrdu: "رات", usage: "Noun — the period of darkness.", usageUrdu: "اسم — غروب آفتاب کے بعد کا وقت۔", example: "I study at night.", exampleUrdu: "میں رات کو پڑھتا ہوں۔" },
      { word: "knight", meaning: "a soldier in armour / a chess piece", meaningUrdu: "سوار / شہسوار / شطرنج کا گھوڑا", usage: "Noun — a medieval armoured soldier or a chess piece.", usageUrdu: "اسم — قرون وسطیٰ کا زرہ بکتر سوار یا شطرنج کا مہرہ۔", example: "The knight rides a horse in battle.", exampleUrdu: "شہسوار جنگ میں گھوڑے پر سوار ہوتا ہے۔" },
    ],
    keyDifference: "'night' = darkness after sunset. 'knight' = armoured soldier (the 'kn' makes just an 'n' sound).",
    keyDifferenceUrdu: "'night' = رات۔ 'knight' = شہسوار (kn کی آواز صرف n ہے)۔",
  },
  {
    id: "whole-hole",
    category: "pronunciation",
    words: [
      { word: "whole", meaning: "entire / complete / all of something", meaningUrdu: "پورا / مکمل / سب", usage: "Adjective — meaning complete or entire.", usageUrdu: "صفت — مکمل یا تمام۔", example: "She ate the whole pizza.", exampleUrdu: "اس نے پوری پیزا کھا لی۔" },
      { word: "hole", meaning: "an opening or gap in something", meaningUrdu: "سوراخ / گڑھا", usage: "Noun — an opening, hollow, or gap.", usageUrdu: "اسم — سوراخ، کھڈ یا خلا۔", example: "There is a hole in the wall.", exampleUrdu: "دیوار میں سوراخ ہے۔" },
    ],
    keyDifference: "'whole' = complete/entire (has a silent 'w'). 'hole' = an opening or gap.",
    keyDifferenceUrdu: "'whole' = پورا/مکمل (w خاموش ہے)۔ 'hole' = سوراخ یا گڑھا۔",
  },
  {
    id: "wait-weight",
    category: "pronunciation",
    words: [
      { word: "wait", meaning: "to stay in place until something happens", meaningUrdu: "انتظار کرنا", usage: "Verb — to pause until someone or something arrives.", usageUrdu: "فعل — کسی چیز یا شخص کا انتظار کرنا۔", example: "Please wait outside.", exampleUrdu: "براہ کرم باہر انتظار کریں۔" },
      { word: "weight", meaning: "how heavy something is", meaningUrdu: "وزن / بوجھ", usage: "Noun — the measure of how heavy something is.", usageUrdu: "اسم — کسی چیز کے بھاری ہونے کی پیمائش۔", example: "What is your weight?", exampleUrdu: "آپ کا وزن کتنا ہے؟" },
    ],
    keyDifference: "'wait' = to pause (verb). 'weight' = heaviness (noun). The 'gh' in weight is silent.",
    keyDifferenceUrdu: "'wait' = انتظار کرنا (فعل)۔ 'weight' = وزن (اسم)۔ weight میں 'gh' خاموش ہے۔",
  },
  {
    id: "week-weak",
    category: "pronunciation",
    words: [
      { word: "week", meaning: "a period of seven days", meaningUrdu: "ہفتہ (سات دن)", usage: "Noun — a unit of time (7 days).", usageUrdu: "اسم — وقت کی اکائی (7 دن)۔", example: "I will visit next week.", exampleUrdu: "میں اگلے ہفتے آؤں گا۔" },
      { word: "weak", meaning: "lacking strength or power", meaningUrdu: "کمزور", usage: "Adjective — not strong physically or in character.", usageUrdu: "صفت — جسمانی یا کرداری طور پر کمزور۔", example: "She felt weak after the illness.", exampleUrdu: "بیماری کے بعد وہ کمزور محسوس کر رہی تھی۔" },
    ],
    keyDifference: "'week' = 7 days (a unit of time). 'weak' = not strong (an adjective).",
    keyDifferenceUrdu: "'week' = ہفتہ (7 دن)۔ 'weak' = کمزور (صفت)۔",
  },
  {
    id: "peace-piece",
    category: "pronunciation",
    words: [
      { word: "peace", meaning: "freedom from conflict / calmness", meaningUrdu: "امن / سکون", usage: "Noun — absence of war or disturbance.", usageUrdu: "اسم — جنگ یا ہنگامے کی غیر موجودگی۔", example: "We all want peace in the world.", exampleUrdu: "ہم سب دنیا میں امن چاہتے ہیں۔" },
      { word: "piece", meaning: "a part or portion of something", meaningUrdu: "ٹکڑا / حصہ", usage: "Noun — a portion or section of something.", usageUrdu: "اسم — کسی چیز کا ٹکڑا یا حصہ۔", example: "Give me a piece of bread.", exampleUrdu: "مجھے روٹی کا ایک ٹکڑا دیں۔" },
    ],
    keyDifference: "'peace' = tranquility/no war. 'piece' = a portion. Tip: a PIEce of pie — contains 'pie'!",
    keyDifferenceUrdu: "'peace' = امن/سکون۔ 'piece' = ٹکڑا/حصہ۔ یاد رکھیں: piece میں 'pie' ہے — جیسے پائی کا ٹکڑا!",
  },
  {
    id: "buy-by-bye",
    category: "pronunciation",
    words: [
      { word: "buy", meaning: "to purchase something", meaningUrdu: "خریدنا", usage: "Verb — to pay money for something.", usageUrdu: "فعل — پیسے دے کر چیز لینا۔", example: "I want to buy a new book.", exampleUrdu: "میں نئی کتاب خریدنا چاہتا ہوں۔" },
      { word: "by", meaning: "near / through / before / using", meaningUrdu: "کے پاس / کے ذریعے / تک", usage: "Preposition — shows position, means, or deadline.", usageUrdu: "حرف جر — جگہ، ذریعہ یا آخری وقت ظاہر کرتا ہے۔", example: "Sit by the window. Submit by Friday.", exampleUrdu: "کھڑکی کے پاس بیٹھو۔ جمعہ تک جمع کریں۔" },
      { word: "bye", meaning: "farewell / short for goodbye", meaningUrdu: "خدا حافظ / الوداع", usage: "Exclamation — a way of saying goodbye.", usageUrdu: "حرف ندا — الوداع کہنے کا طریقہ۔", example: "She waved and said bye.", exampleUrdu: "اس نے ہاتھ ہلایا اور خدا حافظ کہا۔" },
    ],
    keyDifference: "'buy' = purchase. 'by' = near/through/before. 'bye' = goodbye.",
    keyDifferenceUrdu: "'buy' = خریدنا۔ 'by' = کے ذریعے/پاس/تک۔ 'bye' = خدا حافظ۔",
  },
  {
    id: "steal-steel",
    category: "pronunciation",
    words: [
      { word: "steal", meaning: "to take something without permission", meaningUrdu: "چوری کرنا", usage: "Verb — to take something illegally.", usageUrdu: "فعل — بغیر اجازت کے کوئی چیز لے لینا۔", example: "It is wrong to steal.", exampleUrdu: "چوری کرنا غلط ہے۔" },
      { word: "steel", meaning: "a strong metal alloy", meaningUrdu: "فولاد / سٹیل", usage: "Noun — a hard metal made from iron and carbon.", usageUrdu: "اسم — لوہے اور کاربن سے بنی مضبوط دھات۔", example: "The bridge is made of steel.", exampleUrdu: "پل فولاد سے بنا ہے۔" },
    ],
    keyDifference: "'steal' = to take illegally (verb). 'steel' = the hard metal (noun).",
    keyDifferenceUrdu: "'steal' = چوری کرنا (فعل)۔ 'steel' = فولاد (اسم)۔",
  },
  {
    id: "plain-plane",
    category: "pronunciation",
    words: [
      { word: "plain", meaning: "simple / not decorated / flat open land", meaningUrdu: "سادہ / میدان", usage: "Adjective (simple, undecorated) or noun (flat land).", usageUrdu: "صفت (سادہ) یا اسم (ہموار میدان)۔", example: "She wore a plain white shirt.", exampleUrdu: "اس نے سادہ سفید قمیص پہنی۔" },
      { word: "plane", meaning: "an aircraft / a flat surface / a woodworking tool", meaningUrdu: "ہوائی جہاز / چپٹی سطح", usage: "Noun — aircraft, geometric surface, or woodworking plane.", usageUrdu: "اسم — ہوائی جہاز، ہندسی سطح، یا بڑھئی کا اوزار۔", example: "We boarded the plane at 8 am.", exampleUrdu: "ہم نے صبح 8 بجے ہوائی جہاز میں سوار ہوئے۔" },
    ],
    keyDifference: "'plain' = simple/unadorned or flat land. 'plane' = aircraft or flat geometric surface.",
    keyDifferenceUrdu: "'plain' = سادہ یا ہموار میدان۔ 'plane' = ہوائی جہاز یا چپٹی سطح۔",
  },
  {
    id: "fair-fare",
    category: "pronunciation",
    words: [
      { word: "fair", meaning: "just / light in colour / an outdoor event", meaningUrdu: "منصفانہ / گورا / میلہ", usage: "Adjective (just, light-skinned) or noun (outdoor market/event).", usageUrdu: "صفت (انصاف پر مبنی، گورا) یا اسم (میلہ)۔", example: "The judge made a fair decision.", exampleUrdu: "جج نے منصفانہ فیصلہ کیا۔" },
      { word: "fare", meaning: "the price of a journey / food served", meaningUrdu: "کرایہ / کھانا", usage: "Noun — cost of transport or food offered.", usageUrdu: "اسم — سفر کی قیمت یا پیش کردہ کھانا۔", example: "What is the bus fare to Karachi?", exampleUrdu: "کراچی تک بس کا کرایہ کتنا ہے؟" },
    ],
    keyDifference: "'fair' = just/light/an event. 'fare' = transport cost or food.",
    keyDifferenceUrdu: "'fair' = منصفانہ / میلہ۔ 'fare' = کرایہ یا کھانا۔",
  },
  {
    id: "hour-our",
    category: "pronunciation",
    words: [
      { word: "hour", meaning: "sixty minutes / a unit of time", meaningUrdu: "گھنٹہ", usage: "Noun — 60 minutes; the 'h' is silent.", usageUrdu: "اسم — 60 منٹ۔ 'h' خاموش ہے، اس لیے 'our' جیسا بولا جاتا ہے۔", example: "The class lasts one hour.", exampleUrdu: "کلاس ایک گھنٹہ چلتی ہے۔" },
      { word: "our", meaning: "belonging to us", meaningUrdu: "ہمارا / ہماری / ہمارے", usage: "Possessive pronoun for 'we'.", usageUrdu: "'ہم' کا ضمیر ملکیت۔", example: "This is our school.", exampleUrdu: "یہ ہمارا اسکول ہے۔" },
    ],
    keyDifference: "'hour' = 60 minutes (the 'h' is silent, so it sounds exactly like 'our'). 'our' = belonging to us.",
    keyDifferenceUrdu: "'hour' = گھنٹہ (h خاموش ہے)۔ 'our' = ہمارا (ضمیر ملکیت)۔",
  },
  {
    id: "meet-meat-mete",
    category: "pronunciation",
    words: [
      { word: "meet", meaning: "to encounter or come together with someone", meaningUrdu: "ملنا", usage: "Verb — to encounter someone.", usageUrdu: "فعل — کسی سے ملنا۔", example: "I will meet you at the park.", exampleUrdu: "میں تم سے پارک میں ملوں گا۔" },
      { word: "meat", meaning: "animal flesh used as food", meaningUrdu: "گوشت", usage: "Noun — flesh of animals eaten as food.", usageUrdu: "اسم — کھانے کے لیے جانور کا گوشت۔", example: "She does not eat meat.", exampleUrdu: "وہ گوشت نہیں کھاتی۔" },
      { word: "mete", meaning: "to distribute or deal out", meaningUrdu: "تقسیم کرنا / دینا", usage: "Verb — formal; to give out punishment or reward.", usageUrdu: "فعل — سزا یا انعام تقسیم کرنا (رسمی)۔", example: "The judge meted out justice.", exampleUrdu: "جج نے انصاف کیا۔" },
    ],
    keyDifference: "'meet' = to encounter. 'meat' = animal flesh. 'mete' = to distribute (formal).",
    keyDifferenceUrdu: "'meet' = ملنا۔ 'meat' = گوشت۔ 'mete' = تقسیم کرنا (رسمی)۔",
  },
  {
    id: "road-rode",
    category: "pronunciation",
    words: [
      { word: "road", meaning: "a path or way for vehicles", meaningUrdu: "سڑک / راستہ", usage: "Noun — a surface for vehicles to travel on.", usageUrdu: "اسم — گاڑیوں کے لیے راستہ۔", example: "The road to Lahore is long.", exampleUrdu: "لاہور کی سڑک لمبی ہے۔" },
      { word: "rode", meaning: "past tense of 'ride'", meaningUrdu: "سوار ہوا / چلایا (ماضی)", usage: "Verb — past tense of 'ride'.", usageUrdu: "فعل — 'ride' کا ماضی۔", example: "He rode his bicycle to school.", exampleUrdu: "وہ سائیکل پر سوار ہو کر اسکول گیا۔" },
    ],
    keyDifference: "'road' = a surface for travel (noun). 'rode' = past tense of ride (verb).",
    keyDifferenceUrdu: "'road' = سڑک (اسم)۔ 'rode' = سوار ہوا، ride کا ماضی (فعل)۔",
  },
  {
    id: "which-witch",
    category: "pronunciation",
    words: [
      { word: "which", meaning: "used to ask about a choice between options", meaningUrdu: "کون سا / کون سی", usage: "Pronoun or adjective — to specify one of a set of things.", usageUrdu: "ضمیر یا صفت — چیزوں میں سے ایک کا انتخاب کرنے کے لیے۔", example: "Which book do you prefer?", exampleUrdu: "تم کون سی کتاب پسند کرتے ہو؟" },
      { word: "witch", meaning: "a woman said to practise magic / a wicked woman", meaningUrdu: "جادوگرنی / چڑیل", usage: "Noun — a woman believed to use magic.", usageUrdu: "اسم — وہ عورت جس کے بارے میں خیال کیا جائے کہ جادو کرتی ہے۔", example: "The story has a scary witch.", exampleUrdu: "کہانی میں ایک ڈرانی چڑیل ہے۔" },
    ],
    keyDifference: "'which' = a question word for choosing. 'witch' = a magical/wicked woman.",
    keyDifferenceUrdu: "'which' = انتخاب کا سوالیہ لفظ۔ 'witch' = جادوگرنی۔",
  },

  // ══════════════════════════════════════════════════════════════════
  //  SIMILAR SPELLING — Different meaning, often confused
  // ══════════════════════════════════════════════════════════════════

  {
    id: "affect-effect",
    category: "spelling",
    words: [
      { word: "affect", meaning: "to influence or have impact on (verb)", meaningUrdu: "اثر ڈالنا (فعل)", usage: "Almost always a verb.", usageUrdu: "تقریباً ہمیشہ فعل کے طور پر۔", example: "The rain affected the match.", exampleUrdu: "بارش نے میچ پر اثر ڈالا۔" },
      { word: "effect", meaning: "a result or consequence (noun)", meaningUrdu: "نتیجہ / اثر (اسم)", usage: "Almost always a noun.", usageUrdu: "تقریباً ہمیشہ اسم کے طور پر۔", example: "The effect of rain was visible.", exampleUrdu: "بارش کا اثر نظر آ رہا تھا۔" },
    ],
    keyDifference: "AFFECT = Action (verb). EFFECT = End result (noun). Remember RAVEN: Remember Affect Verb Effect Noun.",
    keyDifferenceUrdu: "AFFECT = عمل (فعل)۔ EFFECT = نتیجہ (اسم)۔ یاد: affect = فعل، effect = اسم۔",
  },
  {
    id: "accept-except",
    category: "spelling",
    words: [
      { word: "accept", meaning: "to receive or agree to", meaningUrdu: "قبول کرنا", usage: "Verb — to receive willingly.", usageUrdu: "فعل — خوشی سے قبول کرنا۔", example: "She accepted the job offer.", exampleUrdu: "اس نے نوکری کی پیشکش قبول کی۔" },
      { word: "except", meaning: "excluding / not including", meaningUrdu: "سوائے / علاوہ", usage: "Preposition — 'but not'.", usageUrdu: "حرف جر — لیکن نہیں۔", example: "Everyone came except Ali.", exampleUrdu: "علی کے علاوہ سب آئے۔" },
    ],
    keyDifference: "'accept' starts with 'acc-' like 'acknowledge'. 'except' starts with 'exc-' like 'exclude'.",
    keyDifferenceUrdu: "'accept' = قبول کرنا۔ 'except' = خارج کرنا (علاوہ)۔",
  },
  {
    id: "than-then",
    category: "spelling",
    words: [
      { word: "than", meaning: "used in comparisons", meaningUrdu: "سے (موازنے میں)", usage: "For comparing two things.", usageUrdu: "دو چیزوں کا موازنہ کرنے کے لیے۔", example: "She is taller than her sister.", exampleUrdu: "وہ اپنی بہن سے لمبی ہے۔" },
      { word: "then", meaning: "at that time / next in sequence", meaningUrdu: "پھر / اس وقت / بعد میں", usage: "Refers to time or sequence.", usageUrdu: "وقت یا ترتیب کے لیے۔", example: "We ate dinner, then watched TV.", exampleUrdu: "ہم نے کھانا کھایا، پھر ٹی وی دیکھا۔" },
    ],
    keyDifference: "'than' = comparison. 'then' = time/sequence. 'than' has 'a' like 'compare'; 'then' has 'e' like 'sequence'.",
    keyDifferenceUrdu: "'than' = موازنہ۔ 'then' = وقت/ترتیب۔",
  },
  {
    id: "advice-advise",
    category: "spelling",
    words: [
      { word: "advice", meaning: "a recommendation or suggestion (noun)", meaningUrdu: "مشورہ (اسم)", usage: "Noun — the recommendation itself.", usageUrdu: "اسم — مشورے کی بات۔", example: "He gave me good advice.", exampleUrdu: "اس نے مجھے اچھا مشورہ دیا۔" },
      { word: "advise", meaning: "to give advice (verb)", meaningUrdu: "مشورہ دینا (فعل)", usage: "Verb — the act of recommending.", usageUrdu: "فعل — مشورہ دینے کا عمل۔", example: "I advise you to study harder.", exampleUrdu: "میں تمہیں زیادہ محنت سے پڑھنے کا مشورہ دیتا ہوں۔" },
    ],
    keyDifference: "'advice' (noun) = the suggestion itself. 'advise' (verb) = to give the suggestion. ICE is a noun; ISE is a verb.",
    keyDifferenceUrdu: "'advice' = مشورہ (اسم)۔ 'advise' = مشورہ دینا (فعل)۔",
  },
  {
    id: "desert-dessert",
    category: "spelling",
    words: [
      { word: "desert", meaning: "a dry, barren land / to abandon", meaningUrdu: "صحرا / چھوڑ کر جانا", usage: "Noun (dry land) or verb (to abandon).", usageUrdu: "اسم (خشک علاقہ) یا فعل (چھوڑ کر جانا)۔", example: "The Sahara is a hot desert.", exampleUrdu: "صحارا ایک گرم صحرا ہے۔" },
      { word: "dessert", meaning: "a sweet dish served after a meal", meaningUrdu: "مٹھائی / میٹھا", usage: "Noun — sweet food at the end of a meal.", usageUrdu: "اسم — کھانے کے آخر میں میٹھی چیز۔", example: "She ordered chocolate cake for dessert.", exampleUrdu: "اس نے میٹھے کے لیے چاکلیٹ کیک کا آرڈر دیا۔" },
    ],
    keyDifference: "dessERT has two S's — because you always want MORE of the sweet! dESErt has one S — like the sandy land.",
    keyDifferenceUrdu: "'dessert' (میٹھا) میں دو S ہیں — کیونکہ میٹھا ہمیشہ دوبارہ چاہیے! 'desert' (صحرا) میں ایک S ہے۔",
  },
  {
    id: "lose-loose",
    category: "spelling",
    words: [
      { word: "lose", meaning: "to fail to keep / to be defeated", meaningUrdu: "کھونا / ہارنا", usage: "Verb — to misplace or fail to win.", usageUrdu: "فعل — گم کرنا یا شکست کھانا۔", example: "Don't lose your keys.", exampleUrdu: "اپنی چابیاں نہ کھونا۔" },
      { word: "loose", meaning: "not tight / not firmly fixed", meaningUrdu: "ڈھیلا / کھلا", usage: "Adjective — not tight or not firmly attached.", usageUrdu: "صفت — کسا ہوا نہیں، آزاد یا ڈھیلا۔", example: "These trousers are too loose.", exampleUrdu: "یہ پتلون بہت ڈھیلی ہے۔" },
    ],
    keyDifference: "'lose' (verb) = to misplace or be defeated. 'loose' (adjective) = not tight. Lose has one 'o'; loose has two.",
    keyDifferenceUrdu: "'lose' = کھونا/ہارنا (فعل) — ایک o۔ 'loose' = ڈھیلا (صفت) — دو o۔",
  },
  {
    id: "principal-principle",
    category: "spelling",
    words: [
      { word: "principal", meaning: "the most important / the head of a school", meaningUrdu: "مہتمم / سربراہ / سب سے اہم", usage: "Adjective (most important) or noun (school head).", usageUrdu: "صفت (سب سے اہم) یا اسم (اسکول کا سربراہ)۔", example: "The school principal gave a speech.", exampleUrdu: "اسکول کے ناظم نے تقریر کی۔" },
      { word: "principle", meaning: "a fundamental rule or belief", meaningUrdu: "اصول / عقیدہ", usage: "Noun — a fundamental truth, law, or guideline.", usageUrdu: "اسم — بنیادی اصول یا قانون۔", example: "He is a man of strong principles.", exampleUrdu: "وہ مضبوط اصولوں کا آدمی ہے۔" },
    ],
    keyDifference: "principAL = person/position (your pal!). principlE = a rule (ends in -le like rule).",
    keyDifferenceUrdu: "'principal' = شخص یا عہدہ۔ 'principle' = اصول یا قاعدہ۔",
  },
  {
    id: "stationary-stationery",
    category: "spelling",
    words: [
      { word: "stationary", meaning: "not moving / fixed in place", meaningUrdu: "ساکت / ایک جگہ کھڑا", usage: "Adjective — not moving.", usageUrdu: "صفت — حرکت نہیں کر رہا۔", example: "The car remained stationary.", exampleUrdu: "گاڑی ساکت رہی۔" },
      { word: "stationery", meaning: "paper, pens, and other writing materials", meaningUrdu: "قرطاسِ اعمال / لکھنے کا سامان", usage: "Noun — writing materials (pens, paper, envelopes).", usageUrdu: "اسم — قلم، کاغذ، لفافے وغیرہ۔", example: "Buy stationery for the school year.", exampleUrdu: "تعلیمی سال کے لیے لکھنے کا سامان خریدیں۔" },
    ],
    keyDifference: "stationEry = contains 'E' for Envelope and pEn — it's about writing supplies. stationAry = contains 'A' like stAy in place.",
    keyDifferenceUrdu: "'stationery' = لکھنے کا سامان (E for Envelope)۔ 'stationary' = ایک جگہ (A for stAy)۔",
  },
  {
    id: "complement-compliment",
    category: "spelling",
    words: [
      { word: "complement", meaning: "something that completes or goes well with another", meaningUrdu: "تکمیل کرنے والا / پورا کرنا", usage: "Noun or verb — to complete or enhance something.", usageUrdu: "اسم یا فعل — کسی چیز کو مکمل یا بہتر بنانا۔", example: "The sauce complements the dish.", exampleUrdu: "چٹنی کھانے کو مزیدار بناتی ہے۔" },
      { word: "compliment", meaning: "a polite expression of praise", meaningUrdu: "تعریف / داد", usage: "Noun or verb — to say something nice about someone.", usageUrdu: "اسم یا فعل — کسی کی تعریف کرنا۔", example: "He paid her a compliment.", exampleUrdu: "اس نے اس کی تعریف کی۔" },
    ],
    keyDifference: "complEment = complEte (both have 'e'). complIment = I give you a nice complIment (has 'i').",
    keyDifferenceUrdu: "'complement' = مکمل کرنا (e for complEte)۔ 'compliment' = تعریف کرنا (I like you — i)۔",
  },
  {
    id: "farther-further",
    category: "spelling",
    words: [
      { word: "farther", meaning: "at a greater physical distance", meaningUrdu: "زیادہ دور (جسمانی فاصلہ)", usage: "Used for measurable physical distance.", usageUrdu: "قابلِ پیمائش جسمانی فاصلے کے لیے۔", example: "Islamabad is farther than Rawalpindi.", exampleUrdu: "اسلام آباد راولپنڈی سے زیادہ دور ہے۔" },
      { word: "further", meaning: "to a greater degree / additionally (also distance in informal use)", meaningUrdu: "مزید / اضافی طور پر", usage: "Used for metaphorical distance or degree; also acceptable for physical distance.", usageUrdu: "مجازی فاصلے یا درجے کے لیے؛ جسمانی فاصلے میں بھی قابلِ قبول۔", example: "Let us discuss this further.", exampleUrdu: "آئیں اس پر مزید بات کریں۔" },
    ],
    keyDifference: "'farther' = physical distance (contains 'far'). 'further' = degree or extent (metaphorical).",
    keyDifferenceUrdu: "'farther' = جسمانی فاصلہ (far ہے اس میں)۔ 'further' = مزید/اضافی (مجازی)۔",
  },
  {
    id: "fewer-less",
    category: "spelling",
    words: [
      { word: "fewer", meaning: "a smaller number of (countable things)", meaningUrdu: "کم (گنے جانے والے)", usage: "Used with things you can count individually.", usageUrdu: "ان چیزوں کے لیے جنہیں گنا جا سکے۔", example: "There are fewer students today.", exampleUrdu: "آج کم طالب علم ہیں۔" },
      { word: "less", meaning: "a smaller amount of (uncountable things)", meaningUrdu: "کم (نہ گنے جانے والے)", usage: "Used with uncountable nouns.", usageUrdu: "ان چیزوں کے لیے جو گنی نہیں جا سکتیں۔", example: "Drink less coffee. There is less water.", exampleUrdu: "کم کافی پیئیں۔ پانی کم ہے۔" },
    ],
    keyDifference: "'fewer' = you can COUNT the items (fewer books, fewer students). 'less' = you cannot count it (less water, less time).",
    keyDifferenceUrdu: "'fewer' = گنے جا سکتے (کم کتابیں، کم طلبا)۔ 'less' = نہیں گنے جا سکتے (کم پانی، کم وقت)۔",
  },
  {
    id: "historic-historical",
    category: "spelling",
    words: [
      { word: "historic", meaning: "famous or important in history", meaningUrdu: "تاریخی اہمیت کا حامل", usage: "Describes something that made history — significant, famous.", usageUrdu: "کوئی چیز جس نے تاریخ بنائی — مشہور اور اہم۔", example: "The moon landing was a historic event.", exampleUrdu: "چاند پر اترنا ایک تاریخ ساز واقعہ تھا۔" },
      { word: "historical", meaning: "relating to history / from the past", meaningUrdu: "تاریخ سے متعلق / ماضی کا", usage: "Describes anything related to or from history.", usageUrdu: "تاریخ سے متعلق یا ماضی سے تعلق رکھنے والا۔", example: "She read a historical novel.", exampleUrdu: "اس نے ایک تاریخی ناول پڑھا۔" },
    ],
    keyDifference: "'historic' = made history (important). 'historical' = related to history (any past event or thing).",
    keyDifferenceUrdu: "'historic' = تاریخ ساز (بہت اہم)۔ 'historical' = تاریخ سے متعلق (کوئی بھی ماضی کی چیز)۔",
  },
  {
    id: "assure-ensure-insure",
    category: "spelling",
    words: [
      { word: "assure", meaning: "to tell someone confidently to remove doubt", meaningUrdu: "یقین دلانا / اطمینان دینا", usage: "Always has a personal object — assure someone.", usageUrdu: "ہمیشہ کسی شخص کو — assure someone۔", example: "I assure you everything will be fine.", exampleUrdu: "میں آپ کو یقین دلاتا ہوں کہ سب ٹھیک ہو جائے گا۔" },
      { word: "ensure", meaning: "to make certain that something happens", meaningUrdu: "یقینی بنانا", usage: "Ensure that a thing happens — no personal object needed.", usageUrdu: "کسی بات کو یقینی بنانا — ذاتی مفعول ضروری نہیں۔", example: "Please ensure the door is locked.", exampleUrdu: "براہ کرم یقینی بنائیں کہ دروازہ بند ہے۔" },
      { word: "insure", meaning: "to buy insurance for protection against loss", meaningUrdu: "بیمہ کروانا", usage: "Financial protection — related to insurance policies.", usageUrdu: "مالی تحفظ — بیمہ پالیسی سے متعلق۔", example: "You should insure your car.", exampleUrdu: "آپ کو اپنی گاڑی کا بیمہ کروانا چاہیے۔" },
    ],
    keyDifference: "'assure' = comfort a person. 'ensure' = make sure something happens. 'insure' = buy insurance.",
    keyDifferenceUrdu: "'assure' = کسی کو اطمینان دینا۔ 'ensure' = کچھ یقینی بنانا۔ 'insure' = بیمہ کروانا۔",
  },

  // ══════════════════════════════════════════════════════════════════
  //  SIMILAR MEANING — Synonyms with subtle differences
  // ══════════════════════════════════════════════════════════════════

  {
    id: "happy-glad-joyful",
    category: "meaning",
    words: [
      { word: "happy", meaning: "feeling pleasure and contentment", meaningUrdu: "خوش / مسرور", usage: "General, everyday contentment.", usageUrdu: "عام روزمرہ کی خوشی۔", example: "I am happy to meet you.", exampleUrdu: "میں آپ سے مل کر خوش ہوں۔" },
      { word: "glad", meaning: "pleased or relieved about something specific", meaningUrdu: "خوش / مطمئن (مخصوص وجہ سے)", usage: "Pleased about a particular event or situation.", usageUrdu: "کسی خاص واقعے سے خوش۔", example: "I am glad the exam is over.", exampleUrdu: "مجھے خوشی ہے کہ امتحان ختم ہو گیا۔" },
      { word: "joyful", meaning: "feeling great and intense happiness", meaningUrdu: "انتہائی خوش / شادمان", usage: "Stronger than happy — deep, expressive delight.", usageUrdu: "خوش سے زیادہ شدید — ظاہری اور گہری خوشی۔", example: "The children were joyful at the fair.", exampleUrdu: "بچے میلے میں بہت خوش تھے۔" },
    ],
    keyDifference: "happy = general contentment. glad = relief or pleasure about something specific. joyful = intense, visible happiness.",
    keyDifferenceUrdu: "happy = عام خوشی۔ glad = کسی خاص بات سے خوشی۔ joyful = شدید اور ظاہری خوشی۔",
  },
  {
    id: "big-large-great",
    category: "meaning",
    words: [
      { word: "big", meaning: "large in size (informal)", meaningUrdu: "بڑا (غیر رسمی)", usage: "Casual; for size and importance.", usageUrdu: "غیر رسمی، سائز اور اہمیت کے لیے۔", example: "That is a big house.", exampleUrdu: "یہ ایک بڑا گھر ہے۔" },
      { word: "large", meaning: "considerable in size (neutral/formal)", meaningUrdu: "بڑا (رسمی)", usage: "Neutral/formal; for size and quantities.", usageUrdu: "رسمی؛ سائز اور مقدار کے لیے۔", example: "Pakistan has a large population.", exampleUrdu: "پاکستان کی آبادی بہت زیادہ ہے۔" },
      { word: "great", meaning: "of exceptional quality or importance", meaningUrdu: "عظیم / غیر معمولی", usage: "Quality, importance, or intensity — not just size.", usageUrdu: "معیار، اہمیت یا شدت — صرف سائز نہیں۔", example: "He is a great leader.", exampleUrdu: "وہ ایک عظیم رہنما ہے۔" },
    ],
    keyDifference: "big = informal size. large = neutral/formal size. great = exceptional quality (not just size).",
    keyDifferenceUrdu: "big = غیر رسمی سائز۔ large = رسمی سائز۔ great = غیر معمولی معیار۔",
  },
  {
    id: "see-look-watch",
    category: "meaning",
    words: [
      { word: "see", meaning: "to perceive with eyes without intention", meaningUrdu: "دیکھنا (بے ارادہ)", usage: "Involuntary — happens naturally without focusing.", usageUrdu: "غیر ارادی — قدرتی طور پر ہوتا ہے۔", example: "I can see the mountains.", exampleUrdu: "میں پہاڑ دیکھ سکتا ہوں۔" },
      { word: "look", meaning: "to direct eyes toward something intentionally", meaningUrdu: "نگاہ ڈالنا / دیکھنا (ارادی)", usage: "Deliberate but brief direction of gaze.", usageUrdu: "ارادی لیکن مختصر نگاہ۔", example: "Look at that bird!", exampleUrdu: "اس پرندے کو دیکھو!" },
      { word: "watch", meaning: "to look carefully and continuously at something moving", meaningUrdu: "غور سے دیکھتے رہنا", usage: "Sustained, focused attention on moving things or events.", usageUrdu: "مستقل توجہ — حرکت یا واقعات پر۔", example: "We watched the cricket match.", exampleUrdu: "ہم نے کرکٹ میچ دیکھا۔" },
    ],
    keyDifference: "see = unintentional. look = intentional but brief. watch = intentional and sustained (for events, movement).",
    keyDifferenceUrdu: "see = غیر ارادی۔ look = ارادی لیکن مختصر۔ watch = مستقل توجہ (واقعات، حرکت)۔",
  },
  {
    id: "say-tell-speak-talk",
    category: "meaning",
    words: [
      { word: "say", meaning: "to express in words", meaningUrdu: "کہنا", usage: "Followed by the actual words spoken or 'that'.", usageUrdu: "اصل بولے گئے الفاظ یا 'that' کے ساتھ آتا ہے۔", example: "She said that she was tired.", exampleUrdu: "اس نے کہا کہ وہ تھکی ہوئی ہے۔" },
      { word: "tell", meaning: "to inform or instruct someone", meaningUrdu: "بتانا / بولنا", usage: "Always needs a person (tell someone something).", usageUrdu: "ہمیشہ کسی شخص کے ساتھ آتا ہے — tell someone something۔", example: "Tell me the answer.", exampleUrdu: "مجھے جواب بتاؤ۔" },
      { word: "speak", meaning: "to use language / to address formally", meaningUrdu: "بولنا (رسمی)", usage: "Formal; about language or addressing people.", usageUrdu: "رسمی؛ زبان یا رسمی خطاب کے بارے میں۔", example: "She speaks English fluently.", exampleUrdu: "وہ روانی سے انگریزی بولتی ہے۔" },
      { word: "talk", meaning: "to have a conversation / discuss informally", meaningUrdu: "بات کرنا (غیر رسمی)", usage: "Informal; implies a two-way conversation.", usageUrdu: "غیر رسمی؛ دو طرفہ گفتگو کا اشارہ۔", example: "Can we talk later?", exampleUrdu: "کیا ہم بعد میں بات کر سکتے ہیں؟" },
    ],
    keyDifference: "say = quote words. tell = inform a person. speak = use language/formal. talk = informal conversation.",
    keyDifferenceUrdu: "say = الفاظ کہنا۔ tell = کسی کو بتانا۔ speak = زبان استعمال کرنا/رسمی۔ talk = غیر رسمی گفتگو۔",
  },
  {
    id: "angry-furious-irritated",
    category: "meaning",
    words: [
      { word: "irritated", meaning: "mildly annoyed", meaningUrdu: "چڑچڑا / ہلکا غصہ", usage: "The mildest form — slight annoyance.", usageUrdu: "سب سے ہلکی شکل — معمولی جھنجھلاہٹ۔", example: "She was irritated by the noise.", exampleUrdu: "وہ شور سے پریشان تھی۔" },
      { word: "angry", meaning: "feeling or showing strong displeasure", meaningUrdu: "ناراض / غصہ", usage: "The common, moderate form of anger.", usageUrdu: "غصے کی عام، درمیانی شکل۔", example: "He was angry about the delay.", exampleUrdu: "وہ تاخیر پر ناراض تھا۔" },
      { word: "furious", meaning: "extremely angry / enraged", meaningUrdu: "سخت غصے میں / آگ بگولہ", usage: "The strongest form — intense rage.", usageUrdu: "سب سے شدید شکل — انتہائی غصہ۔", example: "She was furious at the injustice.", exampleUrdu: "وہ ناانصافی پر آگ بگولہ تھی۔" },
    ],
    keyDifference: "irritated < angry < furious. These are a scale from mild to extreme anger.",
    keyDifferenceUrdu: "irritated < angry < furious۔ یہ ہلکے سے شدید غصے کی سطحیں ہیں۔",
  },
  {
    id: "fast-quick-rapid",
    category: "meaning",
    words: [
      { word: "fast", meaning: "moving or happening at high speed", meaningUrdu: "تیز / جلدی", usage: "Refers to consistent speed over time.", usageUrdu: "مستقل تیز رفتاری کے لیے۔", example: "He is a fast runner.", exampleUrdu: "وہ تیز دوڑنے والا ہے۔" },
      { word: "quick", meaning: "done in a short time / prompt", meaningUrdu: "جلدی / فوری", usage: "Duration — done in a short time.", usageUrdu: "مدت — تھوڑے وقت میں مکمل۔", example: "Can I ask a quick question?", exampleUrdu: "کیا میں ایک فوری سوال پوچھ سکتا ہوں؟" },
      { word: "rapid", meaning: "happening in a short time at high rate", meaningUrdu: "تیز رفتار / سریع", usage: "Often used for processes or changes (formal).", usageUrdu: "اکثر عمل یا تبدیلیوں کے لیے (رسمی)۔", example: "There has been rapid development.", exampleUrdu: "تیزی سے ترقی ہوئی ہے۔" },
    ],
    keyDifference: "fast = high speed (sustained). quick = short duration. rapid = high rate of change/process (formal).",
    keyDifferenceUrdu: "fast = تیز رفتار (مستقل)۔ quick = مختصر وقت۔ rapid = تیز عمل یا تبدیلی (رسمی)۔",
  },
  {
    id: "afraid-scared-terrified",
    category: "meaning",
    words: [
      { word: "afraid", meaning: "feeling fear (slightly formal)", meaningUrdu: "ڈرا ہوا / خوف زدہ", usage: "General/formal word for fear.", usageUrdu: "خوف کا عام یا رسمی لفظ۔", example: "She is afraid of spiders.", exampleUrdu: "وہ مکڑوں سے ڈرتی ہے۔" },
      { word: "scared", meaning: "frightened (informal, everyday)", meaningUrdu: "ڈرا ہوا (غیر رسمی)", usage: "Informal, everyday use for fear.", usageUrdu: "روزمرہ، غیر رسمی خوف۔", example: "I was scared when the lights went out.", exampleUrdu: "جب بجلی گئی تو میں ڈر گیا۔" },
      { word: "terrified", meaning: "extremely frightened", meaningUrdu: "دہشت زدہ / بہت ڈرا ہوا", usage: "The most intense form of fear.", usageUrdu: "خوف کی سب سے شدید شکل۔", example: "He was terrified by the explosion.", exampleUrdu: "وہ دھماکے سے دہشت زدہ ہو گیا۔" },
    ],
    keyDifference: "afraid = general/formal fear. scared = informal fear. terrified = extreme, intense fear.",
    keyDifferenceUrdu: "afraid = عمومی/رسمی خوف۔ scared = غیر رسمی خوف۔ terrified = انتہائی شدید خوف۔",
  },
  {
    id: "tired-exhausted-weary",
    category: "meaning",
    words: [
      { word: "tired", meaning: "feeling a need to rest", meaningUrdu: "تھکا ہوا", usage: "Common, mild to moderate fatigue.", usageUrdu: "عام، ہلکی سے درمیانی تھکاوٹ۔", example: "I am tired after work.", exampleUrdu: "کام کے بعد میں تھکا ہوا ہوں۔" },
      { word: "exhausted", meaning: "extremely tired / completely drained of energy", meaningUrdu: "بالکل تھکا چور", usage: "Much stronger than tired — extreme fatigue.", usageUrdu: "tired سے بہت زیادہ — انتہائی تھکاوٹ۔", example: "She was exhausted after the marathon.", exampleUrdu: "میراتھن کے بعد وہ تھکا چور تھی۔" },
      { word: "weary", meaning: "tired and slightly hopeless, often from long effort", meaningUrdu: "اکتایا ہوا / بوجھل", usage: "Tired and lacking enthusiasm, often due to long-term effort.", usageUrdu: "طویل محنت سے تھکا اور اکتایا ہوا۔", example: "He felt weary of the long struggle.", exampleUrdu: "وہ طویل جدوجہد سے تھکا اکتایا محسوس کر رہا تھا۔" },
    ],
    keyDifference: "tired = general fatigue. exhausted = extreme, total fatigue. weary = fatigue + loss of enthusiasm/hope.",
    keyDifferenceUrdu: "tired = عام تھکاوٹ۔ exhausted = انتہائی تھکاوٹ۔ weary = تھکاوٹ + اکتاہٹ۔",
  },
  {
    id: "end-finish-conclude",
    category: "meaning",
    words: [
      { word: "end", meaning: "to stop or come to a close", meaningUrdu: "ختم ہونا / آخر", usage: "General and versatile — both formal and informal.", usageUrdu: "عام اور ہمہ جہت — رسمی اور غیر رسمی دونوں۔", example: "The film ends at 9 pm.", exampleUrdu: "فلم رات 9 بجے ختم ہوتی ہے۔" },
      { word: "finish", meaning: "to complete something / to bring to an end", meaningUrdu: "مکمل کرنا / فارغ ہونا", usage: "Implies completing a task or activity.", usageUrdu: "کوئی کام یا سرگرمی مکمل کرنے کا اشارہ۔", example: "Please finish your homework.", exampleUrdu: "براہ کرم اپنا ہوم ورک مکمل کریں۔" },
      { word: "conclude", meaning: "to bring to a formal ending / to infer from evidence", meaningUrdu: "نتیجہ اخذ کرنا / باضابطہ ختم کرنا", usage: "Formal — for speeches, meetings, investigations.", usageUrdu: "رسمی — تقریر، میٹنگ، تحقیق کے لیے۔", example: "The professor concluded his lecture.", exampleUrdu: "پروفیسر نے اپنا لیکچر ختم کیا۔" },
    ],
    keyDifference: "end = general stop. finish = complete a task. conclude = formal ending or reaching a logical decision.",
    keyDifferenceUrdu: "end = عام اختتام۔ finish = کوئی کام مکمل کرنا۔ conclude = باضابطہ اختتام یا نتیجہ اخذ کرنا۔",
  },
  {
    id: "want-wish-desire",
    category: "meaning",
    words: [
      { word: "want", meaning: "to feel a need or desire for something", meaningUrdu: "چاہنا / ضرورت ہونا", usage: "Common, direct — can imply need.", usageUrdu: "عام، براہ راست — ضرورت کا بھی اشارہ ہو سکتا ہے۔", example: "I want a cup of tea.", exampleUrdu: "مجھے ایک کپ چائے چاہیے۔" },
      { word: "wish", meaning: "to long for something unlikely or impossible", meaningUrdu: "آرزو کرنا / کاش", usage: "Often for things that are unlikely, impossible, or hypothetical.", usageUrdu: "اکثر ناممکن یا غیر حقیقی چیزوں کے لیے۔", example: "I wish I could fly.", exampleUrdu: "کاش میں اڑ سکتا۔" },
      { word: "desire", meaning: "a strong feeling of wanting something", meaningUrdu: "خواہش / چاہت (شدید)", usage: "Formal/literary; stronger and more intense than want.", usageUrdu: "رسمی/ادبی؛ want سے زیادہ شدید۔", example: "She has a desire to succeed.", exampleUrdu: "اس کے دل میں کامیاب ہونے کی خواہش ہے۔" },
    ],
    keyDifference: "want = practical need/desire. wish = often for impossible/hypothetical things. desire = intense, formal longing.",
    keyDifferenceUrdu: "want = عملی چاہت۔ wish = اکثر ناممکن کے لیے (کاش)۔ desire = شدید اور رسمی خواہش۔",
  },
  {
    id: "help-assist-aid",
    category: "meaning",
    words: [
      { word: "help", meaning: "to make it easier for someone to do something", meaningUrdu: "مدد کرنا", usage: "Common, versatile — everyday use.", usageUrdu: "عام، ہمہ جہت — روزمرہ استعمال۔", example: "Can you help me with this?", exampleUrdu: "کیا تم اس میں میری مدد کر سکتے ہو؟" },
      { word: "assist", meaning: "to help in a supporting role (formal)", meaningUrdu: "معاونت کرنا / مدد کرنا (رسمی)", usage: "Formal — implies a supporting or secondary role.", usageUrdu: "رسمی — ثانوی کردار میں مدد۔", example: "The nurse assisted the doctor.", exampleUrdu: "نرس نے ڈاکٹر کی مدد کی۔" },
      { word: "aid", meaning: "to give help, especially in emergencies or crises", meaningUrdu: "امداد دینا / مدد کرنا (ہنگامی)", usage: "Often used in formal or emergency contexts (first aid, foreign aid).", usageUrdu: "اکثر رسمی یا ہنگامی سیاق میں (فرسٹ ایڈ، غیر ملکی امداد)۔", example: "The government sent aid to flood victims.", exampleUrdu: "حکومت نے سیلاب متاثرین کو امداد بھیجی۔" },
    ],
    keyDifference: "help = everyday casual. assist = formal supporting role. aid = formal/emergency help (first aid, humanitarian aid).",
    keyDifferenceUrdu: "help = روزمرہ مدد۔ assist = رسمی معاونت۔ aid = ہنگامی یا رسمی امداد۔",
  },
  {
    id: "old-ancient-aged",
    category: "meaning",
    words: [
      { word: "old", meaning: "having existed for a long time", meaningUrdu: "پرانا / بوڑھا / قدیم", usage: "General use — for people, objects, times.", usageUrdu: "عام استعمال — لوگ، چیزیں، زمانے۔", example: "This is an old building.", exampleUrdu: "یہ ایک پرانی عمارت ہے۔" },
      { word: "ancient", meaning: "extremely old / from a very long time ago", meaningUrdu: "قدیم / بہت پرانا", usage: "For things from very long ago — civilisations, ruins, history.", usageUrdu: "بہت پرانی چیزوں کے لیے — قدیم تہذیب، کھنڈر۔", example: "The ancient ruins are remarkable.", exampleUrdu: "قدیم کھنڈر قابلِ ذکر ہیں۔" },
      { word: "aged", meaning: "having grown old / of a specified age", meaningUrdu: "عمر رسیدہ / متعین عمر کا", usage: "Formal — used for people or things of advanced age.", usageUrdu: "رسمی — لوگوں یا چیزوں کی بڑھاپے کی حالت کے لیے۔", example: "The charity helps aged people.", exampleUrdu: "یہ خیراتی ادارہ عمر رسیدہ افراد کی مدد کرتا ہے۔" },
    ],
    keyDifference: "old = general age. ancient = extremely old (civilisations, history). aged = formal for old people or things of a specific age.",
    keyDifferenceUrdu: "old = عام طور پر پرانا۔ ancient = انتہائی قدیم (تہذیب، تاریخ)۔ aged = رسمی، عمر رسیدہ۔",
  },
  {
    id: "smart-intelligent-clever",
    category: "meaning",
    words: [
      { word: "smart", meaning: "quick-thinking and sharp / also well-dressed", meaningUrdu: "ذہین / چالاک / اسمارٹ", usage: "Can mean mentally sharp or well-groomed.", usageUrdu: "ذہانت یا اچھے لباس کے لیے بھی۔", example: "She gave a smart answer.", exampleUrdu: "اس نے ذہین جواب دیا۔" },
      { word: "intelligent", meaning: "having high mental capacity to understand", meaningUrdu: "ذہین / عقلمند", usage: "Neutral, often formal, for cognitive ability.", usageUrdu: "غیرجانبدار، اکثر رسمی — علمی صلاحیت۔", example: "He is a highly intelligent student.", exampleUrdu: "وہ انتہائی ذہین طالب علم ہے۔" },
      { word: "clever", meaning: "quick to understand, sometimes with cunning", meaningUrdu: "ہوشیار / چالاک", usage: "Quick-witted; sometimes implies cunning.", usageUrdu: "تیز ذہن؛ کبھی چالاکی کی معنویت بھی۔", example: "That was a clever trick.", exampleUrdu: "یہ ایک چالاک چال تھی۔" },
    ],
    keyDifference: "intelligent = high cognitive ability. smart = quick-thinking or well-dressed. clever = quick-witted, sometimes cunning.",
    keyDifferenceUrdu: "intelligent = اعلیٰ ذہانت۔ smart = تیز ذہن یا اچھا لباس۔ clever = تیز اور کبھی چالاک۔",
  },
  {
    id: "start-begin-commence",
    category: "meaning",
    words: [
      { word: "start", meaning: "to begin an activity (informal)", meaningUrdu: "شروع کرنا (غیر رسمی)", usage: "Casual, everyday use — also for machines.", usageUrdu: "غیر رسمی — مشینوں کے لیے بھی۔", example: "Start the engine.", exampleUrdu: "انجن چالو کرو۔" },
      { word: "begin", meaning: "to start something (neutral)", meaningUrdu: "آغاز کرنا", usage: "Neutral — formal or informal.", usageUrdu: "غیرجانبدار — رسمی یا غیر رسمی۔", example: "Let us begin the lesson.", exampleUrdu: "آئیں سبق شروع کریں۔" },
      { word: "commence", meaning: "to begin formally", meaningUrdu: "باضابطہ شروع ہونا", usage: "Formal/official — ceremonies, legal contexts.", usageUrdu: "رسمی — تقریبات، قانونی سیاق۔", example: "The ceremony will commence at 9 am.", exampleUrdu: "تقریب صبح 9 بجے شروع ہو گی۔" },
    ],
    keyDifference: "start = informal everyday (+ machines). begin = neutral. commence = formal/official.",
    keyDifferenceUrdu: "start = غیر رسمی۔ begin = غیرجانبدار۔ commence = باضابطہ/رسمی۔",
  },
];
