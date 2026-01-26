export default function Navigation() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-700">
          IlMioSito
        </a>
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-blue-600 font-medium">Home</a>
          <a href="/about" className="hover:text-blue-600 font-medium">Chi siamo</a>
          <a href="/services" className="hover:text-blue-600 font-medium">Servizi</a>
          <a href="/contact" className="hover:text-blue-600 font-medium">Contatti</a>
        </div>
        <button className="md:hidden text-blue-700">
          ☰
        </button>
      </div>
    </nav>
  );
}
