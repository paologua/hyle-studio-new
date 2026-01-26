// app/servizi/page.tsx
import Link from 'next/link';

export default function ServiziPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <span className="text-sm text-gray-500 font-light tracking-wider">SERVIZI</span>
          </div>
          
          {/* Grid a 2 colonne */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Colonna SINISTRA - Titolo e introduzione */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight mb-8">
                Progettiamo sistemi che pensano, adattano, evolvono.
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                Ogni sistema nasce dall&apos;analisi profonda della tua realtà e si adatta nel tempo.
              </p>
            </div>

            {/* Colonna DESTRA - Servizi */}
            <div className="space-y-32">
              
              {/* Servizio 1 - Posizione DX */}
              <div className="max-w-2xl ml-auto">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-gray-800">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                      Sistemi decisionali su misura
                    </h2>
                  </div>
                  <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                    Progettiamo sistemi che aiutano persone e aziende a prendere decisioni migliori in contesti complessi e reali.
                  </p>
                  <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                    Ogni sistema nasce dall&apos;analisi profonda della tua realtà e si adatta nel tempo.
                  </p>
                </div>
              </div>

              {/* Servizio 2 - Posizione SX */}
              <div className="max-w-2xl">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-gray-800">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                      Architetture orientate all&apos;equilibrio
                    </h2>
                  </div>
                  <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                    Costruiamo strutture che privilegiano stabilità, continuità e adattamento, invece dell&apos;ottimizzazione estrema.
                  </p>
                  <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                    Soluzioni pensate per durare, anche quando il contesto cambia.
                  </p>
                </div>
              </div>

              {/* Servizio 3 - Posizione DX */}
              <div className="max-w-2xl ml-auto">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-gray-800">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                      Sistemi personali
                    </h2>
                  </div>
                  <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                    Sviluppiamo sistemi personali alternativi, costruiti attorno ai tuoi obiettivi, al tuo modo di pensare e ai tuoi desideri.
                  </p>
                  <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                    Non esistono modelli predefiniti: il limite è la profondità a cui vuoi arrivare.
                  </p>
                  
                  <div className="pt-8">
                    <Link 
                      href="/progetti" 
                      className="inline-flex items-center gap-2 text-lg font-light hover:text-gray-300 transition-colors group"
                    >
                      <span className="border-b border-transparent group-hover:border-gray-300 pb-1">
                        Vedi i nostri progetti
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
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Colonna SINISTRA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8">
                Il nostro approccio
              </h2>
            </div>

            {/* Colonna DESTRA */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-300">
                  Analisi profonda
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed">
                  Comprendiamo il tuo contesto, obiettivi e vincoli prima di proporre soluzioni.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-300">
                  Progettazione iterativa
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed">
                  Sviluppiamo prototipi e li perfezioniamo attraverso cicli di feedback.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-light text-gray-300">
                  Adattamento continuo
                </h3>
                <p className="text-lg font-light text-gray-400 leading-relaxed">
                  I sistemi evolvono con te, adattandosi ai cambiamenti del contesto.
                </p>
              </div>
              
              <div className="pt-8">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-lg font-light hover:text-gray-300 transition-colors group"
                >
                  <span className="border-b border-transparent group-hover:border-gray-300 pb-1">
                    Scopri la nostra evoluzione
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
      </section>
    </div>
  );
}
