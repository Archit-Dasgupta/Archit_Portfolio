import React from 'react';
import { useProgress } from '@react-three/drei';

export function LoadingOverlay() {
    const { progress } = useProgress();

    if (progress === 100) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#0f172a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                color: '#fff',
                flexDirection: 'column',
                fontFamily: 'monospace',
            }}
        >
            <div
                style={{
                    width: '50px',
                    height: '50px',
                    border: '3px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    borderTopColor: '#38bdf8',
                    animation: 'spin 1s ease-in-out infinite',
                    marginBottom: '20px',
                }}
                className="loader"
            />
            <div>LOADING... {Math.round(progress)}%</div>
            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
}
