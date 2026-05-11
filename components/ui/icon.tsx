import { Layers, Compass, HardHat, Scale, Home, Sparkles, type LucideProps } from "lucide-react";

const map = { Layers, Compass, HardHat, Scale, Home, Sparkles } as const;
export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp {...props} />;
}
