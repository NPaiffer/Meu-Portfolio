import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-[#1e1e1e]/90 backdrop-blur-md z-50 border-b border-gray-800">
      <h1 className="text-xl font-bold">Nicolas.dev</h1>
      <nav className="space-x-6">
        <Link href="#about" className="hover:text-cyan-400 transition">Sobre</Link>
        <Link href="#projects" className="hover:text-cyan-400 transition">Projetos</Link>
        <Link href="#contact" className="hover:text-cyan-400 transition">Contato</Link>
      </nav>
    </header>
  );
}