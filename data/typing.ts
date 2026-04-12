
export type TypingMode = 'code' | 'prose' | 'alien';

export interface TypingPreset {
  id: TypingMode;
  label: string;
  icon: string;
  description: string;
  color: string;
  textColor: string;
  accentColor: string;
  texts: string[];
}

// ── CODE MODE ────────────────────────────────────────────────────────────────
const CODE_TEXTS: string[] = [
  `const fetchUser = async (id: number) => {
  const res = await fetch(\`/api/users/\${id}\`);
  if (!res.ok) throw new Error("Not found");
  return res.json();
};`,

  `function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,

  `SELECT u.name, COUNT(o.id) AS total_orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id
HAVING total_orders > 5
ORDER BY total_orders DESC;`,

  `git add -A && git commit -m "feat: add typing game with SRS"
git push origin main --force-with-lease`,

  `interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: 200 | 400 | 401 | 403 | 404 | 500;
}`,

  `const debounce = <T extends (...args: unknown[]) => void>(fn: T, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};`,

  `docker run -d --name myapp \\
  -e NODE_ENV=production \\
  -p 3000:3000 \\
  --restart=unless-stopped \\
  ghcr.io/hylst/keyboard-atlas:latest`,

  `useEffect(() => {
  const controller = new AbortController();
  fetch("/api/data", { signal: controller.signal })
    .then(r => r.json())
    .then(setData)
    .catch(err => { if (err.name !== "AbortError") setError(err); });
  return () => controller.abort();
}, []);`,

  `@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card { animation: fadeInUp 0.3s ease forwards; }`,

  `const [state, dispatch] = useReducer(reducer, {
  count: 0,
  loading: false,
  error: null,
});`,
];

// ── PROSE MODE ────────────────────────────────────────────────────────────────
const PROSE_TEXTS: string[] = [
  `La dactylographie est l'art de frapper les touches d'un clavier avec précision et fluidité. Maîtriser cette compétence libère l'esprit des contraintes mécaniques et permet de se concentrer pleinement sur les idées à exprimer.`,

  `Le clavier AZERTY, né dans les années soixante-dix pour les besoins de la typographie française, reste dominant en France malgré ses nombreuses critiques. L'AFNOR a tenté de le moderniser en 2019 avec une norme enrichie, mais son adoption demeure marginale.`,

  `La méthode des dix doigts repose sur un principe simple : chaque doigt est responsable d'une colonne de touches précise. Au repos, les index se posent sur les touches F et J, repérables par leurs petits reliefs tactiles. Cette position neutre s'appelle la rangée de base, ou Home Row.`,

  `Dans l'écosystème du développement logiciel, la vitesse de frappe n'est pas une fin en soi. Ce qui compte davantage, c'est la précision et la capacité à penser clairement tout en tapant. Un développeur qui tape lentement mais sans erreurs est souvent plus efficace qu'un frappeur rapide et impréciis.`,

  `Les troubles musculosquelettiques représentent la première cause de maladie professionnelle en France. Pour les travailleurs du numérique, l'adoption de claviers ergonomiques et d'une posture correcte peut réduire significativement les risques de syndrome du canal carpien.`,

  `La mémoire musculaire se construit par la répétition délibérée. Contrairement à une idée reçue, s'entraîner lentement et correctement est plus efficace que de taper vite en accumulant les erreurs. Le cerveau retient aussi bien les mauvais gestes que les bons.`,

  `Depuis l'invention de la machine à écrire par Christopher Sholes en 1868, la disposition QWERTY fut conçue pour éviter le blocage des marteaux mécaniques. Bien que cette contrainte n'existe plus, l'inertie culturelle perpétue ce standard hérité de l'ère industrielle.`,

  `L'apprentissage d'une nouvelle disposition de clavier — Dvorak, Colemak ou Bépo — demande en moyenne entre cent cinquante et deux cents heures de pratique active avant de retrouver sa vitesse initiale. La patience est la première vertu du clavier alternatif.`,

  `La typographie numérique et la dactylographie partagent une histoire commune. Les polices à chasse fixe comme JetBrains Mono ou Fira Code sont aujourd'hui plébiscitées par les développeurs, car elles facilitent la lecture du code par leur espacement uniforme.`,

  `Écrire vite et bien n'est pas inné, c'est une compétence acquise. Les pianistes, les codeurs et les écrivains professionnels le savent : la fluidité naît d'un entraînement régulier, structuré et progressif. Commencez lentement, soyez précis, la vitesse suivra naturellement.`,
];

