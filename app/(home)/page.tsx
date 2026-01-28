// app/page.tsx - VERSIONE FINALE
export default function HomePage() {
  return (
    <>
      {/* Blocco 1 - SINISTRA */}
      <section className="section-spacing">
        <div className="main-container">
          <div className="max-w-8xl">
            <h1 className="display-1">
              Sviluppiamo sistemi decisionali per contesti complessi.
            </h1>
          </div>
        </div>
      </section>

      <div className="h-vh-20"></div>

      {/* Blocco 2 - DESTRA */}
      <section>
        <div className="main-container">
          <div className="max-w-5xl ml-auto">
            <div className="space-y-12">
              <p className="display-2 text-gray-300">
                Siamo uno studio dinamico.
              </p>
              <p className="display-2 text-gray-300">
                Progettiamo sistemi orientati all&apos;equilibrio, capaci di adattarsi alla tua realtà.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-vh-20"></div>

      {/* Blocco 3 - DESTRA */}
      <section className="pb-vh-30">
        <div className="main-container">
          <div className="max-w-5xl ml-auto">
            <div className="space-y-16">
              <div className="space-y-12">
                <p className="display-3 text-gray-300">
                  Per creare qualcosa di davvero efficace, dobbiamo capire a fondo cosa vuoi realizzare.
                </p>
                <p className="display-3 text-gray-300">
                  Solo così possiamo proporti soluzioni sorprendenti, costruite su misura.
                </p>
              </div>
              
              <div className="pt-16 border-t border-gray-800 space-y-8">
                <p className="text-body text-gray-400">
                  HYLE sviluppa sistemi decisionali per persone e aziende che vogliono fare le cose meglio.
                </p>
                <p className="text-body text-gray-400">
                  Lavoriamo con te, passo dopo passo, per costruire un&apos;esperienza unica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
