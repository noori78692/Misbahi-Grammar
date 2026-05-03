import { Link } from "wouter";
import { ChevronRight, BookOpen, CheckCircle2, Lock } from "lucide-react";
import { levels, getLessonsByLevel } from "@/data/lessons";
import { useProgress } from "@/hooks/use-progress";
import { useLanguage } from "@/contexts/language";

const levelColors = {
  beginner: { bg: "bg-primary", badge: "bg-primary text-primary-foreground", progress: "bg-primary", border: "border-primary/30" },
  intermediate: { bg: "bg-secondary", badge: "bg-secondary text-secondary-foreground", progress: "bg-secondary", border: "border-secondary/40" },
  advanced: { bg: "bg-emerald-700", badge: "bg-emerald-700 text-white", progress: "bg-emerald-600", border: "border-emerald-300" },
};

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

export default function Levels() {
  const { getCompletedCount } = useProgress();
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">{t("general.home")}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{t("levels.breadcrumb")}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">{t("levels.title")}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("levels.desc")}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {levels.map((level, i) => {
            const levelLessons = getLessonsByLevel(level.id);
            const completed = getCompletedCount(level.id);
            const total = levelLessons.length;
            const progressPct = total > 0 ? Math.round((completed / total) * 100) : 0;
            const colors = levelColors[level.id];
            const isLocked = i > 0 && getCompletedCount(levels[i - 1].id) < 1;

            const titleEn = level.title;
            const titleUr = levelTitleUrdu[level.id];
            const descUr = levelDescUrdu[level.id];

            return (
              <div
                key={level.id}
                className={`relative rounded-2xl border bg-card overflow-hidden transition-all duration-200 hover:shadow-lg ${colors.border} ${isLocked ? "opacity-70" : ""}`}
              >
                <div className={`h-2 ${colors.bg}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colors.badge}`}>
                        {t("levels.level")} {i + 1}
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-primary">{titleEn}</h2>
                      {lang === "ur" && <p className="text-sm text-muted-foreground font-medium mt-0.5">{titleUr}</p>}
                    </div>
                    {isLocked && <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />}
                    {completed === total && total > 0 && <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-1">{level.description}</p>
                  {lang === "ur" && <p className="text-muted-foreground text-xs leading-relaxed mb-4 italic">{descUr}</p>}
                  {lang === "en" && <div className="mb-4" />}

                  <div className="mb-5">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                      <span>{completed} {t("levels.of")} {total} {t("levels.lessons")}</span>
                      <span>{progressPct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-500 ${colors.progress}`} style={{ width: `${progressPct}%` }} />
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-6">
                    {levelLessons.slice(0, 4).map((lesson, li) => {
                      const done = li < completed;
                      return (
                        <div key={lesson.id} className="flex items-center gap-2.5 text-sm">
                          <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${done ? "bg-emerald-100" : "bg-muted"}`}>
                            {done ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />}
                          </div>
                          <span className={done ? "text-muted-foreground line-through" : "text-foreground/80"}>{lesson.title}</span>
                        </div>
                      );
                    })}
                    {levelLessons.length > 4 && (
                      <div className="text-xs text-muted-foreground pl-6">+ {levelLessons.length - 4} more</div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/level/${level.id}/lessons`}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                        isLocked ? "bg-muted text-muted-foreground cursor-not-allowed" : `${colors.bg} text-white hover:opacity-90`
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      {completed > 0 ? t("levels.continue") : t("levels.start")}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    {completed === total && total > 0 && (
                      <Link
                        href={`/quiz/${level.id}`}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-all"
                      >
                        {t("levels.quiz")}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
