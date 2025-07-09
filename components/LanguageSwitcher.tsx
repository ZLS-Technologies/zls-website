import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export function LanguageSwitcher() {
  const { asPath } = useRouter();

  const langs = [
    { code: "en", label: "EN", path: "/" },
    { code: "hr", label: "HR", path: "/hr" },
  ];

  return (
    <div className="flex items-center space-x-2">
      {langs.map(({ code, label, path }) => {
        const isActive =
          path === "/" ? asPath === "/" : asPath.startsWith(path);

        return (
          <Link key={code} href={path} locale={false} passHref>
            <a
              className={`
                px-2 py-1 rounded transition
                ${isActive
                  ? "bg-gold text-pageDark dark:text-pageLight"
                  : "text-pageDark/60 hover:text-pageDark dark:text-pageLight/60 dark:hover:text-pageLight"
                }
              `}
            >
              {label}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
