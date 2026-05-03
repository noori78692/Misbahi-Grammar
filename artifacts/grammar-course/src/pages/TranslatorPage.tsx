import { useState, useCallback } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowLeftRight, Loader2, X } from "lucide-react";
import { useLanguage } from "@/contexts/language";
import AudioButton from "@/components/AudioButton";

async function translateText(text: string, from: string, to: string): Promise<string> {
  const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`);
  if (!res.ok) throw new Error("Translation failed");
  const data = await res.json();
  const translatedText = data.responseData?.translatedText;
  if (!translatedText || translatedText === "MYMEMORY WARNING") throw new Error("Translation failed");
  return translatedText;
}

export default function TranslatorPage() {
  const { lang } = useLanguage();
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [translating, setTranslating] = useState(false);
  const [transError, setTransError] = useState("");
  const [transLang, setTransLang] = useState<"en-ur" | "ur-en">("en-ur");

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) return;
    setTranslating(true);
    setTransError("");
    setTranslatedText("");
    try {
      const [from, to] = transLang === "en-ur" ? ["en", "ur"] : ["ur", "en"];
      const result = await translateText(inputText, from, to);
      setTranslatedText(result);
    } catch {
      setTransError(lang === "ur" ? "ترجمہ نہیں ہو سکا۔ دوبارہ کوشش کریں۔" : "Translation failed. Please try again.");
    } finally {
      setTranslating(false);
    }
  }, [inputText, transLang, lang]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">{lang === "ur" ? "ہوم" : "Home"}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{lang === "ur" ? "ترجمہ" : "Translator"}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">{lang === "ur" ? "ترجمہ" : "Translator"}</h1>
          <p className="text-muted-foreground text-base">{lang === "ur" ? "انگریزی ↔ اردو ترجمہ کریں۔" : "Translate between English and Urdu."}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10 flex-1">
        <section className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="bg-primary px-6 py-4 flex items-center gap-3">
            <ArrowLeftRight className="w-5 h-5 text-primary-foreground" />
            <div>
              <h2 className="font-serif text-lg font-bold text-primary-foreground leading-tight">Translator</h2>
              <p className="text-xs text-primary-foreground/70 font-semibold leading-tight" dir="rtl">ترجمہ</p>
            </div>
          </div>
          <div className="p-5 md:p-6">
            <div className="flex items-center gap-2 mb-5">
              {(["en-ur", "ur-en"] as const).map((opt) => (
                <button key={opt} onClick={() => { setTransLang(opt); setInputText(""); setTranslatedText(""); setTransError(""); }} className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${transLang === opt ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:bg-muted"}`}>
                  {opt === "en-ur" ? "English → اردو" : "اردو → English"}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{transLang === "en-ur" ? "English Text" : "اردو متن"}</label>
                <div className="relative">
                  <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && e.ctrlKey) handleTranslate(); }} placeholder={transLang === "en-ur" ? "Type English text here..." : "یہاں اردو متن لکھیں..."} dir={transLang === "ur-en" ? "rtl" : "ltr"} className="w-full h-36 p-4 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground/60 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  {inputText && <button onClick={() => { setInputText(""); setTranslatedText(""); }} className="absolute top-3 right-3 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-muted-foreground/40 transition-colors"><X className="w-3 h-3 text-muted-foreground" /></button>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{transLang === "en-ur" ? "اردو ترجمہ" : "English Translation"}</label>
                <div dir={transLang === "en-ur" ? "rtl" : "ltr"} className={`h-36 p-4 rounded-xl border text-sm leading-relaxed overflow-auto ${translatedText ? "border-primary/30 bg-primary/5 text-foreground" : "border-border bg-muted/20 text-muted-foreground/50"}`}>
                  {translating ? <div className="flex items-center gap-2 h-full justify-center"><Loader2 className="w-4 h-4 animate-spin text-primary" /><span className="text-primary text-xs">{lang === "ur" ? "ترجمہ ہو رہا ہے..." : "Translating..."}</span></div> : transError ? <p className="text-red-500 text-xs">{transError}</p> : translatedText ? <div><p className="font-medium leading-8">{translatedText}</p>{transLang === "en-ur" && <div className="mt-3 pt-3 border-t border-primary/20"><AudioButton text={inputText} size="sm" /></div>}</div> : <p className="flex items-center h-full justify-center opacity-60 text-xs">{lang === "ur" ? "ترجمہ یہاں آئے گا..." : "Translation appears here..."}</p>}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4"><button onClick={handleTranslate} disabled={!inputText.trim() || translating} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm">{translating ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowLeftRight className="w-4 h-4" />}{lang === "ur" ? "ترجمہ کریں" : "Translate"}</button><p className="text-xs text-muted-foreground">Ctrl + Enter</p></div>
          </div>
        </section>
      </div>
      <footer className="border-t border-border bg-card py-4 text-center text-sm text-muted-foreground mt-auto">Developed by Mohammad Noori Misbahi / محمد نوری مصباحی</footer>
    </div>
  );
}
