import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language";

type Props = {
  text: string;
  size?: "sm" | "md";
};

export default function AudioButton({ text, size = "sm" }: Props) {
  const [playing, setPlaying] = useState(false);
  const { t } = useLanguage();

  function speak() {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.85;

    // Prefer a natural-sounding English voice
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.includes("Natural") ||
          v.name.includes("Google") ||
          v.name.includes("Samantha") ||
          v.name.includes("Daniel") ||
          v.name.includes("Karen"))
    );
    if (preferred) utter.voice = preferred;

    utter.onstart = () => setPlaying(true);
    utter.onend = () => setPlaying(false);
    utter.onerror = () => setPlaying(false);

    window.speechSynthesis.speak(utter);
  }

  const sizeClass = size === "md" ? "px-3 py-1.5 text-xs gap-1.5" : "px-2 py-1 text-xs gap-1";
  const iconSize = size === "md" ? "w-3.5 h-3.5" : "w-3 h-3";

  return (
    <button
      onClick={speak}
      title={t("lesson.pronounce")}
      className={`inline-flex items-center rounded-lg border font-medium transition-all ${sizeClass} ${
        playing
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-muted/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5"
      }`}
    >
      {playing ? <VolumeX className={iconSize} /> : <Volume2 className={iconSize} />}
      <span>{playing ? "Stop" : t("lesson.pronounce")}</span>
    </button>
  );
}
