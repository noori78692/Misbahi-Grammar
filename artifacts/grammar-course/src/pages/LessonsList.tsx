import { Link, useParams } from "wouter";
import { ChevronRight, CheckCircle2, BookOpen, Clock } from "lucide-react";
import { getLessonsByLevel, levels } from "@/data/lessons";
import { useProgress } from "@/hooks/use-progress";
import { useLanguage } from "@/contexts/language";

type LevelId = "beginner" | "intermediate" | "advanced";

const levelTitleUrdu: Record<string, string> = {
  beginner: "بنیادی",
  intermediate: "درمیانی",
  advanced: "اعلیٰ",
};

const levelDescUrdu: Record<string, string> = {
  beginner: "بالکل بنیادی باتوں سے شروع کریں۔ الفاظ کی اقسام، جملوں کی اقسام، مضامین اور ضروری زمانے سیکھیں۔",
  intermediate: "بنیادی باتوں پر بنائیں۔ جاری زمانوں، معاون افعال، معروف/مجہول اور سوالات میں مہارت حاصل کریں۔",
  advanced: "روانی حاصل کریں۔ مکمل زمانوں، مشروط جملوں، بالواسطہ کلام، فقروں اور پیچیدہ گرامر کا مطالعہ کریں۔",
};

export default function LessonsList() {
  const params = useParams<{ level: string }>();
  const levelId = params.level as LevelId;
  const { isLessonCompleted, getCompletedCount } = useProgress();
  const { t, lang } = useLanguage();

  const level = levels.find((l) => l.id === levelId);
  const lessons = getLessonsByLevel(levelId);

  if (!level || lessons.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-primary mb-2">Level not found</h2>
          <Link href="/levels" className="text-muted-foreground hover:text-primary underline text-sm">{t("general.back")}</Link>
        </div>
      </div>
    );
  }

  const completed = getCompletedCount(levelId);
  const total = lessons.length;
  const progressPct = total > 0 ? Math.round((completed / total) * 100) : 0;

  const levelBg = levelId === "beginner" ? "bg-primary" : levelId === "intermediate" ? "bg-secondary" : "bg-emerald-700";
  const levelText = levelId === "intermediate" ? "text-secondary-foreground" : "text-white";
  const levelTitleEn = level.title;
  const levelTitleUr = levelTitleUrdu[levelId];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">{t("general.home")}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/levels" className="hover:text-primary transition-colors">{t("levels.breadcrumb")}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground capitalize">{levelTitleEn}</span>
          </div>

          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${levelBg} ${levelText}`}>
            {lang === "ur" ? levelTitleUr : levelTitleEn} {lang === "ur" ? "سطح" : "Level"}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2 capitalize">{levelTitleEn} Grammar</h1>
          {lang === "ur" && (
            <p className="text-muted-foreground text-sm mb-2 leading-relaxed">{levelDescUrdu[levelId]}</p>
          )}
          <p className="text-muted-foreground text-base">{level.description}</p>

          <div className="mt-6 max-w-sm">
            <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
              <span>{completed} {t("levels.of")} {total} {t("levels.lessons")}</span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-500 ${levelBg}`} style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="space-y-3">
          {lessons.map((lesson, i) => {
            const done = isLessonCompleted(lesson.id);
            const isNext = !done && i === lessons.findIndex((l) => !isLessonCompleted(l.id));

            return (
              <Link
                key={lesson.id}
                href={`/level/${levelId}/lesson/${lesson.id}`}
                className={`group flex items-center gap-5 p-5 rounded-2xl border bg-card transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                  done ? "border-emerald-200 bg-emerald-50/50" : isNext ? "border-primary/30 bg-primary/5" : "border-border"
                }`}
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-serif font-bold text-sm ${
                  done ? "bg-emerald-100 text-emerald-700" : isNext ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {done ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h3 className={`font-serif font-semibold text-base ${done ? "text-emerald-800" : "text-primary"}`}>
                      {lesson.title}
                    </h3>
                    {isNext && <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-medium">{t("lessonsList.next")}</span>}
                    {done && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">{t("lessonsList.done")}</span>}
                  </div>
                  <p className="text-muted-foreground text-sm">{lesson.summary}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {lesson.examples.length} {t("lessonsList.examples")}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {lesson.quiz.length} {t("lessonsList.questions")}</span>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </Link>
            );
          })}
        </div>

        {completed === total && total > 0 && (
          <div className="mt-8 p-6 rounded-2xl border border-emerald-200 bg-emerald-50 text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-emerald-900 mb-1">{t("lessonsList.complete")}</h3>
            {lang === "ur" && <p className="text-xs text-emerald-700 mb-1" dir="rtl">سطح مکمل!</p>}
            <p className="text-emerald-700 text-sm mb-4">{t("lessonsList.completeDesc")}</p>
            <Link href={`/quiz/${levelId}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 text-white font-semibold text-sm hover:bg-emerald-800 transition-colors">
              {t("levels.quiz")}
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link href="/levels" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t("lessonsList.allLessons")}
          </Link>
        </div>
      </div>
    </div>
  );
}
