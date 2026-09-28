"use client";

import { useEffect } from "react";

/**
 * Beursstand-modus aanzetten (`/beurs?stand=1`).
 *
 * De iPad op de balie laat alleen het formulier zien: geen menu, geen voettekst,
 * niets om per ongeluk op te tikken terwijl er iemand voor je staat. Het scherm
 * gaat ook niet vanzelf uit zolang deze pagina open staat — een stand-iPad die
 * halverwege een gesprek in slaap valt kost je de bezoeker.
 *
 * Een klasse op <html> in plaats van een eigen layout: zo blijft de gewone
 * pagina (die de bezoeker via de QR-code ziet) precies zoals hij is.
 */
export function StandMode() {
  useEffect(() => {
    document.documentElement.classList.add("stand-mode");

    // Wake Lock werkt niet overal (en niet zonder https); lukt het niet, dan
    // verandert er simpelweg niets.
    let lock: { release: () => Promise<void> } | null = null;
    const vraagLock = async () => {
      try {
        const api = (navigator as Navigator & { wakeLock?: { request: (t: "screen") => Promise<typeof lock> } }).wakeLock;
        lock = (await api?.request("screen")) ?? null;
      } catch {
        /* geen schermvergrendeling: verder niets aan de hand */
      }
    };
    void vraagLock();
    const opTerug = () => {
      if (document.visibilityState === "visible") void vraagLock();
    };
    document.addEventListener("visibilitychange", opTerug);

    return () => {
      document.documentElement.classList.remove("stand-mode");
      document.removeEventListener("visibilitychange", opTerug);
      void lock?.release().catch(() => {});
    };
  }, []);

  return null;
}
