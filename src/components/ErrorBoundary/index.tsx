import { Component, ReactNode, ErrorInfo } from "react";

import { Title } from "constants/styles/global";

import { ErrorBoundaryState } from "./types";
import { ERROR_TEXT, ERROR_TITLE } from "./config";
import { ErrorBoundaryContainer, Error, Text } from "./styled";

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return (
        <ErrorBoundaryContainer data-testid="error-boundary">
          <Title>{ERROR_TITLE}</Title>
          <Error>{error && error.toString()}</Error>
          <Text>{ERROR_TEXT}</Text>
          <Text>{errorInfo && errorInfo.componentStack}</Text>
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
