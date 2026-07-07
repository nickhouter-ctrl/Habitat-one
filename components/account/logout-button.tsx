"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export function LogoutButton() {
  const t = useTranslations("account");
  const router = useRouter();
  async function logout() {
    await fetch("/api/account/logout", { method: "POST" });
    router.push("/account");
    router.refresh();
  }
  return (
    <button onClick={logout} className="text-sm font-medium text-ink-soft underline hover:text-ink">
      {t("logout")}
    </button>
  );
}
