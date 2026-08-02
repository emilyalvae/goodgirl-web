import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#2C2627] font-sans antialiased">
      
      <AnnouncementBar />

      <Navbar />

      <Hero />

    </main>
  );
}