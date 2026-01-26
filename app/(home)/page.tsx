// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid principale a 2 colonne */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Colonna SINISTRA - Blocco 1 */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="mb-8 lg:mb-12">
                <span className="text-sm text-gray-500 font-light tracking-wider">STUDIO HYLE</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight">
                Sviluppiamo sistemi decisionali per contesti complessi.
              </h1>
            </div>

            {/* Colonna DESTRA - Blocchi 2 e 3 */}
            <div className="space-y-32">
              
              {/* Blocco 2 - SX nella colonna DX (come nell'immagine) */}
              <div className="max-w-2xl">
                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-light leading-snug text-gray-300">
                    Siamo uno studio dinamico.
                  </p>
                  <p className="text-2xl md:text-3xl font-light leading-snug text-gray-300">
                    Progettiamo sistemi orientati all&apos;equilibrio, capaci di adattarsi alla tua realtà.
                  </p>
                </div>
              </div>

              {/* Blocco 3 - DX nella colonna DX */}
              <div className="max-w-2xl ml-auto">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                      Per creare qualcosa di davvero efficace, dobbiamo capire a fondo cosa vuoi realizzare.
                    </p>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                      Solo così possiamo proporti soluzioni sorprendenti, costruite su misura.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-800 space-y-4">
                    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-400">
                      HYLE sviluppa sistemi decisionali per persone e aziende che vogliono fare le cose meglio.
                    </p>
                    <p className="text-lg md:text-xl font-light leading-relaxed text-gray-400">
                      Lavoriamo con te, passo dopo passo, per costruire un&apos;esperienza unica.
                    </p>
                  </div>
                  
                  <div className="pt-8">
                    <Link 
                      href="/servizi" 
                      className="inline-flex items-center gap-2 text-lg font-light hover:text-gray-300 transition-colors group"
                    >
                      <span className="border-b border-transparent group-hover:border-gray-300 pb-1">
                        Esplora i nostri servizi
                      </span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer Preview */}
      <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2">
              <span className="text-sm text-gray-500 font-light tracking-wider">CONTATTO</span>
              <a 
                href="mailto:info@hyle.studio" 
                className="text-xl font-light hover:text-gray-300 transition-colors block"
              >
                info@hyle.studio
              </a>
            </div>
            
            <div className="flex gap-8">
              <Link 
                href="/servizi" 
                className="text-lg font-light hover:text-gray-300 transition-colors"
              >
                Servizi
              </Link>
              <Link 
                href="/progetti" 
                className="text-lg font-light hover:text-gray-300 transition-colors"
              >
                Progetti
              </Link>
              <Link 
                href="/about" 
                className="text-lg font-light hover:text-gray-300 transition-colors"
              >
                Evoluzione
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
