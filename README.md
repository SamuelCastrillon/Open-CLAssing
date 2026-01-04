# Open-CLAssing 🚀

Proyecto basado en **Tauri v2 + Preact + TypeScript**, estructurado bajo los principios de **Screaming Architecture** y desarrollado siguiendo **TDD (Test Driven Development)**.

## 🛠 Stack Tecnológico

- **Frontend**: Preact + Vite + Tailwind CSS v4.
- **Backend**: Rust (Tauri v2).
- **Runtime/Gestor**: Bun.
- **Testing**:
  - **Unitarios/Integración**: Bun Test + Happy-DOM + @testing-library/preact.
  - **E2E**: Playwright (Desktop, Tablet, Mobile).
- **Internacionalización**: i18next + react-i18next.

## 📁 Arquitectura

El proyecto utiliza **Screaming Architecture**, organizando el código por módulos de negocio en lugar de tipos técnicos:

- `src/modules/core`: Lógica y componentes compartidos (Design System, i18n, API clients).
- `src/modules/[feature]`: Módulos específicos (ej: `home`, `auth`). cada uno con sus propias vistas y tests.

## 🚀 Comandos Útiles

### Desarrollo

```bash
bun dev          # Inicia el servidor de desarrollo de Vite
bun tauri dev    # Inicia la aplicación en modo desarrollo (Tauri)
```

### Testing

```bash
# Ejecutar tests unitarios e integración
bun test

# Ejecutar tests E2E con Playwright
npx playwright test
```

### Construcción

```bash
bun run build    # Compila el frontend y genera los tipos
bun tauri build  # Genera el instalador de la aplicación
```

## 📖 Guías de Contribución

Antes de realizar cambios, por favor revisa el archivo [IA_GUIDELINES.md](file:///c:/Desarrollo/02%20Open-CLAssignamen/Open-CLAssing/IA_GUIDELINES.md) para entender las reglas de arquitectura, nomenclatura y testing del proyecto.

- **Código**: Inglés.
- **Documentación/Comentarios**: Español.
- **Responsive**: Obligatorio para todos los componentes.
- **i18n**: Obligatorio para todos los textos de la interfaz.
