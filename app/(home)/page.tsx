// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-24 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Blocco 1 - SX */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
                Sviluppiamo sistemi decisionali per contesti complessi.
              </h1>
            </div>

            {/* Colonna DX con blocchi 2 e 3 */}
            <div className="space-y-16 lg:space-y-24">
              
              {/* Blocco 2 */}
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-300">
                  Siamo uno studio dinamico.
                </p>
                <p className="text-xl md:text-2xl text-gray-300">
                  Progettiamo sistemi orientati all&apos;equilibrio, capaci di adattarsi alla tua realtà.
                </p>
              </div>

              {/* Blocco 3 */}
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Per creare qualcosa di davvero efficace, dobbiamo capire a fondo cosa vuoi realizzare.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Solo così possiamo proporti soluzioni sorprendenti, costruite su misura.
                </p>
                <div className="pt-4 space-y-4">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    HYLE sviluppa sistemi decisionali per persone e aziende che vogliono fare le cose meglio.
                  </p>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    Lavoriamo con te, passo dopo passo, per costruire un&apos;esperienza unica.
                  </p>
                </div>
                <div className="pt-8">
                  <Link 
                    href="/servizi" 
                    className="inline-flex items-center text-lg font-medium hover:text-gray-300 transition-colors border-b border-transparent hover:border-gray-300 pb-1"
                  >
                    Scopri come lavoriamo
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Preview Progetti */}
      <section className="px-6 py-24 md:px-12 lg:px-24 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-4">Mini-casi operativi</h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Contesti diversi, problemi diversi. Stesso approccio HYLE.
              </p>
            </div>
            <Link 
              href="/progetti" 
              className="text-lg font-medium hover:text-gray-300 transition-colors border-b border-transparent hover:border-gray-300 pb-1"
            >
              Vedi tutti i progetti
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sistema per gestire un cane", category: "Personale" },
              { title: "Sistema per gestire una libreria personale", category: "Organizzazione" },
              { title: "Sistema per andare in montagna", category: "Avventura" },
              { title: "Sistema per la gestione di una PMI impiantistica", category: "Aziendale" },
              { title: "Sistema personale di gestione del tempo", category: "Produttività" },
              { title: "Sistema di apprendimento continuo", category: "Crescita" },
            ].map((project, index) => (
              <div 
                key={index} 
                className="group border border-gray-800 hover:border-gray-600 transition-colors p-6 rounded-lg"
              >
                <span className="text-sm text-gray-500 mb-2 block">{project.category}</span>
                <h3 className="text-xl font-light mb-4 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <Link 
                  href="/progetti" 
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm font-medium inline-flex items-center"
                >
                  Scopri l&apos;approccio
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
