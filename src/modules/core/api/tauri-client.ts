import { invoke } from "@tauri-apps/api/core";

//? Centralizamos los 'invokes' para facilitar el mocking y el tipado.
//? Esto ayuda a evitar que la lógica de negocio esté acoplada directamente a la API de Tauri.

export async function callTauriCommand<T>(command: string, args: Record<string, unknown> = {}): Promise<T> {
  try {
    return await invoke<T>(command, args);
  } catch (error) {
    //! Centralizar el logging o la transformación de errores del backend
    console.error(`Tauri Command Error [${command}]:`, error);
    throw error;
  }
}
