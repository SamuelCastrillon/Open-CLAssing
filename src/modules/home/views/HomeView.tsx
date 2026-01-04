import { useTranslation } from "react-i18next";
import { currentTheme, setTheme } from "../../core/state/global-state";

//? Vista principal con tematización premium personalizada
export default function HomeView() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen bg-base-100 text-base-content font-sans transition-colors duration-300">
      {/*_ Navigation Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-base-100 border-b border-oc-border/20">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-4 h-4 bg-primary rotate-45 rounded-xs" />
          <span className="text-base-content">Open-CLAssing</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-base-content/70 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Schedule
          </a>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm m-1">
              Theme: {currentTheme.value}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-1 menu p-2 shadow bg-base-200 rounded-box w-52 text-base-content"
            >
              <li>
                <a onClick={() => setTheme("openClassing")}>Open-CLAssing (Dark)</a>
              </li>
              <li>
                <a onClick={() => setTheme("forest")}>Forest</a>
              </li>
            </ul>
          </div>
          <div className="w-8 h-8 rounded-full bg-neutral border border-base-300 flex items-center justify-center overflow-hidden">
            <span className="text-[10px]">👤</span>
          </div>
        </nav>
      </header>

      {/*_ Main Content Based on Reference Image */}
      <main className="flex-1 flex flex-col p-8 md:p-16 max-w-5xl">
        <h1 className="text-3xl font-bold mb-10 text-base-content tracking-tight">
          Meeting Schedule Configuration
        </h1>

        <div className="space-y-8 max-w-md">
          {/*_ Field 1 */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-base-content block">
              Meeting Schedule URL
            </label>
            <input
              type="text"
              placeholder="Enter the URL of the meeting schedule"
              className="w-full bg-base-200 border border-base-300 rounded-md px-4 py-3 placeholder:text-base-content/30 text-sm focus:outline-none focus:border-primary transition-all shadow-sm"
            />
          </div>

          {/*_ Field 2 */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-base-content block">
              Range in Weeks (Optional)
            </label>
            <input
              type="text"
              placeholder="Enter the number of weeks to scrape"
              className="w-full bg-base-200 border border-base-300 rounded-md px-4 py-3 placeholder:text-base-content/30 text-sm focus:outline-none focus:border-primary transition-all shadow-sm"
            />
          </div>

          <div className="pt-4 flex justify-end md:justify-start">
            <button className="btn btn-primary px-6 font-semibold normal-case rounded-md shadow-lg transition-all active:scale-95">
              Save Configuration
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
