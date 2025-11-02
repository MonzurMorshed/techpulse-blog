"use client";
import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="max-w-4xl mx-auto px-4 py-10 text-center">
                    <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
                    <p className="text-gray-600">{this.state.error?.message}</p>
                </div>
            );
        }
    }
}