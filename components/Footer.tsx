import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#1e1e1e] border-t border-gray-700 text-gray-400 py-4 px-8 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="text-sm">&copy; {new Date().getFullYear()} Nicolas Paiffer. Todos os direitos reservados.</p>
      <div className="flex gap-4 mt-2 md:mt-0">
        <Link href="https://github.com/NPaiffer" target="_blank" className="hover:text-cyan-400 transition">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/nicolas-paiffer-do-carmo-854324201/" target="_blank" className="hover:text-cyan-400 transition">
          LinkedIn
        </Link>
        <Link href="mailto:nicpaiffer@hotmail.com" className="hover:text-cyan-400 transition">
          Email
        </Link>
      </div>
    </footer>
  );
}
