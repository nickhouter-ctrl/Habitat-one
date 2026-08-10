// Eenvoudige sliding-window rate limiter, in het geheugen van de instantie.
//
// Bewust zonder externe store: er draait geen Redis/KV bij dit project. Dat
// betekent dat de limiet PER serverinstantie geldt — bij meerdere instanties
// mag een bezoeker in het slechtste geval `limit × aantal instanties` keer.
// Voor het afremmen van misbruik van een betaalde AI-endpoint is dat ruim
// voldoende; wordt de endpoint ooit publiek/zwaarder, vervang de opslag dan
// door een gedeelde store (bv. Vercel Runtime Cache of een KV-integratie).

/** Instelling van één limiet: `limit` verzoeken per `windowMs`. */
export interface RateLimitRule {
  limit: number;
  windowMs: number;
}

/** Uitslag van een controle. */
export interface RateLimitResult {
  /** True wanneer het verzoek door mag (en meegeteld is). */
  ok: boolean;
  /** Resterende verzoeken in het huidige venster. */
  remaining: number;
  /** Seconden tot het volgende verzoek weer mag (0 wanneer `ok`). */
  retryAfterSec: number;
}

export interface RateLimiter {
  /** Registreert een verzoek voor `key` en zegt of het door mag. */
  check(key: string, now?: number): RateLimitResult;
  /** Aantal sleutels dat nu in het geheugen staat — voor tests/diagnose. */
  size(): number;
}

/**
 * Maakt een limiter met een schuivend venster.
 *
 * Geblokkeerde verzoeken worden NIET meegeteld: een bezoeker die blijft
 * klikken verlengt zijn eigen blokkade daarmee niet.
 */
export function createRateLimiter(rule: RateLimitRule): RateLimiter {
  const hits = new Map<string, number[]>();

  /** Gooit sleutels weg waarvan alle tijdstempels buiten het venster liggen. */
  function sweep(cutoff: number) {
    for (const [key, stamps] of hits) {
      const fresh = stamps.filter((t) => t > cutoff);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
  }

  let lastSweep = -Infinity;

  return {
    check(key, now = Date.now()) {
      const cutoff = now - rule.windowMs;

      // Periodiek opruimen (hooguit één keer per venster) houdt de map klein
      // zonder bij elk verzoek over alle sleutels te lopen.
      if (now - lastSweep >= rule.windowMs) {
        sweep(cutoff);
        lastSweep = now;
      }

      const stamps = (hits.get(key) ?? []).filter((t) => t > cutoff);
      if (stamps.length >= rule.limit) {
        hits.set(key, stamps);
        const oldest = stamps[0];
        const waitMs = Math.max(0, oldest + rule.windowMs - now);
        return { ok: false, remaining: 0, retryAfterSec: Math.ceil(waitMs / 1000) };
      }

      stamps.push(now);
      hits.set(key, stamps);
      return { ok: true, remaining: rule.limit - stamps.length, retryAfterSec: 0 };
    },
    size() {
      return hits.size;
    },
  };
}
