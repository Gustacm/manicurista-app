import Image from "next/image";
import HomePage from "./(public)/page";
import Navbar from "@/components/layout/public/Navbar";
import Footer from "@/components/layout/public/Footer";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <div >
      <header className="fixed -top-0.5 left-0 w-full z-50" >
  <Navbar></Navbar>
</header>
      <main >
<div className="relative" >
  <img 
    src="/images/foto-yorma.png"
    width={500}
    height={500}
    alt="Foto De Yormaris posando" 
    className="absolute inset-0 w-full h-full object-cover opacity-30"
    style={{
      maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)'
    }}
    />
  

  <div className="relative  top-36   z-10 t">
    <HomePage />
  </div>
</div>

    <section>
      <Card></Card>
    </section>
      </main>
<footer>
  <Footer></Footer>
</footer>
      
      
    </div>
  );
}
