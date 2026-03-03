function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-50
                 backdrop-blur-2xl bg-white/10
                 border-b border-white/20
                 shadow-lg shadow-black/10
                 text-white"
    >
      <div className="max-w-7xl mx-auto
                      flex items-center justify-between
                      px-4 sm:px-8 py-4">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-3 group cursor-pointer">

          {/* Optional Logo Placeholder */}
          {/* <div className="w-9 h-9 rounded-xl
                          bg-white/20
                          backdrop-blur-md
                          flex items-center justify-center
                          text-sm font-bold
                          group-hover:bg-
                          transition duration-300 scale-105">
           
          </div> */}

          <h1 className="text-base sm:text-xl font-semibold tracking-wide
                         group-hover:
                         transition duration-300 scale-105">
            Futuristic Todo
          </h1>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 sm:gap-8 text-sm">

          <a
            href="https://github.com/shivampimple29/Todo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg
                       opacity-80 hover:opacity-100
                       hover:
                       transition duration-300"
          >
            <i className="fa-solid fa-code-branch"></i>
            <span className="hidden font-medium sm:inline">Repo</span>
          </a>

          <a
            href="https://github.com/shivampimple29/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg 
                       opacity-80 hover:opacity-100
                       hover:
                       transition duration-300"
          >
            <i className="fa-brands fa-github"></i>
            <span className="hidden font-medium sm:inline">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-pimple-894201316"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg
                       opacity-80 hover:opacity-100
                       hover:
                       transition duration-300"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span className="hidden font-medium sm:inline">LinkedIn</span>
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;