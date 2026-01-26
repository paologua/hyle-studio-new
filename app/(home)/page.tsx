import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Blocco 1 - Sinistra */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-light leading-tight">
                Sviluppiamo sistemi decisionali per contesti complessi.
              </h1>
            </div>

            {/* Blocco 2 e 3 - Destra */}
            <div className="space-y-12">
              {/* Blocco 2 */}
              <div className="space-y-4">
                <p className="text-xl text-gray-300">
                  Siamo uno studio dinamico.
                </p>
                <p className="text-gray-400">
                  Progettiamo sistemi orientati all'equilibrio, capaci di adattarsi alla tua realtà.
                </p>
              </div>

              {/* Blocco 3 */}
              <div className="space-y-6">
                <p className="text-gray-400">
                  Per creare qualcosa di davvero efficace, dobbiamo capire a fondo cosa vuoi realizzare.
                </p>
                <p className="text-gray-400">
                  Solo così possiamo proporti soluzioni sorprendenti, costruite su misura.
                </p>
                <p className="text-gray-400">
                  HYLE sviluppa sistemi decisionali per persone e aziende che vogliono fare le cose meglio.
                </p>
                <p className="text-gray-400">
                  Lavoriamo con te, passo dopo passo, per costruire un'esperienza unica.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <Link
                  href="/servizi"
                  className="inline-block border border-gray-600 px-8 py-3 hover:border-white transition-colors"
                >
                  Scopri i servizi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Mini-preview Progetti */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Mini-casi operativi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Sistema per gestire un cane',
              'Sistema per gestire una libreria personale',
              'Sistema per andare in montagna',
              'Sistema per la gestione di una PMI impiantistica',
              'Sistema personale di gestione del tempo',
              'Sistema di apprendimento continuo'
            ].map((title, index) => (
              <div
                key={index}
                className="border border-gray-800 p-6 hover:border-gray-600 transition-colors"
              >
                <h3 className="text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">
                  Contesto → vincoli → come HYLE lavora → differenza HYLE
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/progetti"
              className="text-gray-400 hover:text-white underline underline-offset-4"
            >
              Vedi tutti i progetti →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
