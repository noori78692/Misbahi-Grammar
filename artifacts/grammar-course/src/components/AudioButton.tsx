import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type State = "idle" | "loading" | "playing";

type Props = {
  text: string;
  size?: "sm" | "md";
};

export default function AudioButton({ text, size = "sm" }: Props) {
  const [state, setState] = useState<State>("idle");
  const cancelledRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      cancelledRef.current = true;
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      window.speechSynthesis.cancel();
    };
  }, []);

  function doSpeak() {
    const voices = window.speechSynthesis.getVoices();
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
    utter.onerror = () => setState("idle");

    window.speechSynthesis.speak(utter);
  }

  function speak() {
    if (!("speechSynthesis" in window)) return;

    if (state === "playing") {
      cancelledRef.current = true;
      window.speechSynthesis.cancel();
      setState("idle");
      return;
    }

    cancelledRef.current = false;
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    window.speechSynthesis.cancel();
    setState("loading");

    const startSpeaking = () => {
      if (cancelledRef.current) return;
      doSpeak();
    };

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      startSpeaking();
      return;
    }

    const handler = () => {
      window.speechSynthesis.removeEventListener("voiceschanged", handler);
      startSpeaking();
    };

    window.speechSynthesis.addEventListener("voiceschanged", handler);
    timeoutRef.current = window.setTimeout(() => {
      window.speechSynthesis.removeEventListener("voiceschanged", handler);
      startSpeaking();
    }, 1200);
  }

  const sizeClass =
    size === "md" ? "px-3 py-1.5 text-xs gap-1.5" : "px-2 py-1 text-xs gap-1";
  const iconSize = size === "md" ? "w-3.5 h-3.5" : "w-3 h-3";
  const label = state === "playing" ? "Stop" : state === "loading" ? "..." : "Listen";

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
