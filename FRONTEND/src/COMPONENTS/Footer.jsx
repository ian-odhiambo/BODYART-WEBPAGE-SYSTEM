import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt,
   FaPhone,
   FaEnvelope,
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaPinterestP } from 'react-icons/fa';
import logo from '../assets/images/logo/logo.jpg';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaPinterestP, url: '#', label: 'Pinterest' }
  ];

  return (
    <footer className="bg-zinc-900  py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
          
          {/* Logo with bounce */}
          <div className="animate-bounce-subtle">
            <img src={logo} alt="Inked NYC" className="h-16 w-auto" />
            <p className="text-gray-400 text-sm mt-2">TATTOOS • PIERCING • JEWELRY</p>
          </div>

          {/* Studio Details - Single Studio */}
          <div>
            <h3 className="text-white text-xl font-['Abril_Fatface',cursive] mb-4">NAIROBI TATTOOS & PIERCINGS STUDIOS</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>Kimathi Street<br />Nairobi, cbd</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-red-500" />
                <a href="tel:5854886839" className="hover:text-red-400">(+254) 700-000</a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <a href="mailto:info@inkednyc.com" className="hover:text-red-400">tattoosandstudio@example.com</a>
              </div>
              {/* <div className="flex items-center gap-2 mt-2">
                <span className="bg-zinc-800 text-xs px-2 py-1 rounded border border-zinc-700">APP</span>
                <span className="text-gray-500 text-xs">Certified</span>
              </div> */}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i}
                    href={social.url}
                    aria-label={social.label}
                    className="w-10 h-10 bg-zinc-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Our Tattoos and Piercings Studios.All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-red-400">Privacy</Link>
            <Link to="/terms" className="hover:text-red-400">Terms</Link>
            <Link to="/careers" className="hover:text-red-400">Employment</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-subtle {
          animation: subtle-bounce 2s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;