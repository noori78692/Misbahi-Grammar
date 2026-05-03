import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language";
import { useTheme } from "@/contexts/theme";

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "/", labelKey: "nav.home" },
    { href: "/levels", labelKey: "nav.levels" },
    { href: "/confusables", labelKey: "nav.confusables" },
    { href: "/translator", labelKey: "nav.translator" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow border border-border/40">
            <img
              src="@assets/ChatGPT_Image_May_3,_2026,_02_57_19_PM_1777800458940.png"
              alt="Misbahi Grammar logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif font-bold text-primary text-base tracking-tight">Misbahi Grammar</span>
            <span className="text-[10px] text-muted-foreground font-sans uppercase tracking-widest">{t("nav.tagline")}</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location === l.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
            >
              {t(l.labelKey)}
            </Link>
          ))}
          <Link
            href="/levels"
            className="ml-2 px-4 py-2 rounded-md text-sm font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
          >
            {t("nav.startLearning")}
          </Link>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            title={lang === "en" ? "اردو میں دیکھیں" : "View in English"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-semibold hover:bg-muted transition-colors"
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "اردو" : "English"}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={theme === "light" ? "Dark mode" : "Light mode"}
            className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-foreground/70" />
            ) : (
              <Sun className="w-4 h-4 text-foreground/70" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                location === l.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
              onClick={() => setOpen(false)}
            >
              {t(l.labelKey)}
            </Link>
          ))}
          <Link
            href="/levels"
            className="mt-1 px-3 py-2.5 rounded-md text-sm font-semibold bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity"
            onClick={() => setOpen(false)}
          >
            {t("nav.startLearning")}
          </Link>
        </div>
      )}
    </header>
  );
}
