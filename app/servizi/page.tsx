export default function ServiziPage() {
  const services = [
    {
      title: 'Sistemi decisionali su misura',
      position: 'right',
      description: 'Progettiamo sistemi che aiutano persone e aziende a prendere decisioni migliori in contesti complessi e reali.',
      details: 'Ogni sistema nasce dall\'analisi profonda della tua realtà e si adatta nel tempo.'
    },
    {
      title: 'Architetture orientate all\'equilibrio',
      position: 'left',
      description: 'Costruiamo strutture che privilegiano stabilità, continuità e adattamento, invece dell\'ottimizzazione estrema.',
      details: 'Soluzioni pensate per durare, anche quando il contesto cambia.'
    },
    {
      title: 'Sistemi personali',
      position: 'right',
      description: 'Sviluppiamo sistemi personali alternativi, costruiti attorno ai tuoi obiettivi, al tuo modo di pensare e ai tuoi desideri.',
      details: 'Non esistono modelli predefiniti: il limite è la profondità a cui vuoi arrivare.'
    }
  ]

  return (
    <div className="pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-light mb-16">Servizi</h1>
        
        {services.map((service, index) => (
          <section
            key={index}
            className={`mb-32 ${service.position === 'left' ? 'md:pr-1/2' : 'md:pl-1/2'}`}
          >
            <div className={`max-w-2xl ${service.position === 'right' ? 'ml-auto' : ''}`}>
              <h2 className="text-3xl font-light mb-6">{service.title}</h2>
              <p className="text-xl text-gray-300 mb-4">{service.description}</p>
              <p className="text-gray-400">{service.details}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
