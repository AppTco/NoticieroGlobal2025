import React from 'react';
import { LandPlot, Microscope, DollarSign, Heart, Coffee, Newspaper, ScrollText } from 'lucide-react';

const newsCategories = [
  {
    title: "Política",
    content: "Cumbre Internacional Aborda Crisis Climática Global",
    description: "Líderes mundiales se reúnen para establecer nuevos objetivos de reducción de emisiones.",
    icon: <LandPlot className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Ciencia",
    content: "Descubrimiento Revolucionario en Medicina Cuántica",
    description: "Científicos desarrollan nueva técnica para tratamientos personalizados usando física cuántica.",
    icon: <Microscope className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Economía",
    content: "Mercados Globales Alcanzan Nuevos Récords",
    description: "Innovaciones tecnológicas impulsan crecimiento económico sin precedentes.",
    icon: <DollarSign className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Espiritualidad",
    content: "Antiguas Prácticas de Mindfulness Ganan Relevancia",
    description: "Técnicas milenarias se adaptan al mundo moderno para combatir el estrés.",
    icon: <ScrollText className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80&w=800",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Newspaper className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Noticias Globales</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Guardar</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
                <Coffee className="w-5 h-5" />
                <span>Suscribirse</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resumen del Día</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="p-2 bg-indigo-100 rounded-full text-indigo-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{category.content}</h4>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                    Leer más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Mantente Informado</h2>
            <p className="mb-6">Recibe las últimas noticias directamente en tu correo</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-4 py-2 rounded-lg text-gray-900 w-full sm:w-96 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
              />
              <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300">
                Suscribirse Ahora
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p>© 2024 Noticias Globales. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;