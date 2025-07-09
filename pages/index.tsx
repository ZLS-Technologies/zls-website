// pages/index.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Moon,
  Info,
  Code,
  Cloud,
  TrendingUp,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "@/hooks/useTranslation";

export default function Home() {
  const t = useTranslation();
  const { locale, locales, asPath, push } = useRouter();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme from localStorage or OS preference
  useEffect(() => {
    const root = document.documentElement;
    if (
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      setTheme("dark");
    } else {
      root.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  const switchLocale = (loc: string) => {
    push(asPath, asPath, { locale: loc });
  };

  return (
    <main className="bg-pageLight dark:bg-pageDark transition-colors duration-300">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-pageLight/70 dark:bg-pageDark/70 backdrop-blur z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo + Site Name */}
          <div className="flex items-center space-x-2">
            <Image
              src="/zls-logo.png"
              alt={t["siteName"]}
              width={32}
              height={32}
              priority
            />
            <span className="text-pageDark dark:text-pageLight font-bold text-lg">
              {t["siteName"]}
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 text-pageDark dark:text-pageLight font-medium">
            <li>
              <a href="#about" className="hover:text-gold transition">
                {t["nav.about"]}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold transition">
                {t["nav.services"]}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition">
                {t["nav.contact"]}
              </a>
            </li>
          </ul>

          {/* Locale & Theme Switcher */}
          <div className="flex items-center space-x-4">
            {/* Language Buttons */}
            <div className="flex items-center space-x-2">
              {locales!.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLocale(loc)}
                  className={`
                    px-2 py-1 rounded
                    ${locale === loc
                      ? "bg-gold text-pageDark dark:text-pageLight"
                      : "text-pageDark/60 hover:text-pageDark dark:text-pageLight/60 dark:hover:text-pageLight"}
                    transition
                  `}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded hover:bg-pageDark/10 dark:hover:bg-pageLight/10 transition"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-pageDark" />
              ) : (
                <Sun className="w-5 h-5 text-pageLight" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="
          pt-20
          flex items-center justify-center
          h-screen
          bg-pageLight dark:bg-pageDark
          text-pageDark dark:text-pageLight
          text-center px-6
        "
      >
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {t["siteName"]}
          </h1>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            {t["hero.headline"]}
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto" />
          <p className="text-lg text-pageDark/80 dark:text-pageLight/80">
            {t["hero.subhead"]}
          </p>
          <a
            href="#contact"
            className="
              inline-block
              mt-4
              px-6 py-3
              bg-gold text-pageDark font-semibold
              rounded-full
              hover:opacity-90 transition
            "
          >
            {t["hero.cta"]}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-pageLight dark:bg-pageDark">
        <div className="container mx-auto py-20">
          <h2 className="text-2xl font-bold text-pageDark dark:text-pageLight">
            {t["about.title"]}
          </h2>
          <div className="w-16 h-1 bg-gold my-4" />
          <div className="prose prose-lg text-pageDark dark:text-pageLight max-w-none">
            <p>{t["about.p1"]}</p>
            <p>{t["about.p2"]}</p>
            <ul>
              <li>{t["about.bullet.consulting"]}</li>
              <li>{t["about.bullet.development"]}</li>
              <li>{t["about.bullet.support"]}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 dark:bg-black">
        <div className="container mx-auto py-20">
          <h2 className="text-2xl font-bold text-pageDark dark:text-pageLight text-center">
            {t["services.title"]}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4" />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                Icon: Code,
                titleKey: "service.software.title",
                bulletsKeys: [
                  "service.software.b1",
                  "service.software.b2",
                  "service.software.b3",
                  "service.software.b4",
                ],
              },
              {
                Icon: Cloud,
                titleKey: "service.cloud.title",
                bulletsKeys: [
                  "service.cloud.b1",
                  "service.cloud.b2",
                  "service.cloud.b3",
                  "service.cloud.b4",
                ],
              },
              {
                Icon: TrendingUp,
                titleKey: "service.consult.title",
                bulletsKeys: [
                  "service.consult.b1",
                  "service.consult.b2",
                  "service.consult.b3",
                  "service.consult.b4",
                ],
              },
            ].map(({ Icon, titleKey, bulletsKeys }, i) => (
              <motion.div
                key={titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="bg-pageLight dark:bg-black border border-gold rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Icon className="w-6 h-6 text-gold mr-2" />
                    <h3 className="text-xl font-semibold text-pageDark dark:text-pageLight">
                      {t[titleKey]}
                    </h3>
                  </div>
                  <ul className="list-disc list-inside text-pageDark dark:text-pageLight space-y-1">
                    {bulletsKeys.map((key) => (
                      <li key={key}>{t[key]}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-pageLight dark:bg-pageDark">
        <div className="container mx-auto py-20">
          <h2 className="text-2xl font-bold text-pageDark dark:text-pageLight">
            {t["contact.title"]}
          </h2>
          <div className="w-16 h-1 bg-gold my-4" />
          <div className="prose prose-lg text-pageDark dark:text-pageLight max-w-none">
            <p>
              <strong>{t["contact.email.label"]}</strong>{" "}
              <a
                href={`mailto:${t["contact.email.value"]}`}
                className="text-gold hover:underline"
              >
                {t["contact.email.value"]}
              </a>
            </p>
            <p>
              <strong>{t["contact.address.label"]}</strong>{" "}
              {t["contact.address.value"]}
            </p>
            <div className="w-full h-64 mt-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
              <iframe
                className="w-full h-full"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  t["contact.address.value"]
                )}&output=embed`}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-pageDark dark:text-pageLight">
        {t["footer.copyright"].replace(
          "{year}",
          new Date().getFullYear().toString()
        )}
      </footer>
    </main>
  );
}
