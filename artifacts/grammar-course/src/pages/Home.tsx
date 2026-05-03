import { Link } from "wouter";
import { BookOpen, CheckCircle2, ChevronRight, GraduationCap, Languages, Layers, Star } from "lucide-react";
import { useLanguage } from "@/contexts/language";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    { icon: Layers, titleKey: "feature.levels.title", descKey: "feature.levels.desc", href: "/levels" },
    { icon: Languages, titleKey: "feature.urdu.title", descKey: "feature.urdu.desc", href: "/translator" },
    { icon: CheckCircle2, titleKey: "feature.quiz.title", descKey: "feature.quiz.desc", href: "/levels" },
    { icon: GraduationCap, titleKey: "feature.exam.title", descKey: "feature.exam.desc", href: "/levels" },
    { icon: Star, titleKey: "feature.progress.title", descKey: "feature.progress.desc", href: "/levels" },
    { icon: BookOpen, titleKey: "feature.lessons.title", descKey: "feature.lessons.desc", href: "/levels" },
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
    <div className="min-h-screen bg-background">
      <section className="px-4 pt-4 pb-6">
        <div className="max-w-md mx-auto">
          <div className="rounded-[2rem] bg-gradient-to-br from-primary via-blue-800 to-indigo-950 text-white p-5 shadow-2xl overflow-hidden relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/10 flex items-center justify-center mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-[0.2em]">{t("nav.tagline")}</p>
              <h1 className="text-2xl font-bold mt-1 max-w-[14ch] mx-auto">{t("home.hero.title1")}</h1>
              <p className="text-white/80 text-sm leading-6">{t("home.hero.desc")}</p>
              <div className="mt-5 w-full flex justify-center">
                <div className="flex flex-col gap-3 w-full max-w-[260px]">
                  <Link href="/levels" className="w-full inline-flex items-center justify-center text-center gap-2 px-4 py-3 rounded-2xl bg-secondary text-secondary-foreground font-semibold shadow-lg">
                    {t("home.cta.start")}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <Link href="/level/beginner/lessons" className="w-full inline-flex items-center justify-center text-center gap-2 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold shadow-lg">
                    {t("home.cta.begin")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-5">
        <div className="max-w-md mx-auto grid grid-cols-4 gap-3">
          {[
            { value: "18", labelKey: "home.stats.lessons" },
            { value: "3", labelKey: "home.stats.levels" },
            { value: "54+", labelKey: "home.stats.quizzes" },
            { value: "100%", labelKey: "home.stats.free" },
          ].map((s) => (
            <div key={s.labelKey} className="rounded-2xl bg-card border border-border p-3 text-center shadow-sm">
              <div className="text-xl font-bold text-primary">{s.value}</div>
              <div className="text-[10px] leading-tight text-muted-foreground mt-1">{t(s.labelKey)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-5">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
          <Link href="/levels" className="rounded-2xl bg-card border border-border p-4 shadow-sm">
            <Layers className="w-5 h-5 text-primary mb-3" />
            <h2 className="text-sm font-semibold">{t("feature.levels.title")}</h2>
            <p className="text-xs text-muted-foreground mt-1 leading-5">{t("feature.levels.desc")}</p>
          </Link>
          <Link href="/translator" className="rounded-2xl bg-card border border-border p-4 shadow-sm">
            <Languages className="w-5 h-5 text-primary mb-3" />
            <h2 className="text-sm font-semibold">{t("feature.urdu.title")}</h2>
            <p className="text-xs text-muted-foreground mt-1 leading-5">{t("feature.urdu.desc")}</p>
          </Link>
          <Link href="/levels" className="rounded-2xl bg-card border border-border p-4 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
            <h2 className="text-sm font-semibold">{t("feature.quiz.title")}</h2>
            <p className="text-xs text-muted-foreground mt-1 leading-5">{t("feature.quiz.desc")}</p>
          </Link>
          <Link href="/levels" className="rounded-2xl bg-card border border-border p-4 shadow-sm">
            <Star className="w-5 h-5 text-primary mb-3" />
            <h2 className="text-sm font-semibold">{t("feature.progress.title")}</h2>
            <p className="text-xs text-muted-foreground mt-1 leading-5">{t("feature.progress.desc")}</p>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-primary">{t("home.outline.title")}</h2>
            <span className="text-xs text-muted-foreground">{t("home.outline.subtitle")}</span>
          </div>
          <div className="space-y-3">
            {topics.map((top) => (
              <Link key={top.levelKey} href={`/level/${top.levelKey.split(".")[1]}/lessons`} className="block rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <div className={`px-4 py-3 text-sm font-semibold ${top.color === "blue" ? "bg-primary text-primary-foreground" : top.color === "gold" ? "bg-secondary text-secondary-foreground" : "bg-emerald-700 text-white"}`}>
                  {t(top.levelKey)}
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    {top.items.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-medium flex-shrink-0">{i + 1}</span>
                        <div>
                          <div>{item.en}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{item.ur}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}
