export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">IlMioSito</h3>
            <p className="text-gray-400 mt-2">Soluzioni digitali su misura</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-white">Termini</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contatti</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} IlMioSito. Tutti i diritti riservati.</p>
          <p className="mt-1">Sviluppato con Next.js 14 e Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
