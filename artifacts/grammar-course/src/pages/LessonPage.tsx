import { useParams, Link } from "wouter";
import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, XCircle, BookOpen, ArrowRight } from "lucide-react";
import { getLessonById, getAdjacentLessons } from "@/data/lessons";
import { lessonUrduRules } from "@/data/lessonUrduRules";
import { useProgress } from "@/hooks/use-progress";
import { useLanguage } from "@/contexts/language";
import AudioButton from "@/components/AudioButton";

const levelTitleUrdu: Record<string, string> = {
  beginner: "بنیادی",
  intermediate: "درمیانی",
  advanced: "اعلیٰ",
};

function renderRule(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return <br key={i} />;
    const hasBold = trimmed.includes("**");
    const isNumbered = /^\d+\./.test(trimmed);
    if (hasBold || isNumbered) {
      const html = trimmed
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/→/g, '<span class="text-primary font-medium">→</span>');
      return <p key={i} className="mb-2 leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />;
    }
    const arrow = trimmed.startsWith("→");
    if (arrow) {
      return (
        <p key={i} className="mb-2 pl-4 border-l-2 border-primary/30 text-primary/80 font-medium leading-relaxed">
          {trimmed}
        </p>
      );
    }
    return <p key={i} className="mb-2 leading-relaxed text-foreground/80">{trimmed}</p>;
  });
}

