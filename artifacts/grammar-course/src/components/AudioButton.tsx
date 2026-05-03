import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useState } from "react";

type State = "idle" | "loading" | "playing";

type Props = {
  text: string;
  size?: "sm" | "md";
};

export default function AudioButton({ text, size = "sm" }: Props) {
  const [state, setState] = useState<State>("idle");

  function doSpeak(voices: SpeechSynthesisVoice[]) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.88;
    utter.pitch = 1;
    utter.volume = 1;

    const preferred =
      voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.includes("Google") ||
            v.name.includes("Natural") ||
            v.name.includes("Samantha") ||
            v.name.includes("Daniel") ||
            v.name.includes("Karen") ||
            v.name.includes("Alex") ||
            v.name.includes("Zira"))
      ) || voices.find((v) => v.lang.startsWith("en"));

    if (preferred) utter.voice = preferred;

    utter.onstart = () => setState("playing");
    utter.onend = () => setState("idle");
    utter.onerror = (e) => {
      console.warn("TTS error:", e.error);
      setState("idle");
    };

    window.speechSynthesis.speak(utter);
  }

  function speak() {
    if (!("speechSynthesis" in window)) return;

    if (state === "playing") {
      window.speechSynthesis.cancel();
      setState("idle");
      return;
    }

    // Cancel any previous utterance first
    window.speechSynthesis.cancel();
    setState("loading");

    const voices = window.speechSynthesis.getVoices();

    if (voices.length > 0) {
      doSpeak(voices);
    } else {
      // Chrome/Chromium: voices load asynchronously — wait for the event
      const handler = () => {
        window.speechSynthesis.removeEventListener("voiceschanged", handler);
        doSpeak(window.speechSynthesis.getVoices());
      };
      window.speechSynthesis.addEventListener("voiceschanged", handler);

      // Trigger voice loading (some browsers need this nudge)
      window.speechSynthesis.getVoices();

      // Safety timeout: speak anyway after 2 s even without a preferred voice
      setTimeout(() => {
        const v = window.speechSynthesis.getVoices();
        if (v.length > 0) return; // handler already fired
        window.speechSynthesis.removeEventListener("voiceschanged", handler);
        doSpeak([]);
      }, 2000);
    }
  }

  const sizeClass =
    size === "md" ? "px-3 py-1.5 text-xs gap-1.5" : "px-2 py-1 text-xs gap-1";
  const iconSize = size === "md" ? "w-3.5 h-3.5" : "w-3 h-3";

  const label =
    state === "playing" ? "Stop" : state === "loading" ? "…" : "Listen";

  return (
    <button
      onClick={speak}
      title="Listen to pronunciation"
      disabled={state === "loading"}
      className={`inline-flex items-center rounded-lg border font-medium transition-all ${sizeClass} ${
        state === "playing"
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : state === "loading"
          ? "border-border bg-muted text-muted-foreground cursor-wait"
          : "border-border bg-muted/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5"
      }`}
    >
      {state === "loading" ? (
        <Loader2 className={`${iconSize} animate-spin`} />
      ) : state === "playing" ? (
        <VolumeX className={iconSize} />
      ) : (
        <Volume2 className={iconSize} />
      )}
      <span>{label}</span>
    </button>
  );
}
