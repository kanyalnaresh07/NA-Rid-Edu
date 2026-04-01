import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public props: Props;
  public state: State;

  constructor(props: Props) {
    super(props);
    this.props = props;
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { children } = this.props;
    if (this.state.hasError) {
      let errorDetails = '';
      let isJson = false;
      try {
        if (this.state.error?.message) {
          const parsed = JSON.parse(this.state.error.message);
          errorDetails = JSON.stringify(parsed, null, 2);
          isJson = true;
        }
      } catch (e) {
        errorDetails = this.state.error?.message || 'An unknown error occurred';
      }

      return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
          <div className="max-w-2xl w-full bg-slate-900 border border-rose-500/30 rounded-[48px] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-10 text-9xl font-black text-rose-500/[0.03] select-none uppercase italic tracking-tighter">Error</div>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent opacity-50"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-8">
              <div className="w-24 h-24 bg-rose-500/10 border border-rose-500/30 rounded-3xl flex items-center justify-center text-5xl shadow-lg animate-pulse">
                ⚠️
              </div>
              
              <div className="space-y-4">
                <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter italic leading-none">
                  System Malfunction
                </h2>
                <p className="text-rose-400 font-black text-xs md:text-lg uppercase tracking-widest italic">
                  "We've encountered a critical exception in the procurement node."
                </p>
              </div>

              <div className="w-full bg-black/40 rounded-3xl border border-white/5 p-6 text-left overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Diagnostic Intel:</span>
                </div>
                <pre className="text-rose-300/80 text-[10px] md:text-xs font-mono leading-relaxed overflow-x-auto max-h-48 custom-scrollbar">
                  {errorDetails}
                </pre>
              </div>

              <button
                onClick={() => window.location.reload()}
                className="px-10 py-4 rounded-2xl bg-rose-500 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-rose-600 transition-all active:scale-95 shadow-[0_0_30px_rgba(244,63,94,0.3)] flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Reboot System
              </button>
              
              <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.5em] italic mt-4">
                Error Protocol: v4.0.1 // Node: Procurement-Main
              </p>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
