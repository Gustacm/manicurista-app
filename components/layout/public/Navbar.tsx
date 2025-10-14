

export default function Navbar() {
  return (
<header
  className="relative h-16 z-50 
  bg-gradient-to-br from-pink-500/30 via-fuchsia-500/30 to-purple-500/30 
  backdrop-blur-2xl overflow-hidden
  before:absolute before:inset-0 before:rounded-none 
  before:bg-gradient-to-r before:from-pink-500 before:via-fuchsia-500 before:to-purple-500 
  before:opacity-30 before:blur-2xl before:animate-pulse 
  after:absolute after:inset-0 after:bg-gradient-to-br after:from-pink-500/20 after:to-transparent 
  shadow-[0_0_25px_rgba(236,72,153,0.4)]">

  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
    
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:relative md:block">
          <button
            type="button"
            className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
          >
            <span className="sr-only">Toggle dashboard menu</span>

            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-10 object-cover"
            />
          </button>

          <div
            className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                My profile
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Billing summary
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                role="menuitem"
              >
                Team settings
              </a>
            </div>

            <div className="p-2">
              <form method="POST" action="#">
                <button
                  type="submit"
                  className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>

                  Logout
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
<button
  className="relative z-50 p-2 rounded-lg 
  bg-gradient-to-br from-pink-500/20 via-fuchsia-500/10 to-purple-500/10 
  backdrop-blur-md border border-pink-400/30 
  shadow-[0_0_10px_rgba(236,72,153,0.3)]
  transition-all duration-300 
  hover:from-pink-500/40 hover:via-fuchsia-500/20 hover:to-purple-500/20 
  hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] 
  active:scale-95">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-7 text-pink-200 drop-shadow-[0_0_3px_rgba(236,72,153,0.6)] transition-colors duration-300 hover:text-pink-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

        </div>
      </div>
    </div>
  </div>
</header>


  )
}
