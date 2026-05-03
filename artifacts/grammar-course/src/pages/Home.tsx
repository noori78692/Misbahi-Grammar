import { Link } from "wouter";
import { BookOpen, CheckCircle2, ChevronRight, GraduationCap, Languages, Layers, Star } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Three Complete Levels",
    desc: "Beginner, Intermediate, and Advanced — each with structured lessons building on the last.",
  },
  {
    icon: Languages,
    title: "Urdu Translations",
    desc: "Every example comes with its Urdu translation so you understand the meaning instantly.",
  },
  {
    icon: CheckCircle2,
    title: "Practice Quizzes",
    desc: "Each lesson ends with a short quiz to test your understanding and reinforce the rules.",
  },
  {
    icon: GraduationCap,
    title: "Level Assessments",
    desc: "Complete a 10-question exam at the end of each level to confirm your mastery.",
  },
  {
    icon: Star,
    title: "Progress Tracking",
    desc: "Your completed lessons are saved automatically so you can pick up where you left off.",
  },
  {
    icon: BookOpen,
    title: "18 In-Depth Lessons",
    desc: "Comprehensive coverage from parts of speech and basic tenses to conditionals and clauses.",
  },
];

const topics = [
  { level: "Beginner", color: "blue", items: ["Parts of Speech", "Types of Sentences", "Simple Present Tense", "Simple Past Tense", "Articles: a, an, the", "Singular & Plural Nouns"] },
  { level: "Intermediate", color: "gold", items: ["Present Continuous", "Past Continuous", "Future Tense: will / going to", "Modal Verbs", "Active & Passive Voice", "Yes/No & WH Questions"] },
  { level: "Advanced", color: "green", items: ["Perfect Tenses", "Conditional Sentences", "Reported Speech", "Types of Clauses", "Conjunctions & Connectors", "Prepositions in Depth"] },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-blue-900 text-primary-foreground py-20 md:py-28 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/30 blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Complete Grammar Course — Basic to Advanced
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
            Master English Grammar
            <br />
            <span className="text-secondary">from Urdu</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            A structured, step-by-step grammar course designed for Urdu speakers. From your very first lesson to advanced mastery — with clear rules, Urdu translations, and practice quizzes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/levels"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Start Learning Now
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/level/beginner/lessons"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Begin with Basics
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { value: "18", label: "Lessons" },
            { value: "3", label: "Levels" },
            { value: "54+", label: "Quiz Questions" },
            { value: "100%", label: "Free" },
          ].map((s) => (
            <div key={s.label} className="text-center px-4 py-2">
              <div className="font-serif text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Everything You Need to Learn English Grammar</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Carefully crafted lessons, Urdu support, and built-in practice — all in one place.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-primary text-base mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course outline */}
      <section className="py-16 md:py-20 px-4 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">Full Course Outline</h2>
            <p className="text-muted-foreground text-lg">Three levels, eighteen lessons. Everything planned, nothing skipped.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((t) => (
              <div
                key={t.level}
                className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-md transition-all duration-200"
              >
                <div
                  className={`px-6 py-4 font-serif text-lg font-bold ${
                    t.color === "blue"
                      ? "bg-primary text-primary-foreground"
                      : t.color === "gold"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-emerald-700 text-white"
                  }`}
                >
                  {t.level}
                </div>
                <ul className="p-4 space-y-2">
                  {t.items.map((item, i) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/80 py-1.5 border-b border-border/50 last:border-0">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-muted text-xs flex items-center justify-center font-medium text-muted-foreground mt-0.5">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Your English Journey Starts Here</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Join thousands of Urdu speakers who have used this course to understand and master English grammar. Start at your level — go at your pace.
          </p>
          <Link
            href="/levels"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View All Levels
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 px-4 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="font-serif font-semibold text-primary text-sm">GrammarAcademy</span>
          </div>
          <p className="text-muted-foreground text-xs text-center">
            A complete English grammar course for Urdu speakers — from basic to advanced.
          </p>
        </div>
      </footer>
    </div>
  );
}
