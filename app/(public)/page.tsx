import Navbar from "@/components/layout/public/Navbar";

export default function HomePage() {
  return (
<>

    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16  h-screen flex items-center  ">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-transparent 
         bg-clip-text 
         bg-gradient-to-r 
         from-pink-500 via-fuchsia-500 to-purple-500 
         dark:from-fuchsia-400 dark:via-pink-400 dark:to-rose-400">
            Manicure Profesional
          </h1>
          <p className="text-xl text-gray-600 mb-8 dark:text-white">
            Belleza en tus manos
          </p>
<a
  href="#"
  className="relative inline-block px-16 py-4 font-semibold text-white rounded-xl 
  bg-gradient-to-r from-pink-500/30 via-fuchsia-500/30 to-purple-500/30 
  backdrop-blur-sm overflow-hidden 
  before:absolute before:inset-0 before:rounded-xl 
  before:bg-gradient-to-r before:from-pink-500 before:via-fuchsia-500 before:to-purple-500 
  before:opacity-40 before:blur-lg before:animate-pulse 
  hover:before:opacity-70 transition-all duration-300">
  <span className="relative font-bold z-10">Reservar ahora</span>
</a>

        </div>
      </div>
    </div>
            </>
  );
}
