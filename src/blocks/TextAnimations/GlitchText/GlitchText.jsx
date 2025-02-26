const CustomGlitchText = ({ children, className = "" }) => {
  return (
    <div className={`relative text-white font-extrabold text-5xl md:text-7xl lg:text-8xl ${className}`}>
      {/* Main Text */}
      <span className="relative">{children}</span>

      {/* Red Glitch Effect */}
      <span className="absolute top-0 left-0 text-red-500 -translate-x-1 animate-glitch-red">
        {children}
      </span>

      {/* Blue Glitch Effect */}
      <span className="absolute top-0 left-0 text-blue-500 translate-x-1 animate-glitch-blue">
        {children}
      </span>
    </div>
  );
};

export default CustomGlitchText;
