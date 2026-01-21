import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import Narrative from "@/components/Narrative";
import Philosophy from "@/components/Philosophy";

export default function AboutPage() {
    return (
        <main className="relative flex flex-col items-center overflow-x-hidden">
            <Navbar />
            <AboutHero />
            <Narrative />
            <Philosophy />
            <section className="h-screen w-full flex items-center justify-center p-24">
                <h2 className="text-4xl font-bold text-white/20">The story continues at 10ms latency.</h2>
            </section>
        </main>
    );
}
