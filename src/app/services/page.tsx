import ServicesHero from "./components/ServicesHero";
import DetailedServices from "./components/DetailedServices";
import ServicesCTA from "./components/ServicesCTA";

export default function ServicesPage() {
    return (
        <main className="relative flex flex-col items-center overflow-x-hidden min-h-screen">
            <ServicesHero />
            <DetailedServices />
            <ServicesCTA />
        </main>
    );
}
