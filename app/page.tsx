export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        🎉 Sito Online!
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        La struttura base funziona. Ora aggiungiamo i componenti.
      </p>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <p>✅ Next.js 14 installato</p>
        <p>✅ Tailwind CSS funzionante</p>
        <p>✅ TypeScript configurato</p>
      </div>
    </div>
  );
}
