import React, { useState } from 'react';
import { Handshake, X, Copy, Mail, Phone, Check } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "ceoechoconsultants@gmail.com";
  const phone = "+92-321-5365755";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100 animate-pulse hover:animate-none'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-echo-primary hover:bg-echo-primaryHover text-white font-bold py-3 px-6 rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105"
        >
          <Handshake className="w-5 h-5" />
          <span>Partner With Us</span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-fadeIn">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 text-echo-primary rounded-full mb-4">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Partner with Echo</h3>
              <p className="text-slate-500 mt-2">Strategic Industrial Sovereignty.</p>
            </div>

            <div className="space-y-4">
              <a href={`tel:${phone}`} className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-echo-primary hover:bg-echo-light group transition-all cursor-pointer">
                <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-white text-slate-600 group-hover:text-echo-primary transition-colors mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Directly</p>
                  <p className="text-lg font-mono font-bold text-slate-900">{phone}</p>
                </div>
              </a>

              <div className="p-4 rounded-xl border border-slate-200 hover:border-echo-primary hover:bg-echo-light group transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-white text-slate-600 group-hover:text-echo-primary transition-colors mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-sm font-medium text-slate-900 break-all">{email}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="flex-1 bg-echo-primary hover:bg-echo-primaryHover text-white font-bold py-2 px-4 rounded-lg text-center transition-colors shadow-sm"
                  >
                    Open Mail
                  </a>
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-medium transition-colors shadow-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center border-t border-slate-100 pt-6">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyCTA;