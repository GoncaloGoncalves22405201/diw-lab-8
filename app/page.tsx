import MagiaDoJSX from "@/components/MagiaDoJSX/MagiaDoJSX";

export default function IntroPage() {
  return (
    <div>
      {/* MODIFICAÇÃO POSSÍVEL: Hero section
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Bem-vindo ao Futuro do Desenvolvimento Web
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Explore projetos modernos construídos com React e Next.js
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/projetos" className="bg-blue-500 text-white px-6 py-3 rounded-lg">
            Ver Projetos
          </Link>
          <Link href="/sobre" className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg">
            Saber Mais
          </Link>
        </div>
      </div>
      */}
      
      <h2>Interfaces Modernos</h2>
      <p>Bem vindo à minha app em React e Next.js.</p>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar imagem/ilustração
      <div className="my-6 flex justify-center">
        <img 
          src="/hero-image.svg" 
          alt="Ilustração" 
          className="max-w-md"
        />
      </div>
      */}
      
      <MagiaDoJSX />
      
      {/* MODIFICAÇÃO POSSÍVEL: Features grid
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow text-center">
          <div className="text-4xl mb-2">⚡</div>
          <h3 className="font-bold">Rápido</h3>
          <p className="text-sm text-gray-600">Performance otimizada</p>
        </div>
        <div className="p-4 bg-white rounded shadow text-center">
          <div className="text-4xl mb-2">🎨</div>
          <h3 className="font-bold">Moderno</h3>
          <p className="text-sm text-gray-600">Design atualizado</p>
        </div>
        <div className="p-4 bg-white rounded shadow text-center">
          <div className="text-4xl mb-2">🔒</div>
          <h3 className="font-bold">Seguro</h3>
          <p className="text-sm text-gray-600">Código confiável</p>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Latest projects
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Projetos Recentes</h3>
        <div className="space-y-2">
          <Link href="/projetos/1" className="block p-4 bg-white rounded shadow hover:shadow-lg">
            <h4 className="font-bold">Loja Online</h4>
            <p className="text-sm text-gray-600">E-commerce moderno com React</p>
          </Link>
          <Link href="/projetos/2" className="block p-4 bg-white rounded shadow hover:shadow-lg">
            <h4 className="font-bold">Dashboard Analytics</h4>
            <p className="text-sm text-gray-600">Visualização de dados em tempo real</p>
          </Link>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Statistics
      <div className="mt-8 grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-3xl font-bold text-blue-500">10+</p>
          <p className="text-sm">Projetos</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-500">50+</p>
          <p className="text-sm">Componentes</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-500">100+</p>
          <p className="text-sm">Commits</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-500">5</p>
          <p className="text-sm">Tecnologias</p>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Newsletter signup
      <div className="mt-8 p-6 bg-white rounded shadow">
        <h3 className="text-xl font-bold mb-2">Fique Atualizado</h3>
        <p className="text-gray-600 mb-4">
          Receba atualizações sobre novos projetos e tutoriais
        </p>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="seu@email.com"
            className="flex-1 p-2 border rounded"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Inscrever
          </button>
        </form>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Call to action
      <div className="mt-8 text-center p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-4">
          Pronto para começar?
        </h3>
        <p className="mb-6">
          Explore todos os projetos e aprenda React & Next.js
        </p>
        <Link 
          href="/tecnologias"
          className="inline-block bg-white text-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
        >
          Começar Agora
        </Link>
      </div>
      */}
    </div>
  );
}