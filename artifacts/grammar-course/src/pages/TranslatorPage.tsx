import { useState, useCallback } from "react";
import { Link } from "wouter";
import { ChevronRight, ArrowLeftRight, Volume2, Search, BookOpen, Loader2, X } from "lucide-react";
import { useLanguage } from "@/contexts/language";
import AudioButton from "@/components/AudioButton";

type TranslationResult = {
  translatedText: string;
  match: number;
};

type DictEntry = {
  word: string;
  phonetic?: string;
  phonetics?: { text?: string; audio?: string }[];
  meanings: {
    partOfSpeech: string;
    definitions: { definition: string; example?: string; synonyms?: string[] }[];
    synonyms?: string[];
    antonyms?: string[];
  }[];
};

const partOfSpeechUrdu: Record<string, string> = {
  noun: "اسم",
  verb: "فعل",
  adjective: "صفت",
  adverb: "ظرف",
  pronoun: "ضمیر",
  preposition: "حرف جر",
  conjunction: "حرف ربط",
  interjection: "حرف ندا",
  determiner: "معین",
  exclamation: "حرف ندا",
};

async function translateText(text: string, from: string, to: string): Promise<TranslationResult> {
  const langpair = `${from}|${to}`;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Translation failed");
  const data = await res.json();
  return {
    translatedText: data.responseData.translatedText,
    match: data.responseData.match,
  };
}

async function lookupWord(word: string): Promise<DictEntry[]> {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase().trim())}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Word not found");
  return res.json();
}

