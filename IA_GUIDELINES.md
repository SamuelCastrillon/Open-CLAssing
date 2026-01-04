# IA GUIDELINES - Open-CLAssing

Este documento define las reglas de desarrollo y arquitectura para el proyecto. **Debe ser seguido estrictamente por cualquier IA que trabaje en el repositorio.**

## 1. Reglas Generales

- **Metodología de Desarrollo**: **TDD (Test Driven Development)** strictly. Escribir tests antes que la implementación.
- **Testing Strategy**:
  - **Unitarios/Integración**: **Bun Test** (`bun test`). Usamos `happy-dom` y `@testing-library/preact`.
  - **E2E**: **Playwright** para Desktop, Tablet y Mobile. Configurado en `./playwright.config.ts`.
- **Compatibilidad Preact/React**: Usamos `preact/compat`. Para librerías que dependen de React (como `react-i18next`), usamos **aliasing** en `tsconfig.json`, `bunfig.toml` y `overrides` en `package.json`.
- **Internacionalización (i18n)**: Proyecto **Multilenguaje** vía `react-i18next`. No usar strings literales; usar `useTranslation()`.
- **Idioma**: Comentarios/Docs en **Español**, Código en **Inglés**.

## 2. Comentarios (Better Comments)

Es obligatorio usar prefijos para categorizar los comentarios:

- `//_` : Nueva característica o información importante.
- `//?` : Explicación técnica o lógica.
- `//!`: Problema crítico o advertencia.
- `//TODO`: Tareas pendientes o posibles mejoras.

## 3. Arquitectura Frontend (`src`)

Organización vertical basada en características del negocio.

```text
src/
├── navigation/       # Rutas y lógica de navegación.
└── modules/
    ├── core/         # Núcleo compartido (no contiene lógica de negocio específica).
    │   ├── design-system/ # Tailwind CSS, componentes UI base, temas.
    │   ├── hooks/         # Hooks globales.
    │   └── api/           # Clientes API y configuración.
    └── [feature]/    # Módulo de característica (ej: people, auth).
        ├── components/    # Componentes específicos de la feature.
        ├── hooks/         # Hooks específicos de la feature.
        ├── api/           # Llamadas a API específicas.
        └── views/         # Páginas o vistas principales de la feature.
```

## 3. Arquitectura Backend (`src-tauri`)

Simetría con el frontend donde sea posible.

```text
src-tauri/src/
├── modules/
    └── [feature]/    # Lógica de Rust por feature.
```

## 4. Estilos

- Usamos **Tailwind CSS**.
- Configuración base en `src/modules/core/design-system/index.css`.
- Evitar clases CSS personalizadas a menos que sean estrictamente necesarias.

## 5. Nomenclatura

- Componentes: `PascalCase` (ej: `UserCard.tsx`).
- Funciones y variables: `camelCase`.
- Archivos de configuración: `kebab-case`.
