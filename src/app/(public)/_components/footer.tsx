export function Footer() {
  return (
    <footer className="p-6 text-center text-gray-500 text-sm md:text-base bg-gray-100">
      <p>
        Todos os direitos reservados &copy; {new Date().getFullYear()} - <span className="hover:text-black duration-300">@sujeitoprogramador.</span>
      </p>
    </footer>
  )
}
