import { useTranslation } from "react-i18next";
import { currentTheme, setTheme } from "../../state/global-state";

//? Lista de temas disponibles definidos en index.css
const AVAILABLE_THEMES = [
  { id: "openClassing", key: "theme_openclassing" },
  { id: "forest", key: "theme_forest" },
  { id: "lemonade", key: "theme_lemonade" },
];

export default function ThemeSelector() {
  const { t } = useTranslation();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm m-1 gap-2 normal-case">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="m2 2 20 20" />
          <path d="m8 8 2-2" />
          <path d="m9 11 2-2" />
        </svg>
        <span className="opacity-70 text-[12px] font-medium">{t("theme_label")}</span>
        <span className="font-bold">
          {t(AVAILABLE_THEMES.find((theme) => theme.id === currentTheme.value)?.key || "") ||
            currentTheme.value}
        </span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[100] menu p-2 shadow-2xl bg-base-200 rounded-box w-52 mt-2 border border-base-300"
      >
        {AVAILABLE_THEMES.map((theme) => (
          <li key={theme.id}>
            <button
              onClick={() => setTheme(theme.id)}
              className={`flex justify-between ${currentTheme.value === theme.id ? "active" : ""}`}
            >
              {t(theme.key)}
              {currentTheme.value === theme.id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
