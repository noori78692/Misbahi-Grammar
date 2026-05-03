import { Link } from "wouter";
import { BookOpen, CheckCircle2, ChevronRight, GraduationCap, Languages, Layers, Star } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    { icon: Layers, titleKey: "feature.levels.title", descKey: "feature.levels.desc" },
    { icon: Languages, titleKey: "feature.urdu.title", descKey: "feature.urdu.desc" },
    { icon: CheckCircle2, titleKey: "feature.quiz.title", descKey: "feature.quiz.desc" },
    { icon: GraduationCap, titleKey: "feature.exam.title", descKey: "feature.exam.desc" },
    { icon: Star, titleKey: "feature.progress.title", descKey: "feature.progress.desc" },
    { icon: BookOpen, titleKey: "feature.lessons.title", descKey: "feature.lessons.desc" },
  ];

  const topics = [
    {
      levelKey: "general.beginner",
      color: "blue",
      items: [
        { en: "Parts of Speech", ur: "الفاظ کی اقسام" },
        { en: "Types of Sentences", ur: "جملوں کی اقسام" },
        { en: "Simple Present Tense", ur: "حال سادہ" },
        { en: "Simple Past Tense", ur: "ماضی سادہ" },
        { en: "Articles: a, an, the", ur: "حروف تعریف: a, an, the" },
        { en: "Singular & Plural Nouns", ur: "واحد اور جمع اسم" },
      ],
    },
    {
      levelKey: "general.intermediate",
      color: "gold",
      items: [
        { en: "Present Continuous", ur: "حال جاری" },
        { en: "Past Continuous", ur: "ماضی جاری" },
        { en: "Future Tense: will / going to", ur: "مستقبل: will / going to" },
        { en: "Modal Verbs", ur: "معاون افعال" },
        { en: "Active & Passive Voice", ur: "معروف اور مجہول" },
        { en: "Yes/No & WH Questions", ur: "ہاں/نہیں اور WH سوالات" },
      ],
    },
    {
      levelKey: "general.advanced",
      color: "green",
      items: [
        { en: "Perfect Tenses", ur: "مکمل زمانے" },
        { en: "Conditional Sentences", ur: "مشروط جملے" },
        { en: "Reported Speech", ur: "بالواسطہ کلام" },
        { en: "Types of Clauses", ur: "فقروں کی اقسام" },
        { en: "Conjunctions & Connectors", ur: "حروف ربط" },
        { en: "Prepositions in Depth", ur: "حروف جر" },
      ],
    },
  ];

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
            {t("home.badge")}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
            {t("home.hero.title1")}
            <br />
            <span className="text-secondary">{t("home.hero.title2")}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("home.hero.desc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/levels"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t("home.cta.start")}
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/level/beginner/lessons"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              {t("home.cta.begin")}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { value: "18", labelKey: "home.stats.lessons" },
            { value: "3", labelKey: "home.stats.levels" },
            { value: "54+", labelKey: "home.stats.quizzes" },
            { value: "100%", labelKey: "home.stats.free" },
          ].map((s) => (
            <div key={s.labelKey} className="text-center px-4 py-2">
              <div className="font-serif text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t("home.features.title")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("home.features.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.titleKey} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-primary text-base mb-2">{t(f.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(f.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course outline */}
      <section className="py-16 md:py-20 px-4 bg-muted/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">{t("home.outline.title")}</h2>
            <p className="text-muted-foreground text-lg">{t("home.outline.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((top) => (
              <div key={top.levelKey} className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-md transition-all duration-200">
                <div
                  className={`px-6 py-4 font-serif text-lg font-bold ${
                    top.color === "blue"
                      ? "bg-primary text-primary-foreground"
                      : top.color === "gold"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-emerald-700 text-white"
                  }`}
                >
                  {t(top.levelKey)}
                </div>
                <ul className="p-4 space-y-2">
                  {top.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 py-1.5 border-b border-border/50 last:border-0">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-muted text-xs flex items-center justify-center font-medium text-muted-foreground mt-0.5">{i + 1}</span>
                      <span>
                        <span className="block">{item.en}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">{item.ur}</span>
                      </span>
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
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">{t("home.cta2.title")}</h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">{t("home.cta2.desc")}</p>
          <Link
            href="/levels"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold text-base hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            {t("home.cta2.btn")}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8 px-4 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="font-serif font-semibold text-primary text-sm">Misbahi Grammar</span>
          </div>
          <p className="text-muted-foreground text-xs text-center">
            {t("nav.tagline")} — {t("home.badge")}
          </p>
        </div>
      </footer>
    </div>
  );
}
