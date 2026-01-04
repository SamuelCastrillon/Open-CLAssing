# Frontend Guide - Open-CLAssing

Esta guía detalla los estándares técnicos y flujos de trabajo específicos para la capa del cliente.

## 🛠 Stack Técnico

- **Framework**: Preact (vía `preact/compat` para compatibilidad con el ecosistema React).
- **Estilos**: Tailwind CSS v4.
- **i18n**: `react-i18next` (Soportado por aliasing).
- **Runtime**: **Bun** (único gestor de paquetes y runtime permitido).
- **Testing**: Bun Test + Happy DOM + `@testing-library/preact`.

## 📂 Estructura de Directorios

Seguimos **Screaming Architecture**:

- `navigation/`: Definición de rutas.
- `modules/core/`: Componentes transversales (Design System, i18n core).
- `modules/[feature]/`:
  - `components/`: UI específica del módulo.
  - `views/`: Pantallas principales.
  - `__tests__/`: Tests unitarios y de integración.

## 🧪 Testing (TDD)

1. Crear el archivo `__tests__/MyComponent.test.tsx`.
2. Ejecutar `bun test --watch`.
3. Implementar el componente hasta que el test pase.

## 🌍 Internacionalización

- Usar siempre el hook `useTranslation`.
- Las traducciones se encuentran en `src/modules/core/i18n/locales/`.
- **Regla**: Nunca usar strings literales para textos visibles al usuario.

## 🎨 Estilos y UI

- Usar clases de Tailwind v4.
- Priorizar el diseño **Mobile-First**.
- Asegurar que los componentes sean accesibles (ARIA labels).
