import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-black text-white">
                    <h1 className="text-3xl font-bold mb-4">⚠ حدث خطأ غير متوقع</h1>
                    <p className="text-gray-300 mb-6">برجاء المحاولة مرة أخرى أو الرجوع للصفحة الرئيسية.</p>
                    <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[#b99272] rounded-lg hover:bg-[#a67850] transition">
                        إعادة تحميل الصفحة
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
