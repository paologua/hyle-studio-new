import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 mt-16 bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonna 1: Logo e descrizione */}
          <div>
            <div className="text-2xl font-light mb-4">HYLE</div>
            <p className="text-gray-500 text-sm">
              Sistemi decisionali per contesti complessi.
            </p>
          </div>

          {/* Colonna 2: Link rapidi */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">Pagine</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Servizi', href: '/servizi' },
                { name: 'Progetti', href: '/progetti' },
                { name: 'About', href: '/about' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-500 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Colonna 3: Social */}
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-300">Social</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/hylestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <a
                href="https://pinterest.com/hylestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-500 text-sm">
                info@hylestudio.it
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} HYLE. Tutti i diritti riservati.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Sviluppato con precisione.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
