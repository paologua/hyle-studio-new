// app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <span className="text-sm text-gray-500 font-light tracking-wider">EVOLUZIONE</span>
          </div>
          
          {/* Grid a 2 colonne */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Colonna SINISTRA - Titolo e citazione */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight mb-12">
                Il risultato non è una risposta, ma una domanda corretta.
              </h1>
              
              <div className="pt-8 border-t border-gray-800">
                <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                  Niente sistemi rigidi e ottusi.
                </p>
              </div>
            </div>

            {/* Colonna DESTRA - Contenuto */}
            <div className="space-y-32">
              
              {/* Blocco 1 - Posizione DX */}
              <div className="max-w-2xl ml-auto">
                <div className="space-y-8">
                  <div className="pb-4 border-b border-gray-800">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                      Filosofia operativa
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                      L&apos;AI non ti fa sbagliare, non ti fa perdere tempo, ma...
                    </p>
                    <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed">
                      lascia spazio alle decisioni che contano davvero.
                    </p>
                  </div>
                  
                  <div className="pt-6">
                    <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                      In un mondo saturo di ottimizzazioni estreme, crediamo nel valore dell&apos;equilibrio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Blocco 2 - Posizione SX */}
              <div className="max-w-2xl">
                <div className="space-y-8">
                  <div className="pb-4 border-b border-gray-800">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                      Adattamento vs. Ottimizzazione
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-light text-gray-300 mb-2">
                        Ottimizzazione estrema
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-lg font-light text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-3">–</span>
                          Cerca il massimo risultato in condizioni ideali
                        </li>
                        <li className="text-lg font-light text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-3">–</span>
                          Fragile al cambiamento di contesto
                        </li>
                        <li className="text-lg font-light text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-3">–</span>
                          Richiede costante manutenzione
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-light text-gray-300 mb-2">
                        Adattamento intelligente
                      </h3>
                      <ul className="space-y-2">
                        <li className="text-lg font-light text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-3">–</span>
                          Cerca l&apos;equilibrio in condizioni reali
                        </li>
                        <li className="text-lg font-light text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-3">–</span>
                          Resiliente al cambiamento
                        </li>
                        <li className="text-lg font-light text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-3">–</span>
                          Evolve con il contesto
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blocco 3 - Posizione DX */}
              <div className="max-w-2xl ml-auto">
                <div className="space-y-8">
                  <div className="pb-4 border-b border-gray-800">
                    <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                      Evoluzione continua
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                      I sistemi che progettiamo non sono mai &quot;finiti&quot;.
                    </p>
                    <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                      Sono organismi viventi che crescono, si adattano e si trasformano insieme a te e al tuo contesto.
                    </p>
                    <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed">
                      La vera efficacia non sta nella perfezione iniziale, ma nella capacità di evolvere.
                    </p>
                  </div>
                  
                  <div className="pt-8">
                    <Link 
                      href="/" 
                      className="inline-flex items-center gap-2 text-lg font-light hover:text-gray-300 transition-colors group"
                    >
                      <span className="border-b border-transparent group-hover:border-gray-300 pb-1">
                        Torna alla Home
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
    </div>
  );
}
