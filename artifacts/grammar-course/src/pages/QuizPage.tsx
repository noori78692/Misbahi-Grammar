import { useParams, Link } from "wouter";
import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";
import { levelQuizzes, levels } from "@/data/lessons";

type LevelId = "beginner" | "intermediate" | "advanced";

export default function QuizPage() {
  const params = useParams<{ level: string }>();
  const levelId = params.level as LevelId;
  const quiz = levelQuizzes[levelId];
  const level = levels.find((l) => l.id === levelId);

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  if (!quiz || !level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-primary mb-2">Quiz not found</h2>
          <Link href="/levels" className="text-muted-foreground hover:text-primary underline text-sm">Back to levels</Link>
        </div>
      </div>
    );
  }

  const score = Object.entries(answers).filter(([qi, ans]) => quiz[Number(qi)].correctIndex === ans).length;
  const total = quiz.length;
  const allAnswered = Object.keys(answers).length === total;
  const pct = Math.round((score / total) * 100);

  const levelBg = levelId === "beginner" ? "bg-primary" : levelId === "intermediate" ? "bg-secondary" : "bg-emerald-700";
  const levelText = levelId === "intermediate" ? "text-secondary-foreground" : "text-white";
  const levelLabel = level.title;

  function getMessage() {
    if (pct === 100) return "Perfect score! You have mastered this level.";
    if (pct >= 80) return "Excellent work! You have a strong understanding of this level.";
    if (pct >= 60) return "Good effort! Review the lessons you found challenging and try again.";
    return "Keep going! Revisit the lessons for this level and try the quiz again.";
  }

  const nextLevel = levels[levels.findIndex((l) => l.id === levelId) + 1];

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setCurrent(0);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="border-b border-border bg-card">
          <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/levels" className="hover:text-primary transition-colors">Levels</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground capitalize">{levelLabel} Quiz</span>
            </div>
            <h1 className="font-serif text-3xl font-bold text-primary">Quiz Results</h1>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10 w-full">
          {/* Score card */}
          <div className={`rounded-2xl ${levelBg} ${levelText} p-8 text-center mb-8 shadow-lg`}>
            <Trophy className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <div className="text-6xl font-serif font-bold mb-2">{pct}%</div>
            <div className="text-lg opacity-90 mb-1">{score} out of {total} correct</div>
            <p className="text-sm opacity-80 max-w-md mx-auto mt-3 leading-relaxed">{getMessage()}</p>
          </div>

          {/* Review answers */}
          <h2 className="font-serif text-xl font-bold text-primary mb-4">Review Your Answers</h2>
          <div className="space-y-4 mb-8">
            {quiz.map((q, i) => {
              const userAnswer = answers[i];
              const correct = userAnswer === q.correctIndex;
              return (
                <div key={i} className={`p-5 rounded-xl border ${correct ? "border-emerald-200 bg-emerald-50/60" : "border-red-200 bg-red-50/60"}`}>
                  <div className="flex items-start gap-3 mb-3">
                    {correct ? <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
                    <p className="font-medium text-foreground text-sm leading-relaxed">{q.question}</p>
                  </div>
                  <div className="ml-8 space-y-1 text-sm">
                    <p className="text-muted-foreground">Your answer: <span className={correct ? "text-emerald-700 font-medium" : "text-red-600 font-medium"}>{q.options[userAnswer]}</span></p>
                    {!correct && <p className="text-emerald-700">Correct answer: <span className="font-medium">{q.options[q.correctIndex]}</span></p>}
                    <p className="text-muted-foreground italic text-xs mt-1">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Retry Quiz
            </button>
            <Link
              href={`/level/${levelId}/lessons`}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              Review Lessons
            </Link>
            {nextLevel && pct >= 60 && (
              <Link
                href={`/level/${nextLevel.id}/lessons`}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
              >
                Next Level: {nextLevel.title}
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  const q = quiz[current];
  const answered = answers[current] !== undefined;
  const progressPct = Math.round(((current + (answered ? 1 : 0)) / total) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/levels" className="hover:text-primary transition-colors">Levels</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground capitalize">{levelLabel} Quiz</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${levelBg} ${levelText}`}>{levelLabel}</span>
            <span className="text-sm text-muted-foreground">Level Assessment</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-primary mb-4">{levelLabel} Grammar Quiz</h1>

          {/* Progress */}
          <div>
            <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
              <span>Question {current + 1} of {total}</span>
              <span>{Object.keys(answers).length} answered</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ${levelBg}`}
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Question */}
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center font-serif">
              {current + 1}
            </span>
            <span className="text-sm text-muted-foreground">{total} questions total</span>
          </div>
          <p className="font-serif text-lg md:text-xl font-semibold text-primary mb-6 leading-relaxed">{q.question}</p>

          <div className="space-y-3">
            {q.options.map((opt, oi) => {
              const selected = answers[current] === oi;
              return (
                <button
                  key={oi}
                  onClick={() => setAnswers((prev) => ({ ...prev, [current]: oi }))}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl border text-sm text-left transition-all font-medium ${
                    selected
                      ? "border-primary bg-primary/10 text-primary shadow-sm"
                      : "border-border hover:border-primary/40 hover:bg-muted/50 text-foreground/80"
                  }`}
                >
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                    selected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/30 text-muted-foreground"
                  }`}>
                    {String.fromCharCode(65 + oi)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-1.5">
            {quiz.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? "bg-primary scale-125" : answers[i] !== undefined ? "bg-primary/40" : "bg-muted-foreground/20"
                }`}
              />
            ))}
          </div>

          {current < total - 1 ? (
            <button
              onClick={() => setCurrent((c) => Math.min(total - 1, c + 1))}
              disabled={!answered}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                allAnswered ? "bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm" : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              Submit Quiz
              <CheckCircle2 className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick jump */}
        {!allAnswered && (
          <p className="text-center text-xs text-muted-foreground mt-6">
            {total - Object.keys(answers).length} question{total - Object.keys(answers).length !== 1 ? "s" : ""} remaining — click the dots above to jump to any question.
          </p>
        )}
      </div>
    </div>
  );
}
