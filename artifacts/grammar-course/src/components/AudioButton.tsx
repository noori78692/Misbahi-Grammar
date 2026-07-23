import { Volume2, VolumeX, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type State = "idle" | "loading" | "playing";

type Props = {
  text: string;
  size?: "sm" | "md";
};

export default function AudioButton({ text, size = "sm" }: Props) {
  const [state, setState] = useState<State>("idle");
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  function speak() {
    if (!("speechSynthesis" in window)) return;

    if (state === "playing") {
      window.speechSynthesis.cancel();
      setState("idle");
      return;
    }

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    utter.rate = 0.88;
    utter.pitch = 1;
    utter.volume = 1;

    const voices = window.speechSynthesis.getVoices();

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

    if (preferred) {
      utter.voice = preferred;
    }

    utterRef.current = utter;

    setState("loading");

    const checkStarted = window.setTimeout(() => {
      setState("playing");
    }, 300);

    utter.onstart = () => {
      window.clearTimeout(checkStarted);
      setState("playing");
    };

    utter.onend = () => {
      window.clearTimeout(checkStarted);
      setState("idle");
    };

    utter.onerror = () => {
      window.clearTimeout(checkStarted);
      setState("idle");
    };

    window.speechSynthesis.speak(utter);
  }

  const sizeClass =
    size === "md"
      ? "px-3 py-1.5 text-xs gap-1.5"
      : "px-2 py-1 text-xs gap-1";

  const iconSize = size === "md" ? "w-3.5 h-3.5" : "w-3 h-3";

  const label =
    state === "playing"
      ? "Stop"
      : state === "loading"
      ? "..."
      : "Listen";

  return (
    <button
      onClick={speak}
      title="Listen to pronunciation"
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