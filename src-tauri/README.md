# Backend Guide - Open-CLAssing (Rust/Tauri)

Esta guía detalla los estándares técnicos para la lógica de servidor y la integración con el sistema operativo vía Tauri v2.

## 🛠 Stack Técnico

- **Lenguaje**: Rust.
- **Framework**: Tauri v2.
- **Plugins**: `tauri-plugin-opener` (base).
- **Testing**: Rust `cargo test`.

## 📂 Estructura de Directorios

Ubicación: `src-tauri/src/`

- `modules/[feature]/`: Lógica segmentada por dominio de negocio para espejar al frontend.
- `lib.rs`: Definición de comandos y configuración del builder de Tauri.
- `main.rs`: Punto de entrada del binario.

## ⚙️ Comandos de Tauri

- **Registrar Comandos**: Definir en `modules/[feature]`, exportar en `lib.rs` y registrar en `.invoke_handler(tauri::generate_handler![...])`.
- **Seguridad**: Mantener configurado el CSP en `tauri.conf.json`.

## 🧪 Testing

- Escribir tests unitarios en el mismo archivo del módulo o en una carpeta `tests` adyacente usando `#[cfg(test)]`.
- Ejecutar con `cargo test`.
