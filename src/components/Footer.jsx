const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 px-6 border-t border-slate-200 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-xl font-extrabold tracking-tighter text-slate-900 mb-4 md:mb-0">
          NARMAHI.
        </div>
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Narmahi Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;