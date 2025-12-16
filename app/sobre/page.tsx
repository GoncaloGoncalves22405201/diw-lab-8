// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar imagens/screenshots
// 2. Adicionar vídeo explicativo
// 3. Adicionar timeline de aprendizado
// 4. Adicionar skills/technologies badges
// 5. Adicionar testimonials/quotes
// 6. Adicionar links para recursos externos
// 7. Adicionar FAQ section
// 8. Adicionar contact form
// 9. Adicionar social media links
// 10. Adicionar download CV/portfolio

export default function SobrePage() {
  return (
    <>
      <h2>Desenvolvimento Web Moderno</h2>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar parágrafo introdutório
      <p className="mb-4">
        Esta página apresenta informações sobre as principais tecnologias 
        utilizadas no desenvolvimento web moderno.
      </p>
      */}
      
      <ul>
        <li>React e Next.js revolucionaram a criação de interfaces web.</li>
        <li>São usados por empresas como Facebook, Netflix e Airbnb.</li>
        <li>Dominar estas tecnologias abre muitas oportunidades!</li>
      </ul>
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar seção sobre o autor
      <div className="mt-8 p-6 bg-white rounded shadow">
        <h3 className="text-xl font-bold mb-4">Sobre o Autor</h3>
        <p className="text-gray-700">
          Estudante de Engenharia Informática apaixonado por desenvolvimento web.
          Especializado em React, Next.js e TypeScript.
        </p>
        <div className="mt-4 flex gap-4">
          <a href="#" className="text-blue-500">GitHub</a>
          <a href="#" className="text-blue-500">LinkedIn</a>
          <a href="#" className="text-blue-500">Email</a>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar tecnologias aprendidas
      <div className="mt-8">
        <h3 className="font-bold text-xl mb-4">Tecnologias Dominadas</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Git'].map(tech => (
            <span key={tech} className="px-3 py-1 bg-blue-100 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar estatísticas
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-gray-100 rounded">
          <p className="text-3xl font-bold">50+</p>
          <p className="text-sm">Horas de Estudo</p>
        </div>
        <div className="text-center p-4 bg-gray-100 rounded">
          <p className="text-3xl font-bold">10</p>
          <p className="text-sm">Projetos</p>
        </div>
        <div className="text-center p-4 bg-gray-100 rounded">
          <p className="text-3xl font-bold">5</p>
          <p className="text-sm">Tecnologias</p>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Adicionar call-to-action
      <div className="mt-8 text-center p-6 bg-blue-100 rounded">
        <h3 className="font-bold mb-2">Interessado em colaborar?</h3>
        <p className="mb-4">Entre em contato para discutir projetos!</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Entrar em Contato
        </button>
      </div>
      */}
    </>
  );
}