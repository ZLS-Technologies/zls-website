import { useRouter } from "next/router";
import en from "@/locales/en/common.json";
import hr from "@/locales/hr/common.json";

const dictionaries: Record<string, Record<string, string>> = {
  en: en as Record<string, string>,
  hr: hr as Record<string, string>,
};

export function useTranslation(): Record<string, string> {
  const { locale } = useRouter();
  return dictionaries[locale || "en"];
}
