// components/LanguageSwitcher.tsx
import { useRouter } from "next/router";

export function LanguageSwitcher() {
  const { locale, locales, asPath, push } = useRouter();

  return (
    <div className="flex items-center space-x-2">
      {locales!.map((loc) => (
        <button
          key={loc}
          onClick={() => push(asPath, asPath, { locale: loc })}
          className={`
            px-2 py-1 rounded
            ${locale === loc ? "bg-gold text-pageDark" : "text-pageDark/60 hover:text-pageDark"}
            dark:${locale === loc ? "bg-gold text-pageLight" : "text-pageLight/60 dark:hover:text-pageLight"}
            transition
          `}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
