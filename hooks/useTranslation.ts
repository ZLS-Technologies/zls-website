import { useRouter } from "next/router";
import en from "@/locales/en/common.json";
import hr from "@/locales/hr/common.json";

const dicts: Record<string, Record<string,string>> = {
  en,
  hr,
};

export function useTranslation() {
  const { asPath } = useRouter();
  const lang = asPath.startsWith("/hr") ? "hr" : "en";
  return dicts[lang];
}
