import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { confusables, ConfusablePair } from "@/data/confusables";
import { useLanguage } from "@/contexts/language";
import AudioButton from "@/components/AudioButton";

const categoryColors = {
  pronunciation: { bg: "bg-primary", text: "text-primary-foreground", light: "bg-primary/10 text-primary border-primary/20" },
  meaning: { bg: "bg-secondary", text: "text-secondary-foreground", light: "bg-secondary/10 text-secondary-foreground border-secondary/30" },
  spelling: { bg: "bg-emerald-700", text: "text-white", light: "bg-emerald-50 text-emerald-800 border-emerald-200" },
};

function PairCard({ pair }: { pair: ConfusablePair }) {
  const { t, lang } = useLanguage();
  const colors = categoryColors[pair.category];

  const categoryLabel = t(
    pair.category === "pronunciation"
      ? "confusables.similar.pronunciation"
      : pair.category === "meaning"
      ? "confusables.similar.meaning"
      : "confusables.similar.spelling"
  );

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      {/* Category badge */}
      <div className={`px-5 py-3 text-xs font-semibold flex items-center gap-2 ${colors.bg} ${colors.text}`}>
        {categoryLabel}
      </div>

      <div className="p-5 md:p-6 space-y-5">
        {/* Words */}
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${pair.words.length}, 1fr)` }}>
          {pair.words.map((w) => (
            <div key={w.word} className={`rounded-xl border p-4 ${colors.light}`}>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-serif text-xl font-bold">{w.word}</span>
                <AudioButton text={w.word} size="sm" />
              </div>
              <p className="text-xs font-semibold mb-1 opacity-80">{t("confusables.meaning")}:</p>
              <p className="text-sm font-medium leading-snug">{w.meaning}</p>
              {lang === "ur" && (
                <p className="text-xs mt-1 opacity-70" dir="rtl" style={{ textAlign: "right" }}>{w.meaningUrdu}</p>
              )}
            </div>
          ))}
        </div>

        {/* Usage + Example */}
        <div className="space-y-3">
          {pair.words.map((w) => (
            <div key={w.word} className="p-3.5 rounded-xl bg-muted/50 border border-border/60">
              <div className="flex items-start gap-2 mb-1">
                <span className="font-serif font-bold text-primary text-sm shrink-0">{w.word}:</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.usage}</p>
              </div>
              {lang === "ur" && (
                <p className="text-xs text-muted-foreground mb-2 pr-2" dir="rtl" style={{ textAlign: "right" }}>{w.usageUrdu}</p>
              )}
              <div className="flex items-start justify-between gap-3 mt-2 pt-2 border-t border-border/40">
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-0.5">{t("confusables.example")}:</p>
                  <p className="text-sm font-medium text-foreground">{w.example}</p>
                  <p className="text-xs text-muted-foreground mt-1 italic" dir="rtl" style={{ textAlign: "right" }}>{w.exampleUrdu}</p>
                </div>
                <AudioButton text={w.example} size="sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Key difference */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800/40">
          <p className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1">{t("confusables.difference")}:</p>
          <p className="text-sm text-amber-900 dark:text-amber-300 leading-relaxed">{pair.keyDifference}</p>
          {lang === "ur" && (
            <p className="text-xs text-amber-700 dark:text-amber-400 mt-2 leading-relaxed" dir="rtl" style={{ textAlign: "right" }}>{pair.keyDifferenceUrdu}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConfusablesPage() {
  const { t } = useLanguage();

  const homophones = confusables.filter((c) => c.category === "pronunciation");
  const similar = confusables.filter((c) => c.category === "meaning");
  const spelling = confusables.filter((c) => c.category === "spelling");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">{t("general.home")}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{t("confusables.title")}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">{t("confusables.title")}</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">{t("confusables.subtitle")}</p>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed" dir="rtl" style={{ textAlign: "right" }}>
            {t("confusables.subtitle") !== "confusables.subtitle" ? "وہ الفاظ جو اکثر الجھن پیدا کرتے ہیں — ہجے، تلفظ یا معنی میں ملتے جلتے۔" : ""}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 space-y-14">

        {/* Homophones */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-primary" />
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">{t("confusables.similar.pronunciation")}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">ہم آواز الفاظ — ایک جیسے بولے جاتے ہیں، مطلب مختلف</p>
            </div>
          </div>
          <div className="grid gap-6">
            {homophones.map((pair) => <PairCard key={pair.id} pair={pair} />)}
          </div>
        </section>

        {/* Similar spelling / often confused */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-emerald-600" />
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">{t("confusables.similar.spelling")}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">ملتی جلتی ہجے والے الفاظ — مطلب مختلف</p>
            </div>
          </div>
          <div className="grid gap-6">
            {spelling.map((pair) => <PairCard key={pair.id} pair={pair} />)}
          </div>
        </section>

        {/* Similar meaning */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-secondary" />
            <div>
              <h2 className="font-serif text-2xl font-bold text-primary">{t("confusables.similar.meaning")}</h2>
              <p className="text-xs text-muted-foreground mt-0.5">ہم معنی الفاظ — بالکل ایک جیسے نہیں، باریک فرق ہے</p>
            </div>
          </div>
          <div className="grid gap-6">
            {similar.map((pair) => <PairCard key={pair.id} pair={pair} />)}
          </div>
        </section>

      </div>
    </div>
  );
}
