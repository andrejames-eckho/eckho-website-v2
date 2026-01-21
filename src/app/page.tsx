import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <section className="h-screen w-full flex items-center justify-center p-24">
        <h2 className="text-4xl font-bold text-white/50">Next: Technical authority in every pixel.</h2>
      </section>
    </main>
  );
}
