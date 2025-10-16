import Navbar from "@/components/layout/public/Navbar";

export default function HomePage() {
  return (
<>

    <div className="min-h-screen bg-gradient-to-br">
      <div className="container mx-auto px-4 py-16  h-screen flex items-center  ">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-text-dark dark:text-text-light
        ">
            Manicure Profesional
          </h1>
          <p className="text-xl text-text-dark mb-8 dark:text-text-light ">
            Belleza en tus manos
          </p>
<a
  href="#"
  className="relative inline-block px-16 py-4 font-semibold rounded-xl 
  liquid-glass 
  ">
  <span className="relative font-bold text-2xl z-10">Reservar ahora</span>
</a>

        </div>
      </div>
    </div>
            </>
  );
}
