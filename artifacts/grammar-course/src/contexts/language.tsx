import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "ur";

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
};

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", ur: "ہوم" },
  "nav.levels": { en: "Course Levels", ur: "کورس کی سطحیں" },
  "nav.startLearning": { en: "Start Learning", ur: "سیکھنا شروع کریں" },
  "nav.tagline": { en: "Urdu to English", ur: "اردو سے انگریزی" },
  "nav.confusables": { en: "Similar Words", ur: "ملتے جلتے الفاظ" },

  // Home
  "home.badge": { en: "Complete Grammar Course — Basic to Advanced", ur: "مکمل گرامر کورس — بنیادی سے اعلیٰ درجے تک" },
  "home.hero.title1": { en: "Master English Grammar", ur: "انگریزی گرامر میں مہارت حاصل کریں" },
  "home.hero.title2": { en: "from Urdu", ur: "اردو سے" },
  "home.hero.desc": { en: "A structured, step-by-step grammar course designed for Urdu speakers. From your very first lesson to advanced mastery — with clear rules, Urdu translations, and practice quizzes.", ur: "اردو بولنے والوں کے لیے ایک منظم، قدم بہ قدم گرامر کورس۔ پہلے سبق سے لے کر اعلیٰ مہارت تک — واضح قواعد، اردو ترجمے اور مشق کے کوئز کے ساتھ۔" },
  "home.cta.start": { en: "Start Learning Now", ur: "ابھی سیکھنا شروع کریں" },
  "home.cta.begin": { en: "Begin with Basics", ur: "بنیادی باتوں سے شروع کریں" },
  "home.stats.lessons": { en: "Lessons", ur: "سبق" },
  "home.stats.levels": { en: "Levels", ur: "سطحیں" },
  "home.stats.quizzes": { en: "Quiz Questions", ur: "کوئز سوالات" },
  "home.stats.free": { en: "Free", ur: "مفت" },
  "home.features.title": { en: "Everything You Need to Learn English Grammar", ur: "انگریزی گرامر سیکھنے کے لیے سب کچھ" },
  "home.features.subtitle": { en: "Carefully crafted lessons, Urdu support, and built-in practice — all in one place.", ur: "احتیاط سے تیار کردہ اسباق، اردو مدد، اور بلٹ ان مشق — سب ایک جگہ۔" },
  "home.outline.title": { en: "Full Course Outline", ur: "مکمل کورس کا خاکہ" },
  "home.outline.subtitle": { en: "Three levels, eighteen lessons. Everything planned, nothing skipped.", ur: "تین سطحیں، اٹھارہ اسباق۔ سب کچھ منصوبہ بند، کچھ بھی چھوٹا نہیں۔" },
  "home.cta2.title": { en: "Your English Journey Starts Here", ur: "آپ کا انگریزی سفر یہاں سے شروع ہوتا ہے" },
  "home.cta2.desc": { en: "Join thousands of Urdu speakers who have used this course to understand and master English grammar. Start at your level — go at your pace.", ur: "ہزاروں اردو بولنے والوں میں شامل ہوں جنہوں نے اس کورس کو انگریزی گرامر سمجھنے اور اس میں مہارت حاصل کرنے کے لیے استعمال کیا۔ اپنی سطح سے شروع کریں — اپنی رفتار سے آگے بڑھیں۔" },
  "home.cta2.btn": { en: "View All Levels", ur: "تمام سطحیں دیکھیں" },

  // Features
  "feature.levels.title": { en: "Three Complete Levels", ur: "تین مکمل سطحیں" },
  "feature.levels.desc": { en: "Beginner, Intermediate, and Advanced — each with structured lessons building on the last.", ur: "بنیادی، درمیانی اور اعلیٰ — ہر ایک میں منظم اسباق جو پچھلے پر بنتے ہیں۔" },
  "feature.urdu.title": { en: "Urdu Translations", ur: "اردو تراجم" },
  "feature.urdu.desc": { en: "Every example comes with its Urdu translation so you understand the meaning instantly.", ur: "ہر مثال اپنے اردو ترجمے کے ساتھ آتی ہے تاکہ آپ فوری طور پر معنی سمجھ سکیں۔" },
  "feature.quiz.title": { en: "Practice Quizzes", ur: "مشق کے کوئز" },
  "feature.quiz.desc": { en: "Each lesson ends with a short quiz to test your understanding and reinforce the rules.", ur: "ہر سبق ایک مختصر کوئز کے ساتھ ختم ہوتا ہے تاکہ آپ کی سمجھ کا جائزہ لیا جا سکے۔" },
  "feature.exam.title": { en: "Level Assessments", ur: "سطحی جائزہ" },
  "feature.exam.desc": { en: "Complete a 10-question exam at the end of each level to confirm your mastery.", ur: "اپنی مہارت کی تصدیق کے لیے ہر سطح کے آخر میں 10 سوالات کا امتحان مکمل کریں۔" },
  "feature.progress.title": { en: "Progress Tracking", ur: "پیشرفت کی نگرانی" },
  "feature.progress.desc": { en: "Your completed lessons are saved automatically so you can pick up where you left off.", ur: "آپ کے مکمل کردہ اسباق خودبخود محفوظ ہو جاتے ہیں تاکہ آپ وہاں سے شروع کر سکیں جہاں چھوڑا تھا۔" },
  "feature.lessons.title": { en: "18 In-Depth Lessons", ur: "18 گہرے اسباق" },
  "feature.lessons.desc": { en: "Comprehensive coverage from parts of speech and basic tenses to conditionals and clauses.", ur: "اسم، فعل اور بنیادی زمانوں سے لے کر مشروط جملوں اور فقروں تک جامع احاطہ۔" },

  // Levels page
  "levels.breadcrumb": { en: "Course Levels", ur: "کورس کی سطحیں" },
  "levels.title": { en: "Choose Your Level", ur: "اپنی سطح منتخب کریں" },
  "levels.desc": { en: "Each level builds on the previous. If you are just starting, begin with Beginner. If you already know the basics, jump to Intermediate or Advanced.", ur: "ہر سطح پچھلی پر بنتی ہے۔ اگر آپ ابھی شروع کر رہے ہیں تو بنیادی سے شروع کریں۔ اگر آپ بنیادی باتیں جانتے ہیں تو درمیانی یا اعلیٰ سطح پر جائیں۔" },
  "levels.level": { en: "Level", ur: "سطح" },
  "levels.completed": { en: "completed", ur: "مکمل" },
  "levels.of": { en: "of", ur: "میں سے" },
  "levels.lessons": { en: "lessons completed", ur: "اسباق مکمل" },
  "levels.continue": { en: "Continue Level", ur: "سطح جاری رکھیں" },
  "levels.start": { en: "Start Level", ur: "سطح شروع کریں" },
  "levels.quiz": { en: "Take Level Quiz", ur: "سطحی کوئز دیں" },

  // Lessons list
  "lessonsList.allLessons": { en: "Back to all levels", ur: "تمام سطحوں پر واپس جائیں" },
  "lessonsList.next": { en: "Next", ur: "اگلا" },
  "lessonsList.done": { en: "Done", ur: "مکمل" },
  "lessonsList.examples": { en: "examples", ur: "مثالیں" },
  "lessonsList.questions": { en: "quiz questions", ur: "کوئز سوالات" },
  "lessonsList.complete": { en: "Level Complete!", ur: "سطح مکمل!" },
  "lessonsList.completeDesc": { en: "You have finished all lessons in this level. Test your knowledge with the full level quiz.", ur: "آپ نے اس سطح کے تمام اسباق مکمل کر لیے۔ مکمل سطحی کوئز سے اپنا علم جانچیں۔" },

  // Lesson page
  "lesson.rule": { en: "Grammar Rule", ur: "گرامر کا قاعدہ" },
  "lesson.examples": { en: "Examples with Urdu Translation", ur: "اردو ترجمے کے ساتھ مثالیں" },
  "lesson.quiz": { en: "Practice Quiz", ur: "مشق کا کوئز" },
  "lesson.submit": { en: "Submit Answers", ur: "جوابات جمع کریں" },
  "lesson.answerAll": { en: "Answer all questions to submit", ur: "جمع کرنے کے لیے تمام سوالات کے جواب دیں" },
  "lesson.retry": { en: "Retry Quiz", ur: "کوئز دوبارہ دیں" },
  "lesson.prev": { en: "Previous", ur: "پچھلا" },
  "lesson.next": { en: "Next Lesson", ur: "اگلا سبق" },
  "lesson.backLessons": { en: "All Lessons", ur: "تمام اسباق" },
  "lesson.levelQuiz": { en: "Take Level Quiz", ur: "سطحی کوئز دیں" },
  "lesson.completed": { en: "Completed", ur: "مکمل" },
  "lesson.pronounce": { en: "Listen", ur: "سنیں" },
  "lesson.correct": { en: "Correct!", ur: "درست!" },
  "lesson.explanation": { en: "Explanation:", ur: "وضاحت:" },
  "lesson.correct.count": { en: "correct", ur: "درست" },

  // Quiz page
  "quiz.title": { en: "Level Assessment", ur: "سطحی امتحان" },
  "quiz.results": { en: "Quiz Results", ur: "کوئز نتائج" },
  "quiz.answered": { en: "answered", ur: "جواب دیا" },
  "quiz.question": { en: "Question", ur: "سوال" },
  "quiz.of": { en: "of", ur: "میں سے" },
  "quiz.total": { en: "questions total", ur: "کل سوالات" },
  "quiz.submit": { en: "Submit Quiz", ur: "کوئز جمع کریں" },
  "quiz.next": { en: "Next", ur: "اگلا" },
  "quiz.prev": { en: "Previous", ur: "پچھلا" },
  "quiz.retry": { en: "Retry Quiz", ur: "کوئز دوبارہ دیں" },
  "quiz.review": { en: "Review Lessons", ur: "اسباق دوبارہ پڑھیں" },
  "quiz.nextLevel": { en: "Next Level", ur: "اگلی سطح" },
  "quiz.yourAnswer": { en: "Your answer:", ur: "آپ کا جواب:" },
  "quiz.correctAnswer": { en: "Correct answer:", ur: "درست جواب:" },
  "quiz.reviewAnswers": { en: "Review Your Answers", ur: "اپنے جوابات دیکھیں" },
  "quiz.remaining": { en: "remaining — click the dots above to jump to any question.", ur: "باقی — کسی بھی سوال پر جانے کے لیے اوپر دیئے گئے نقطوں پر کلک کریں۔" },
  "quiz.question.remaining": { en: "question", ur: "سوال" },

  // Confusables
  "confusables.title": { en: "Similar Words", ur: "ملتے جلتے الفاظ" },
  "confusables.subtitle": { en: "Words that are often confused — similar in spelling, pronunciation, or meaning.", ur: "وہ الفاظ جو اکثر الجھن پیدا کرتے ہیں — ہجے، تلفظ یا معنی میں ملتے جلتے۔" },
  "confusables.similar.pronunciation": { en: "Similar Pronunciation (Homophones)", ur: "ملتا جلتا تلفظ (ہم آواز الفاظ)" },
  "confusables.similar.meaning": { en: "Similar Meaning (Synonyms)", ur: "ملتے جلتے معنی (ہم معنی الفاظ)" },
  "confusables.similar.spelling": { en: "Similar Spelling (Often Confused)", ur: "ملتی جلتی ہجے (اکثر الجھنے والے)" },
  "confusables.meaning": { en: "Meaning", ur: "معنی" },
  "confusables.usage": { en: "How to use", ur: "کیسے استعمال کریں" },
  "confusables.example": { en: "Example", ur: "مثال" },
  "confusables.difference": { en: "Key Difference", ur: "بنیادی فرق" },
  "confusables.pronounce": { en: "Listen", ur: "سنیں" },

  // General
  "general.back": { en: "Back", ur: "واپس" },
  "general.home": { en: "Home", ur: "ہوم" },
  "general.level": { en: "Level", ur: "سطح" },
  "general.beginner": { en: "Beginner", ur: "بنیادی" },
  "general.intermediate": { en: "Intermediate", ur: "درمیانی" },
  "general.advanced": { en: "Advanced", ur: "اعلیٰ" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem("misbahi_lang") as Language) || "en";
  });

  function toggleLang() {
    const next: Language = lang === "en" ? "ur" : "en";
    setLang(next);
    localStorage.setItem("misbahi_lang", next);
  }

  function t(key: string): string {
    return translations[key]?.[lang] ?? translations[key]?.en ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
