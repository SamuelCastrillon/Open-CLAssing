# IA GUIDELINES - Open-CLAssing

Este documento define las reglas de desarrollo y arquitectura para el proyecto. **Debe ser seguido estrictamente por cualquier IA que trabaje en el repositorio.**

## 1. Reglas Generales

- **Metodología de Desarrollo**: **TDD (Test Driven Development)** strictly. Escribir tests antes que la implementación.
- **Testing Strategy**:
  - **Unitarios/Integración**: Usaremos **Bun Test** (`bun test`) por su velocidad.
  - **E2E**: Usaremos **Playwright** para asegurar el funcionamiento en Desktop, Tablet y Mobile.
- **Plataformas**: Diseño **Responsivo** mandatorio. Debe verse bien en Desktop, Tablet y Mobile.
- **Internacionalización (i18n)**: Proyecto **Multilenguaje**. No usar strings literales en la UI; usar claves de traducción.
- **Idioma del Proyecto**:
  - Comentarios y documentación en **Español**.
  - Código en **Inglés**.
- **Arquitectura**: Screaming Architecture.

## 2. Arquitectura Frontend (`src`)

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
