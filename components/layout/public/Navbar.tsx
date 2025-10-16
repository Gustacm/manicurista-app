export default function Navbar() {
  return (
    <header className="liquid-glass h-14 flex items-center justify-between px-6">
      
  
      <div className="flex-1">

      </div>

 
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">About</a>
          </li>
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Careers</a>
          </li>
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">History</a>
          </li>
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Services</a>
          </li>
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Projects</a>
          </li>
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#">Blog</a>
          </li>
        </ul>
      </nav>


      <div className="hidden md:block ml-6">
        <button
          type="button"
          className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
        >
          <span className="sr-only">Toggle dashboard menu</span>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="size-9 object-cover"
          />
        </button>
      </div>


      <div className="block md:hidden">
        <button
          className="p-3 rounded-lg transition-all duration-300 active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-10 text-text-light transition-colors duration-300 hover:text-text-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
    </header>
  );
}