// app/progetti/page.tsx
import Link from 'next/link';

const miniCasi = [
  {
    id: 1,
    titolo: "Sistema per gestire un cane",
    categoria: "Personale",
    contesto: "Gestire le esigenze quotidiane di un animale domestico in modo equilibrato.",
    vincoli: "Tempo limitato, routine variabile, benessere dell'animale.",
    approccio: "Analisi delle esigenze fisiologiche e comportamentali, creazione di routine flessibili.",
    differenza: "Sistema che si adatta alla vita reale invece di imporre regole rigide."
  },
  {
    id: 2,
    titolo: "Sistema per gestire una libreria personale",
    categoria: "Organizzazione",
    contesto: "Organizzare una collezione di libri in crescita costante.",
    vincoli: "Spazio limitato, desiderio di accesso rapido, evoluzione dei gusti.",
    approccio: "Classificazione per stato (da leggere, in lettura, letto) e valore emotivo.",
    differenza: "Sistema che evolve con la tua crescita intellettuale invece di essere statico."
  },
  {
    id: 3,
    titolo: "Sistema per andare in montagna",
    categoria: "Avventura",
    contesto: "Prepararsi per escursioni in sicurezza ed efficienza.",
    vincoli: "Condizioni meteorologiche variabili, attrezzatura specifica, preparazione fisica.",
    approccio: "Checklist adattative basate su difficoltà, meteo e condizioni personali.",
    differenza: "Preparazione dinamica che considera il contesto reale invece di regole fisse."
  },
  {
    id: 4,
    titolo: "Sistema per la gestione di una PMI impiantistica",
    categoria: "Aziendale",
    contesto: "Gestire ordini, scorte e manutenzione per un'azienda di impianti.",
    vincoli: "Lead time variabili, scorte ottimali, manutenzione preventiva.",
    approccio: "Sistema decisionale per ordini basato su dati storici e trend.",
    differenza: "Decisioni supportate da dati invece che da intuizione."
  },
  {
    id: 5,
    titolo: "Sistema personale di gestione del tempo",
    categoria: "Produttività",
    contesto: "Ottimizzare il tempo tra lavoro, vita personale e crescita.",
    vincoli: "Ore limitate, energie variabili, obiettivi multipli.",
    approccio: "Pianificazione per blocchi energetici invece che per ore.",
    differenza: "Focus su energia e priorità invece che su semplici liste di cose da fare."
  },
  {
    id: 6,
    titolo: "Sistema di apprendimento continuo",
    categoria: "Crescita",
    contesto: "Integrare l'apprendimento nella vita quotidiana.",
    vincoli: "Tempo limitato, informazioni sovrabbondanti, motivazione variabile.",
    approccio: "Micro-learning basato su interessi e applicazione immediata.",
    differenza: "Apprendimento contestuale invece di corsi tradizionali."
  }
];

export default function ProgettiPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-24">
            <span className="text-sm text-gray-500 font-light tracking-wider">PROGETTI</span>
          </div>
          
          {/* Grid a 2 colonne */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Colonna SINISTRA - Titolo */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] tracking-tight mb-8">
                Mini-casi operativi HYLE
              </h1>
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                Contesti diversi, problemi diversi. Stesso approccio HYLE.
              </p>
            </div>

            {/* Colonna DESTRA - Mini-casi */}
            <div className="space-y-32">
              
              {miniCasi.map((caso, index) => (
                <div 
                  key={caso.id} 
                  className={`max-w-2xl ${index % 2 === 0 ? 'ml-auto' : ''}`}
                >
                  <div className="space-y-8">
                    {/* Titolo e Categoria */}
                    <div className="pb-4 border-b border-gray-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500 font-light tracking-wider">
                          {caso.categoria}
                        </span>
                        <span className="text-sm text-gray-500 font-light">
                          Caso {caso.id}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                        {caso.titolo}
                      </h2>
                    </div>

                    {/* Contenuto */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-light text-gray-300 mb-2">
                          Contesto
                        </h3>
                        <p className="text-lg font-light text-gray-400 leading-relaxed">
                          {caso.contesto}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-light text-gray-300 mb-2">
                          Vincoli principali
                        </h3>
                        <p className="text-lg font-light text-gray-400 leading-relaxed">
                          {caso.vincoli}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-light text-gray-300 mb-2">
                          Come HYLE lavora
                        </h3>
                        <p className="text-lg font-light text-gray-400 leading-relaxed">
                          {caso.approccio}
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-800">
                        <h3 className="text-lg font-light text-gray-300 mb-2">
                          La differenza HYLE
                        </h3>
                        <p className="text-lg font-light text-gray-400 leading-relaxed">
                          {caso.differenza}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Chiusura sezione */}
              <div className="max-w-2xl ml-auto pt-16">
                <div className="p-8 border border-gray-800 rounded-lg">
                  <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed mb-6">
                    Contesti diversi, problemi diversi.
                  </p>
                  <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                    Stesso approccio HYLE: sistemi progettati per reggere la complessità, adattarsi al cambiamento e distinguere le decisioni che contano davvero.
                  </p>
                  
                  <div className="pt-8">
                    <Link 
                      href="/servizi" 
                      className="inline-flex items-center gap-2 text-lg font-light hover:text-gray-300 transition-colors group"
                    >
                      <span className="border-b border-transparent group-hover:border-gray-300 pb-1">
                        Come lavoriamo
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
