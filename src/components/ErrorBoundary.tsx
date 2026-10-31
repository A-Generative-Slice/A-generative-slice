import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa] dark:bg-[#0a0a0a] px-6 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-white mb-3">
            Something went sideways
          </h1>
          <p className="text-[#475569] dark:text-slate-400 max-w-md mb-6">
            An unexpected error occurred while rendering this page. Please refresh to continue.
          </p>
          <button
            onClick={this.handleReload}
            className="rounded-lg bg-[#FF5C00] px-6 py-3 font-semibold text-white transition hover:bg-[#e05200]"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
