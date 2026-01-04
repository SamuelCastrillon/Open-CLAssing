import { Component, ComponentChildren, ErrorInfo } from "preact";
import { useTranslation } from "react-i18next";

interface Props {
  children: ComponentChildren;
}

interface State {
  hasError: boolean;
}

//? Los Error Boundaries deben ser componentes de clase en Preact/React
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    //_ Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //! Aquí se podría enviar el error a un servicio de logging externo
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

function ErrorFallback() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center">
      <h1 className="mb-4 text-2xl font-bold text-red-600">{t("error_boundary_title")}</h1>
      <p className="mb-6 text-gray-700">{t("error_boundary_message")}</p>
      <button
        onClick={() => window.location.reload()}
        className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
      >
        {t("error_boundary_button")}
      </button>
    </div>
  );
}

export default ErrorBoundary;
