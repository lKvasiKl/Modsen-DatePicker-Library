import { Component, ReactNode, ErrorInfo } from "react";
import { ErrorBoundaryState } from "./types";
interface ErrorBoundaryProps {
    children: ReactNode;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        error: Error;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export default ErrorBoundary;
