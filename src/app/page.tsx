import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-swiss-dark text-swiss-gray">
      <HeroSection />
      {/* Informational Sections Below (Stubbed for "Digital Calm" spacing) */}
      <section className="min-h-screen py-32 px-8 flex flex-col items-center justify-center">
        <h2 className="font-serif text-3xl md:text-5xl text-swiss-white mb-8">
          The Art of Digital Calm
        </h2>
        <p className="font-sans text-lg max-w-2xl text-center text-swiss-gray/80 font-light leading-relaxed">
          At Danae Villa, we believe in the luxury of space, both physical and digital. 
          Experience the ethereal beauty of the Santorini Caldera without the noise.
        </p>
      </section>
    </main>
  );
}
