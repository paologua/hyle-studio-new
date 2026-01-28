// app/page.tsx - VERSIONE CORRETTA
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="px-6 md:px-12 lg:px-24">
        
        {/* Spaziatura superiore */}
        <div className="h-24 md:h-32"></div>
        
        {/* Blocco 1 - SX */}
        <div className="max-w-4xl mb-32 md:mb-48">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] tracking-tight">
            Sviluppiamo sistemi decisionali per contesti complessi.
          </h1>
        </div>
        
        {/* Spaziatura tra blocchi */}
        <div className="h-16"></div>
        
        {/* Blocco 2 - DX */}
        <div className="max-w-3xl ml-auto mb-32 md:mb-48">
          <p className="text-3xl md:text-4xl font-light leading-snug text-gray-300 mb-8">
            Siamo uno studio dinamico.
          </p>
          <p className="text-3xl md:text-4xl font-light leading-snug text-gray-300">
            Progettiamo sistemi orientati all&apos;equilibrio, capaci di adattarsi alla tua realtà.
          </p>
        </div>
        
        {/* Spaziatura tra blocchi */}
        <div className="h-16"></div>
        
        {/* Blocco 3 - DX */}
        <div className="max-w-3xl ml-auto mb-32 md:mb-48">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 mb-8">
            Per creare qualcosa di davvero efficace, dobbiamo capire a fondo cosa vuoi realizzare.
          </p>
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 mb-12">
            Solo così possiamo proporti soluzioni sorprendenti, costruite su misura.
          </p>
          
          <div className="space-y-6">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-400">
              HYLE sviluppa sistemi decisionali per persone e aziende che vogliono fare le cose meglio.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-400">
              Lavoriamo con te, passo dopo passo, per costruire un&apos;esperienza unica.
            </p>
          </div>
        </div>
        
        {/* Spaziatura inferiore */}
        <div className="h-32 md:h-48"></div>
        
      </main>
    </div>
  );
}
