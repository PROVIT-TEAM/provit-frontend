import { Component } from "react";

export interface ErrorBoundaryState {
  error: Error | null;
}

class FallbackErrorBoundary extends Component<any, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error };
  }

  render() {
    const { children, serverErrorFallback } = this.props;

    if (this.state.error) {
      return <div>error 발생</div>;
    }

    return children;
  }
}

export default FallbackErrorBoundary;
