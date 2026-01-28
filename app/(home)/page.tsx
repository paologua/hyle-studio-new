// app/page.tsx - VERSIONE CORRETTA
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Sezione principale con griglia */}
      <section className="section-padding">
        <div className="container-main">
          
          {/* Griglia a 2 colonne */}
          <div className="grid-layout">
            
            {/* COLONNA SINISTRA - Blocco 1 */}
            <div className="text-block-left">
              <div className="sticky top-32">
                <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight mb-8">
                  Sviluppiamo sistemi decisionali per contesti complessi.
                </h1>
              </div>
            </div>
            
            {/* COLONNA DESTRA - Blocchi 2 e 3 */}
            <div className="text-block-right space-y-24">
              
              {/* Blocco 2 */}
              <div>
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl font-light text-gray-300">
                    Siamo uno studio dinamico.
                  </p>
                  <p className="text-2xl md:text-3xl font-light text-gray-300">
                    Progettiamo sistemi orientati all&apos;equilibrio, capaci di adattarsi alla tua realtà.
                  </p>
                </div>
              </div>
              
              {/* Blocco 3 */}
              <div>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                      Per creare qualcosa di davvero efficace, dobbiamo capire a fondo cosa vuoi realizzare.
                    </p>
                    <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                      Solo così possiamo proporti soluzioni sorprendenti, costruite su misura.
                    </p>
                  </div>
                  
                  <div className="pt-8 border-t border-gray-800 space-y-4">
                    <p className="text-lg md:text-xl font-light text-gray-400">
                      HYLE sviluppa sistemi decisionali per persone e aziende che vogliono fare le cose meglio.
                    </p>
                    <p className="text-lg md:text-xl font-light text-gray-400">
                      Lavoriamo con te, passo dopo passo, per costruire un&apos;esperienza unica.
                    </p>
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
