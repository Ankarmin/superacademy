export type ThemeMode = "light" | "dark";

export const THEME_COLORS: Record<ThemeMode, string> = {
  light: "#f8fbff",
  dark: "#04111d",
};

const RUNTIME_THEME_COLOR_SELECTOR = "meta[name='theme-color'][data-runtime-theme-color]";

export function setDocumentTheme(theme: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  let themeColorMeta = document.querySelector<HTMLMetaElement>(RUNTIME_THEME_COLOR_SELECTOR);

  if (!themeColorMeta) {
    themeColorMeta = document.createElement("meta");
    themeColorMeta.name = "theme-color";
    themeColorMeta.dataset.runtimeThemeColor = "true";
    document.head.appendChild(themeColorMeta);
  }

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  themeColorMeta.content = THEME_COLORS[theme];
}
