import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-echo-light border-t border-emerald-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/assets/logotransparent.png"
                alt="Echo Consultants Logo"
                className="h-12 w-auto mr-3"
              />
              <h3 className="text-xl font-bold text-slate-900">Echo Consultants (Private) Ltd.</h3>
            </div>
            <p className="text-slate-600 max-w-md">
              Positioning Pakistan as a sovereign producer of critical strategic materials.
              Bridging the gap between resource abundance and industrial capability.
            </p>
          </div>
          <div className="flex flex-col md:items-end space-y-4">
            <div className="flex items-center text-slate-700">
              <MapPin className="w-5 h-5 text-echo-primary mr-2" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center text-slate-700">
              <Phone className="w-5 h-5 text-echo-primary mr-2" />
              <span>+92-321-5365755</span>
            </div>
            <a href="mailto:ceoechoconsultants@gmail.com" className="flex items-center text-slate-700 hover:text-echo-primary transition-colors">
              <Mail className="w-5 h-5 text-echo-primary mr-2" />
              <span>ceoechoconsultants@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-emerald-200 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Echo Consultants. All Rights Reserved. Strategic Industrial Sovereignty.
        </div>
      </div>
    </footer>
  );
};

export default Footer;