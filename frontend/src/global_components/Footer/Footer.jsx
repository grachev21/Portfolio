const Footer = () => {
  return (
    <main className="relative w-full h-24 bg-colorBackgroundDark">
      {/* round */}
      <span className="absolute z-30 bg-colorBackgroundDark rounded-t-full w-28 h-16 
      -top-14 left-1/2 -translate-x-1/2 drop-shadow-t-lg shadow-inner"></span>
      <div className="absolute z-20 w-full drop-shadow-lg shadow-inner h-full bg-colorBackgroundDark"></div>
      <div>@ 2025 Grachev Denis</div>
    </main>
  );
};
export default Footer;
