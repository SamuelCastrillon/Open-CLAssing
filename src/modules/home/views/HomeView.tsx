import { useState } from "preact/compat";
import { invoke } from "@tauri-apps/api/core";
import { useTranslation } from "react-i18next";

//? Vista principal del módulo Home
export default function HomeView() {
  const { t } = useTranslation();
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    //_ Invoca el comando de Rust definido en src-tauri/src/lib.rs
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-screen p-4 sm:p-8 text-center bg-gray-900 text-white">
      <h1 className="text-4xl sm:text-6xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 sm:mb-8">
        {t('welcome')}
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md">
        <input
          id="greet-input"
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all text-lg"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder={t('name_placeholder')}
        />
        <button 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors active:scale-95 text-lg"
          type="button" 
          onClick={() => greet()}
        >
          {t('greet_button')}
        </button>
      </div>

      <p className="text-xl font-medium text-blue-300 min-h-8">
        {greetMsg && t('greet_message', { name: greetMsg.includes(",") ? greetMsg.split(",")[1].split("!")[0].trim() : name })}
      </p>
    </main>
  );
}
