import React from 'react';
import { X, Share2, Smartphone } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, url }) => {
  if (!isOpen) return null;

  const targetUrl = url || window.location.href;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=101014&bgcolor=ffffff&data=${encodeURIComponent(targetUrl)}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
        <div className="relative w-full max-w-sm bg-white dark:bg-[#101014] border border-neutral-200 dark:border-[#bf953f]/30 rounded-3xl p-8 flex flex-col items-center shadow-2xl">
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors dark:text-white"
            >
                <X className="w-5 h-5" />
            </button>

            <div className="mb-6 p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Share2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white mb-2 text-center">
                Share Gano Shakh
            </h3>
            <p className="text-center text-neutral-500 dark:text-neutral-400 text-sm mb-8">
                Scan to experience the healing power on mobile.
            </p>

            <div className="p-4 bg-white rounded-2xl shadow-inner border border-neutral-200 mb-8">
                <img src={qrApiUrl} alt="QR Code" className="w-48 h-48 mix-blend-multiply" />
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400 uppercase tracking-widest font-medium">
                <Smartphone className="w-4 h-4" />
                <span>Scan with Camera</span>
            </div>
        </div>
    </div>
  );
};

export default QRCodeModal;