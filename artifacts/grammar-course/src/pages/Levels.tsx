import { Link } from "wouter";
import { ChevronRight, BookOpen, CheckCircle2, Lock } from "lucide-react";
import { levels, getLessonsByLevel } from "@/data/lessons";
import { useProgress } from "@/hooks/use-progress";

const levelColors = {
  beginner: {
    bg: "bg-primary",
    light: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
    badge: "bg-primary text-primary-foreground",
    progress: "bg-primary",
  },
  intermediate: {
    bg: "bg-secondary",
    light: "bg-secondary/10",
    text: "text-secondary-foreground",
    border: "border-secondary/40",
    badge: "bg-secondary text-secondary-foreground",
    progress: "bg-secondary",
  },
  advanced: {
    bg: "bg-emerald-700",
    light: "bg-emerald-50",
    text: "text-emerald-800",
    border: "border-emerald-300",
    badge: "bg-emerald-700 text-white",
    progress: "bg-emerald-600",
  },
};

export default function Levels() {
  const { getCompletedCount } = useProgress();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Course Levels</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">Choose Your Level</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Each level builds on the previous. If you are just starting, begin with Beginner. If you already know the basics, jump to Intermediate or Advanced.
          </p>
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

            return (
              <div
                key={level.id}
                className={`relative rounded-2xl border bg-card overflow-hidden transition-all duration-200 hover:shadow-lg ${colors.border} ${isLocked ? "opacity-70" : ""}`}
              >
                {/* Top accent */}
                <div className={`h-2 ${colors.bg}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colors.badge}`}>
                        Level {i + 1}
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-primary">{level.title}</h2>
                    </div>
                    {isLocked && <Lock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />}
                    {completed === total && total > 0 && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{level.description}</p>

                  {/* Progress bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                      <span>{completed} of {total} lessons completed</span>
                      <span>{progressPct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${colors.progress}`}
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>

                  {/* Lesson list preview */}
                  <div className="space-y-1.5 mb-6">
                    {levelLessons.slice(0, 4).map((lesson) => {
                      const done = completed > levelLessons.indexOf(lesson);
                      return (
                        <div key={lesson.id} className="flex items-center gap-2.5 text-sm">
                          <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${done ? "bg-emerald-100" : "bg-muted"}`}>
                            {done ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
                            )}
                          </div>
                          <span className={done ? "text-muted-foreground line-through" : "text-foreground/80"}>{lesson.title}</span>
                        </div>
                      );
                    })}
                    {levelLessons.length > 4 && (
                      <div className="text-xs text-muted-foreground pl-6.5">+ {levelLessons.length - 4} more lessons</div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/level/${level.id}/lessons`}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                        isLocked
                          ? "bg-muted text-muted-foreground cursor-not-allowed"
                          : `${colors.bg} text-white hover:opacity-90`
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      {completed > 0 ? "Continue Level" : "Start Level"}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    {completed === total && total > 0 && (
                      <Link
                        href={`/quiz/${level.id}`}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-all"
                      >
                        Take Level Quiz
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