export default function LessonPage() {
  const params = useParams<{ level: string; id: string }>();
  const lesson = getLessonById(params.id);
  const { isLessonCompleted, markLessonComplete } = useProgress();
  const { t, lang } = useLanguage();

  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-primary mb-2">Lesson not found</h2>
          <Link href="/levels" className="text-muted-foreground hover:text-primary underline text-sm">{t("general.back")}</Link>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentLessons(lesson);
  const isCompleted = isLessonCompleted(lesson.id);
  const levelLabel = lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1);
  const levelLabelUr = levelTitleUrdu[lesson.level];
  const levelBg = lesson.level === "beginner" ? "bg-primary" : lesson.level === "intermediate" ? "bg-secondary" : "bg-emerald-700";
  const levelText = lesson.level === "intermediate" ? "text-secondary-foreground" : "text-white";
  const allAnswered = lesson.quiz.every((_, i) => quizAnswers[i] !== undefined);
  const score = submitted ? lesson.quiz.filter((q, i) => quizAnswers[i] === q.correctIndex).length : 0;

  function handleSubmit() {
    if (!allAnswered) return;
    setSubmitted(true);
    markLessonComplete(lesson!.id);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">{t("general.home")}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/levels" className="hover:text-primary transition-colors">{t("levels.breadcrumb")}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/level/${lesson.level}/lessons`} className="hover:text-primary transition-colors capitalize">{levelLabel}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{lesson.title}</span>
          </div>

          <div className="flex items-center gap-3 mb-3 flex-wrap">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${levelBg} ${levelText}`}>
              {lang === "ur" ? levelLabelUr : levelLabel}
            </span>
            <span className="text-xs text-muted-foreground">{t("general.level")} — {t("lesson.rule")} {lesson.order}</span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3 h-3" /> {t("lesson.completed")}
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">{lesson.title}</h1>
          <p className="text-muted-foreground text-base">{lesson.summary}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Grammar Rule */}
        <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {/* Bilingual heading — always shown */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-primary leading-tight">Grammar Rule</h2>
              <p className="text-sm text-primary/70 font-semibold leading-tight mt-0.5" dir="rtl">گرامر کا قاعدہ</p>
            </div>
          </div>

          {/* English rule */}
          <div className="text-sm md:text-base leading-7 text-foreground/90 space-y-1 mb-6">
            {renderRule(lesson.rule)}
          </div>

          {/* Urdu rule — always shown */}
          {lessonUrduRules[lesson.id] && (
            <div className="border-t border-border pt-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-primary/60 tracking-widest">——</span>
                <p className="text-sm font-bold text-primary" dir="rtl">اردو وضاحت</p>
                <span className="text-xs font-bold text-primary/60 tracking-widest">——</span>
              </div>
              <div
                className="text-sm md:text-base leading-9 text-foreground/85 bg-primary/5 rounded-xl p-5 border border-primary/10"
                dir="rtl"
                style={{ textAlign: "right" }}
              >
                {renderRule(lessonUrduRules[lesson.id])}
              </div>
            </div>
          )}
        </section>

        {/* Examples */}
        <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {/* Bilingual heading */}
          <div className="mb-5">
            <h2 className="font-serif text-xl font-bold text-primary leading-tight">Examples</h2>
            <p className="text-sm text-primary/70 font-semibold mt-0.5" dir="rtl">اردو ترجمے کے ساتھ مثالیں</p>
          </div>
          <div className="space-y-4">
            {lesson.examples.map((ex, i) => (
              <div key={i} className="p-4 rounded-xl bg-muted/40 border border-border/60">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-medium text-foreground leading-relaxed">{ex.english}</p>
                      <AudioButton text={ex.english} />
                    </div>
                    <p className="text-muted-foreground text-sm italic leading-relaxed" dir="rtl" style={{ textAlign: "right" }}>
                      {ex.urdu}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quiz */}
        <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {/* Bilingual heading */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="font-serif text-xl font-bold text-primary leading-tight">Practice Quiz</h2>
              <p className="text-sm text-primary/70 font-semibold mt-0.5" dir="rtl">مشق کا کوئز</p>
            </div>
            {submitted && (
              <span className={`text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0 ${score === lesson.quiz.length ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"}`}>
                {score}/{lesson.quiz.length} {t("lesson.correct.count")}
              </span>
            )}
          </div>

          <div className="space-y-6">
            {lesson.quiz.map((q, qi) => {
              const selected = quizAnswers[qi];
              const isCorrect = submitted && selected === q.correctIndex;
              const isWrong = submitted && selected !== undefined && selected !== q.correctIndex;

              return (
                <div key={qi} className={`p-5 rounded-xl border transition-all ${submitted ? isCorrect ? "border-emerald-300 bg-emerald-50/60" : isWrong ? "border-red-300 bg-red-50/60" : "border-border" : "border-border"}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="font-medium text-foreground leading-relaxed flex-1">
                      <span className="text-primary font-bold mr-2">Q{qi + 1}.</span>
                      {q.question}
                    </p>
                    <AudioButton text={q.question} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, oi) => {
                      const isSelected = selected === oi;
                      const isCorrectOpt = submitted && oi === q.correctIndex;
                      const isWrongSelected = submitted && isSelected && oi !== q.correctIndex;

                      return (
                        <button
                          key={oi}
                          onClick={() => !submitted && setQuizAnswers((prev) => ({ ...prev, [qi]: oi }))}
                          disabled={submitted}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm text-left transition-all font-medium ${
                            isCorrectOpt ? "border-emerald-400 bg-emerald-100 text-emerald-800" : isWrongSelected ? "border-red-400 bg-red-100 text-red-800" : isSelected ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary/50 hover:bg-muted/50 text-foreground/80"
                          }`}
                        >
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${isCorrectOpt ? "border-emerald-500 bg-emerald-500" : isWrongSelected ? "border-red-500 bg-red-500" : isSelected ? "border-primary bg-primary" : "border-muted-foreground/40"}`}>
                            {isCorrectOpt ? <CheckCircle2 className="w-3 h-3 text-white" /> : isWrongSelected ? <XCircle className="w-3 h-3 text-white" /> : isSelected ? <div className="w-2 h-2 rounded-full bg-white" /> : null}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {submitted && (
                    <div className={`mt-3 p-3 rounded-lg text-sm ${isCorrect ? "bg-emerald-100 text-emerald-800" : "bg-amber-50 text-amber-800 border border-amber-200"}`}>
                      <strong>{isCorrect ? t("lesson.correct") : t("lesson.explanation")}</strong> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {!submitted ? (
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${allAnswered ? "bg-primary text-primary-foreground hover:opacity-90 shadow-sm" : "bg-muted text-muted-foreground cursor-not-allowed"}`}
              >
                {allAnswered ? t("lesson.submit") : t("lesson.answerAll")}
              </button>
            ) : (
              <button
                onClick={() => { setQuizAnswers({}); setSubmitted(false); }}
                className="py-3 px-6 rounded-xl border border-border text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-all"
              >
                {t("lesson.retry")}
              </button>
            )}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 pt-2 pb-8">
          {prev ? (
            <Link href={`/level/${lesson.level}/lesson/${prev.id}`} className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-sm font-medium hover:bg-muted transition-all group">
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <div className="text-left hidden sm:block">
                <div className="text-xs text-muted-foreground">{t("lesson.prev")}</div>
                <div className="text-foreground font-semibold truncate max-w-[160px]">{prev.title}</div>
              </div>
              <span className="sm:hidden">{t("lesson.prev")}</span>
            </Link>
          ) : (
            <Link href={`/level/${lesson.level}/lessons`} className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card text-sm font-medium hover:bg-muted transition-all">
              <ChevronLeft className="w-4 h-4" />
              {t("lesson.backLessons")}
            </Link>
          )}

          {next ? (
            <Link href={`/level/${lesson.level}/lesson/${next.id}`} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all group">
              <div className="text-right hidden sm:block">
                <div className="text-xs text-primary-foreground/70">{t("lesson.next")}</div>
                <div className="truncate max-w-[160px]">{next.title}</div>
              </div>
              <span className="sm:hidden">{t("lesson.next")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : (
            <Link href={`/quiz/${lesson.level}`} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-all">
              {t("lesson.levelQuiz")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
