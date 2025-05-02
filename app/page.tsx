import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-[#1e1e1e]/90 backdrop-blur-md z-50 border-b border-gray-800">
        <h1 className="text-xl font-bold">Nicolas.dev</h1>
        <nav className="space-x-6">
          <Link href="#about" className="hover:text-cyan-400 transition">Sobre</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">Projetos</Link>
          <Link href="#contact" className="hover:text-cyan-400 transition">Contato</Link>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center gap-4 h-screen">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Olá, eu sou <span className="text-cyan-400">Nicolas</span>
        </h2>
        <p className="text-lg md:text-xl max-w-xl text-gray-400">
          Desenvolvedor Front-End focado em criar experiências digitais modernas, acessíveis e com ótimo desempenho.
        </p>

        <div className="mt-6 space-x-4">
          <Link href="#projects">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-xl transition">
              Ver Projetos
            </button>
          </Link>
          <Link href="#contact">
            <button className="border border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-400 font-medium py-2 px-4 rounded-xl transition">
              Entrar em Contato
            </button>
          </Link>
        </div>
      </section>

      <section id="about" className="w-full max-w-4xl mt-20 px-4 text-left">
        <h3 className="text-3xl font-bold mb-4 border-b border-cyan-500 inline-block">
          Sobre Mim
        </h3>

        <p className="text-gray-300 text-lg leading-relaxed">
          Meu nome é <span className="text-cyan-400 font-semibold">Nicolas Paiffer do Carmo</span>,
          tenho 22 anos e sou desenvolvedor Front-End apaixonado por tecnologia desde a infância.
          Com forte senso de curiosidade, criatividade e dedicação, busco sempre criar interfaces
          que combinam performance, acessibilidade e estética moderna.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Atualmente estudo <span className="text-cyan-400">Análise e Desenvolvimento de Sistemas</span> na FIAP
          e venho desenvolvendo projetos próprios e acadêmicos com foco em <strong>React</strong>,
          <strong> TypeScript</strong>, <strong>TailwindCSS</strong> e princípios de UI/UX.
          Estou determinado a contribuir com soluções que realmente agreguem valor aos usuários.
        </p>
      </section>

      <section id="projects" className="w-full max-w-5xl mt-20 px-4">
        <h3 className="text-3xl font-bold mb-6 border-b border-cyan-500 inline-block">
          Projetos
        </h3>

        <p className="text-gray-400 text-base">
          Em breve, você poderá explorar meus principais projetos por aqui. Fique à vontade para visitar meu GitHub enquanto isso!
        </p>
      </section>

      <section id="contact" className="w-full max-w-3xl mt-20 px-4 mb-20">
        <h3 className="text-3xl font-bold mb-6 border-b border-cyan-500 inline-block">
          Contato
        </h3>

        <p className="text-gray-300 mb-6">
          Ficou interessado em trabalhar comigo ou quer trocar uma ideia? Envie uma mensagem ou me encontre nas redes abaixo!
        </p>

        <form
          action="https://formsubmit.co/nicpaiffer@hotmail.com"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://seusite.com/obrigado" />

          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
            className="bg-[#1e1e1e] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="bg-[#1e1e1e] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Sua mensagem"
            required
            className="bg-[#1e1e1e] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-xl transition"
          >
            Enviar
          </button>
        </form>

        <div className="mt-10 flex gap-6 text-cyan-400">
          <a href="https://github.com/NPaiffer" target="_blank" className="hover:underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nicolas-paiffer-do-carmo-854324201/" target="_blank" className="hover:underline">
            LinkedIn
          </a>
          <a href="mailto:nicpaiffer@hotmail.com" className="hover:underline">
            Email
          </a>
        </div>
      </section>
    </main>
  );
}
