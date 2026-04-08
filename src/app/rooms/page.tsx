import RoomSection from "@/components/RoomSection";

export default function RoomsPage() {
  return (
    <main className="bg-swiss-white min-h-screen">
      {/* Header Space */}
      <div className="h-32 bg-swiss-dark" />
      
      <section className="py-24 px-8 md:px-24 bg-swiss-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-swiss-white mb-8">Our Residences</h1>
          <p className="text-swiss-gray/60 font-light text-lg md:text-xl leading-relaxed">
            Discover a collection of traditional Santorini suites, where vaulted ceilings meet 
            modern comfort. Each room is a sanctuary designed for rest, reflection, and quiet luxury.
          </p>
        </div>
      </section>

      <RoomSection />

      {/* Extended Details Section */}
      <section className="py-32 px-8 md:px-24 bg-swiss-white border-t border-swiss-dark/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-serif text-xl text-swiss-dark mb-4">Traditional Craft</h4>
            <p className="text-swiss-dark/60 font-light text-sm leading-relaxed">
              Experience the unique cave-style architecture of Fira, maintained with respect to 
              local traditions and materials.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl text-swiss-dark mb-4">Modern Comfort</h4>
            <p className="text-swiss-dark/60 font-light text-sm leading-relaxed">
              While we honor tradition, every room is equipped with air conditioning, 
              complimentary Wi-Fi, and premium linens.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl text-swiss-dark mb-4">Prime Location</h4>
            <p className="text-swiss-dark/60 font-light text-sm leading-relaxed">
              Situated in a quiet area of Fira, we are just a short walk from the 
              vibrant center and the iconic Caldera views.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
