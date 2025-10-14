import Image from "next/image";
import HomePage from "./(public)/page";
import Navbar from "@/components/layout/public/Navbar";
import Footer from "@/components/layout/public/Footer";

export default function Home() {
  return (
    <div >
      <header className="fixed top-0 left-0 w-full z-50" >
  <Navbar></Navbar>
</header>
      <main >
        <HomePage></HomePage>
      </main>
<footer>
  <Footer></Footer>
</footer>
      
      
    </div>
  );
}
