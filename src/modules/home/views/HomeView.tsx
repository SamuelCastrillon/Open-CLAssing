import { useState } from "preact/hooks";
import { invoke } from "@tauri-apps/api/core";

//? Vista principal del módulo Home
export default function HomeView() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    //_ Invoca el comando de Rust definido en src-tauri/src/lib.rs
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
        OpenCL
      </h1>

      <div className="flex gap-4 mb-8">
        <input
          id="greet-input"
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button 
          className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors active:scale-95"
          type="button" 
          onClick={() => greet()}
        >
          Greet
        </button>
      </div>

      <p className="text-xl font-medium text-blue-300">{greetMsg}</p>
    </main>
  );
}