// ── ALIEN MODE ────────────────────────────────────────────────────────────────
const ALIEN_TEXTS: string[] = [
  '#!/usr/bin/env bash\nset -euo pipefail\nIFS=$\'\\n\\t\'\ntrap \'echo "ERR @ line $LINENO" >&2\' ERR',

  '{[key: string]: (arg: unknown) => Promise<void | never>}',

  '```yaml\nservices:\n  app:\n    image: "ghcr.io/hylst/atlas:${TAG:-latest}"\n    environment:\n      - NODE_ENV=${NODE_ENV:-production}\n      - PORT=${PORT:-3000}\n    ports: ["${PORT:-3000}:3000"]\n```',

  '~/.config/nvim/init.lua → :lua vim.keymap.set(\'n\',\'<leader>ff\',\'<cmd>Telescope find_files<cr>\')',

  "grep -rE '(TODO|FIXME|HACK|XXX):?\\\\s*.+' --include='*.{ts,tsx,js}' | sort | uniq -c | sort -rn",

  "curl -sX POST https://api.example.com/v2/events \\\n  -H 'Content-Type: application/json' \\\n  -H \"Authorization: Bearer ${TOKEN}\" \\\n  -d '{\"type\":\"keystroke\",\"data\":{\"wpm\":87,\"accuracy\":0.98}}'",

  '[[ "$1" =~ ^[0-9]{1,3}(\\.[0-9]{1,3}){3}$ ]] && echo "Valid IP" || echo "Invalid"',

  '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>\n</svg>',

  'echo \'{"ok":true}\' | python3 -c "import sys,json; d=json.load(sys.stdin); print(d[\'ok\'])"',

  "PASS=$(openssl rand -base64 32 | tr -d '\\n/+' | head -c 24)\necho \"Generated: ${PASS}\"",
];

// ── PRESET REGISTRY ───────────────────────────────────────────────────────────
export const TYPING_PRESETS: TypingPreset[] = [
  {
    id: 'prose',
    label: 'Prose',
    icon: '✍️',
    description: 'Textes narratifs fluides — renforcez votre MPM sur du texte naturel',
    color: 'from-emerald-500 to-teal-600',
    textColor: 'text-emerald-600',
    accentColor: 'bg-emerald-50 border-emerald-200',
    texts: PROSE_TEXTS,
  },
  {
    id: 'code',
    label: 'Code',
    icon: '💻',
    description: 'Snippets réels — maîtrisez {}, [], <>, camelCase et symboles spéciaux',
    color: 'from-indigo-500 to-violet-600',
    textColor: 'text-indigo-600',
    accentColor: 'bg-indigo-50 border-indigo-200',
    texts: CODE_TEXTS,
  },
  {
    id: 'alien',
    label: 'Alien',
    icon: '👾',
    description: 'Séquences extrêmes — bash, regex, YAML, symboles improbables',
    color: 'from-rose-500 to-orange-500',
    textColor: 'text-rose-600',
    accentColor: 'bg-rose-50 border-rose-200',
    texts: ALIEN_TEXTS,
  },
];

export const getRandomText = (mode: TypingMode): string => {
  const preset = TYPING_PRESETS.find(p => p.id === mode)!;
  return preset.texts[Math.floor(Math.random() * preset.texts.length)];
};