export default function TranslatorPage() {
  const { t, lang } = useLanguage();

  // Translator state
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [translating, setTranslating] = useState(false);
  const [transError, setTransError] = useState("");
  const [transLang, setTransLang] = useState<"en-ur" | "ur-en">("en-ur");

  // Dictionary state
  const [dictWord, setDictWord] = useState("");
  const [dictResults, setDictResults] = useState<DictEntry[]>([]);
  const [dictLoading, setDictLoading] = useState(false);
  const [dictError, setDictError] = useState("");

  const handleTranslate = useCallback(async () => {
    if (!inputText.trim()) return;
    setTranslating(true);
    setTransError("");
    setTranslatedText("");
    try {
      const [from, to] = transLang === "en-ur" ? ["en", "ur"] : ["ur", "en"];
      const result = await translateText(inputText, from, to);
      setTranslatedText(result.translatedText);
    } catch {
      setTransError(lang === "ur" ? "ترجمہ نہیں ہو سکا۔ براہ کرم دوبارہ کوشش کریں۔" : "Translation failed. Please try again.");
    } finally {
      setTranslating(false);
    }
  }, [inputText, transLang, lang]);

  const handleDictLookup = useCallback(async () => {
    if (!dictWord.trim()) return;
    setDictLoading(true);
    setDictError("");
    setDictResults([]);
    try {
      const results = await lookupWord(dictWord);
      setDictResults(results);
    } catch {
      setDictError(lang === "ur" ? "لفظ نہیں ملا۔ کوئی انگریزی لفظ تلاش کریں۔" : "Word not found. Try searching an English word.");
    } finally {
      setDictLoading(false);
    }
  }, [dictWord, lang]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Link href="/" className="hover:text-primary transition-colors">{t("general.home")}</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{lang === "ur" ? "ترجمہ اور لغت" : "Translator & Dictionary"}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
            {lang === "ur" ? "ترجمہ اور لغت" : "Translator & Dictionary"}
          </h1>
          <p className="text-muted-foreground text-base">
            {lang === "ur"
              ? "انگریزی ↔ اردو ترجمہ کریں اور ہر انگریزی لفظ کی مکمل تعریف، مثال اور الفاظ کا گروپ دیکھیں۔"
              : "Translate between English and Urdu, and look up any English word's full definition, examples, and synonyms."}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        {/* ── TRANSLATOR SECTION ─────────────────────────────────────── */}
        <section className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="bg-primary px-6 py-4 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-primary-foreground" />
            <h2 className="font-serif text-lg font-bold text-primary-foreground">
              {lang === "ur" ? "ترجمہ" : "Translator"}
            </h2>
          </div>

          <div className="p-5 md:p-6">
            {/* Language direction toggle */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setTransLang("en-ur")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${transLang === "en-ur" ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:bg-muted"}`}
              >
                English → اردو
              </button>
              <button
                onClick={() => setTransLang("ur-en")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${transLang === "ur-en" ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground/70 hover:bg-muted"}`}
              >
                اردو → English
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {transLang === "en-ur" ? "English Text" : "اردو متن"}
                </label>
                <div className="relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && e.ctrlKey) handleTranslate(); }}
                    placeholder={transLang === "en-ur" ? "Type English text here..." : "یہاں اردو متن لکھیں..."}
                    dir={transLang === "ur-en" ? "rtl" : "ltr"}
                    className="w-full h-36 p-4 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground/60 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                  {inputText && (
                    <button onClick={() => { setInputText(""); setTranslatedText(""); }} className="absolute top-3 right-3 w-5 h-5 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-muted-foreground/40 transition-colors">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </button>
                  )}
                </div>
              </div>

              {/* Output */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {transLang === "en-ur" ? "اردو ترجمہ" : "English Translation"}
                </label>
                <div className={`relative h-36 p-4 rounded-xl border text-sm leading-relaxed overflow-auto ${translatedText ? "border-primary/30 bg-primary/5 text-foreground" : "border-border bg-muted/20 text-muted-foreground/50"}`}
                  dir={transLang === "en-ur" ? "rtl" : "ltr"}
                >
                  {translating ? (
                    <div className="flex items-center gap-2 h-full justify-center">
                      <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      <span className="text-primary text-xs">{lang === "ur" ? "ترجمہ ہو رہا ہے..." : "Translating..."}</span>
                    </div>
                  ) : transError ? (
                    <p className="text-red-500 text-xs">{transError}</p>
                  ) : translatedText ? (
                    <div>
                      <p className="font-medium">{translatedText}</p>
                      {transLang === "en-ur" && (
                        <div className="mt-3 pt-3 border-t border-primary/20">
                          <AudioButton text={inputText} size="sm" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <p>{lang === "ur" ? "ترجمہ یہاں آئے گا..." : "Translation will appear here..."}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handleTranslate}
                disabled={!inputText.trim() || translating}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {translating ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowLeftRight className="w-4 h-4" />}
                {lang === "ur" ? "ترجمہ کریں" : "Translate"}
              </button>
              <p className="text-xs text-muted-foreground">
                {lang === "ur" ? "Ctrl + Enter سے بھی ترجمہ ہو گا" : "Press Ctrl + Enter to translate"}
              </p>
            </div>
          </div>
        </section>

        {/* ── DICTIONARY SECTION ─────────────────────────────────────── */}
        <section className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
          <div className="bg-secondary px-6 py-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-secondary-foreground" />
            <h2 className="font-serif text-lg font-bold text-secondary-foreground">
              {lang === "ur" ? "لغت — لفظ کی تعریف" : "Dictionary — Word Definitions"}
            </h2>
          </div>

          <div className="p-5 md:p-6">
            <p className="text-sm text-muted-foreground mb-4">
              {lang === "ur"
                ? "کوئی بھی انگریزی لفظ لکھیں اور اس کی مکمل تعریف، مثال، الفاظ کا گروپ اور ہم معنی الفاظ دیکھیں۔"
                : "Search any English word to see its full definition, part of speech, example sentences, and synonyms."}
            </p>

            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  value={dictWord}
                  onChange={(e) => setDictWord(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleDictLookup(); }}
                  placeholder={lang === "ur" ? "انگریزی لفظ لکھیں (مثال: beautiful)" : "Type an English word (e.g., beautiful)"}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/40 focus:border-secondary transition-all"
                />
              </div>
              <button
                onClick={handleDictLookup}
                disabled={!dictWord.trim() || dictLoading}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {dictLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                {lang === "ur" ? "تلاش کریں" : "Search"}
              </button>
            </div>

            {dictError && (
              <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm">
                {dictError}
              </div>
            )}

            {dictResults.length > 0 && (
              <div className="space-y-6">
                {dictResults.slice(0, 1).map((entry, ei) => (
                  <div key={ei}>
                    {/* Word header */}
                    <div className="flex items-start justify-between mb-5 pb-4 border-b border-border">
                      <div>
                        <h3 className="font-serif text-3xl font-bold text-primary">{entry.word}</h3>
                        {entry.phonetic && (
                          <p className="text-muted-foreground text-sm mt-1 font-mono">{entry.phonetic}</p>
                        )}
                        {!entry.phonetic && entry.phonetics?.find(p => p.text) && (
                          <p className="text-muted-foreground text-sm mt-1 font-mono">{entry.phonetics.find(p => p.text)?.text}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <AudioButton text={entry.word} size="md" />
                        {entry.phonetics?.find(p => p.audio) && (
                          <button
                            onClick={() => {
                              const audio = entry.phonetics?.find(p => p.audio);
                              if (audio?.audio) new Audio(audio.audio).play();
                            }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/50 text-xs font-medium hover:bg-muted transition-colors"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            {lang === "ur" ? "تلفظ" : "Phonetic"}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Meanings */}
                    <div className="space-y-6">
                      {entry.meanings.map((meaning, mi) => (
                        <div key={mi}>
                          {/* Part of speech */}
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold capitalize">
                              {meaning.partOfSpeech}
                            </span>
                            {lang === "ur" && partOfSpeechUrdu[meaning.partOfSpeech] && (
                              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                                {partOfSpeechUrdu[meaning.partOfSpeech]}
                              </span>
                            )}
                            <div className="flex-1 h-px bg-border" />
                          </div>

                          {/* Definitions */}
                          <div className="space-y-3 mb-3">
                            {meaning.definitions.slice(0, 4).map((def, di) => (
                              <div key={di} className="flex gap-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-muted text-xs flex items-center justify-center text-muted-foreground font-medium mt-0.5">{di + 1}</span>
                                <div>
                                  <p className="text-sm text-foreground leading-relaxed">{def.definition}</p>
                                  {def.example && (
                                    <div className="mt-1.5 flex items-start gap-2">
                                      <p className="text-xs text-muted-foreground italic flex-1">"{def.example}"</p>
                                      <AudioButton text={def.example} size="sm" />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Synonyms */}
                          {meaning.synonyms && meaning.synonyms.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-border/50">
                              <p className="text-xs font-semibold text-muted-foreground mb-2">
                                {lang === "ur" ? "ہم معنی الفاظ:" : "Synonyms:"}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {meaning.synonyms.slice(0, 8).map((syn) => (
                                  <button
                                    key={syn}
                                    onClick={() => { setDictWord(syn); }}
                                    className="px-2.5 py-1 rounded-lg bg-muted border border-border text-xs font-medium text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors"
                                  >
                                    {syn}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Antonyms */}
                          {meaning.antonyms && meaning.antonyms.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-border/50">
                              <p className="text-xs font-semibold text-muted-foreground mb-2">
                                {lang === "ur" ? "متضاد الفاظ:" : "Antonyms:"}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {meaning.antonyms.slice(0, 6).map((ant) => (
                                  <button
                                    key={ant}
                                    onClick={() => { setDictWord(ant); }}
                                    className="px-2.5 py-1 rounded-lg bg-red-50 border border-red-200 text-xs font-medium text-red-700 hover:bg-red-100 transition-colors"
                                  >
                                    {ant}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!dictResults.length && !dictLoading && !dictError && (
              <div className="text-center py-10 text-muted-foreground">
                <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
                <p className="text-sm">
                  {lang === "ur" ? "اوپر کوئی انگریزی لفظ لکھ کر تلاش کریں" : "Search any English word above to see its definition"}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  {["grammar", "beautiful", "knowledge", "persevere", "eloquent", "curious"].map((w) => (
                    <button key={w} onClick={() => { setDictWord(w); }} className="px-3 py-1.5 rounded-lg bg-muted border border-border text-xs font-medium text-foreground/70 hover:border-primary/50 hover:text-primary transition-colors">
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
